---
name: MAGPIE_RUNTIME
description: Execution flow and game loop controller.
tags: [MAGPIE, ECS, Systems, Loop, Runtime]
---

# MAGPIE_RUNTIME

`MAGPIE_RUNTIME` is the core heartbeat loop of the engine. It dictates the execution order of all other ECS systems.

## The Game Loop

The runtime uses highly optimized interval timers to execute the server loop at a fixed tick rate. For deep-dive rationale, see:

- **[The Accumulator Pattern](../../insights/runtime/accumulator-pattern.md)**
- **[High-Res Timers (Monotonic Stability)](../../insights/runtime/high-res-timers.md)**
- **[Network vs Logic Tick Separation](../../insights/runtime/tick-separation.md)**

### Execution Order

During every tick, the runtime strictly orders the execution of system updates:

1. **Time Synchronization**: Updates `MAGPIE_METASTATE`.
2. **Network Ingress**: Flushes incoming client socket buffers and queues `MAGPIE_EXP` payloads.
3. **Logic & AI**: Runs `MAGPIE_Intelligence` and state transitions (`MAGPIE_STATE`).
4. **Physics Integration**: Triggers `MAGPIE_PHYSICS` to step velocities and Cartesian coordinates forward based on the `POVART` vectors.
5. **Network Egress**: Broadcasts updated `POVART` arrays and event emissions to connected clients.

Maintaining this strict determinism is vital to prevent race conditions across the component arrays.
