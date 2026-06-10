# Physics Engine API Reference

## Key Public Methods
- `applyAcceleration(dt)`: Updates velocity based on current acceleration.
- `rotorSlerp(R1, R2, t)`: Spherical linear interpolation between two rotors.
- `getBrakingA(mass, drag)`: Calculates acceleration required to stop the entity.
- `update(dt)`: Performs a full physics integration step.
