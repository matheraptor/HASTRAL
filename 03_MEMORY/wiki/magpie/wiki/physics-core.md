# Physics Core

**Summary**: Core physics engine for MAGPIE, handling spatial, orbital, and aerodynamic calculations using a Rotor-based Geometric Algebra approach.

**Sources**:

- physics_povart_map.md
- physics_ga_primer.md
- physics_api_ref.md

**Last updated**: 2026-05-18

---

The MAGPIE physics engine provides robust spatial simulations.

## POVART Management

The engine uses a `Float64Array` (`POVART`) for high-performance spatial state storage (source: physics_povart_map.md).

## Orientation

Instead of quaternions, this engine implements **Rotors** from Geometric Algebra to represent 3D rotations, utilizing sandwich products and maintaining unit-length normalization for stability (source: physics_ga_primer.md).

## API

The engine exposes methods for acceleration, Slerp, and integration (source: physics_api_ref.md).

## Related pages

- [[physics-povart-map]]
- [[geometric-algebra-primer]]
- [[physics-api-reference]]
