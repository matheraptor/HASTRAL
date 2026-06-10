---
title: Database Sync - Pull Script
description: Local script to synchronize production databases to development.
tags: [Database, Sync, SCP, Automation]
---

# pull_db.ps1

**Summary**: Syncs production databases from the remote Google Cloud VM to local development.

**Sources**: `projects/MAGPIE_Server/.admin/scripts/pull_db.ps1`

**Last updated**: 2026-05-21

---

`pull_db.ps1` ensures that the development environment is up-to-date with production data.

## Workflow
1. **Flush**: Executes remote `PRAGMA journal_mode=DELETE` to ensure all data is written to the main database file.
2. **Backup**: Creates local backups (`C:\Users\Marika\db_backups`) before replacing existing files.
3. **Clean**: Removes stale local database files and journals.
4. **Download**: Downloads `world.db` and `server.db` from the remote server.

## Related pages
- [[database/database-sync-scripts]]
- [[database/database-integrity]]
