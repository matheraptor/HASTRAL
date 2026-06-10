---
title: MAGPIE_EXP
description: Experience payload to transition state.
tags: [MAGPIE, ECS, Component, Payload, EXP]
---

# MAGPIE_EXP

In MAGPIE, an "Experience" (`MAGPIE_EXP`) is a specific type of transient component used to request state transitions or handle events.

## Event Driven Architecture

Instead of directly mutating an entity's health when hit by a bullet, the bullet system generates a `MAGPIE_EXP` payload detailing the damage amount and type. This payload is attached to the target entity.

During the next engine tick, the `MAGPIE_STATE` system iterates over all entities with pending `MAGPIE_EXP` components. It evaluates the payloads against the entity's current resistances and states, then applies the final deterministic result, destroying the `MAGPIE_EXP` component afterward.

This decoupling prevents logic race conditions and allows for easy event cancellation or modification (e.g., an invulnerability state simply nullifies incoming damage EXP).

## Contextual Embedding

While the `MAGPIE_EXP` schema is static, contextual metadata (e.g., origin indices) is transported via the `keys` array. By embedding `AXIOM` typed keys, systems can attach ephemeral context to an event without modifying the `MAGPIE_EXP` structure, preserving serialization and V8 monomorphism.
