---
title: MAGPIE_CALENDAR & MAGPIE_DATE
description: In-engine timekeeping systems mapping real-world time to game time.
tags: [MAGPIE, ECS, Systems, Time, Calendar]
---

# MAGPIE_CALENDAR & MAGPIE_DATE

The `MAGPIE_CALENDAR` and `MAGPIE_DATE` systems govern the translation of real-world server time into the fictional continuity of the MAGPIE universe.

## Core Mechanisms

- **MAGPIE_DATE**: Represents a specific point in time within the simulation. It handles localized formatting and delta calculations.
- **MAGPIE_CALENDAR**: The global singleton system that advances `MAGPIE_DATE` instances. It manages seasonal changes, daily cycles, and historical epoch tracking, mapping them against the `MAGPIE_METASTATE` ticks.

This abstraction ensures that time-based events (like day/night cycles or scheduled transitions) remain completely immune to host server downtime, as the simulated time is calculated deterministically from the canonical tick epoch.