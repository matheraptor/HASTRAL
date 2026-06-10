# ecs-preset-design

**Summary**: An architectural design pattern for initializing entities using a component-based ECS system while maintaining V8 monomorphism for high-performance physics loops.

**Sources**: (source: ECS_Preset_Design.md)

**Last updated**: 2026-04-20

---

This design pattern facilitates the migration of entity initialization (specifically `MAGPIE_ENTITY`) from subtype-specific prototypes to a flexible, component-based Entity Component System (ECS).

## Core Constraint: V8 Monomorphism

To maintain high performance in physics refresh loops, entity instances must maintain a consistent V8 "hidden class." This requires:

- **Consistent Prototype Structure**: All component properties (states, traits, inventory, etc.) must exist on the prototype.
- **Null-Value Initialization**: Components disabled by a preset must be initialized to a consistent empty or null value (e.g., `[]`, `new Map()`, `null`) rather than `undefined`. This ensures that all entity instances, regardless of type, share an identical memory layout.

## Implementation Workflow

1. **Preset Mapping**: Map `ENTITY.TYPE` to a specific Component Preset Configuration.
2. **Setup Refactoring**: Modify `ENTITY.setup()` to retrieve the preset and conditionally initialize component values based on the mapping.
3. **Hot-path Protection**: Ensure performance-critical methods (e.g., `processStates()`) use existing size or length checks to skip disabled components without causing de-optimizations.

## Related pages

- [[]]
- [[zero-garbage-collection]]
- [[topics/codecraft/architecture/index|Architecture]]

