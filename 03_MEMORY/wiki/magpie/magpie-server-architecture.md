# MAGPIE Server Architecture

**Summary**: Details the structural and architectural design of the MAGPIE Server.

**Sources**: 
- `raw/MAGPIE_Server_ARCHITECTURE.md`
- `raw/MAGPIE_Server_STRUCTURE.md`

**Last updated**: 2026-05-23

---

## System Overview

MAGPIE Server utilizes an **Event-Driven Modular REPL/Server Hybrid** architecture. 

- **In-process REPL:** The server runs inside a Node.js REPL (`SERVER.js`), allowing live code execution and inspection of internal state.
- **Layered Processing:** Uses a "HIVE" structure to tick entities across different runtime layers (`Base`, `Game`, `TICK`, `Super`, etc.).
- **Database-Centric:** Heavy reliance on SQLite transactions for state persistence.

### Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| `SERVER` | Entry point, REPL, Boot sequence | `SERVER.js` |
| `HIVE` | Entity management, refreshing, state sync | `SERVER.js` (logic), `core/` |
| `DATABASE` | DB abstraction (better-sqlite3) | `core/database.js` |
| `Handlers` | Socket.io event handling | `handlers/` |
| `Core` | Physics, Auth, Components, Systems | `core/` |

## Data Flow

1. **Socket Connection:** `SERVER.js` configures socket.io, applies auth middleware.
2. **Event Routing:** Socket events are passed to registered handlers in `handlers/`.
3. **Processing:** Handlers interact with `HIVE` or `DATABASE` to update entities.
4. **Broadcast:** `HIVE` updates `METASTATE` and emits changes via socket to connected clients.

## Directory Structure

- `admin/`: Administration tools and documentation
- `config/`: System configuration
- `core/`: Core engine, logic, and base classes
  - `plugins/`: Engine plugins (e.g., scratchpad)
  - `workers/`: Background workers
- `data/`: Data definitions (states, traits, entity types)
- `db/`: SQLite database files and management scripts
- `handlers/`: Socket.io event handlers
- `public/`: Client-side static files
- `SERVER.js`: Main server entry point

## Related pages
- [[magpie-server-tech-stack]]
- [[magpie-server-code-quality]]