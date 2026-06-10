# Lazy Hive Architecture

**Summary**: A memory-first Entity Component System (ECS) architecture that uses 6 urgency levels and "scrolling" data structures to optimize memory and minimize disk I/O.

**Sources**: leveraging_db_for_shelderEvo.md

**Last updated**: 2026-05-04.

---

## Overview

The "Lazy Hive" is an architecture designed for high-performance procedural universes (like MMORPGs). Instead of holding the entire world in memory or writing every change to disk immediately, it balances the load between RAM (the Hive) and persistent storage (the Database) based on **urgency** and **gravity**.

## Core Concepts

### 1. The 6 Urgency Levels
The system divides the update frequency of entities into 6 levels (cascading buffers):
- **Level 1 (Urgent/Hot)**: Changes every millisecond (e.g., active combat). Data lives exclusively in the Hive's memory.
- **Level 2-5 (Warm/Cool)**: Intermediate layers.
- **Level 6 (Lazy/Dormant)**: Changes very rarely (e.g., distant entities, background simulation).

Data "cascades" down these levels. A high-frequency change is kept in memory. Only when the entity's urgency drops, or a high-gravity event occurs (e.g., entity destruction), does the data "slide" down to the slower levels and eventually to the database.

### 2. The Database as a Dormitory
Entities must "earn" their place in the Hive's RAM through activity.
- When an entity becomes inactive, it is purged from the Hive and relegated to the SQLite database.
- The Hive naturally tries to empty itself, preventing the server from slowing down over time due to memory bloat.

### 3. Parent-Child Hierarchies
Instead of maintaining complex Javascript arrays of children (e.g., `equip` arrays), the system relies purely on the relational database.
- Entities have a `host_id`.
- The database is indexed (`CREATE INDEX idx_entities_host_id ON entities (host_id);`).
- Finding all drones in a ship is a lightning-fast `O(log n)` SQLite query (`SELECT * FROM entities WHERE host_id = ?`), bypassing the need to maintain duplicate truth in RAM.
- When an host is destroyed, children are moved to the parent host using a single atomic SQLite `UPDATE` transaction.

## Related pages

- [[sqlite3-architecture]]
- [[ecs-preset-design]]
- [[deckbuilder-mechanics]]
