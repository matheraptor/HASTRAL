# SQLite3 Memory Architecture

**Summary**: Migration from JSON-based snapshot systems to a high-speed `better-sqlite3` database for scalable, low-latency world state management, optimized with PRAGMAs and indexes.

**Sources**: 2-00_architecture_sqlite3-database.md, 10-00_doctrine_knowledge_gate.md, leveraging_db_for_shelderEvo.md

**Last updated**: 2026-05-04.

---

## The Sovereign Host

HASTRAL operates as a **Home-Host Node.js** system, utilizing a centralized `better-sqlite3` database as the **Sovereign Host** for the world's state.

### Data Structure & Memory

- **Entities as "Dumb Containers"**: Entities are static containers for **Component Maps**.
- **Polymorphism Ban**: Polymorphic object structures (e.g., `entity.ship = ...`) are strictly prohibited to maintain V8 engine optimization (source: 10-00_doctrine_knowledge_gate.md).
- **LTM Integration**: Long-Term Memory (LTM) is implemented using a `Float64Array` of foreign keys pointing to the database.
- **Relational Integrity**: Hierarchies are managed purely via `host_id` indexing (`CREATE INDEX idx_entities_host_id ON entities (host_id);`), replacing the need for in-memory child arrays (`equip`).

### Persistence Strategy

The system utilizes a Write-Back Cache architecture coupled with [[lazy-hive-architecture|Lazy Hive Architecture]]:

1. **Urgency Levels**: High-frequency updates stay in RAM. Only high-gravity events or dormant entities are written to the database.
2. **Transactions**: Complex state changes (like destroying a ship and moving its cargo to space) are executed via atomic SQLite transactions to prevent orphaned records.
3. **Graceful Shutdown**: The Node.js process listens for `SIGTERM` to perform an emergency snapshot, flushing the RAM buffers to SQLite before exiting.

### Performance Optimization (PRAGMA)

`better-sqlite3` is tuned for synchronous, non-blocking performance:

- **`journal_mode = WAL`**: Write-Ahead Logging is mandatory. It allows concurrent reads and writes, ensuring database saves never block the game loop.
- **`synchronous = NORMAL`**: Used for the main universe database. It provides an excellent balance of speed and safety when paired with WAL mode.
- **`synchronous = FULL`**: Used for critical data (like the separate Users/Server DB) where data loss is unacceptable.
- **`synchronous = OFF` (or `:memory:`)**: Reserved for hyper-volatile, temporary data where absolute maximum speed is required and data loss on crash is acceptable.

### Association Table Design

When implementing join/bridge tables (e.g., `EXP_KEYS_RELATION`), we utilize the `WITHOUT ROWID` option to optimize for space and lookup speed. By storing data directly in the Primary Key index, we minimize disk footprint and maximize query performance for association-heavy lookups (source: database.md).

## Related pages

- [[topics/research/technical/index|Memory Operations Index]]
- [[memory-architecture|Memory Architecture (LTM/STM)]]
- [[lazy-hive-architecture|Lazy Hive Architecture]]


