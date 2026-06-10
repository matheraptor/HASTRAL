# Rotor Roll Snapping

**Summary**: Methods for isolating and snapping roll angles relative to local coordinate axes.

**Sources**: (source: rotor-quaternion-review.md)

**Last updated**: 2026-05-19.

---

Roll snapping isolates the roll bivector plane to adjust orientation without disturbing pitch or yaw. In a Z-Up, Y-Forward coordinate system, roll is controlled by the $XZ$ bivector plane.

## Implementation

1. **Decompose**: Strip out existing roll component.
2. **Isolate**: Maintain pure pitch/yaw base components.
3. **Recompose**: Apply target roll via right-side local rotor multiplication to preserve existing orientation.

## Related pages

- [[topics/codecraft/physics/geometric-algebra-rotors|Geometric Algebra Rotors]]
