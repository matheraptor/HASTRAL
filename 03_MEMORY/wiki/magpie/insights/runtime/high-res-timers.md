---
title: High-Res Timers (performance.now)
description: Why MAGPIE mandates performance.now() over Date.now() for the runtime loop.
tags: [MAGPIE, Insights, Runtime, Timers]
---

# High-Res Timers & Monotonic Stability

In backend game servers, time tracking must be sub-millisecond precise and monotonically stable.

## The Flaws of `Date.now()`
`Date.now()` provides integer milliseconds and relies on the system's "wall clock." 
- If the host server uses NTP (Network Time Protocol) to adjust a drifting system clock, `Date.now()` can suddenly jump forward or even skip backward. 
- A negative delta time will completely crash fixed-step physics integration loops.
- An integer rounding error of 0.625ms per tick adds up to almost half a second of lost simulation time after just 10 seconds of gameplay.

## The Standard: `performance.now()`
`MAGPIE_RUNTIME` strictly uses `performance.now()` because:
- **Monotonicity**: It only ever moves forward, making it completely immune to system clock adjustments.
- **Microsecond Precision**: It returns floating-point values (e.g., `15.625ms`), eliminating rounding drift across thousands of physics ticks.
- **Sub-ticking Support**: It allows for sub-tick hit registration when parsing input buffers.