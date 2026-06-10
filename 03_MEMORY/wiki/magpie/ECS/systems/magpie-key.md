---
title: MAGPIE_KEY
description: The enumerator and constant registry.
tags: [MAGPIE, ECS, Systems, Registry, Constants]
---

# MAGPIE_KEY

`MAGPIE_KEY` acts as the global dictionary and enumerator registry for the engine. 

## Purpose

To maintain extreme performance and memory efficiency, the MAGPIE engine avoids passing strings around for states, component types, or events. Instead, `MAGPIE_KEY` maps all human-readable concepts to integer IDs.

- **Fast Lookups**: Systems use these integer keys to index into `Float64Array` buffers or switch statements, completely bypassing string hashing overhead.
- **Data Normalization**: It serves as the single source of truth for bitmasks, flag definitions, and payload schema identifiers used throughout the engine.