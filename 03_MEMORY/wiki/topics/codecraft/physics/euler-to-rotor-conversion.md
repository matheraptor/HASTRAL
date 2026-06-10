# Euler to Rotor Conversion

**Summary**: Mathematical principles for converting Intrinsic Yaw-Pitch-Roll (Euler angles) into Geometric Algebra rotors, and common implementation traps.

**Sources**: (source: physics_session.md)

**Last updated**: 2026-05-20

---

Converting standard aeronautical inputs (Heading/Yaw, Pitch, Roll) into a Geometric Algebra rotor requires strict adherence to composition sequence and axis handedness. If any part of the sequence fails, the rotations will experience **Cross-Coupling**, where manipulating one axis causes diagonal twisting in the others.

## The Intrinsic Sequence

In a flight simulator or KSP-like environment, rotations must happen around the entity's **own local axes**, not the world's fixed axes.

1. **Yaw (Heading)**: Rotates around the local vertical axis.
2. **Pitch**: Rotates around the *new* local lateral axis (wing-to-wing) created by the Yaw.
3. **Roll**: Rotates around the *new* local longitudinal axis (nose-to-tail) created by the Pitch.

### Mathematical Order of Operations

To achieve an **Intrinsic Yaw-Pitch-Roll** in a quaternion/rotor engine where multiplication applies the rightmost rotor first ($R_{new} = A * B$), the sequence must be written as:

`R_local = R_yaw * R_pitch * R_roll`

This mathematically forces the engine to evaluate Extrinsic Roll → Pitch → Yaw in the global frame, which perfectly mirrors Intrinsic Yaw → Pitch → Roll in the local frame. Stacking them backward (e.g. `(Yaw * Pitch) * Roll` applied incorrectly) results in Gimbal lock or massive cross-coupling.

## Bivector Planes

In the `MAGPIE` physics coordinate system (Right=X, Forward=Y, Up=Z):
- **Pitch**: Rotation around X (the YZ bivector plane).
- **Roll**: Rotation around Y (the XZ bivector plane).
- **Yaw**: Rotation around Z (the XY bivector plane).

## Common Implementation Traps

### 1. Left-Handed vs Right-Handed Math
A core math library must use a unified handedness. If vector generators (like `rotorFromAxisAngle`) use left-handed signs, while vector composition tools (like `rotorApply`) use right-handed math, a positive torque will twist the entity diagonally upon mapping it to the globe.

### 2. The Prime Meridian Trap
When unit-testing 3D math, never test at the absolute origin or exactly on an axis (e.g., `[6371000, 0, 0]`). At the equator on the X-axis, coordinate singularities naturally mask diagonal twisting and sign inversions. The math will appear to "pass" unit tests but will catastrophically fail anywhere else on the globe. Always test orientation mathematics at a random geodetic coordinate (e.g. `[4000000, 4000000, 4000000]`).

## Related pages

- [[topics/codecraft/physics/geometric-algebra-rotors]]
- [[topics/codecraft/physics/local-vs-global-rotor-operations]]