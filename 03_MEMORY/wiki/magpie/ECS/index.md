---
title: MAGPIE ECS Root Index
description: Main root index for the ECS implementation, pointing to Systems, Entities, and Components.
tags: [MAGPIE, ECS, Index, Architecture]
---

# ECS Implementation

The MAGPIE engine is built on a custom Entity-Component-System (ECS) architecture. This decoupled, data-driven approach allows for high-performance processing of thousands of entities on the backend.

## ECS Hierarchy

The implementation is broken down into three core directories:

- **[Systems](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/systems/index.md)**: The logic processors. Systems iterate over entities that possess specific components and execute the game loop. Includes the central `HIVE`, the `PHYSICS` engine, and the `RUNTIME`.
- **[Entity](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/entity/index.md)**: The unique identifiers and hierarchical node objects. Entities possess no intrinsic logic; they act as containers for components.
- **[Components](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/components/index.md)**: The raw data structures attached to entities. In MAGPIE, critical components like `POVART` utilize contiguous memory `Float64Array` buffers for zero-overhead calculations.