# Physics POVART Mapping

**Summary**: Detailed mapping of POVART Float64Array indices vs. physical entities.

**Sources**:

- physics_state_map.md

**Last updated**: 2026-05-18

---

The `POVART` state in `physics.js` is stored in a `Float64Array` for performance.

| Index Range | Physical Entity |
| :--- | :--- |
| 0-2 | Position (`P_X`, `P_Y`, `P_Z`) |
| 3-6 | Orientation (`O_X`, `O_Y`, `O_Z`, `O_W`) |
| 7-9 | Velocity (`V_X`, `V_Y`, `V_Z`) |
| 10-12 | Acceleration (`A_X`, `A_Y`, `A_Z`) |
| 13-15 | Angular Velocity (`R_X`, `R_Y`, `R_Z`) |
| 16-18 | Torque (`T_X`, `T_Y`, `T_Z`) |

## Related pages

- [[physics-core]]
