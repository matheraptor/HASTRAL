---
plan: "MAGPIE_CLI agent"
version: 0.1.1 2026-04-07
tags: ["plan", "CLI", "agent"]
---

# MAGPIE_CLI agent {#top}

## Purpose {#purpose}

MAGPIE_CLI is a command-line interface (CLI) agent for M.A.G.P.I.E. (Modular Algorithmic General Purpose Intelligence Engine).

## table of contents

- [Purpose](#purpose)
- [The Core Problem: Why not just an LLM?](#core-problem)
- [The Three Brains: Cognition & Choice](#three-brains)
- [S1 Kernel: The Engine of Life](#s1-kernel)
- [Memory & Weights](#memory-weights)
- [The Player-Creature Interface](#player-creature)
- [The Card & State Model (SOP)](#sop)
- [MAGPIE_CLI: Conceptual Architecture Specification](#magpie_cli)

---

## 🎯 The Core Problem: Why not just an LLM? {#core-problem}

In most AI agents, the LLM is the **Driver**. It receives a prompt and immediately executes a command.
**The Problem**: Real people don't work this way. We have urges, physical limits, and "System 1" reactions that happen before we "think."

### The Interface Model: Player <-> Creature

The **MAGPIE_CLI** is not a chatbot. It is a communication bridge between a **"Player" (User)** and a **"Creature" (S1 Instinct)**.

[back to top ⤴️](#top)

---

## 🧠 The Three Brains: Cognition & Choice {#three-brains}

The interaction between S1, S2, and S3 defines how the creature navigates the "Now" versus the "Future."

### 1. Instinct (S1 - The Kernel)

- **Nature**: "Dumb" and reactive. Lives on the server.
- **Focus**: The **"Now"**.
- **Action**: Processes **States** and executes **Cards** to apply A/T (Acceleration/Torque) deltas.

### 2. Impulse (S2 - The Oracle)

- **Nature**: Opportunistic and Choice-driven.
- **Focus**: The **"Extended Now"**.
- **Action**: Leverages memory to inform choices; "steers" emotional reactions over time.

### 3. Conscience (S3 - The Arbiter)

- **Nature**: Self-aware and Reflective.
- **Focus**: The **"Trajectory"** (Past $\leftarrow$ Present $\rightarrow$ Future).
- **Action**: Looks backward (Memory) and forward (Projection) to align with principles.

[back to top ⤴️](#top)

---

## ⚙️ S1 Kernel: The Engine of Life {#s1-kernel}

### The "Life of a Tick" (Execution Logic)

1. **Passive Steering**: All active **States** (the states deck) are evaluated. They do not produce math directly, but they **Steer** the S1 Kernel towards choosing one **Card** in the hand over another.
2. **Card Selection**: The Kernel selects a Card based on the weighted influence of the current States.
3. **Math Execution (Callback)**: The chosen Card executes its **Callback Function**. This function specifically extracts the resulting A/T math from the current creature state and memory.
4. **State Removal (`processStates()`)**: The creature drives towards removal of the most pressing states based on **Reactive Capacity**.

### ⚡ Async Performance & Lag

- **Nature**: The entity refresh loop is **Asynchronous**.
- **Behavior**: If the simulation depth causes a computational lag, it manifests as a **Degraded Reaction Time** for that specific creature.
- **System Stability**: This isolation ensures that a stressed creature's "Internal Lag" does not affect global server performance.

### 🧬 State Prototype & Persistence

- **Nature**: Treated like a card in "Permanent Play."
- **Properties**:
  - **Stackable (Boolean)**: Determines if multiple instances of the same ID can coexist.
  - **Max Stack (Int)**: Hard limit on the number of simultaneous stacks allowed for this ID.
- **Removal Conditions**:
  - **Turn Count**: Expires naturally over time.
  - **Logic Guard (`if`)**: Checked dynamically during `processStates()`.
  - **External Trigger**: Call to `removeState(stateID)`.

[back to top ⤴️](#top)

---

## 💾 Memory & Weights {#memory-weights}

### ⚖️ Gravity vs. Urgency

- **Gravity (Impact)**: Measures the **Resolution Impact**. Controls Long-Term Memory persistence.
- **Urgency (Priority)**: Measures the **Resolution Priority**. Controls Queue/Short-Term Memory processing speed.

### 💾 Retention Hierarchy & The Sleep Sequence

1. **Experience Queue**: Immediate FIFO.
2. **Short-Term Memory (STM)**: Unfinished/Active Experiences.
3. **Long-Term Memory (LTM)**: Highlight summaries of past operations.
4. **The Sleep Sequence**: To enter a "Sleep" state, the entity must "close the hand" (resolve all currently held cards). The internal behaviors and physics of sleeping are governed entirely by the rules within the **Sleep Card** itself, requiring no global exception logic. During Sleep, STM is aggregated and simplified into LTM (Fade) based on Gravity/Urgency.

---

## 🎟️ The Player-Creature Interface {#player-creature}

### 📡 The Socket Bridge

- **Tickets**: Carrier format bridging Player input directly to the Creature's biological loop.
- **Experience (Exp)**: Payload parsed and stored in the FIFO queue. Contains an `emoteID` property.
- **Emote**: A physical impulse mapped from an Experience. If valid, it is matched to an actionable **Card** in the hand.
- **Broadcast**: At the end of the Tick Loop, the Server-to-Client emits telemetry to the creature's specific **Room**.
- **CLI**: The Player's client reads the Room data and renders it based on local display configuration (Sensorimotor vs. Telemetry).

[back to top ⤴️](#top)

---

## 🎴 The Card & State Model (SOP) {#sop}

### 🧬 State Stacking: Weighted Steering

When States of the same ID stack:

- **Logic**: Each stack provides linear **Weighted Steering** during the Card Selection phase.
- **Execution**: The total steering weight of a state ID impacts the probability/priority of selecting its related Cards.

### 🎟️ External Interaction: The Counter-Experience

To remove a state from an external system (S2/S3 constraint or Admin):

- **Mechanism**: The supervisor must inject a **Counter-Experience** into the FIFO queue.
- **Resolution**: When processed by S1, this Exp specifically targets and cancels the associated State ID, bypassing the need for unsafe direct memory manipulation.

[back to top ⤴️](#top)

---

## 🧠 The Mind: A Bridge Between Worlds {#mind}

For a "Mind" to function as a bridge, it only needs three things: A Connection, a Processor, and a Window.

The MVP Fundamental Requirements

1. The Connection (The Socket Manager)

   Requirement: A persistent link to the server.
   MVP Function: Must be able to emit (send Experience packets/Tickets) and on (receive telemetry/state updates).

2. The Processor (The S2/S3 Pipeline)

   Requirement: A way to turn user text into the "Experience Packets" the server understands.
   MVP Function:
   Receive User String $\rightarrow$ Send to LLM (S2) $\rightarrow$ Map LLM output to emoteID and value $\rightarrow$ S3 validates against a basic Persona string $\rightarrow$ Send to Server.

3. The Window (The Terminal Interface)

   Requirement: A basic I/O loop.
   MVP Function:
   A readline prompt for the user.
   A console.log that prints the incoming server telemetry (the "Body's" current state).

4. The Configuration (The Brain-Map)

   Requirement: A way to define the agent's identity without hard-coding it.
   MVP Function: A .json file containing:
   server_url: Where to connect.
   llm_config: API keys and model choice.
   persona_profile: The base principles S3 uses to validate experiences.

[back to top ⤴️](#top)

---

## MAGPIE_CLI: Conceptual Architecture Specification {#magpie_cli}

### 1. Project Vision

MAGPIE_CLI is not a chatbot, but a communication bridge between a Player (User) and a Creature (S1 Instinct). It replaces the "LLM-as-Driver" model with a "Distributed Biological Simulation," where intelligence is an emergent property of memory resonance rather than a set of hard-coded instructions.

### 2. The Cognitive Architecture (The Three Brains)

#### System 1: The Instinct (The Body)

Location: Server-side.
Nature: Deterministic, reactive, and "dumb."
Function: Processes the current "Hand" of cards and internal states to apply physical forces. It operates on the principle of homeostasis, seeking to minimize stress and maximize comfort.
Decision Logic: It does not "think"; it selects the most convenient playable card based on weighted steering from current states.

#### System 2: The Oracle (The Impulse)

Location: Client-side.
Nature: Opportunistic, asynchronous, and LLM-backed.
Function: Analyzes server telemetry and user prompts to suggest "Experiences" or "Surgical Recalls" to steer the creature.

#### System 3: The Arbiter (The Conscience)

Location: Client-side.
Nature: Reflective and principle-driven.
Function: Monitors the trajectory of the creature and the suggestions of S2, ensuring alignment with the Persona Profile. It can override or refine the "Mind's" influence.

### 3. The Creature Anatomy (The Body & Soul)

#### The Deck (Identity)

The character is the sum of its cards. If a capability is not in the deck, it cannot be conceived or executed.

Passive Cards (Physiology): Permanent "Hardware." These define stats and determine the effectiveness of actions in the Kernel (e.g., Strength).
Active Cards (Psychology): Volatile "Software." These are impulses and skills that move into the Hand. They influence the probability of an action.

#### The Hand and Heartbeat

The Hand: A limited buffer of currently playable impulses. Drawing new cards is a deliberate action (often tied to a "Rest" state).
The Server Heartbeat (Biological Pulse): The rhythmic tick that processes S1 logic, updates POVART physics, and emits telemetry to the socket room.

#### The Kernel and Physics (POVART)

The Kernel: The authoritative executor. It ensures only valid actions are performed.
POVART: Physical state defined by Position, Orientation, Velocity, Acceleration, Rotation, and Torque.
A/T Deltas: Actions in the creature's world are expressed as changes in Acceleration and Torque, ensuring physical inertia and realism.

### 4. Memory and Semantic Resonance

#### The Memory Pipeline

Experiences flow through a specific hierarchy: FIFO Queue (Immediate) -> Short-Term Memory (STM) -> Long-Term Memory (LTM).

#### The Sleep Sequence

Entering "Sleep" is a card-based action that triggers the "Fade" process, where STM is aggregated, simplified, and archived into LTM.

#### Semantic Resonance (Surgical Recall)

Intelligence is not stored as "If-Then" rules, but as an associative network:

## MAGPIE_KEY: The fundamental semantic unit of an experience. {#magpie_key}

Metakeys: Aggregations of keys that represent complex concepts or "lessons."
Recall Process: The Client (Agent) identifies a pattern in the telemetry and triggers a Metakey on the server. This re-injects the associated keys into the creature's STM, allowing the creature to "re-live" a past experience and react to it instinctively.

### 5. Distributed Runtime (Server and Client)

#### The Server (The Body)

The Single Source of Truth (SSOT). It manages the POVART physics, the S1 loop, the LTM database (better-sqlite3), and the socket rooms.

#### The Client (The Mind/CLI)

The "Super-Observer" and orchestrator.

The Client Heartbeat (Cognitive Pulse): A secondary loop that monitors server telemetry and decides when to engage S2/S3 for a surgical recall.
The Telemetry Buffer: A single-slot buffer storing the most recent state of the creature for immediate analysis.
The Hybrid CLI:
Agent Path: User -> Client (S2/S3) -> Server (S1). (Influencing the mind).
Admin Path: User -> Server. (Direct system/config overrides).

#### The Experience Packet

The language used for communication between Mind and Body:

ID: Timestamp of creation.
EmoteID: The semantic impulse.
Value: Intensity of the emotion/impulse.
POVART Arrays: Subject and Target coordinates to provide spatial context for the experience.
Metatag: MAGPIE_EXP for database rehydration.

### 6. The "Life of a Tick" (Full Loop)

#### S1 Heartbeat (Server)

Evaluates current states and stacks.
Weights the Hand based on state steering.
Selects and executes a card via the Kernel.
Updates POVART physics and homeostatic levels (Stress/Comfort).
Broadcasts telemetry to the socket room.

#### Agent Heartbeat (Client)

Updates the Telemetry Buffer with the latest broadcast.
Checks for user tickets or "Cognitive Triggers."
(Optional) Interrogates S2/S3 to find a resonant Metakey in LTM.
Emits an Experience packet or a Recall trigger to the server.

#### Resolution (S1)

Receives the Experience/Recall.
Modifies card weights or injects states into STM.
These changes influence the next heartbeat, creating a realistic reaction-time lag.

[back to top ⤴️](#top)

---
