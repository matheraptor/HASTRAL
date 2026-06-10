---
title: MAGPIE Components Index
description: Wraps the data structures, components, states, and event payloads.
tags: [MAGPIE, ECS, Component, Index]
---

# MAGPIE Components

In the MAGPIE ECS framework, **Components** are pure data structures attached to Entities. They define the properties and current state of the entity without containing any mutation logic themselves.

## Core Component Types

- **[MAGPIE_COMPONENT](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/components/magpie-component.md)**: The abstract base definition for data blocks.
- **[POVART](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/components/magpie-povart.md)**: The `Float64Array` physics component holding spatial data (Position, Orientation, Velocity, Acceleration, Rotation, Torque).
- **[MAGPIE_STATE](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/components/magpie-state.md)**: Represents ongoing buffs, debuffs, or behavioral statuses applied to an entity.
- **[MAGPIE_EXP](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/components/magpie-exp.md)**: "Experience" payloads representing transient events or state-transition requests.
- **[MAGPIE_EMOTE](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/components/magpie-emote.md)**: Specifically formulated payloads handling card activations and visual/social expressions.