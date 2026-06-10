# Physics API Reference

**Summary**: API specification for key public methods in the physics engine.

**Sources**: 
- physics_api_ref.md

**Last updated**: 2026-05-18

---

## Key Public Methods
- `applyAcceleration(dt)`: Updates velocity based on current acceleration.
- `rotorSlerp(R1, R2, t)`: Spherical linear interpolation between two rotors.
- `getBrakingA(mass, drag)`: Calculates acceleration required to stop the entity.
- `update(dt)`: Performs a full physics integration step.

## Related pages

- [[physics-core]]
