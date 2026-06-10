# Database Schema

**Summary**: The structural design of entities, components, and their relationships within the database.

**Sources**:

- [[database.md]]

**Last updated**: 2026-05-06

---

The core architecture relies on an ECS-style junction table to map entities to their components (source: database.md).

```sql
CREATE TABLE entity_components (
    entity_id INTEGER NOT NULL,
    component_id INTEGER NOT NULL,
    PRIMARY KEY (entity_id, component_id),
    FOREIGN KEY (entity_id) REFERENCES MAGPIE_ENTITY(ID) ON DELETE CASCADE,
    FOREIGN KEY (component_id) REFERENCES component_prototypes(id)
);
```

### Entity Search Indexing
To support high-performance text searches for entities, we use an FTS5 virtual table synced via triggers:

```sql
-- Virtual Table
CREATE VIRTUAL TABLE IF NOT EXISTS MAGPIE_ENTITY_fts 
USING fts5(id UNINDEXED, name, tokenize="porter");

-- Sync Triggers
CREATE TRIGGER IF NOT EXISTS ts_entity_insert AFTER INSERT ON MAGPIE_ENTITY
BEGIN INSERT INTO MAGPIE_ENTITY_fts(id, name) VALUES (new.ID, new.name); END;

CREATE TRIGGER IF NOT EXISTS ts_entity_update AFTER UPDATE OF name ON MAGPIE_ENTITY
BEGIN UPDATE MAGPIE_ENTITY_fts SET name = new.name WHERE id = old.ID; END;

CREATE TRIGGER IF NOT EXISTS ts_entity_delete AFTER DELETE ON MAGPIE_ENTITY
BEGIN DELETE FROM MAGPIE_ENTITY_fts WHERE id = old.ID; END;
```

## Optimization

For junction tables like `entity_children`, using `WITHOUT ROWID` is recommended to create a clustered index and improve performance for frequent lookups of related entities (source: database.md).

## Related pages

- [[../ecs-resource-system|ECS Resource System]]
