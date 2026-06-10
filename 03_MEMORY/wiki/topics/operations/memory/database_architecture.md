# SQLite Architecture & Scaling

**Summary**: Synchronous, high-performance database architecture for billion-row scale.

**Sources**: (source: server_scaling.md)

**Last updated**: 2026-04-20

---

SQLite architecture optimized for monolithic servers by leveraging Write-Ahead Logging (WAL) and atomic transaction batching (source: server_scaling.md).

## Scaling Strategy
- **WAL Mode:** Enables concurrent reads and writes, critical for keeping the main thread responsive (source: server_scaling.md).
- **Atomic Batching:** Use `db.transaction()` to bundle writes, reducing I/O friction from 1ms per entry to ~5ms per 1,000 entries (source: server_scaling.md).
- **Storage Isolation:** Physically move the `.db` file to a dedicated Persistent Disk to separate I/O from the application compute (source: server_scaling.md).

## Performance Monitoring
- **Pattern:** Wrap batch transaction commits with a simple timer to log slow ticks (>10ms).
- **Implementation:**
  ```javascript
  const start = Date.now();
  db.transaction(() => { /* perform entity updates */ })();
  const duration = Date.now() - start;
  if (duration > 10) console.warn(`Slow DB Commit: ${duration}ms`);
  ```
- **Goal:** Identify performance degradation before it impacts the heartbeat, allowing for timely batch-size adjustments (source: server_scaling.md).

## Related pages
- Memory Operations
- [[better-sqlite3]]


