# Codebase Structure

**Analysis Date:** 2026-05-23

## Directory Layout

```
[project-root]/
├── admin/          # Administration tools and documentation
├── config/         # System configuration
├── core/           # Core engine, logic, and base classes
│   ├── plugins/    # Engine plugins (e.g., scratchpad)
│   └── workers/    # Background workers
├── data/           # Data definitions (states, traits, entity types)
├── db/             # SQLite database files and management scripts
├── handlers/       # Socket.io event handlers
├── public/         # Client-side static files
├── SERVER.js       # Main server entry point
└── package.json    # Project dependencies and metadata
```

## Directory Purposes

**`core/`:**
- Purpose: The heart of the engine, containing base classes, physics, auth, and state management.
- Key files: `auth.js`, `database.js`, `entity.js`, `physics.js`, `system.js`.

**`handlers/`:**
- Purpose: Business logic for processing socket events sent from clients.
- Key files: `entityHandler.js`, `playerHandler.js`.

**`data/`:**
- Purpose: Static data and configuration defining the game world rules and entities.
- Key files: `entity_types.js`, `states.js`, `traits.js`.

**`db/`:**
- Purpose: SQLite database files and utility scripts.
- Key files: `server.db`, `world.db`, `push_db.ps1`.

## Key File Locations

**Entry Point:**
- `SERVER.js`: Initializes the REPL, Socket.io, Express, and loads the system.

**Configuration:**
- `config/`: System-specific configuration files.

## Where to Add New Code

**New Socket Event:**
- Implementation: `handlers/[new_handler].js` (ensure it is loaded by `SERVER.js`'s handler loader).

**New Game Logic/Component:**
- Implementation: `core/[component_or_logic].js`.

**New Data Definition:**
- Implementation: `data/[new_file].js`.

---

*Structure analysis: 2026-05-23*
