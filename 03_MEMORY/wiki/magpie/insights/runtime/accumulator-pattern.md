---
title: The Accumulator Pattern
description: Fixed timestep with catch-up logic to maintain deterministic simulation.
tags: [MAGPIE, Insights, Runtime, Accumulator]
---

# The Accumulator Pattern (Fixed Timestep)

The `MAGPIE_RUNTIME` must process physics deterministically regardless of event loop lag. 

## The Problem with `async/await` and `setInterval`
Using `setInterval` or recursive `async/await` loops in Node.js exposes the game loop to Event Loop Starvation. If a database query blocks the loop, the server falls behind. If it tries to catch up using a `while` loop with `await`, it introduces microtask delays that cause the lag to spiral out of control (the "Spiral of Death").

## The Accumulator Solution
The standard production pattern used by MAGPIE relies on an Accumulator driven by `setImmediate`:

1. **Calculate Delta**: The exact time elapsed since the last tick is measured.
2. **Panic Cap**: The delta is capped (e.g., 1000ms max) to prevent the server from trying to simulate thousands of ticks at once if it hung completely.
3. **Accumulate**: The delta is added to a running `accumulator` total.
4. **Fixed Step Consumption**: A `while` loop consumes the accumulator in exact, fixed chunks (e.g., 16.67ms for 60Hz), running the physics and AI logic synchronously.
5. **Yield**: The loop finishes via `setImmediate`, yielding the event loop back to Node.js so it can process incoming network packets before the next cycle.