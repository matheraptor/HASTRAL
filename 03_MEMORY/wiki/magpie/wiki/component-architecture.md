# Component Architecture

**Status**: Active
**Last Updated**: 2026-06-02

## Overview
The MAGPIE component system is designed as a **Service Locator** pattern. Instead of instantiating unique component objects for every entity, components act as centralized logic containers (Flyweights).

## Implementation Strategy: Static Methods
To ensure a solid, scalable architecture, components are implemented using **Static Methods** rather than instance-based logic or simple configuration maps.

### Rationale
- **Namespace Isolation**: Each component (e.g., `Engine`, `Tank`, `Armament`) has its own dedicated class, grouping all related logic into a cohesive unit.
- **Avoidance of "God Object"**: Prevents the core engine from becoming a massive switch-case or a flat list of disconnected callbacks.
- **Performance**: Eliminates the overhead of instantiating thousands of identical component objects.
- **Developer Experience**: Provides strong IDE intellisense and a clear API for entities to interact with components.

### Interaction Flow
When an entity needs to utilize a component:
1. The entity retrieves the component class via the `INDEX` map.
2. The entity calls the required static method, passing itself (and any necessary arguments) as a parameter.

**Example Pattern:**
`ComponentIndex.get(ID).update(entity, dt);`

---
*Refer to `core/component.js` for the technical implementation.*
