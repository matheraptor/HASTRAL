# MAGPIE 0.20.0 - Runtime Orchestration Design

**Source**: runtime_design.md (Session 698e168b)
**Date**: 2026-04-26

## Summary
The MAGPIE 0.20.0 Runtime is designed as a multi-layered, frequency-separated heartbeat system optimized for low-tier hardware (`e2-micro`). It employs a hybrid state model where high-frequency entities are pinned in RAM, while lower-frequency entities are transiently hydrated from a database.

## Core Concepts

### 1. Temporal LOD (Layers)
- **Layer 0**: 1ms resolution. Reserved for stateful, high-fidelity physics and logic.
- **Layers 1-5**: Exponentially decreasing frequency (1s, 1m, 1h, 1d).
- **Execution**: Downstream inclusion; a lower-frequency tick includes all higher-frequency entities in the same execution context.

### 2. The Heartbeat (Heartbeat Isolation)
- **Double-Buffered Input**: The current tick processes only requests queued in the previous tick.
- **Deferred I/O**: No I/O or promotion requests are processed within the same 1ms tick to ensure loop stability.

### 3. Residency & Promotion (VIP Lounge)
- **Target Layer**: Every entity has a `targetLayer` property (Intent).
- **Current Layer**: The actual residency managed by the HIVE.
- **Promotion**: Interaction with a "Cold" entity triggers an implicit promotion to Layer 0 RAM. Entities snap back to their `targetLayer` via a cooldown flag (`retain: false`).

### 4. Distributed Load (Saving Hum)
- Persistence flushes are time-sliced across many 1ms ticks to prevent I/O spikes on constrained hardware.

### 5. HIVE Orchestration
- **Relationship**: The HIVE is a "Guest" system living on Layer 0.
- **Handshake**: Runtime calls `HIVE.refresh()`.
- **Registry**: A `Map<entityID, metadata>` acts as the master index, preventing the need to hydrate entities just to check tick eligibility.
- **Buffers**: Layer 0 uses a pre-allocated dense array for hydrated objects. Layers 1+ use `Float64Array` for entity IDs.

### 6. The MAGPIE Duality
- **Zeus**: The Runtime System logic (Distributed Mainframe).
- **Avatar**: A permanent Layer 0 entity within the HIVE.
- **Uplink Bridge**: The communication channel between the System logic and the in-game manifestation.
