00_architecture_data-oriented
Technical Guide: Implementing the Mathematical Sphere and Celestial Data Realm

1. The Shelder Method: A Data-First Architectural Philosophy
   The "Shelder Method" represents a strategic refactor of celestial simulation, necessitated by the restrictive performance ceilings of WebGL and browser-based environments. Traditional industry standards—relying on fragmented 3D meshes, vertex displacement, and CPU-intensive physics raycasts—frequently succumb to floating-point jitter and significant performance bottlenecks at planetary scales. The Shelder Method abandons these "Game Object" anti-patterns in favor of an honest, mathematical source-of-truth. By rendering a singular, geometrically perfect "Marble" and treating terrain as a decoupled data-query layer, we preserve the FLOP budget for high-frequency entity logic rather than wasteful mesh generation.
   Feature
   Industry Standard (Mesh-Based)
   Shelder Method (Data-Oriented)
   Geometry
   Fragmented terrain chunks, vertex displacement
   Single, high-resolution "Marble" (smooth sphere)
   Physics
   Raycasts against 3D mesh colliders
   Analytical coordinate lookups from data arrays
   Efficiency
   High CPU/GPU cost for mesh generation/collision
   Low overhead; utilizes GPU fragment shaders and math
   Simulation Honesty
   Subject to mesh resolution limits and jitter
   Deterministic; mathematical precision at all scales
   Scalability
   Limited by vertex counts and memory
   Theoretically infinite via sparse data encoding
   This paradigm shift relies on three architectural pillars: The Marble (Geometry), The Data Probe (Physics), and The Stalk (Visual Positioning).
2. The Geometry of the "Marble": Spherical Coordinate Systems
   In this architecture, we render exactly one object per celestial body: a high-resolution smooth sphere (or spherified cube) located at the origin (0,0,0). This "Marble" serves as the geometric anchor, ensuring that the visual representation never drifts from the mathematical reality. We define the following distinctions for our coordinate system:
   r (Lower Case): The Position Vector. This represents the dynamic distance of an orbiting body from the focal point (e.g., Sun to Planet).
   R (Upper Case): The Physical Constant Radius. The immutable "hard deck" of the planetary sphere (e.g., R\_{\oplus}).
   \rho (Rho): The Sensor Reading. The radial distance from the origin to a specific coordinate on the grid used for surface calculations.
   Analytical Intersection Logic
   To eliminate the need for expensive mesh colliders, user interactions (like mouse clicks or sensor locks) are resolved via the Ray-Sphere Intersection formula. Given a camera position and a mouse direction (the Ray), we solve the quadratic equation to find the intersection with a sphere of radius R. This yields a precise (x, y, z) coordinate on the smooth surface, which is then converted into Latitude and Longitude. This approach turns the mouse cursor into a high-precision sensor, querying the "Data Domain" without a single physics broad-phase check.
3. Celestial Mechanics: Keplerian Orbits and 3-Tier LOD Systems
   Celestial bodies move on deterministic "rails" where position is a function of time: P = f(t). To optimize the browser's execution loop, we implement a 3-Tier Cascading Culling system that separates simulation (Time) from representation (Position):
   Tier 1 (The Gatekeeper): A context-based relevance check. If the active context is a local moon landing, the system immediately returns false for distant planets like Pluto, skipping all calculations.
   Tier 2 (The Clock): A 1D "Clock Face" check. We update the Mean Anomaly (M)—a cheap linear calculation—and derive the Mean Longitude (L = M + \varpi). If the absolute angular difference between the body's longitude and the camera's look-at vector exceeds 90^\circ, the system aborts. Comparing two scalar numbers (Time vs. Time) is significantly cheaper than vector dot products.
   Tier 3 (The Solver): Only if Tiers 1 and 2 pass, the system executes the expensive Newton-Raphson iteration to solve Kepler’s Equation (M \to E) and generates 3D Cartesian coordinates for the visual state.
