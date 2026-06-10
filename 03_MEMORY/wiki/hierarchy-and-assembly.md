# Hierarchy and Assembly

**Summary**: Structuring complex entities through self-referential relationships.

**Sources**: 
- [[database.md]]

**Last updated**: 2026-05-06

---

The `MAGPIE_ENTITY` table supports hierarchies using `hostID` and `compoundID` as self-referential foreign keys (source: database.md).

### Structural Relations
- **Hierarchy (`hostID`)**: Defines containment (e.g., a `GasTank` entity as the host for a `LiquidOxygen` entity) (source: database.md).
- **Assembly (`compoundID`)**: Defines a whole composed of parts (e.g., ship modules linked to a root entity) (source: database.md).

### Deletion Rules
- `ON DELETE SET NULL`: Deletion of a parent ship leaves components orphaned.
- `ON DELETE CASCADE`: Deletion of a parent ship destroys all components within it (source: database.md).

## Related pages

- [[]]
- [[]]
- [[]]

