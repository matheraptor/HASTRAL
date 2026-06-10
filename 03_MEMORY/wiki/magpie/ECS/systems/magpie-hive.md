---
title: MAGPIE_HIVE
description: The ECS registry and entity manager.
tags: [MAGPIE, ECS, Systems, Registry, HIVE]
---

# MAGPIE_HIVE

`MAGPIE_HIVE` is the central nervous system of the ECS architecture. It acts as the primary registry and lifecycle manager for all entities operating within the game world.

## Responsibilities

- **Entity Allocation**: Responsible for spawning new `MAGPIE_ENTITY` instances and assigning them unique, temporally-sorted identifiers.
- **Component Registry**: Tracks which entities possess which components, allowing other systems to quickly iterate over applicable entity subsets.
- **Garbage Collection**: Handles the destruction and cleanup of entities, ensuring that their associated `Float64Array` buffers are zeroed out or reclaimed to prevent memory leaks.
- **Hierarchical Queries**: Manages the fast-lookup mappings for parent, child, and host relationships between entities.