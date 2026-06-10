---
title: MAGPIE Card-Logic Engine (ECG)
description: Grounded game mechanics for the Evolutionary Card Game (ECG) engine, mapping biological traits to actionable logic blocks.
tags: [MAGPIE, ECG, CCG, Mechanics, Stamina, Logic]
---
# MAGPIE Card-Logic Engine (ECG)

The **Evolutionary Card Game (ECG)** engine provides the structural grammar for the `MAGPIE_Intelligence` system. It ensures that entity behavior is non-deterministic, resource-constrained, and state-aware.

## 🃏 Core Components

### 🃏 Trait Card Anatomy
Every card in the MAGPIE engine is a **Multi-Function** object that defines both the entity's capabilities and its physical integrity.

### 1. Trait Definition (The Blueprint)
- **STATS Modifiers**: Permanent or conditional adjustments to `PARAMS`.
- **Card Unlocks**: Unlocks or modifies other cards in the deck.
- **Vital Flag**: If `vital: true`, the exile of this card triggers immediate **Death** (Hard Shutdown).

### 2. Passive Abilities (The Hooks)
- **Logic**: Processed automatically on system hooks.
- **Hooks**: `TICK` (Layer 0), `superTICK` (Layer 1 - 1s), `megaTICK` (Layer 2 - 1m).

### 3. Skills (On-Demand Actions)
- **Logic**: Executed only when the card is explicitly "Played" from the Hand.
- **Cost**: Drains **STAMINA**.

### 4. Health & Fitness (The HP)
- **FITNESS**: Total Deck Size (Total health potential).
- **RESERVE**: Current Deck Size (Remaining cards in draw pile).
- **Core Principle**: Each card is inherently 1 HP.

### 5. Integrity & Injury (The Handicap)
- **Exile (INJURY)**: When a card is exiled, its STATS, Passives, and Skills are lost. All related card unlocks are immediately re-locked.
- **Handicap**: Losing a card represents physical or mental degradation.
- **Death / Shutdown**:
    - **Default**: Exile of a Vital trait or empty Reserve triggers a **Hard Shutdown** (Service Stop).
    - **Safe Mode**: If the entity possesses a trait with a **Safe Mode** passive ability, it may attempt to stay active in a restricted state after vital injury.

### 6. The Hand (Decision Filter)
- **Concept**: Represents the creature's (or Ghost's) immediate focus.
- **Function**: The **Hand** is the primary decision-router. It filters the entire repertoire of actions/tools into a subset relevant to the current **States**.
- **Agentic Routing**: In the **S5 Agentic OS**, the Hand prevents the LLM from having to "choose" from all tools. The mechanics present a curated Hand to the system, and the LLM only assists with refinement if necessary.

### 7. Stamina (Action Points)
- **Concept**: The fuel required to execute actions.
- **Drain**: Drained by playing cards (System 1 Instinct ticks).
- **Refill**: Occurs **ONLY** via a deliberate **REST** action. It is not automatic.

### 8. The REST Action
- **Concept**: A specific "Trait" card available to all entities.
- **Function**: Refills **STAMINA** to maximum and draws cards from the Deck until the **HAND** is full.
- **Cost**: Consumes the entire turn. No other cards can be played during a REST tick.
- **Triggers**:
    - **Necessity (Automatic)**: If Stamina is 0, the turn is skipped and an implicit REST is triggered.
    - **Urge (State-Driven)**: Creatures with specific **SENSE** traits trigger the **EXERTING** state when stamina is below maximum.
    - **Intensity Scaling**: `EXERTING` intensity = `(Max_Stamina - Current_Stamina) * EXERTING_WEIGHT`. Higher intensity increases the priority of the REST card in S1.

---

## ⚡ Execution Flow

| Event | Mechanics | Frequency |
| :--- | :--- | :--- |
| **Instinct** | Play card from Hand -> Drain Stamina -> Process Exp | Layer 1 (1s) |
| **Impulse** | Evaluate Hand -> Reshuffle -> Trigger Rest | Layer 2 (1m) |
| **Exhaustion**| Zero Stamina -> Cannot Play Cards -> Forced Rest | Conditional |
| **Injury** | Permanent card sacrifice from Reserve (HP) | S3 (Asynchronous) |

## 🛠️ Failure States

- **Exhaustion**: A temporary state where the creature must wait for a **Rest** cycle.
- **Injury**: Occurs if the creature is forced to act (by a high-priority external trigger) while exhausted. This results in the "Exile" of a Trait card from the **RESERVE** (HP pool).
- **Checkmate**: The terminal state when the Reserve is empty.

---

## Related Pages
- [[magpie-intelligence]]
- [[magpie-v20-runtime]]
