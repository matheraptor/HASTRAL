---
title: MAGPIE_STATE
description: Effect updating system representing ongoing statuses.
tags: [MAGPIE, ECS, Component, State]
---

# MAGPIE_STATE

`MAGPIE_STATE` is a component representing persistent buffs, debuffs, or behavioral changes applied to an entity.

## Additive Resolution

States often rely on a "Carrier/Dial" architecture. If an entity is poisoned, a `MAGPIE_STATE` (the carrier) is attached to them. This state contains a reference to the specific effect Dial.

The engine uses additive modifier resolution. If an entity receives a +10 Speed state and a -5 Speed state simultaneously, they are both tracked independently. The systems read the aggregate total (+5) rather than destructively overwriting the entity's base stats. When a state expires (its TTL reaches the current `MAGPIE_METASTATE` tick), it is cleanly removed, instantly restoring the aggregate to the correct baseline.