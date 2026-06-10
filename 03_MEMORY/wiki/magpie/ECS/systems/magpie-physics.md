---
title: MAGPIE_PHYSICS
description: The mathematical engine handling Cartesian/Geodetic conversions, gravity, and aerodynamic forces.
tags: [MAGPIE, ECS, Systems, Physics, Math]
---

# MAGPIE_PHYSICS

`MAGPIE_PHYSICS` is the mathematical backbone of the spatial simulation. It evaluates the `POVART` component vectors of every active entity to determine their next position in the world space. It relies on the sub-millisecond precision provided by the runtime (see **[High-Res Timers](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/insights/runtime/high-res-timers.md)**) to calculate exact delta-time forces.

## Operations

### Cartesian & Geodetic Conversions
Because the simulation space is mapped onto a spherical or orbital geometry, flat Cartesian coordinates (`x, y, z`) are frequently converted to and from Geodetic coordinates (`latitude, longitude, altitude`). The physics system provides high-speed trigonometric helpers to facilitate this without relying on heavy external math libraries.

### Force Applications
During the physics integration step of the `MAGPIE_RUNTIME`, this system calculates:
- **Gravity**: Downward acceleration applied to all unanchored entities.
- **Aerodynamics & Drag**: Velocity dampening based on environmental friction and fluid dynamics.
- **Rotation (Geometric Algebra)**: All orientation changes are handled via **[Rotors](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/systems/rotors.md)**. This avoids the complexities and drift associated with Euler angles or Quaternions.
- **Floor Clamping**: Collision detection logic that halts downward velocity when an entity intersects the ground plane, preventing them from falling through the world.

These operations read directly from the `Float64Array` buffers attached to entities for maximum performance.