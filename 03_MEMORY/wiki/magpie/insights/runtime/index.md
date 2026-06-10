---
title: Runtime Insights Index
description: Architectural rules for the server tick, timing, and network heartbeats.
tags: [MAGPIE, Insights, Runtime, Index]
---

# Runtime Insights

This category details the specific architectural rules dictating the `MAGPIE_RUNTIME` heartbeat and simulation constraints.

## Core Concepts

- **[The Accumulator Pattern (Fixed Timestep)](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/insights/runtime/accumulator-pattern.md)**: How the server avoids the "Spiral of Death" during CPU lag.
- **[High-Res Timers (Monotonic Stability)](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/insights/runtime/high-res-timers.md)**: Why `performance.now()` is required over `Date.now()`.
- **[Network vs Logic Tick Separation](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/insights/runtime/tick-separation.md)**: Isolating game physics from dropped connections.