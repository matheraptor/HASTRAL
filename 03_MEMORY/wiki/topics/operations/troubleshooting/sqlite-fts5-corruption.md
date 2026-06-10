---
name: sqlite-fts5-corruption
description: Root cause and recovery protocol for SQLITE_CORRUPT_VTAB in FTS5 indexes
metadata:
  type: project
---

# SQLITE_CORRUPT_VTAB (FTS5 Corruption)

**Fact:** FTS5 virtual tables (`*_fts`) are secondary indexes derived from primary tables and are prone to logical corruption if database worker threads are interrupted mid-transaction.

**Why:** The `SQLITE_CORRUPT_VTAB` error occurs when the internal B-Tree structure of the FTS index becomes inconsistent with the primary data source (`MAGPIE_ENTITY`). This often happens during abrupt process termination (e.g., node process crash) while SQLite triggers are mid-update.

**How to apply (Recovery Protocol):**
1. **Never Panic:** The primary data source is intact; only the index is damaged.
2. **Back up:** Always `cp world.db world.db.bak` before any repair.
3. **Repair:** Drop the corrupted index: `DROP TABLE IF EXISTS [table_name]_fts;`
4. **Rebuild:** Re-create the index. If the application handles schema boot-up (e.g., `initializeTableSchema`), a restart will handle this automatically. If manual, run:
   ```sql
   CREATE VIRTUAL TABLE IF NOT EXISTS [table_name]_fts USING fts5(...);
   -- Backfill data:
   INSERT INTO [table_name]_fts(id, name) SELECT ID, name FROM [table_name];
   ```
5. **Prevention:** Ensure all operations affecting both primary and virtual tables are wrapped in an atomic `db.transaction(() => { ... })`.

**Related:** [[database/database-schema]], [[topics/operations/infrastructure/index|Infrastructure]]
