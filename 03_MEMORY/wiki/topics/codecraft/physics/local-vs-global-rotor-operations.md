---
name: local-vs-global-rotor-operations
description: Authoritative doctrine for Geometric Algebra rotor multiplication order.
type: reference
---

# Local vs. Global Rotor Operation Doctrine

**Summary**: Defines the strict mathematical rules for rotor multiplication to prevent coordinate system corruption.

**Sources**: (source: geometric-algebra-rotors.md), (source: rotor-quaternion-review.md)

**Last updated**: 2026-05-19

---

## The Golden Rule

The composition order of rotors determines the coordinate frame of the resulting rotation:

*   **Local Space (Body-Relative)**: Always **Right-Side** multiply. 
    `newRotor = currentRotor * deltaRotor`
    *Use for*: Steering (yaw), wave-induced rocking (pitch/roll), and snapping orientations along local axes.
*   **Global Space (World-Relative)**: Always **Left-Side** multiply.
    `newRotor = deltaRotor * currentRotor`
    *Use for*: Earth curvature adjustments as the entity moves across the globe, aligning local frames to global spherical geometry.

## Why This Matters

*   **Preservation**: Local operations must not cross-contaminate existing orientation data (e.g., steering should not alter pitch). Right-side multiplication achieves this isolation.
*   **Consistency**: Left-side multiplication forces a rotation around the global world grid. If applied locally, this causes catastrophic "corkscrew" twisting, especially when entities are at latitudes far from the global pole.

## Related pages

- [[topics/codecraft/physics/geometric-algebra-rotors]]
- [[topics/codecraft/physics/rotor-roll-snapping]]
