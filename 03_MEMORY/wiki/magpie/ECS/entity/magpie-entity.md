---
title: MAGPIE_ENTITY
description: Core MAGPIE_ENTITY properties (birth, ID structure, parents, children, host, orbit).
tags: [MAGPIE, ECS, Entity, Core]
---

# MAGPIE_ENTITY

`MAGPIE_ENTITY` is the base class for all objects within the simulation. By itself, it is essentially a "dumb container" of data. It possesses no inherent logic or loop mechanisms, only structural metadata and a list of attached components.

## Temporal ID Structure

Entities are uniquely identified by a strict integer `ID` formed from the exact millisecond of their creation: `YYYYMMDDHHMMmmm` (e.g., `202602201844772`). 
This temporal design serves two purposes:
1. **Native Uniqueness:** Because the runtime operates sequentially, it is impossible to assign multiple entities the exact same millisecond timestamp, guaranteeing global uniqueness without complex UUID generation.
2. **Native Birth Record:** The ID itself natively informs the garbage collector and logic systems exactly when the entity was created, eliminating the need for a separate `birth` property on the object.

## Entity Structure
- **ID**: `YYYYMMDDHHMMmmm` (Integer).
- **Type**: An integer/enum representing what the entity is (e.g., `3781` for a specific starship class).
- **Components**: A dictionary of key-value pairs (e.g., `components.POVART`). Entities are initialized with default values to maintain a strict V8 object shape, avoiding hidden-class de-optimization.

## Relational Hierarchy

Entities in MAGPIE do not exist in a flat list; they are organized into a strict relational scene graph.

- **Parents & Children**: Entities can be physically nested. For instance, an item (child) inside a backpack (parent). Moving the parent automatically translates the physics offset for the child.
- **Host**: Determines ownership or control over an entity. While an entity might be parented to the ground, its host could be a player who summoned it.
- **Orbit**: Specific relational arrays handling objects revolving around or explicitly tethered to a central entity (e.g., moons around a planet, or specific orbiting buff effects).