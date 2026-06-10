---
title: MAGPIE Entity Index
description: Wraps the ECS entity implementations (Entities, Parents/Children/Host, Player).
tags: [MAGPIE, ECS, Entity, Index]
---

# MAGPIE Entities

In the MAGPIE ECS framework, an **Entity** is fundamentally just a unique identifier (ID) and a structural node in the scene graph. It contains no game logic itself; instead, it serves as a container to which data components are attached.

## Core Entity Concepts

- **[MAGPIE_ENTITY](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/entity/magpie-entity.md)**: The foundational class. Handles structural parent/child relationships, host tracking, and spatial orbits.
- **[MAGPIE_PLAYER](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/entity/magpie-player.md)**: A specialized extension of the base entity that acts as an avatar for a connected WebSocket client, handling specialized input buffers and credential validation.