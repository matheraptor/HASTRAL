---
title: Tick Layers
description: The async, schema-strict layer capping architecture for MAGPIE_RUNTIME.
tags: [MAGPIE, Insights, Architecture, Runtime, Tick]
---

# Tick Layers

To maintain true determinism and ensure the server never freezes or crashes under load, the `MAGPIE_RUNTIME` organizes entities into heavily gated "Tick Layers". 

Every layer is capped by capacity and processed asynchronously in try/catch blocks that automatically kick problematic guests.

## The Layers

1. **Native Refresh (per 10ms):**
   - The fastest possible tick loop.
   - Refreshes itself and a strictly capped number of priority "Guests" (typically protagonist entities currently performing high-speed maneuvers or combat).
   
2. **TICK (per 1,000ms):**
   - The standard default layer.
   - Most physics calculations (like `m/s`) natively map to this layer.
   - Evaluates "standard" guests.

3. **superTICK (per 60,000ms):**
   - Minute-level ticks.
   - Handles background or unfocused entities that don't need immediate high-fidelity updates.

4. **megaTICK (per 3,600,000ms):**
   - Hour-level ticks.
   - Typically used for inactive mobile entities, or structural/environmental entities that rarely change state.

5. **ultraTICK (per 86,400,000ms):**
   - Day-level ticks.
   - Iterates through `ultraGuests` and then cascades down to all guests for the global async maintenance loop.

## Layer Assignment
The runtime dynamically hosts guests on a particular layer based on three criteria:
- **Internal Logic:** Priority sorting (e.g., structure < mobile < protagonist).
- **Capacity:** If a higher tier has empty slots, candidates from the next layer down can be temporarily promoted.
- **Ticket Requests:** Explicit requests forcing an entity onto a specific layer for a period of time.