4. POVAR Physics: Data Structures for Active Entities
   For non-deterministic entities (ships, projectiles, debris), we utilize an Entity Component System (ECS) mindset. We separate "Hot" telemetry data from "Cold" physical specifications to maximize cache efficiency.
   Property Type
   Component
   Data Fields
   Characteristics
   Hot Data
   POVAR
   P (Position), O (Orientation), V (Velocity), A (Acceleration)
   Updated every frame; high memory throughput.
   Cold Data
   Body Specs
   Mass, Density, Radius (R)
   Immutable; rarely accessed during integration.
   To prevent Gimbal Lock during complex 3D maneuvers, the Orientation (O) is stored strictly as a Quaternion. Active entities are moved using Symplectic Integration (Velocity-Verlet) to maintain energy conservation, whereas Keplerian bodies remain on their deterministic analytical "rails."
5. The Data Domain: Geo-Three Tiling and OSM Integration
   The "Data Probe" acts as the interface between the smooth Marble and the high-fidelity terrain data. We leverage quadtree logic to sample a world split into data tiles rather than rendering chunks.
   The Ground Clamp Algorithm
   When an entity requires its altitude, the system identifies the relevant Terrain-RGB tile from the OpenStreetMap (OSM) quadtree. Elevation is queried as Pure Data (attributes) independently of the visual texture. The height is derived from the pixel color channels (C_R, C_G, C_B) to avoid collision with the Planet Radius (R): Height = -10000 + ((C_R \cdot 256^2 + C_G \cdot 256 + C_B) \cdot 0.1)
   The 85th Parallel Data Void
   Web Mercator projection (EPSG:3857) uses the formula y = \ln(\tan(\pi/4 + \phi/2)), which contains a mathematical singularity as latitude \phi approaches 90^\circ. To maintain a 1:1 square aspect ratio, the data domain terminates at 85.0511°. These "Data Dark Zones" are handled by a fallback system that ceases OSM queries and switches to procedural ice-cap logic, ensuring the renderer does not crash at the poles.
6. Visual Translation: Hypsometric Tinting and "The Stalk"
   Because the physical geometry is a smooth sphere, the visual layer must provide tactical "Atlas-style" clarity. We use a custom fragment shader for Hypsometric Tinting, painting the Marble based on the height data sampled by the Data Probe.
   // Fragment Shader: Hypsometric Tinting
   float h = get_height_from_data(uv);
   if (h < 0.0) {
   gl_FragColor = vec4(0.0, 0.2, 0.6, 1.0); // Deep Ocean
   } else if (h < 500.0) {
   gl_FragColor = vec4(0.1, 0.5, 0.1, 1.0); // Lowlands
   } else if (h > 2000.0) {
   gl_FragColor = vec4(0.9, 0.9, 0.9, 1.0); // Alpine/Snow
   }
   The Stalk
   To resolve the visual disconnect of an entity floating above the smooth Marble, we implement The Stalk. This is a vertical line drawn from the entity's POVAR position down to the sphere's surface. The length of the stalk is exactly equal to the Height derived from the Ground Clamp algorithm, providing immediate visual honesty regarding altitude without requiring 3D terrain geometry.
7. System Maintenance: Orbital Decay and Atmospheric Drag
   Orbital maintenance is managed as a background "Maintenance Schedule" rather than a real-time simulation.
   The Filter: The system monitors the Periapsis (r_p = a(1 - e)). If r_p < R + AtmosphereHeight, the decay logic "wakes up."
   The Approximation: The system calculates the Decay Rate (da/dt) and applies energy loss analytically over a block of time (\Delta t).
   Dynamic Tick Buckets:
   Stable: (Sun, Planets) Never updated.
   Slow: (High Orbits) Checked Monthly.
   Fast: (Low Orbit Debris) Checked Daily/Hourly.
   The Handover
   When an orbit's decay becomes critical (r_p enters the lower atmosphere), the system performs a high-fidelity handover. The static Orbit component is stripped and a POVAR component is attached. The initial velocity vector for this POVAR entity is derived directly from its final orbital state, ensuring a seamless transition from mathematical "rails" to active re-entry physics. This tiered approach represents the lightest, most honest implementation possible for a high-fidelity celestial simulation.
