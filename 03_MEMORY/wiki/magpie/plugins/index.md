---
title: MAGPIE Plugins & Dependencies Index
description: Wraps external dependencies and modules.
tags: [MAGPIE, Plugins, Dependencies, Index]
---

# MAGPIE Plugins & Dependencies

While MAGPIE relies on a custom ECS architecture, it integrates several external dependencies and internal plugins to handle complex I/O and runtime operations.

## External Modules
- **[Socket.io](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/plugins/socket-io.md)**: Manages real-time bidirectional WebSocket communication.
- **[Better-SQLite3](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/plugins/better-sqlite3.md)**: High-performance synchronous SQLite wrapper, offloaded to worker threads.
- **JSONWebToken (JWT)**: Handles stateless session authentication without database dips.
- **Express / Express-Rate-Limit**: Handles initial HTTP handshakes, API endpoints, and DDOS mitigation.

## Internal Plugins
- **[Scratchpad](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/plugins/magpie-scratchpad.md)**: A specialized internal plugin allowing for hot-reloading and runtime code execution without restarting the server.
- **[Notion Integration](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/plugins/notion-integration.md)**: Design for block-atomic storage and Notion-to-SQLite synchronization.