# Geometric Product

**Summary**: The fundamental multiplication operation for vectors in Geometric Algebra, combining the inner (dot) product and the outer (wedge) product to power Rotor-based physics.

**Sources**: 5-01_research_rotors.md

**Last updated**: 2026-04-17

---

The **Geometric Product** is the foundational operation allowing vectors to be multiplied and inverted in a way that represents true geometric operations. In the M.A.G.P.I.E. engine's physics chassis, the geometric product eliminates the need for quaternion arithmetic by directly applying transformations.

## Definition

When multiplying two vectors $\mathbf{a}$ and $\mathbf{b}$, the geometric product (denoted simply as $\mathbf{a}\mathbf{b}$) is defined as the sum of their symmetric and anti-symmetric parts:

$$ \mathbf{a}\mathbf{b} = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \wedge \mathbf{b} $$

- **$\mathbf{a} \cdot \mathbf{b}$**: The inner (dot) product. It is symmetric and captures the cosine of the angle and parallel projection.
- **$\mathbf{a} \wedge \mathbf{b}$**: The outer (wedge) product. It is anti-symmetric, producing a [[topics/codecraft/physics/bivectors|Bivector]] that captures the sine of the angle and the plane formed by the two vectors.

By bundling a scalar (the dot product) and a bivector (the wedge product) together, the geometric product fully describes the spatial relationship between two vectors without data loss, meaning the operation is invertible.

## Application in Rotations

The geometric product makes it possible to express complex geometric operations as simple algebraic formulas.

### The Reflection Formula

Reflecting a vector $\mathbf{v}$ across the plane perpendicular to a unit vector $\mathbf{a}$ simplifies to:

$$ R\_{\mathbf{a}}(\mathbf{v}) = -\mathbf{a}\mathbf{v}\mathbf{a} $$

### Two Reflections = A Rotation

Applying two successive reflections to a vector results in a rotation. If you reflect $\mathbf{v}$ across $\mathbf{a}$ and then across $\mathbf{b}$, the rotation occurs in the plane of $\mathbf{a}$ and $\mathbf{b}$ by _twice_ the angle between them.

Using the geometric product, this successive reflection is written as:

$$ -\mathbf{b}(-\mathbf{a}\mathbf{v}\mathbf{a})\mathbf{b} = \mathbf{b}\mathbf{a}\mathbf{v}\mathbf{a}\mathbf{b} $$

In this formula, the geometric product $\mathbf{a}\mathbf{b}$ acts as the **Rotor**. By multiplying the vector on the left by the inverse rotor ($\mathbf{b}\mathbf{a}$) and on the right by the rotor ($\mathbf{a}\mathbf{b}$), the engine achieves a complete rotational transformation—the "Sandwich Product".

## Related pages

- [[]]
- [[]]
- [[]]


