# Geometric Algebra Primer for Rotors

This engine uses Rotors instead of Quaternions for orientation.

## Core Concepts
- **Rotor**: Represents a rotation in 3D space.
- **Sandwich Product**: To rotate vector `v` by rotor `R`, use: `v' = R * v * reverse(R)`.
- **Normalization**: Rotors must be kept unit-length to maintain valid rotations.
- **Implementation**: The `ROTOR` region in `physics.js` handles these operations.
