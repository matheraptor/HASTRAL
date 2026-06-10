# Wiki Log

**Purpose**: Append-only record of all operations.

---

- **2026-05-06**: Initialized wiki log.
- **2026-05-17**: Tidied up `database-schema.md` and `ecs-resource-system.md` to `database/` sub-directory:
    - Created [[database/database-schema]]
    - Created [[database/ecs-resource-system]]
    - Updated [[index.md]]
- **2026-05-17**: Moved `fts5-search.md` to `database/` sub-directory:
    - Updated [[index.md]]
- **2026-05-17**: Added FTS5 search indexing documentation for `MAGPIE_ENTITY` in `database-schema.md`:
    - Updated [[database/database-schema]]
    - Updated [[database/fts5-search]]

- **2026-05-18**: Ingested `explain git issues.md`:
    - Created [[git/git-issues]]
    - Created [[git/github-projects]]
    - Created [[git/mmorpg-project-blueprint]]
    - Updated [[index.md]]
- **2026-05-19**: Added local/global rotor operation doctrine:
    - Created [[topics/codecraft/physics/local-vs-global-rotor-operations]]
    - Updated [[index.md]]
- **2026-05-20**: Captured mathematical fixes and implementation traps for PGA Rotors:
    - Created [[topics/codecraft/physics/euler-to-rotor-conversion]]
    - Updated [[index.md]]

- **2026-05-21**: Added database synchronization scripts documentation:
    - Created [[database/database-sync-scripts]]
    - Created [[database/pull_db]]
    - Created [[database/push_db]]
    - Updated [[index.md]]



## 2026-05-23: MAGPIE_Server Codebase Map Ingestion
- Processed 7 codebase map files (ARCHITECTURE, STRUCTURE, STACK, INTEGRATIONS, CONVENTIONS, TESTING, CONCERNS).
- Created wiki pages: magpie-server-architecture.md, magpie-server-tech-stack.md, magpie-server-code-quality.md.
- **2026-05-25**: Fixed `push_db.ps1` to correctly use the SSH alias for SCP commands:
    - Updated [[magpie/database/push_db]]
    - Updated [[log.md]]
- **2026-05-25**: Ingested `tmp/shutdown_debug.md` documenting the fix for the MAGPIE_HIVE.save() 10% progress hang:
    - Created [[magpie/server/shutdown-hang-resolution]]
    - Updated [[index.md]]
- **2026-05-25**: Documented remote SQLite WAL handling mechanics (TRUNCATE & cleanup) to prevent phantom WAL recovery when pushing databases:
    - Updated [[magpie/database/push_db]]
- **2026-05-25**: Processed frag-249 route waypoints and created route page:
    - Created [[../../06_DISPATCH/03_BOARD/ASSIGNMENT_0249/frag-249-route|frag-249-route]]
    - Updated [[../../06_DISPATCH/03_BOARD/ASSIGNMENT_0249/hastral-mission-frag-249|hastral-mission-frag-249]]
    - Updated [[index.md]]
- **2026-05-25**: Converted frag-249-route coordinates from cardinal/degrees to decimal arrays:
    - Updated [[frag-249-route]]
- **2026-05-26**: Ingested `VSCode_window_bug.md` documenting GPU acceleration conflicts and drag-and-drop deadlocks:
    - Created [[topics/operations/troubleshooting/vscode-drag-drop-freeze]]
    - Created [[topics/operations/troubleshooting/vscode-gpu-acceleration]]
    - Updated [[index.md]]
- **2026-05-26**: Ingested SQLITE_CORRUPT_VTAB corruption diagnostic and recovery protocol:
    - Created [[topics/operations/troubleshooting/sqlite-fts5-corruption]]
    - Updated [[index.md]]


- **2026-06-10**: Completed Batch 3 - HR/Personnel ingestion (Google Jules):
    - Created [[HR_Policies_Framework]]
    - Created [[Organizational_Structure]]
    - Created [[Team_Onboarding_Guide]]
    - Updated [[index.md]]
