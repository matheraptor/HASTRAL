---
name: MAGPIE_Intelligence (Entity Agency)
description: NPC and automated logic controller via Tri-Layered Intelligence.
tags: [MAGPIE, ECS, Systems, AI, NPC, Agency]
---

# MAGPIE_Intelligence

`MAGPIE_Intelligence` is the logic driver for non-player characters (NPCs) and automated entities. The system utilizes a **Unified Heartbeat** model: instead of a separate agent loop, the **Agentic OS** intercepts the creature's native `entity.refresh` cycle.

## Unified Cycle Flow

1. **Trigger**: The ECS Runtime pulses the entity's `refresh()` loop.
2. **Execution (`processExp`)**: Consumes the top experience ticket (`MAGPIE_EXP`) from the queue (if validated against the current `_hand`) and translates it into physical vectors.
3. **Metabolism (`processStates`)**: Active states are processed, consuming duration stacks, dynamically filtering the entity's `_hand`, and potentially injecting new impulses into the queue.
4. **Consciousness (`.agency`)**: The Intelligence layer observes the updated `_hand` and the resulting queue. The entity makes a sovereign choice (e.g., vetoing, rearranging, or approving pending tickets) before the next tick's execution phase.

## Six-Layer Intelligence Architecture

The system is split between the **Internal Mind (S1-S3)** of an entity and the **External Relationship (S4-S6)** between the entity and the player.

### --- Internal Mind (Entity Logic) ---

### System 1: Instinct Layer (Fast Tick - 1s)

- **Focus:** **NEED**. State-driven basic instinct and card decision logic.
- **Role:** Drains **STAMINA** to play cards and resolve the `exps[]` queue.

### System 2: Impulse Layer (Strategic Tick - 1m)

- **Focus:** **WANT**. Opportunistic impulses pushed to the `exps[]` queue.
- **Condition:** Requires **SENSE** traits.

### System 3: Conscience Layer (Recursive)

- **Focus:** **IDENTITY**. Recursive critical thinking and long-term behavior modeling.

### --- External Relationship (Player-Creature Interface) ---

### S4 / E1: Client Service

- **Focus:** Translation and Strategy. Manages client-side plans and ticket-to-exp translation.

### S5 / E2: Guardian Angel (Guardian Logic)

- **Focus:** Deck Customization, growth facilitation, and orchestration of the player-creature bond.

### S6 / E3: Reasoning Plugins (LLMs)

- **Focus:** Optional semantic refinement, dialogue generation, and complex strategy assistance.

---

## 👻 Entity Types: Biological vs. Ghost

| Type | Presence | Rules | Purpose |
| :--- | :--- | :--- | :--- |
| **Biological** | Physical World | Strict Realism (Uneditable Stats) | Core Gameplay / Simulation |
| **Ghost** | Digital-Only | Freely Editable (Stats/Params) | Assistants / Admin / Research |

The **Ghost Assistant** is a Ghost-type entity that uses the same S1-S3 internal mind logic as biological creatures, but serves as a bridge for the player via the S4-S6 external layers.

## The Suggestion Bridge (Network Ingestion)

The network perimeter does not enforce game logic or validate player actions like a traditional game dealer. Instead, it acts as a **Suggestion Bridge**:

1. **Ticket Stage:** The Player (acting as a guiding Ghost/Guardian) suggests a card play from the entity's current hand.
2. **Ingestion Stage:** The network wraps this suggestion in a transient data ticket (`MAGPIE_EXP`) and drops it into the Entity's unprocessed memory queue.
3. **Sovereignty Stage:** The entity evaluates the suggestion during its Consciousness phase and makes the final choice to accept or ignore it.

## ⚙️ Logic Orchestration: The 3-Tier Model

Implementation logic is separated into three distinct layers to ensure modularity and zero-filler execution.

### 1. Low-Level Logic (Functions)

- **Nature**: Deterministic, atomic functions (the "Gears").
- **Example**: `refreshExperienceQueue()`, `calculateStaminaDrain()`, `fetchMagpieKey()`.
- **Constraint**: Must be stateless and purely functional.

### 2. Middle-Level Logic (Wrappers)

- **Nature**: The orchestration engine that wraps low-level functions (the "Clockwork").
- **Example**: The **S1 Instinct Engine** or the **S5 Agentic OS**.
- **Role**: Handles timing, error recovery, and the "Deep Grounding" effect routines.

### 3. Modular-Level Logic (Cards/States)

- **Nature**: Logic defined within **Trait Cards** and derived **States** (the "Tape").
- **Role**: Decides *when* and *how* to call middle-level wrappers.
- **Example**: A `CONFUSION` state calling the `triggerDeepGrounding()` wrapper.

## Related Pages

- **[Card-Logic Engine (ECG)](../../logic/card-mechanics.md)**
- **[MAGPIE_KEY System](../../knowledge/magpie-key-system.md)**
