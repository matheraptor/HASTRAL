---
title: MAGPIE Systems Index
description: Wraps the MAGPIE core systems (HIVE, RUNTIME, DATABASE, PHYSICS, CALENDAR).
tags: [MAGPIE, ECS, Systems, Index]
---

# MAGPIE Systems

Systems in MAGPIE contain all the active logic, math, and mutation handling for the engine. They operate on Entities by reading and writing to their attached Components.

## Core Systems

- **[MAGPIE_HIVE](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/systems/magpie-hive.md)**: The central ECS registry and global entity manager.
- **[MAGPIE_RUNTIME](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/systems/magpie-runtime.md)**: The execution flow controller, responsible for the heartbeat and game loop tick.
- **[MAGPIE_PHYSICS](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/systems/magpie-physics.md)**: The mathematical engine handling Cartesian/Geodetic conversions, gravity, and aerodynamic forces.
- **[MAGPIE_DATABASE](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/systems/magpie-database.md)**: The persistence system running on worker threads.
- **[MAGPIE_METASTATE](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/systems/magpie-metastate.md)**: Manages time-sync synchronization (`TICK`, `TICK_super`).
- **[MAGPIE_CALENDAR & DATE](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/systems/magpie-calendar-date.md)**: In-engine timekeeping systems.
- **[MAGPIE_Intelligence](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/systems/magpie-intelligence.md)**: NPC and automated logic controller.
- **[MAGPIE_KEY](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/systems/magpie-key.md)**: The enumerator and constant registry.