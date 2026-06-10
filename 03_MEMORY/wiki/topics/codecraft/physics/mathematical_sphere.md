# Mathematical Sphere

**Summary**: The "Shelder Method" implementation for planetary bodies, replacing complex 3D geometry with mathematical abstractions and data lookups.

**Sources**: 9-00_physics.md (00_architecture_math-based-data-first, The 85th Parallel: Solving the Polar Data Void, GIS Coordinate Reference Systems, Spherical Coordinates 3D Animation)

**Last updated**: 2026-04-17.

---

## The Shelder Method

The system discards traditional vertex displacement and mesh-based physics in favor of a "Smooth Sphere" model painted with data.

### 1. Geometry ("The Marble")

- The renderer uses exactly one high-resolution Sphere (or spherified cube).
- Radius is fixed; no vertex movement is performed for terrain.
- **Quadtree Logic**: Used only to determine which texture/data tiles to apply to the smooth surface.

### 2. Physics ("The Data Probe")

- Terrain interaction is handled via **Coordinate Lookup** rather than raycasts against meshes.
- **Ground Clamp Algorithm**:
  - Sample Terrain-RGB pixel color at UV coordinates.
  - Convert color to height: $Height = -10000 + ((R \cdot 256^2 + G \cdot 256 + B) \cdot 0.1)$.
- Result: Precise elevation without 3D collision overhead.

### 3. Interaction ("Analytical Intersection")

- Mouse clicks are processed using the **Ray-Sphere Intersection** formula to find the precise (x,y,z) point on the smooth sphere.
- This point is converted to Lat/Lon for data querying.

### 4. Visuals ("Hypsometric Tinting")

- Custom Fragment Shaders use Terrain-RGB data to paint the sphere with color (e.g., blue for ocean, green for plains, white for mountains) based on altitude.
- **The Stalk**: Units are positioned on the smooth sphere surface with a vertical line ("Stalk") extending to their actual altitude, reinforcing the data-driven height visually (source: 00_architecture_math-based-data-first).

## The Polar Data Void (The 85th Parallel)

Web Mercator projections (EPSG:3857) suffer from a mathematical singularity at the poles where the Y-axis shoots to infinity. Standard map tiles typically "chop" the Earth at 85.0511° Latitude to create a perfect square.

- **The Hole at the Pole**: Pilots flying past the 85th parallel enter a "Data Dark Zone" where OSM-based tiles fail.
- **Fallback**: The system switches to procedural "Ice Cap" textures to prevent renderer crashes.

## Spherical Coordinate Systems

- **$\rho$ (Rho)**: Distance from origin (3D radius).
- **$\theta$ (Theta)**: Azimuth angle (X-Y plane rotation).
- **$\phi$ (Phi)**: Polar angle (measured from positive Z-axis).

## Related pages

- [[]]
- [[]]

