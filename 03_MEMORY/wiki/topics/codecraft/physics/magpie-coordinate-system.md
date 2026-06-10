# MAGPIE Coordinate System

**Summary**: The spherical coordinate space defining spatial awareness, sea-level relativity, and z-floor collision physics for the engine.

**Sources**: 6-00_architecture_RUNTIME-loop.md, 7-00_architecture_data-oriented.md

**Last updated**: 2026-04-17

---

The M.A.G.P.I.E. engine uses a relative spherical coordinate system to track entities in space. Position is always calculated relative to the parent celestial body's center.

## Positioning (Radians & Meters)

The foundational spatial axes are:

- **X**: Latitude (in radians)
- **Y**: Longitude (in radians)
- **Z**: Distance from the celestial center (in meters)

### Mathematical Distinctions

- **$r$ (Lower Case)**: The Position Vector. The dynamic distance of an orbiting body from the focal point (e.g., Sun to Planet).
- **$R$ (Upper Case)**: The Physical Constant Radius. The immutable "hard deck" of the planetary sphere.
- **$
ho$ (Rho)**: The Sensor Reading. The radial distance from the origin to a specific coordinate on the grid, used for surface queries.

### Analytical Intersection Logic

To bypass expensive mesh colliders, interactions (like mouse clicks or sensor locks) use the **Ray-Sphere Intersection** formula. Solving the quadratic equation for a camera ray against a sphere of radius $R$ yields an exact $(x, y, z)$ on the smooth surface, which is converted to Lat/Lon. This turns sensors/cursors into high-precision queries directly against the Data Domain without broad-phase physics checks.

### Sea-Level and Z-Floor

"Sea-level" is conceptually defined as `z - parentCelestial.radius`.

However, the effective collision boundary is defined by the **z floor**. If elevation data is available for a given lat/lon, the z floor is raised to match the elevation. Otherwise, the z floor defaults back to the baseline sea-level.

## Physics Interactions & Landing

The relationship between the entity's `z` and the `z floor` drives physical states and impacts:

1. **State Trigger**: Crossing the z floor triggers state changes between "landed" and "airborne".
2. **Landing Validation**:
   - When an entity contacts the z floor, a check is performed to determine if the floor is passable by the entity (e.g., submarines in water).
   - If not passable, the engine performs a penetration check and then a landing check to verify if the entity can land safely based on its installed components and POVAR magnitudes (e.g., safe descent velocity).
   - If the landing check fails, the entity enters crash mode.
3. **Impact Calculation**: Regardless of the state result (safe landing vs. crash), _every_ negative z floor contact is treated purely mathematically as an impact. An impact magnitude is calculated and interpolated with the state result to derive the final effect on the entity's vectors.

_Examples:_

- A helicopter feather-landing on skids might damp back and forth.
- An airliner hard-landing on rough terrain might break apart.
- A cargo ship pitching down from a rogue wave crest might snap its keel.

These outcomes are composed of a `stateID` array and a numeric value representing the delta of the specific vector/component data updated on the entity via the [[magpie-runtime]].

## Related pages

- [[magpie-runtime]]
- [[]]
- [[magpie-entity-structure]]


