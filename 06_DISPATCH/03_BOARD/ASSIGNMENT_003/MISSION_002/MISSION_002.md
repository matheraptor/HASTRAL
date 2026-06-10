---
eventID: MISSION_002
type: MISSION
version: 0.1.4 2026-04-18
status: PLANNED
urgency: HIGH
gravity: MAJOR
ambiguity: MEDIUM
parent: ASSIGNMENT_003
cause: ARCH_EVOLUTION
success_conditions: [SEEK_ROUTE_AUTONOMY_STABLE]
linchpins: [seekRoute Emote, STM Exp Persistence]
failure_conditions: [WAYPOINT_DRIFT, STM_QUEUE_BLOAT]
vulnerabilities: [PERSISTENT_EXP_CYCLING]
target: SERVER.js
---

# MISSION: seekRoute & STM Exp Cycle

Creation Date: 2026-04-20 14:02

## Mission Briefing

The goal is to codify the `seekRoute` emote and its associated persistence logic. When `seekRoute(route_key.ID)` is triggered, it must pin a permanent state on the entity. Simultaneously, it must store the route data (waypoints) in a persistent "STM" experience.

The pinned state's `onUpdate()` hook will be responsible for refreshing the `seekRoute` emote by sourcing data from the STM exp. This creates a deterministic cycle where the state drives the behavior and the exp provides the narrowing target data (waypoints array).

Implement a state-driven, experience-sourced cycle for autonomous route seeking.

## 📁 Assets

- [ASSIGNMENT_003](../ASSIGNMENT_003.md)
- [SERVER.js](../../../../../MAGPIE_Server/SERVER.js)

---

## ✅ Execution

- [ ] `SEEK_ROUTE_EMOTE_IMPLEMENTATION`
  - [ ] Implement `seekRoute` in `MAGPIE_EMOTE` / `SERVER.js`.
  - [ ] Ensure it pins the navigation state.
- [ ] `STM_EXP_PERSISTENCE_LOGIC`
  - [ ] Implement persistent experience storage for route waypoints.
- [ ] `NAVIGATION_STATE_UPDATE_LOOP`
  - [ ] Link `onUpdate()` of the navigation state to the `seekRoute` refresh logic.
  - [ ] ImplementWaypoint consumption logic (shrinking waypoint array).

---

## 🎙️ Report

- 202604201402Z MISSION_INITIALIZED
