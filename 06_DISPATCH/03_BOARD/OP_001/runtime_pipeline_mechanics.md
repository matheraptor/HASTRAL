# CCG Runtime Pipeline: Hand & Engine Mechanics

## Overview
This document isolates and explores the autonomous loop logic for the CCG-driven MMORPG engine. While the core physical traits and states are mapped via the Deck and Injuries, the translation of raw data into game-world action happens in this pipeline. 

The goal is to replace the rigid, single-EXP system with a continuous biological engine cycle: `Draw -> Hand -> Play -> Discard`.

---

## The Engine Cycle
An autonomous entity must natively run through this loop without requiring continuous server injections:
1.  **DRAW**: Moving cards from the `Reserve` (current physical energy) into the `Hand`.
2.  **EVALUATE/QUEUE**: The logic of handling the `Hand`.
3.  **PLAY**: Committing to an Action, deducting immediate Stamina costs, and firing the Emote.
4.  **DISCARD**: Moving the spent card into Short Term Memory (STM).

---

## Debate E: Hand Mechanics
How does an autonomous entity decide what to execute from its `Hand`? In a physical CCG, a hand is a pool of visible options the player selects from. For AI creatures, we must define the computational behavior of this zone.

### Option 1: The Queue (Strict FIFO Buffer)
The `Hand` is treated simply as an action buffer.
*   **Mechanic**: Cards are drawn and executed sequentially. The Engine simply executes `Hand[0]` on the TICK, moving to `Hand[1]` on the next.
*   **Application**: This mimics traditional RTS waypoint shifting.
*   **Pros**: Incredibly lightweight compute. Easy to string together complex, multi-step routes.
*   **Cons**: Lacks biological "decision-making." The entity cannot organically react to sudden changes (e.g., a predator appearing) without external logic completely purging and rewriting the Queue.

### Option 2: The Pool (Evaluation Matrix) + ACTIVE_PLAY Zone
This is the biological CCG approach that naturally solves the Cargo Ship "jitter" problem without convoluted ignore-loops.
The `Hand` is treated as a pool of available options. 
*   **Mechanic**: 
    1. The creature draws cards into its `Hand`. 
    2. The Engine evaluates the `Hand` and selects ONE card to move to the `ACTIVE_PLAY` zone. 
    3. During the Tick, the Engine *only* queries the card in `ACTIVE_PLAY` for A/T targets. It does not look at the rest of the Hand / Queue. 
    4. If the target is not reached, the card remains in `ACTIVE_PLAY` (persists). The jitter is completely eliminated because secondary options in the Hand are completely ignored until the `ACTIVE_PLAY` card resolves and is moved to `DISCARD`.
*   **Biological Parallel**: The Hand is "options/instincts." The `ACTIVE_PLAY` zone is "Focus/Concentration." You can hold many thoughts in your head, but you only concentrate on executing one.

---

## Initial Questions for Feedback

1. **The Cargo Ship Problem:** (Resolved via ACTIVE_PLAY / State conversion)
2. **Biological CCG Mapping (Resolved):** 
    *   **Total Deck Size:** Fitness (maxHP).
    *   **Draw Pile:** Reserve (currentHP).
    *   **Current Hand Size:** Stamina (currentSTA).
    *   **Max Hand Size:** Metabolism (maxSTA).
    *   *Mechanic*: The "Play Cost" of a card represents the actual energy flow (friction). The Hand acts strictly as a pool of viable options. The Engine's lower reasoning layer automatically executes the path of least resistance (lowest play cost/friction), unless overridden by a higher reasoning layer.

---

## Debate F: Active Tasks as States (Edge Cases)
By treating the `ACTIVE_PLAY` zone as the "Field", **every unresolved active task natively becomes a State (a Perma).** This is a massive CCG realization. `MoveTo [Waypoint]` isn't a one-and-done command; it's a Perma that sits in the Field and is queried by the physics engine for A/T targets until its spatial conditional clears. This natively unlocks **Multitasking**.

### Edge Case 1: Vector Conflicts (Multiple Waypoints)
*   **Conflict:** Dumping 5 Waypoints into `ACTIVE_PLAY` simultaneously causes the physics Engine to pull in 5 directions.
*   **Solution (Prerequisites):** Waypoint 2 stays in the `Hand` with the conditional `Requires: Waypoint 1 == Discarded`. It only enters the Field when Waypoint 1 resolves.

### Edge Case 2: State Priority Conflicts (Flee vs. Waypoint)
*   **Conflict:** Entity is chasing Waypoint 1, but receives the `Flee` state. Do they blend into an arced retreat, or does one gate prevail?
*   **Solution (Modular Intelligence Layers):** We avoid hard-coding arbitrary "Locomotion" limits. Instead, the engine processes conflicting physical vectors natively, and the entity's underlying intelligence determines the resolution:
    *   *S1 (Dumb/Instinct):* Priority-gated choice. The entity strictly executes the most pressing mathematical action and ignores the other.
    *   *S2 (Basic Complexity):* The entity processes both inputs. By allowing the physics algorithm to calculate both vectors simultaneously, an "arced retreat" emerges naturally without extra coding.
    *   *S3 (Advanced Complexity):* The entity applies weighted logic to the conflicting vectors, aggressively flattening the arc toward the most crucial target.
    *   *Rule:* Complexity emerges from the available pieces, rather than arbitrary rule gates.

### Edge Case 3: The Infinite "Stuck" Loop
*   **Conflict:** Entity plays `MoveTo`. A rockslide blocks the path. The distance condition is never met.
*   **Solution (Modular Intelligence Layers):** We allow the entity to get stuck and let the universal Stamina mechanic handle the fail-state. 
    *   *Mechanism:* The unresolved State continuously drains stamina. If the entity cannot resolve it, the reserve empties, triggering compounding Fatigue taxes until the entity's metabolism hits 0 (Exhaustion). Exhausted entities drop all states and become 100% passive targets, skipping to the update phase. 
    *   *S0 (Agency-less):* A dumb object (or zombie) will literally walk into a wall until it collapses from fatigue. This is completely correct behavior.
    *   *S1/S2/S3 (Agency):* Intelligent entities possess higher-level awareness tools/cards (e.g., "Reroute" or "Pathfinding") that recognize they are stuck (zero velocity over time), allowing them to natively play a superseding action *before* they collapse from fatigue.

### Edge Case 4: Multitasking Starvation
*   **Conflict:** Multitasking allows 5 states active at once (Running, Chewing, Looking).
*   **Solution (Stamina Bound):** Multitasking is natively bounded by Upkeep. The entity *can* do 5 things simultaneously, provided it can mathematically pay the compounded stamina drain per tick. If it hits 0 Energy, all states collapse into a Fatigue Injury.
