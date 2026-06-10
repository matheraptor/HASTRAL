---
eventID: MISSION_001
type: MISSION
version: 0.1.4 2026-04-18
status: PLANNED
urgency: HIGH
gravity: MAJOR
ambiguity: LOW
parent: ASSIGNMENT_003
cause: ARCH_EVOLUTION
success_conditions: [MULTI_EXP_PROCESSING_ACTIVE]
linchpins: [MAGPIE_ENTITY.prototype.refresh, MAGPIE_ENTITY.prototype.processExp]
failure_conditions: [EXP_OVERFLOW, TICK_LAG]
vulnerabilities: [INFINITE_EXP_QUEUES]
target: SERVER.js
---

# MISSION: Multi-Experience Refresh

Creation Date: 2026-04-20 14:00

## Mission Briefing

The goal is to refactor the `MAGPIE_ENTITY.refresh` loop to handle multiple experiences (`exps.size > 1`) in a single interval, rather than the current single-pick behavior. This is critical for agents performing multi-modal actions (e.g., navigating while emoting and processing sensory data).

The refactor must ensure that the `exps` array is processed efficiently, potentially batching "STM" (Short-Term Memory) vs "LTM" (Long-Term Memory) experiences, and updating the entity physics only after the target agency has been calculated from the exp batch.

Refactor the entity update loop to process multiple concurrent experiences.

## 📁 Assets

- [ASSIGNMENT_003](../ASSIGNMENT_003.md)
- [SERVER.js](../../../../../MAGPIE_Server/SERVER.js)

---

## ✅ Execution

- [ ] `REFRESH_LOOP_REFACTOR`
  - [ ] Modify `refresh()` to iterate through `this.exps`.
  - [ ] Implement batching or priority-based exp selection.
- [ ] `PROCESS_EXP_INTERFACE_UPDATE`
  - [ ] Update `processExp` to handle the batch and return a consolidated Agency target.
- [ ] `PERFORMANCE_VALIDATION`
  - [ ] Ensure `dt` calculations remain accurate under high exp loads.

---

## 🎙️ Report

- 202604201400Z MISSION_INITIALIZED
