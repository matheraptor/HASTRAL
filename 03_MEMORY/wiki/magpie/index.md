---
title: MAGPIE_Server Root Index
description: Root index page mapping all MAGPIE_Server topics, bridging the server architecture with the ECS physics system and component pipelines.
tags: [MAGPIE, Server, Index, Core]
---

# MAGPIE_Server Index

Welcome to the **MAGPIE_Server** core architecture documentation. MAGPIE is built on a high-performance, data-oriented ECS (Entity-Component-System) structure running on Node.js.

## Architecture Breakdown

This wiki is segmented into logically decoupled systems to reflect the engine's internal structure:

- **[Server Core](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/server/index.md)**: Network stack, Express initialization, rate limiting, and HTTP routing.
- **[ECS Architecture](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/ECS/index.md)**: The core data-driven game loop, containing:
  - **Systems**: Central managers like HIVE, RUNTIME, DATABASE, PHYSICS, and CALENDAR.
  - **Entity**: The fundamental data objects representing objects, players, and nodes.
  - **Components**: Attachable data structures like POVART, States, and Experience.
- **[Plugins & Dependencies](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/plugins/index.md)**: External modules including socket.io, better-sqlite3, and the scratchpad runner.
- **[Logs & Archives](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/logs/index.md)**: Historical discussion logs, implementation plans, and architectural drafts.

## Coding Standards

MAGPIE relies heavily on optimized native typed arrays, specifically `Float64Array`, for vectors (`POVART`, `STATS`) to ensure absolute memory locality and zero garbage-collection latency during tight physics loops.

JSDoc is extensively used across the codebase. All major methods feature custom `@section` and `@desc` metadata linking to corresponding `.meta` definitions (e.g., `{@link MAGPIE_SERVER.meta}`). Error handling standardizes around structured prefixing wrappers `MAGPIE_SERVER.error(ePrefix + e.message, e);`.