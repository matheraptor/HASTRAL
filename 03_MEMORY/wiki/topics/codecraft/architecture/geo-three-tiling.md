# Geo-Three Tiling & The Data Domain

**Summary**: The data-driven terrain architecture relying on OSM quadtrees, RGB elevation encoding, and fragment shader Hypsometric Tinting instead of mesh geometry.

**Sources**: 7-00_architecture_data-oriented.md

**Last updated**: 2026-04-17

---

The M.A.G.P.I.E. engine's "Data Domain" serves as the interface between the smooth mathematical Marble and high-fidelity terrain data. By abandoning mesh chunks, the system samples a quadtree split into pure data tiles.

## The Ground Clamp Algorithm

When an entity requires its altitude, it acts as a "Data Probe" against OpenStreetMap (OSM) Terrain-RGB tiles. Elevation is pure data decoupled from visual textures, derived from pixel color channels ($C_R, C_G, C_B$) using the formula:

```
Height = -10000 + ((C_R * 256^2 + C_G * 256 + C_B) * 0.1)
```

This query guarantees altitude accuracy without ever colliding with the mathematical Planet Radius ($R$).

## The 85th Parallel Data Void

Because the Web Mercator projection (EPSG:3857) relies on a logarithmic formula that creates a mathematical singularity near the poles, the data domain effectively terminates at **85.0511°** Latitude. To prevent the engine from crashing, queries within these polar "Data Dark Zones" cease OSM sampling and fall back to procedural ice-cap logic.

## Visual Translation: Hypsometric Tinting

Since the physical layer has no 3D terrain geometry, the engine achieves tactical "Atlas-style" clarity via a custom fragment shader. Height data sampled by the Data Probe determines the `gl_FragColor` mapping:

- $h < 0$: Deep Ocean (Blue)
- $h < 500$: Lowlands (Green)
- $h > 2000$: Alpine/Snow (White)

## The Stalk

A visual consequence of a smooth sphere interacting with varying data elevation is that an entity with a high altitude may appear to "float" ambiguously in 2D space above the Marble.

The engine implements **The Stalk**: a vertical line drawn from the entity's [[topics/codecraft/physics/povart-array|POVAR]] position directly down to the sphere's surface. The length of this stalk corresponds precisely to the `Height` from the Ground Clamp algorithm. This provides instant, visually honest altitude readings without generating CPU-expensive 3D terrain meshes.

## Related pages

- [[shelder_doctrine]]
- [[]]
- [[]]
- [[]]



