# SQLite Type Affinity & Strict Tables

**Summary**: Analysis of SQLite's dynamic typing system, the risks of Type Affinity abuse, and the implementation of `STRICT` tables for hard type enforcement.

**Sources**: (source: 20260610_db_corruption_debug.md)

**Last updated**: 2026-06-10

---

## Type Affinity

By default, SQLite uses **Type Affinity**, which allows columns to store values of any type regardless of the declared type. For example, a string can be stored in an `INTEGER` column without an error.

### Risks of Dynamic Typing

- **Index Corruption**: Storing invalid types (e.g., strings in integer keys) can lead to B-Tree corruption, especially in `WITHOUT ROWID` tables.
- **Logical Errors**: Queries may return unexpected results when comparing mixed types.

## STRICT Tables (SQLite 3.37+)

To prevent Type Affinity abuse, SQLite 3.37 introduced `STRICT` tables. When a table is created with the `STRICT` keyword, SQLite enforces the declared data types strictly.

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT
) STRICT;
```

In a `STRICT` table, any attempt to insert a value of the wrong type will result in an error, preventing the "zombie row" scenario where invalid data corrupts the index.

## Related pages

- [[topics/operations/troubleshooting/sqlite-corruption-recovery]]
