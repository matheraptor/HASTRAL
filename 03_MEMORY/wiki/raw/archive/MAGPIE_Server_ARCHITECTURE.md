<!-- refreshed: 2026-05-23 -->
# Architecture

**Analysis Date:** 2026-05-23

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                       REPL Console                          │
│         `[projects/MAGPIE_Server/SERVER.js]`                │
├──────────────────┬──────────────────┬───────────────────────┤
│    Handlers      │    Core Logic    │   Database Interface  │
│ `[handlers/]`    │ `[core/]`        │ `[core/database.js]`  │
└────────┬─────────┴────────┬─────────┴──────────┬────────────┘
         │                  │                    │
         ▼                  ▼                    ▼
┌─────────────────────────────────────────────────────────────┐
│                    Socket.io / Express                      │
│         (Real-time event loop & REST Auth)                  │
└─────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│  Better-SQLite3 (server.db, world.db)                       │
│  `[db/]`                                                    │
└─────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| `SERVER` | Entry point, REPL, Boot sequence | `SERVER.js` |
| `HIVE` | Entity management, refreshing, state sync | `SERVER.js` (logic), `core/` |
| `DATABASE` | DB abstraction (better-sqlite3) | `core/database.js` |
| `Handlers` | Socket.io event handling | `handlers/` |
| `Core` | Physics, Auth, Components, Systems | `core/` |

## Pattern Overview

**Overall:** Event-Driven Modular REPL/Server Hybrid

**Key Characteristics:**
- **In-process REPL:** The server runs inside a Node.js REPL, allowing live code execution and inspection of internal state.
- **Layered Processing:** Uses a "HIVE" structure to tick entities across different runtime layers (`Base`, `Game`, `TICK`, `Super`, etc.).
- **Database-Centric:** Heavy reliance on SQLite transactions for state persistence.

## Data Flow

### Primary Request Path (Socket/Event)
1. **Socket Connection:** `SERVER.js` configures socket.io, applies auth middleware.
2. **Event Routing:** Socket events are passed to registered handlers in `handlers/`.
3. **Processing:** Handlers interact with `HIVE` or `DATABASE` to update entities.
4. **Broadcast:** `HIVE` updates `METASTATE` and emits changes via socket to connected clients.

## Architectural Constraints

- **Single-threaded event loop:** Node.js model, CPU-heavy tasks must be offloaded (some workers exist in `core/workers/`).
- **File Watching:** `SERVER.js` watches `plugins/scratchpad.js` for live code injection.

## Error Handling

**Strategy:** Centralized logging via `MAGPIE_SYSTEM.error` with REPL prompt redisplay.

---

*Architecture analysis: 2026-05-23*
