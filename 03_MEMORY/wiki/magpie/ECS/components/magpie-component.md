---
title: MAGPIE_COMPONENT
description: Abstract input/output data structure.
tags: [MAGPIE, ECS, Component, Core]
---

# MAGPIE_COMPONENT

`MAGPIE_COMPONENT` acts as the abstract baseline for all data blobs attached to entities.

## Data Philosophy

The engine strictly enforces a data-oriented design. `MAGPIE_COMPONENT` subclasses must not include loops or game logic. They are meant to be fast, serializable, and easily parsed by the systems that iterate over them.

When a component is attached to an entity, the `MAGPIE_HIVE` registry updates its bitmask array, allowing for incredibly fast filtering when a system requests "all entities with an active Health and POVART component".