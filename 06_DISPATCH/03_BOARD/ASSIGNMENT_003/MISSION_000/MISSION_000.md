---
eventID: MISSION_000
type: MISSION
version: 0.1.4 2026-04-18
status: PLANNED
urgency: HIGH
gravity: MAJOR
ambiguity: LOW
parent: ASSIGNMENT_003
cause: ARCH_EVOLUTION
sub-event: []
consequence: []
success_conditions: [STATE_HOOKS_IMPLEMENTED]
linchpins: [MAGPIE_STATE, MAGPIE_ENTITY.prototype.processStates]
failure_conditions: [STATE_DESYNC, LIFECYCLE_LEAK]
vulnerabilities: [RECURSIVE_EXP_CALLS]
target: SERVER.js
---

# MISSION: State Lifecycle Hooks Implementation

Creation Date: 2026-04-20 13:58

## Mission Briefing

The primarily objective is to introduce deterministic lifecycle hooks to the `MAGPIE_STATE` class and integrate their execution into the `MAGPIE_ENTITY` refresh cycle. Currently, states only apply a passive `updateEffect`. Transitioning to reactive hooks (`onApply`, `onUpdate`, `onRemove`, `onExpire`) allows for complex logic, such as states triggering emotes or modifying entity experiences dynamically.

Success depends on refactoring the `processStates` and `removeState` methods to call these hooks correctly while maintaining performance and avoiding recursive desyncs.

Implement core lifecycle hooks for MAGPIE_STATE to enable reactive state-driven behavior.

## 📁 Assets

- [ASSIGNMENT_003](../ASSIGNMENT_003.md)
- [SERVER.js](../../../../../MAGPIE_Server/SERVER.js)

---

## ✅ Execution

- [ ] `STATE_DEFINITION_UPDATE`
  - [ ] Add `onApply`, `onUpdate`, `onRemove`, `onExpire` stubs to `MAGPIE_STATE.prototype`.
  - [ ] Update `MAGPIE_STATE` typedef and initialization.
- [ ] `PROCESS_STATES_REFACTOR`
  - [ ] Update `MAGPIE_ENTITY.prototype.processStates` to call `state.onUpdate()`.
- [ ] `STATE_MANAGEMENT_UPDATE`
  - [ ] Update `addState` (if exists) or equivalent to call `onApply()`.
  - [ ] Update `removeState` and `onExpire` logic to call the respective hooks.

---

## 🎙️ Report

- 202604201358Z MISSION_INITIALIZED
