# POVART Array

**Summary**: The 20-slot Float64Array used for hot physics telemetry, separated from cold data to ensure zero garbage collection overhead.

**Sources**: 4-00_physics_POVART.md

**Last updated**: 2026-04-17

---

The **POVART Array** (`Entity.components.POVART`) is the "Hot Array" driving the M.A.G.P.I.E. engine's physics. By allocating exactly 20 slots in a `Float64Array`, the V8 engine's Hidden Classes are protected from cache thrashing. It tracks the per-second metrics of an active entity.

## Structure

The array is structured into 6 main components:

- **P (Position, 4 slots)**: `[Px, Py, Pz, Pc]`
  - Represents 3D Cartesian coordinates relative to the parent celestial body's center.
  - `Pc` holds the Parent Celestial ID.
- **O (Orientation, 4 slots)**: `[Byz, Bxz, Bxy, scalar]`
  - A Geometric Algebra Rotor replacing the old quaternion.
- **V (Velocity, 3 slots)**: `[Vx, Vy, Vz]`
  - 3D Cartesian linear velocity.
- **A (Acceleration, 3 slots)**: `[Ax, Ay, Az]`
  - 3D Cartesian linear acceleration.
- **R (Angular Velocity, 3 slots)**: `[Ryz, Rxz, Rxy]`
  - A bivector representing current rotational momentum.
- **T (Torque, 3 slots)**: `[Tyz, Txz, Txy]`
  - A bivector representing angular acceleration.

## Time-Slicing & Delta Scaling

All vector and mathematical operations stored within the array are fundamentally calculated based on the standard **TICK** layer (per second). For example, Velocity is inherently `m/s`.

However, because the [[magpie-runtime]] executes in hierarchical time-sliced layers, the results are scaled according to the delta of the layer processing the entity. If an entity is processed in the `native refresh` (10ms) layer, the result applied is `TICK.result / 100`.

_(Note: Earlier engine iterations referred to this as the 16-slot `POVAR` array before Torque was formally integrated as the 4th structural component.)_

## Cold Array Separation

Immutable or rarely modified data, such as `M1` (Total Mass) and the 3D Inertia vector, are isolated in the "Cold Array" (`Entity.components.Traits`). Keeping this data out of the [[]] prevents performance drops.

## UI Rendering Strategy

The Tactical Map ignores 3D camera matrices. Instead, it reads the Orientation Rotor's bivector components (`Byz`, `Bxz`, `Bxy`) to determine the tilt of the 2D maneuvering canvas. The `P.xyz` magnitude minus the parent celestial radius determines altitude, allowing a vertical "Stalk" to be drawn down to the **[[topics/codecraft/physics/mathematical_sphere|Mathematical Sphere]]**.

## Related pages

- [[]]
- [[]]
- [[]]



