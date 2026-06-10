---
title: MAGPIE_METASTATE
description: Focuses on MAGPIE_METASTATE and time-sync synchronization (TICK, TICK_super).
tags: [MAGPIE, ECS, Systems, Time, Metastate]
---

# MAGPIE_METASTATE

`MAGPIE_METASTATE` is a core system responsible for global state synchronization and execution tracking across the engine. 

## Time Synchronization

Unlike local client loops, the server must maintain absolute determinism. The metastate achieves this through strict, incremental tick counters:
- **`TICK`**: The standard operational tick counter. Every loop of the `MAGPIE_RUNTIME` increments this value. Logic systems rely on the `TICK` to calculate deltas and trigger recurring events.
- **`TICK_super`**: A higher-order tick generally used for macro-level evaluations, long-polling, or garbage collection events that do not need to run every sub-millisecond loop.

By centralizing the tick values in `MAGPIE_METASTATE`, all other ECS systems can query the exact canonical "time" without relying on arbitrary `Date.now()` calls, which can cause jitter between execution layers.