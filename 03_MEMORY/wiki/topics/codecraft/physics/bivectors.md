# Bivectors

**Summary**: A geometric entity representing a 2D plane or directed area, constructed via the Outer Product, which replaces the traditional Cross Product in the M.A.G.P.I.E. engine.

**Sources**: 5-01_research_rotors.md

**Last updated**: 2026-04-17

---

In Geometric Algebra, a **Bivector** is a fundamental element that represents a 2D plane, just as a vector represents a 1D line. Bivectors are used to replace the traditional Cross Product, directly capturing the concept of rotation inside a plane rather than around an arbitrary normal axis.

## The Outer Product (Wedge Product)

A bivector $\mathbf{B}$ is constructed by taking the outer product (also called the exterior or wedge product) of two vectors $\mathbf{a}$ and $\mathbf{b}$:

$$ \mathbf{B} = \mathbf{a} \wedge \mathbf{b} $$

- The result represents the parallelogram formed by the two vectors inside their shared plane.
- The magnitude of $\mathbf{B}$ is proportional to the area of this parallelogram (i.e., the lengths of the vectors and the sine of the angle between them).
- The outer product is anti-symmetric: $\mathbf{a} \wedge \mathbf{b} = -\mathbf{b} \wedge \mathbf{a}$. Swapping the order flips the "sense" (or sign) of the rotation, dictating whether the rotation is clockwise or counterclockwise.
- Parallel vectors form no plane, so $\mathbf{a} \wedge \mathbf{a} = 0$.

## 3D Basis Bivectors

A 3D bivector has three components, representing its projections onto the three orthogonal basis planes (just as a vector projects onto the X, Y, and Z axes). These three planes map directly to the rotational tracking within the [[]]:

- **Byz** ($y \wedge z$): The roll plane.
- **Bxz** ($x \wedge z$): The pitch plane.
- **Bxy** ($x \wedge y$): The flat yaw or "floor" plane.

This directly mirrors the three components returned by a traditional 3D cross product, but conceptually anchors the math in 2D planes instead of imaginary orthogonal vectors.

## Semantic Safety

Treating orientations as bivectors prevents "type-casting" errors. In classical physics, normal vectors (axial vectors) transform differently than regular vectors (requiring an inverse transpose matrix). By recognizing these elements natively as bivectors, the math remains semantically pure and easily maps to the [[]] for angular integration.

## Related pages

- [[]]
- [[]]
- [[]]

