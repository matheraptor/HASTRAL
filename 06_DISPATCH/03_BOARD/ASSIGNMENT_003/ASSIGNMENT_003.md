---
eventID: ASSIGNMENT_003
type: ASSIGNMENT
version: 0.1.4 2026-04-18
status: PLANNED
urgency: HIGH
gravity: MAJOR
ambiguity: LOW
parent: MAGPIE_SERVER
cause: ARCH_EVOLUTION
sub-event: [MISSION_000, MISSION_001, MISSION_002]
success_conditions: [ENTITY_REFRESH_MULTIEXP, STATE_LIFECYCLE_HOOKS, SEEK_ROUTE_STM_CYCLE]
linchpins: [SERVER.js]
target: SERVER.js
---

# MAGPIE_Server 0.19.2 Update

Creation Date: 2026-04-20 13:55

## Assignment Instructions

The objective is to finalize the logic for **MAGPIE_Server v0.19.2**, focusing on the evolution of the `MAGPIE_ENTITY` update loop and the `MAGPIE_STATE` lifecycle.

Key deliverables:
1. **Multi-Exp Handling**: Refactor `MAGPIE_ENTITY.refresh()` and `processExp()` to iterate through all pending experiences in a single tick (or a defined batch) rather than shifting just a single one.
2. **State Lifecycle Hooks**: Implement `onApply`, `onUpdate`, `onRemove`, and `onExpire` within `MAGPIE_STATE` and ensure they are called at appropriate times during the entity refresh cycle.
3. **seekRoute Persistence**: Implement the `seekRoute` logic where the emote pins a permanent state and stores waypoints in a persistent "STM" experience. The state's `onUpdate` must refresh the emote based on the exp data, creating a deterministic navigation cycle.

[Operational Protocol](../../../projects/HASTRAL/02_UNICODEX/operational_doctrine/orchestration_protocol.md)

---

## 📋 Available Intel

- **PARENT TYPE**: [MAGPIE_Server](../../../projects/MAGPIE_Server/README.md)
- **TARGET FILE**: [SERVER.js](../../../projects/MAGPIE_Server/SERVER.js)
- **SITREP**: User provided technical requirements for 0.19.2 refresh loop and seekRoute logic.

---

## ✅ Execution

- [ ] [MISSION_000: State Lifecycle Hooks](./MISSION_000/MISSION_000.md)
- [ ] [MISSION_001: Multi-Experience Refresh](./MISSION_001/MISSION_001.md)
- [ ] [MISSION_002: seekRoute & STM Exp Cycle](./MISSION_002/MISSION_002.md)

## 🔎 New Intel

- [jiro_sato_stm](../../../../../.gemini/antigravity/brain/a281ec69-89c3-4820-8ea6-106e397bfe3d/jiro_sato_stm.md)
