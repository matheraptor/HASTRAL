---
title: MAGPIE_DATABASE
description: SQLite3 storage and worker thread integration.
tags: [MAGPIE, ECS, Systems, Persistence, Database]
---

# MAGPIE_DATABASE

`MAGPIE_DATABASE` provides the persistence layer for the engine, wrapping `better-sqlite3` within a Node.js `Worker` thread architecture.

## Asynchronous Worker Architecture

While the `better-sqlite3` module is inherently synchronous, running database writes on the main Node.js event loop would cause unacceptable latency spikes in the ECS physics loop. 

To mitigate this, `MAGPIE_DATABASE` offloads disk operations:
- **`database_worker.js`**: A dedicated worker thread that listens for serialized query payloads from the main thread.
- **Non-Blocking Execution**: The main engine dispatches "fire-and-forget" state dumps to the worker thread. The worker executes the synchronous SQLite statements without blocking the `MAGPIE_RUNTIME` tick.

## Persistence Paradigm
The database primarily stores persistent Dials (long-term stats), structural entity records, and credential tokens. Transient states (like mid-air velocities) are kept purely in memory and are only flushed to the database on specific checkpoint events to minimize I/O overhead.