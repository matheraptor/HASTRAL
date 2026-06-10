# ECS Resource System

**Summary**: An architectural approach treating resources as entities within an ECS (Entity-Component-System) structure rather than abstract amounts.

**Sources**:

- [[database.md]]

**Last updated**: 2026-05-06

---

By treating raw resources as entities rather than abstract values in a lookup table, we gain significant architectural flexibility (source: database.md).

## Benefits

- **Granularity**: Allows unique properties for individual resource "units" (e.g., contaminated vs. pure oxygen) (source: database.md).
- **Uniform Systems**: Resources interact with physics, cargo, and trading systems without special cases (source: database.md).
- **Nested Logic**: Resources can track their own state (e.g., temperature, pressure) and trigger behaviors (e.g., boil-off) (source: database.md).

### Challenges

- **Granularity Trap**: Large ships with many resource units can cause CPU overhead if not managed carefully.
- **Middle Ground**: Treat entities as "stacks" (total volume in a container) rather than individual units to balance performance and simulation depth (source: database.md).

## Related pages

- [[database-schema|Database Schema]]
