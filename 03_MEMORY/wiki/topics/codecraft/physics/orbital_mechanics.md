# Orbital Mechanics

**Summary**: Mathematical foundations for celestial motion, transfer windows, and orbital stability within the HASTRAL system.

**Sources**: 9-00_physics.md, 7-00_architecture_data-oriented.md

**Last updated**: 2026-04-17.

---

## Core Concepts

### Keplerian Elements

The system uses standard Keplerian elements to define orbits on a deterministic "rail" system. This allows for position calculation at any time $t$ without simulation history.

- **r (lower case)**: The dynamic Position Vector or distance of the orbiting body from the focal point. Changes every millisecond (source: 9-00_physics.md).
- **R (Upper Case)**: The Physical Constant representing the solid sphere's radius (e.g., $R_E$ for Earth). This is the "Hard Deck."
- **$\rho$ (Rho)**: The "Sensor Reading" representing the radial distance from the origin in a Spherical Coordinate System, used for ray-sphere intersection and texture mapping.

### Phase Angles

The system distinguishes between two types of angular difference:

1. **Orbital Phase Angle (KSP style)**: The angle between two planets relative to the Sun, used for Hohmann Transfer calculations ($\phi = \nu_{target} - \nu_{origin}$).
2. **1D Visibility Check**: The angle between the eye (camera direction) and the planet relative to the observer's position. Used for frustum culling ($\Delta \theta = | \theta_{target} - \theta_{look\_vector} |$).

### 3-Tier Cascading LOD System for Celestial Mechanics

Celestial bodies move on deterministic "rails" ($P = f(t)$). To optimize the browser's execution loop, simulation (Time) is separated from representation (Position) via three cascading tiers:

1. **Tier 1 (The Gatekeeper)**: Context-based relevance check. If distant/irrelevant to the current active focus, skip all calculations.
2. **Tier 2 (The Clock)**: 1D "Clock Face" check based on Mean Anomaly ($M$) and Mean Longitude ($L$). Comparing two scalar values (Time vs Time) aborts calculations if the angular difference to the camera's look-at vector is > 90°.
3. **Tier 3 (The Solver)**: Executes only if Tiers 1 and 2 pass. Runs the expensive Newton-Raphson iteration to solve Kepler's Equation and generate Cartesian coordinates.

### Orbital Decay

Orbital decay is handled as a "Maintenance Schedule" (background job) rather than a per-frame physics simulation.

- **Threshold (The Filter)**: Periapsis $r_p = a(1-e)$ is monitored. If it falls below $R + AtmosphereHeight$, the decay logic "wakes up".
- **Analytic Approximation**: Decay rate ($da/dt$) is used to calculate energy loss analytically over time blocks ($\Delta t$).
- **Dynamic Tick Buckets**:
  - **Stable**: (Sun, Planets) Never updated.
  - **Slow**: (High Orbits) Checked Monthly.
  - **Fast**: (Low Orbit Debris) Checked Daily/Hourly.
- **The Handover**: When an orbit's decay becomes critical (entering the lower atmosphere), a high-fidelity handover occurs. The static Orbit component is stripped, and a POVAR component is attached. The initial POVAR velocity vector is derived from the final orbital state, allowing seamless transition from mathematical "rails" to active re-entry physics.

### Great Circle Navigation

Calculating distance and initial course between two points on a sphere involves converting Lat/Lon to decimal degrees and calculating the difference in longitudes ($\Delta Lo$).

## Related pages

- [[]]
- [[]]
- [[../../../3-00-architecture-components]]

