---
keyID: 1714232644000
name: MAGPIE Server Core Index
type: index
version: 0.1.0 2026-04-27
status: draft
description: Wraps the server initialization, HTTP layer, and routing structure.
tags: [MAGPIE, Server, Network, Index]
origin: []
legacy: []
composition: [v0192-architecture, v0192-telemetry, v0192-refresh-loops]
composite: []
taxonomy: magpie/server
---

# Server Core

The **Server Core** represents the outer perimeter of the MAGPIE engine. It handles all initial process bootstrapping, Express/Socket.io bindings, middleware attachment, and HTTP routing before delegating state changes to the inner ECS loop.

## Sub-Topics

- **[Network Stack](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/server/magpie-network-stack.md)**: Details on Express routing, WebSocket connections, Rate Limiting, and JWT-based authentication.
- **[Ephemeral IP Stabilizer](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/server/magpie-ephemeral-stabilizer.md)**: Explains the DuckDNS and cron-job architecture for handling dynamic host IP resolution.
- **[Account Security & Auth](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/server/account-security.md)**: Details on the security model, JWT strategy, and account freezing.
- **[Database Integrity](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/server/database-integrity.md)**: Maintenance guides for SQLite health and PRAGMA checks.
- **[CLI Visual Standards](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/server/cli-standards.md)**: Aesthetic guidelines for CLI feedback (spinners, progress bars).

## Version Documentation

- **[MAGPIE v0.19.2 Architecture](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/server/v0192-architecture.md)**: Core ECS/OOP hybrid audit.
- **[MAGPIE v0.19.2 Telemetry](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/server/v0192-telemetry.md)**: Socket protocol and payload structure.
- **[MAGPIE v0.19.2 Refresh Loops](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/server/v0192-refresh-loops.md)**: Execution stratification and WIP stubs.
