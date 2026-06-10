# MAGPIE_Server CCG Overhaul - Session Handoff

## 1. Overview & Objective
We are overhauling the `MAGPIE_Server` runtime. We are shifting from a purely rigid-body physics simulation to an **asynchronous, CCG-driven MMORPG runtime**.
The architecture now treats the "Creature" as a deck-based entity. Its biological functions, sanity, and physics mechanics are strictly governed by native CCG card mechanics.

## 2. Key Architecture Shifts
1. **Cards vs. Emotes**: "Cards" are the generic structural metadata shells mapping traits and costs. "Emotes" are the separate, highly granular math/physics modules (effects) executed when a card is played.
2. **Agency Separation**: The core tick logic (`processExp`) remains purely mechanical S0 (dumb math). S1+ Intelligence is decoupled; it observes the S0 step and pushes *new* actions (as `EXP` objects) to the queue for the *next* tick, maintaining strict synchronization.
3. **The Incapacitation Loop**: A "fail-state" does not exist as a match-ending event. Play occurs continuously. 
    * *Stamina Exhaustion* simply means `Hand == 0`, preventing further card play.
    * *Empty Reserve* forces a reshuffle paid with a "Fatigue Tax" (exiling a card to Injury).
    * *Incapacitation* occurs if the reshuffle yields 0 available cards (deck is trapped in Exile/Injury), locking the entity into absolute inactivity.

## 3. CCG Zone to RMMZ Array Native Mappings
We are directly routing all CCG activity through the native RMMZ arrays with strict 1:1 mapping (currently deciding on final exact nomenclature for MP and Discard):
- **HP / MHP** => `Reserve / Fitness` (The main deck pool / maximum capacity)
- **MP / MMP** => `Stamina / Metabolism` (Current Hand size / Maximum Hand limit)
- **Field / ACTIVE_PLAY** => `States Array` (Persistent active tasks, environment stress, overlapping auras)
- **Discard** => `Waste` OR `STM` (Spent cards awaiting reshuffle)
- **Exile** => `Injury` (Cards permanently trapped, lowering the entity's functional maximum capability)

## 4. Current Friction Points under Investigation
We are systematically resolving structural friction before touching raw code. The final active friction point being addressed is **Friction 7: The State-to-EXP Queue Pipeline**, specifically pinpointing the architectural bottleneck inside S0:
*   **The Bridge**: Do persistent `State` cards continuously inject `EXP` packages into the queue each tick?
*   **Vector Summation**: How does `processExp` sum overlapping A/T (Angle/Thrust) targets natively if two conflicting `EXPs` (e.g. Flee and MoveTo) occupy the queue in the same tick?
*   **Emote Structure**: Ensuring modular Emotes return additive algebraic vectors rather than enforcing hard target overwrites, which causes engine jitter when overlapping payloads are processed.

## 5. Artifacts Maintained
The active session maintains several highly compressed artifacts (located in the agent's brain directory) capturing the full scope of the overhaul:
*   `implementation_plan.md`: The master architectural design.
*   `runtime_pipeline_mechanics.md`: Engine loop and tick synchronization resolutions.
*   `friction_points.md`: Highly granular breakdown of technical bottlenecks and their resolution states.
*   `task.md`: Checklist of execution phases.

*Note for incoming agents: Do not rebuild or re-plan the CCG system logic. Rely on the resolved friction mapping and use this framework to build specific modules (like compiling the individual 'Emote' data packages or finalizing the queue math).*
