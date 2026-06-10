# L0 Symplectic Physics Loop

**Summary**: The native 10ms execution loop utilizing Symplectic integration to bound energy and prevent outward positional drift.

**Sources**: 4-00_physics_POVART.md

**Last updated**: 2026-04-17

---

The **L0 Symplectic Physics Loop** handles the active integrations for top-layer guests in the M.A.G.P.I.E. runtime. Operating on a native 10ms layer, it applies delta scaling (layer delta / 100) to standard 1-second ticks.

## Integration Steps

The loop avoids standard Euler integration in favor of a Symplectic "Code Flip" (calculating Velocity before Position) to guarantee energy conservation and prevent outward drift.

1. **Step A: Linear Integration**
   - Read Acceleration (`A`) and Velocity (`V`) from the [[]].
   - Update Velocity: `V += A * dt`
   - Update Position: `P.xyz += V * dt` (Raw linear addition requiring no trigonometry).

2. **Step B: Angular Integration (The Rotor Sandwich)**
   - Read Torque (`T`) and Angular Velocity (`R`).
   - Update Angular Velocity: `R += T * dt`.
   - Build Step-Rotor: Extract magnitude of `R` for the step angle ($\alpha$), normalize `R` to extract the pure 2D plane ($\mathbf{B}$). Pack via $\cos(\alpha) + \sin(\alpha)\mathbf{B}$.
   - Apply Geometric Product "Sandwich" ($Rotor * O * Rotor^*$) against the current Orientation (`O`) to apply the spin.

## Performance Constraints

- **Zero Garbage Collection**: The loop never instantiates temporary arrays or objects. All operations read/write directly into `Float64Array` indices via localized `let` variables.
- **Asynchronous Protection**: Wrapped entirely in `try/catch`. If a `NaN` error occurs, the guest is dropped without crashing the host server.

## Related pages

- [[]]
- [[]]
- [[]]

