---
title: Database Integrity & PRAGMA Checks
description: Guide for ensuring database health using SQLite PRAGMA commands.
tags: [Database, SQLite, PRAGMA, Integrity]
---

# Database Integrity & PRAGMA Checks

Maintaining the health of the `MAGPIE_DATABASE` is critical, especially when transitioning between environments (Windows/WSL) or recovering from system crashes.

## Integrity Check Protocol

The `PRAGMA integrity_check` command performs a deep scan of the database file, checking for:
- Out-of-order index entries.
- Malformed records.
- Missing pages.
- Empty or corrupt freelists.

### Manual Verification Script

Create `check_db.js` in the server root:

```js
const Database = require('better-sqlite3');
const db = new Database('magpie.db');

try {
    const result = db.prepare('PRAGMA integrity_check').get();
    if (result.integrity_check === 'ok') {
        console.log("✅ Database is healthy!");
    } else {
        console.error("❌ Database Errors:", result.integrity_check);
    }
} finally {
    db.close();
}
```

## Performance Pragmas

MAGPIE uses the following Pragmas to optimize high-frequency writes:
- `PRAGMA journal_mode = WAL`: Write-Ahead Logging for non-blocking concurrency.
- `PRAGMA synchronous = NORMAL`: Balances safety and speed in WAL mode.
- `PRAGMA foreign_keys = ON`: (Optional) Enforced during development for relation testing.

## Recovery

If `integrity_check` returns anything other than `ok`:
1. **Do not write** to the database.
2. Attempt a `.dump` and `.read` recovery via the SQLite CLI.
3. Restore from the most recent `BAK` if dumping fails.
