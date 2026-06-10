# Structural Composition

**Summary**: A "LEGO-like" assembly system that allows entities to be composed of other entities (components), creating a permanent structural relationship that contributes to the parent's fitness (deck mechanic).

**Sources**: Manual design discussion (2026-05-05)

**Last updated**: 2026-05-05

---

Structural Composition introduces the `compound` and `component` relationship to the `MAGPIE_ENTITY` structure. This complements existing `host` (container) and `equip` (inventory) mechanisms with a permanent structural bond.

### Architectural Logic
- **`compound`**: The parent entity that hosts components.
- **`component`**: An entity that contributes to the structural fitness of the compound.
- **Fitness Integration**: Unlike `equip`, components contribute their traits directly to the compound's [[deckbuilder-mechanics|fitness deck]]. This allows for additive functional gain through assembly.

### Evolutionary Mechanics
- **Additive**: Default assembly adds component traits to the compound's fitness, potentially causing "deck bloat".
- **Consolidated**: Standardized assemblies allow for trait consolidation into a new, optimized "build" trait, functioning similarly to evolutionary stabilization.

## Related pages

- [[]]
- [[deckbuilder-mechanics]]

