# Vector Topography

**Summary**: Artistic execution and data setup techniques for drafting realistic landforms within a vector graphics editor.

**Sources**: 8-08_skill_artifexianWorldbuilder.md

**Last updated**: 2026-04-17

---

The final phase of the [[topics/codecraft/worldbuilding/artifexian_method|Artifexian Method]] is Artistic Execution, where geological principles and calculated elevations are drawn in a vector editor (e.g., Adobe Illustrator, Inkscape).

## Data Export Constraint: Rectangular Projection

When exporting the tectonic blueprint from GPlates, the export setting must be set to **Rectangular Projection**. This is a non-negotiable requirement to accurately move data between GPlates and a vector editor, controlling projection distortion. The output format should be a high-resolution SVG.

## Layer Hierarchy

To manage complex topographic geometry, the vector project must use a clean four-layer hierarchy:

1. **Base**: Imported coastlines and ocean crust data.
2. **Topo**: The primary working layer for drawing new topography shapes.
3. **Guides**: GPlates layers (orogenies, LIPs, plate boundaries) set to 50% opacity to act as faint visual references.
4. **Color Ramp**: The elevation palette, which follows the principle of diminishing detail (more color steps at lower elevations, fewer at high altitudes).

## Drafting Techniques

The core process involves selecting a low-elevation color, drawing base shapes with a Pencil Tool, and continuously merging them (e.g., Pathfinder > Unite) for performance.

### Advanced Detailing

- **Sharp Cliffs**: Created using the **Offset Path** method. A shape is duplicated, assigned a higher elevation color, and contracted using a negative offset path to create a steep, nested rise.
- **Natural Variation**: The **Roughen filter** (set to Absolute with low Size/Detail) is applied to offset paths to break up artificial smoothness and introduce organic, jagged imperfections.
- **Drainage and Valleys**: Realistic mountains are shaped by water drainage in a dendritic "tree shape". Lower elevation layers are drawn extending outward from highest peaks to form natural collection valleys.
- **Weaponizing Fold-and-Thrust Belts**: Drawing small, sinewy, "S-shaped" ridgelines extending from main plateaus smoothly blends high altitudes into lower terrain.

## Related pages

- [[]]
- [[]]
- [[topics/codecraft/architecture/geo-three-tiling|Geo-Three Tiling]]


