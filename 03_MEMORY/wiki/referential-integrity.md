# Referential Integrity

**Summary**: Using SQL FOREIGN KEY constraints to maintain data consistency and automate cleanup.

**Sources**:

- [[database.md]]

**Last updated**: 2026-05-06

---

`FOREIGN KEY` constraints are essential for preventing "orphaned" data and automating cleanup (source: database.md).

## Key Concepts

- **Automatic Cleanup**: `ON DELETE CASCADE` ensures that when a parent entity (e.g., a ship) is deleted, all its components and stats are automatically removed, avoiding "ghost" data (source: database.md).
- **Validation**: Prevents accidental assignment of components to non-existent entities (source: database.md).
- **SQLite Note**: Remember to run `PRAGMA foreign_keys = ON;` after connecting to the database to enable these constraints in SQLite (source: database.md).

## Related pages

- [[]]
- [[]]
- [[]]

