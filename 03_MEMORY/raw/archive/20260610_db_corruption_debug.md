# Database Corruption Debug Report - 2026-06-10

## Incident Overview

- **Date**: 2026-06-10
- **Symptom**: "Zombie" row discovered in `entity_children` table with a string (`MAGPIE_METASTATE`) in an `INTEGER` column and a `NULL` value in a Primary Key column.
- **Critical Error**: `SQLITE_CORRUPT` (database disk image is malformed) encountered during attempt to delete the corrupt row.

## Technical Root Cause

1. **Schema Violation**: A row was inserted into `entity_children` that violated the Primary Key contract (contained a `NULL` in `parentType`).
2. **Type Affinity Abuse**: SQLite's dynamic typing allowed a string to be stored in an `INTEGER` column.
3. **Constraint Failure**: `PRAGMA foreign_keys` was set to `OFF` during a previous debug session, disabling the "security guard" that would have blocked the invalid insert.
4. **Index Corruption**: Because the table was `WITHOUT ROWID`, the Primary Key *is* the index. The `NULL` value corrupted the B-Tree index, making the row invisible to standard `SELECT` and `DELETE` queries while remaining physically present on disk.

## Recovery Process

1. **Disk Image Repair**:
   - Used `sqlite3.exe .dump` to export readable data to `recovery.sql`.
   - Rebuilt the database from the dump into `world_fixed.db` to resolve `SQLITE_CORRUPT`.
2. **Logical Repair**:
   - Performed `VACUUM` to rebuild the freelist and remove orphan pages.
   - Executed a full table wipe of `entity_children` (since it only contained the zombie row) to clear the corrupted index.
3. **Verification**:
   - Confirmed health via `PRAGMA integrity_check` $\rightarrow$ `ok`.
   - Verified server-side connection has `PRAGMA foreign_keys = ON`.

## Lessons Learned & Preventative Measures

- **Connection-Level Pragmas**: `PRAGMA foreign_keys` is a connection-level setting, not a database-level one. It must be enabled on every new connection.
- **Strictness**: Relying on `INTEGER` types in SQLite is not enough due to Type Affinity; `STRICT` tables (SQLite 3.37+) are recommended for hard enforcement.
- **Recovery Workflow**: When `SQLITE_CORRUPT` occurs, the only reliable path is `.dump` $\rightarrow$ new file $\rightarrow$ `VACUUM`.
- **Tooling**: The `sqlite3` CLI is essential for low-level recovery and should be kept in a global `bin` folder in the system PATH.

## Final State

- **Database**: Healthy (`ok`)
- **Constraints**: Enforced (`foreign_keys = 1`)
- **Tooling**: `sqlite3.exe` installed in `C:\Users\Marika\bin` and added to System PATH.
