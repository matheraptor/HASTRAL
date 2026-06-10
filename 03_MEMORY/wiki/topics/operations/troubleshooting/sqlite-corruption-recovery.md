# SQLite Corruption Recovery

**Summary**: Detailed workflow for diagnosing and repairing `SQLITE_CORRUPT` errors and B-Tree index corruption in SQLite databases.

**Sources**: (source: 20260610_db_corruption_debug.md)

**Last updated**: 2026-06-10

---

## Symptoms of Corruption

When a database disk image is malformed, SQLite may return the `SQLITE_CORRUPT` error. This often happens when:

- A Primary Key in a `WITHOUT ROWID` table contains a `NULL` value, corrupting the B-Tree index.
- Physical disk errors occur.
- Unexpected process termination during a write operation.

## Recovery Workflow

The only reliable path to resolve `SQLITE_CORRUPT` is a full data export and rebuild:

1. **Export Data**: Use the `sqlite3` CLI tool to dump the database to a SQL file.
   - Command: `sqlite3 old_db.db .dump > recovery.sql`
2. **Rebuild Database**: Create a new database file from the dump.
   - Command: `sqlite3 new_db.db < recovery.sql`
3. **Clean Up**: Run `VACUUM` to rebuild the freelist and remove orphan pages.
   - Command: `VACUUM;`

## Preventative Measures

- **Foreign Key Enforcement**: Ensure `PRAGMA foreign_keys = ON` is executed on every new connection, as it is a connection-level setting and not persistent in the database file.
- **Tooling**: Maintain `sqlite3.exe` in the system PATH for rapid recovery.

## Related pages

- [[database/sqlite-type-affinity]]
- [[topics/operations/troubleshooting/sqlite-fts5-corruption]]
