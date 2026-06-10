# Geometric Algebra Primer

**Summary**: Conceptual explanation of rotor composition, sandwich products, and normalization.

**Sources**: 
- physics_ga_primer.md

**Last updated**: 2026-05-18

---

This engine uses Rotors instead of Quaternions for orientation (source: physics_ga_primer.md).

## Core Concepts
- **Rotor**: Represents a rotation in 3D space.
- **Sandwich Product**: To rotate vector `v` by rotor `R`, use: `v' = R * v * reverse(R)`.
- **Normalization**: Rotors must be kept unit-length to maintain valid rotations.

## Numerical Stability

Numerical instability in rotor operations occurs when rotors drift from unit-length due to floating-point errors, resulting in unintended scaling.

- **Normalization Consistency**: All rotor mutations (composition, integration) must be followed by `rotorNormalize` to maintain a magnitude of 1.0.
- **Antiparallel Vectors**: In `rotorFromVectors`, input vectors that are nearly antiparallel (dot ≈ -1) can cause unstable "flipping." Ensure the implementation handles this edge case by picking a stable perpendicular rotation axis.

## Related pages

- [[physics-core]]
