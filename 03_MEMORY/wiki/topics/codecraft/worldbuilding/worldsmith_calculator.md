# The Worldsmith Calculator

**Summary**: A scientific calculation framework used to derive plausible mountain elevations from tectonic history and planetary physics parameters.

**Sources**: 8-08_skill_artifexianWorldbuilder.md

**Last updated**: 2026-04-17

---

The Worldsmith spreadsheet serves as the analytical engine of the [[topics/codecraft/worldbuilding/artifexian_method|Artifexian Method]]. It translates the world's geological history and core physical parameters into concrete elevation data, guiding the subsequent artistic topography rendering.

## Core Mechanics

### Gravity Scaling Factor

The spreadsheet uses a core "Scaling Factor" defined as $1/G^x$, where:

- $G$ is the planet's surface gravity.
- $x$ is a user-defined exponent between $1.0$ and $2.0$.

It is strongly recommended to keep $x$ close to $2.0$ to align with established physical principles (e.g., Kohler's Rule). This formula adapts Earth-based geological models to worlds with different physical laws, determining the "Max Peak Height" an environment can structurally support.

### Active Mountain Ranges

For active ranges (e.g., Andean orogenies), the calculator takes numerical inputs for specific cross-sectional parts (Outer Arc Ridge, Forearc Basin, etc.) and scales them appropriately.

### Inactive Mountain Ranges and Erosion

For inactive ranges (e.g., Laramide orogenies), the initial height is calculated as if it were active, and then an erosion rate is applied.

- **Global Erosion Rate**: Typically averages between 4 to 5 meters per million years.
- The spreadsheet subtracts this erosion from the initial height based on the mountain's age.

## Special Cases and Artistic Overrides

While the calculator provides a strong scientific baseline, worldbuilding often requires artistic judgment:

- **Large Igneous Provinces (LIPs)**: Modeled similarly to the plateau portion of an Andean orogeny, calculating initial height and then applying erosion.
- **Ancient, Eroded Ranges**: If an extremely old range erodes to zero height mathematically, the artist can invoke geological concepts like **isostatic rebound** (uplift caused by the removal of the mountain's immense weight). This justifies drawing a series of small, varied peaks instead of a flat plain.

## Related pages

- [[]]
- [[]]
- [[topics/codecraft/physics/mathematical_sphere|Mathematical Sphere]]


