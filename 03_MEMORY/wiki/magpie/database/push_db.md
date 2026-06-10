---
title: Database Sync - Push Script
description: Local script to synchronize development databases to production.
tags: [Database, Sync, SCP, Automation, WAL]
---

# push_db.ps1

**Summary**: Syncs development databases from local to the remote Google Cloud VM production environment while handling WAL (Write-Ahead Logging) artifacts.

**Sources**: `projects/MAGPIE_Server/db/push_db.ps1`, `projects/MAGPIE_Server/.admin/scripts/push_db.ps1`

**Last updated**: 2026-05-25

---

`push_db.ps1` allows for deploying local changes or testing data directly to the production server safely, avoiding database corruption by managing SQLite WAL states.

## Workflow
1. **Backup**: Creates remote backups in `~/backups/db` on the server before overwriting.
2. **Local Checkpoint**: Forces a local SQLite WAL checkpoint (`TRUNCATE`) to merge pending transactions into the local `.db` files.
3. **Remote Checkpoint & Cleanup**: Executes a remote SSH command to checkpoint and close the remote databases, then forcibly deletes any leftover `.db-wal` and `.db-shm` files to ensure a clean slate.
4. **Upload**: Copies local `world.db` and `server.db` (and their respective `-wal` files) to the production server using the `magpie-gcp` SSH alias.

## Implementation Insights
- **WAL Dominance:** SQLite's Write-Ahead Log (`.db-wal`) acts as an authoritative overlay. If a `.db` file is overwritten while an active `.db-wal` remains intact, SQLite applies the old WAL transactions to the new database, effectively erasing uploaded changes or corrupting the state.
- **Remote Checkpointing:** By injecting a `wal_checkpoint(TRUNCATE)` and `db.close()` command via SSH *before* the upload, the remote SQLite engine is forced to merge its pending transactions and release its file locks.
- **Clean Slate Fail-safe:** Explicitly removing the remote `.db-wal` and `.db-shm` files before the `scp` transfer acts as a fail-safe, ensuring the remote server boots up treating the newly uploaded `.db` as the absolute source of truth without attempting any phantom recovery.

## Related pages
- [[database/database-sync-scripts]]
- [[database/database-integrity]]
