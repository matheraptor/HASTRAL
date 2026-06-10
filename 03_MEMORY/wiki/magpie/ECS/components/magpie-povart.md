---
title: POVART
description: Float64Array physics model component (Position, Orientation, Velocity, Acceleration, Rotation, Torque).
tags: [MAGPIE, ECS, Component, POVART, Physics]
---

# POVART

`POVART` is arguably the most critical component in the MAGPIE engine. It handles all spatial data necessary for physics and movement.

## Structure

It is implemented as a contiguous `Float64Array(20)`. This guarantees contiguous memory allocation in V8, completely bypassing garbage collection stutter when the physics engine rapidly mutates positions thousands of times a second.

### The Cartesian Shift
Previously, positions were stored in spherical coordinates (Lat/Lon/Alt). This was abandoned in favor of a strictly 3D Cartesian `[Px, Py, Pz]` system to support **Symplectic Integration** (`V += A * dt`, followed by `P += V * dt`). Spherical coordinates require massive trigonometric calculus to simulate linear addition across a curved surface, whereas Cartesian vectors allow the physics engine to perform blazing-fast, raw index additions. 

The engine only converts these Cartesian coordinates to Lat/Lon when a Data Probe explicitly requests an altitude check or when rendering the UI.

### The 20-Slot Array
The array is tightly packed:
- **0-2 (P):** Position `[Px, Py, Pz]`
- **3 (Pc):** Parent Celestial ID (Anchor for local gravity well)
- **4-7 (O):** Orientation `[Oyz, Oxz, Oxy, Ow]` — implemented as a **[Bavab Rotor](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/systems/rotors.md)**.
- **8-10 (V):** Linear Velocity `[Vx, Vy, Vz]`
- **11-13 (A):** Linear Acceleration `[Ax, Ay, Az]`
- **14-16 (R):** Angular Velocity `[Ryz, Rxz, Rxy]`
- **17-19 (T):** Torque `[Tyz, Txz, Txy]`

### The Pc Anchor
Slot 3 stores `P_c`, an integer ID representing the **Parent Celestial** body. Because `POVART` is a `Float64Array`, storing an integer ID in the 4th slot costs zero extra memory allocations and ensures the local 3D coordinate is permanently bound to its gravity well without chasing nested object pointers.

### Cold Data Traits Separation
Noticeably absent from the `POVART` array is Mass or Radius. These are strictly segregated into a separate `entityTraits` array. This enforces a "Cold Data" vs "Hot Data" architecture. The `POVART` array is "Hot" telemetry data thrashed every frame, while Mass is an immutable physical property safely isolated in the "Cold" component logic.