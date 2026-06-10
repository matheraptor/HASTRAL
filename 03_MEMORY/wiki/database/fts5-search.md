# FTS5 Search Indexing

To handle text searches efficiently for entities stored as serialized JSON, we utilize SQLite's FTS5 virtual tables, ensuring sub-millisecond performance on large datasets.

## Implementation Pattern

We maintain a parallel virtual table that mimics the structure of the source table, synced via triggers.

```sql
CREATE VIRTUAL TABLE IF NOT EXISTS [TABLE_NAME]_fts 
USING fts5(id UNINDEXED, name, tokenize="porter");
```

*Example implementation: [[database-schema|MAGPIE_ENTITY Indexing]]*

## Automated Synchronization (Triggers)

Triggers ensure that insertions, updates, and deletions in the base table are instantly reflected in the FTS index without application-level logic.

- `ts_[table]_insert`: Updates index on row creation.
- `ts_[table]_update`: Reflects name changes in the index.
- `ts_[table]_delete`: Removes stale entries from index on row deletion.

## Optimized Query Seam

Instead of `LIKE '%...%'`, use the `MATCH` operator with prefix wildcards:

```javascript
// Query Example
const statement = db.prepare(`
    SELECT m.* FROM [TABLE_NAME] m
    JOIN [TABLE_NAME]_fts f ON m.ID = f.id
    WHERE f.name MATCH ?
`);

// Execute with trailing wildcard for prefix matching
const results = statement.all(`${cleanName}*`);
```
