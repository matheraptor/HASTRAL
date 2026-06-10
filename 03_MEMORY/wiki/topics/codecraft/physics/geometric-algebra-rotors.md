# Geometric Algebra Rotors

**Summary**: 3D rotation mechanics using bivectors, sandwich products, and the double cover property.

**Sources**: (source: rotor-quaternion-review.md)

**Last updated**: 2026-05-19.

---

Geometric algebra rotors generalize 3D rotations using four-dimensional space ($\mathbb{H}$). They utilize bivectors—planes of rotation—rather than imaginary numbers to prevent gimbal lock and coordinate distortion.

## Core Principles

- **Sandwich Product**: To rotate a vector $\vec{p}$ via rotor $q$, the formula $q \cdot p \cdot q^{-1}$ must be used to preserve 3D spatial integrity. Single-sided multiplication causes unintended 4D distortion.
- **Double Cover Property**: Every unique 3D orientation maps to two distinct quaternions ($q$ and $-q$). A full $360^\circ$ rotation returns to the visual identity but negates the quaternion coordinates.

## Related pages

- [[topics/codecraft/physics/rotor-roll-snapping|Rotor Roll Snapping]]
