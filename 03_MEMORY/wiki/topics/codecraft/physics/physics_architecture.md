# Physics Architecture

**Summary**: ECS-driven implementation of physics and motion, utilizing a tiered logic system to optimize CPU performance. Updated for the POVART transition.

**Sources**: 9-00_physics.md, 4-00_physics_POVART.md

**Last updated**: 2026-04-17.

---

## Component Taxonomy

The HASTRAL engine separates physics data into distinct components to optimize cache efficiency. The system has transitioned from the legacy 16-slot POVA model to the high-performance 20-slot **[[magpie/ECS/components/magpie-povart|POVART]]** chassis.

| Component          | Purpose              | Data Type            | Key Properties                                           |
| :----------------- | :------------------- | :------------------- | :------------------------------------------------------- | -------------------------------------------------------------------------------- |
| \*\*[[povart-array | POVART]]\*\*         | Telemetry / Hot Data | Dynamic (20-slot)                                        | Position, Orientation (Rotors), Velocity, Acceleration, Angular Velocity, Torque |
| **Body**           | Specs / Cold Data    | Immutable            | Mass, Density, Radius                                    |
| **Orbit**          | The Rails / Analytic | Static               | Keplerian elements ($a, e, i, \omega, \Omega, M_0, t_0$) |

### Rotation Math: From Quaternions to Rotors

While initial designs utilized Quaternions, the system now strictly uses **[[topics/codecraft/physics/geometric-algebra-rotors|Geometric Algebra Rotors]]**.

- **Legacy**: 4D Quaternions (complex math, potential gimbal lock).
- **Current**: 2D Bivector Rotors (memory-compatible, 1:1 replacement).

## Tiered Execution & Cascading Culling

HASTRAL utilizes an **Update Frequency Hierarchy (UFH)** to protect the CPU from unnecessary calculations. Continuous physics for background entities is explicitly prohibited (source: 10-00_doctrine_knowledge_gate.md).

1. **Tier 1: Context Check (`isRelevant`)**: Boolean flag check.
2. **Tier 2: The 1D Clock Check**: Angle-based FOV check using Mean Longitude.
3. **Tier 3: The Solver (`solveOrbit`)**: Analytic position generation for "On-Rails" entities (L2 Cruise Layer).
4. **Tier 4: Active Physics ([[topics/codecraft/physics/l0-symplectic-loop|L0 Symplectic Loop]])**: High-fidelity 10ms integration for focused active units only.
5. **Tier 5: Maintenance Layer (L4)**: Staggered updates spread over 24 hours for distant or low-priority background state.

## Related pages

- [[]]
- [[]]



