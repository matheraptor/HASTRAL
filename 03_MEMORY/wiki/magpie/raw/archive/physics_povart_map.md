# Physics State Mapping (POVART)

The `POVART` state in `physics.js` is stored in a `Float64Array` for performance.
Mapping:
- `P_X`, `P_Y`, `P_Z`: Position indices [0, 1, 2]
- `O_X`, `O_Y`, `O_Z`, `O_W`: Orientation (Rotor) indices [3, 4, 5, 6]
- `V_X`, `V_Y`, `V_Z`: Velocity indices [7, 8, 9]
- `A_X`, `A_Y`, `A_Z`: Acceleration indices [10, 11, 12]
- `R_X`, `R_Y`, `R_Z`: Angular Velocity (Rotation) indices [13, 14, 15]
- `T_X`, `T_Y`, `T_Z`: Torque indices [16, 17, 18]
