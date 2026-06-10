---
name: Geometric Algebra & Rotors
description: The mathematical foundation for orientation and rotation in the MAGPIE engine, using BAVAB Geometric Algebra (Rotors) instead of Quaternions.
tags: [Math, Physics, Rotors, GA, POVART]
---

# Geometric Algebra & Rotors

MAGPIE uses **Geometric Algebra (GA)** to handle rotations. Specifically, we use **Rotors** (bivectors) rather than traditional Quaternions or Euler angles. This decision ensures absolute numerical stability, avoids gimbal lock, and provides a more intuitive mathematical framework for high-dimensional physics.

## Why Rotors?

While Quaternions are functionally equivalent to 3D rotors, they are often treated as "black boxes." Rotors are derived directly from the geometric properties of space:

1. **No Gimbal Lock**: Rotations are defined in planes (bivectors), not around axes.
2. **Intuitive Hierarchies**: Composing rotations is a simple geometric product.
3. **Efficiency**: Rotors handle 3D and 4D rotations with the same underlying algebra.

## The BAVAB Convention

In MAGPIE, a rotor $R$ is represented by 4 components: 3 bivector components (representing the planes of rotation) and 1 scalar component.

| Component | Bivector Basis   | Quaternion Equivalent | POVART Index |
|-----------|------------------|-----------------------|--------------|
| `B_yz`    | $e_2 \wedge e_3$ | $i$                   | 4 (or 14/17) |
| `B_xz`    | $e_1 \wedge e_3$ | $j$                   | 5 (or 15/18) |
| `B_xy`    | $e_1 \wedge e_2$ | $k$                   | 6 (or 16/19) |
| `scalar`  | $1$              | $w$                   | 7 (or 20)    |

## Operations

### The Sandwich Product

To rotate a vector $v$ by a rotor $R$, we use the sandwich product:
$$v' = R v R^\sim$$
where $R^\sim$ is the **reverse** of the rotor.

### Composition

To apply rotation $R_1$ followed by $R_2$:
$$R_{total} = R_2 R_1$$
*(Note: MAGPIE's `rotorCompose(R1, R2)` follows this standard geometric product).*

## Implementation in `MAGPIE_PHYSICS.js`

All rotor logic is encapsulated in static methods:

- `rotorNormalize(R)`: Ensures the rotor remains a unit rotor ($|R| = 1$) to prevent numerical drift.
- `rotorCompose(R1, R2)`: Combines two rotations.
- `rotorApply(R, v)`: Rotates a 3D vector.
- `rotorFromVectors(a, b)`: Generates a rotor that rotates vector $a$ to align with vector $b$.

> [!TIP]
> For the underlying theory, refer to Marc ten Bosch's article on [Geometric Algebra](file:///C:/Users/Marika/MAGPIE_Server/docs/rotors.md).
