# Resource-as-Entity

**Summary**: An optimization strategy treating all resources as standard entities, mapping resource types to entity prototypes and using the `STATS` array to handle dynamic quantities (e.g., mass).

**Sources**: Manual design discussion (2026-05-05)

**Last updated**: 2026-05-05

---

Resource-as-Entity eliminates the need for redundant inventory/resource management systems by treating every resource (e.g., OXYGEN) as a `MAGPIE_ENTITY`.

### Implementation Principles
- **Entity Prototypes**: Each resource type (e.g., OXYGEN) maps to a symbolic prototype containing type-specific data (density, physical properties).
- **Dynamic Stats**: Resource quantity is stored in `STATS[MASSKG]`.
- **Performance**: By treating resources as entities, we leverage existing engine infrastructure (physics, state updates, persistence) and improve cache locality compared to per-part custom entity systems used in other simulators.

## Related pages

- [[]]
- [[topics/research/openclaw/architecture|SQLite3 Architecture]]



