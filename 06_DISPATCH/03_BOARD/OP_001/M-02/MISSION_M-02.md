---
type: MISSION
name: "Mission: ECS Migration & followRoute Emote"
eventID: M-02
date: 2026-04-18
parent: OP_001
target: MAGPIE_Server/S0_Runtime
location: geopolitics/Local_Environment
sides_involved: [geopolitics/Antigravity, geopolitics/Marika]
gravity: 💔VITAL
urgency: 🚨IMMEDIATE
ambiguity: Universal
version: 0.1.4 2026-04-18
status: IN_PROGRESS
tags: [ecs, entity, geomarker, followRoute, exp, state, s0, refresh-loop]
---

# Mission: ECS Migration & followRoute Emote

## Objective
Overhaul the MAGPIE S0 refresh loop to support an array-based `followRoute` EXP payload that self-manages a sequence of waypoints as a single persistent State. Waypoint markers are standard `MAGPIE_ENTITY` instances composed via `type`-driven presets (ECS pattern), not a separate prototype. These changes resolve the single-EXP-per-tick constraint observed during Cargo Ship testing.

### Success Conditions
- [ ] [[entities/followRoute EXP payload creates a single persistent State holding a waypoint array]]
- [ ] [[entities/State ticks off waypoints sequentially via paths.shift() on resolution]]
- [ ] [[entities/State self-resolves and discards when paths.length === 0]]
- [ ] [[entities/ENTITY.setup() is preset-driven via this.type — geomarker variant nulls non-spatial components]]
- [ ] [[entities/V8 hidden class monomorphism preserved — all ENTITY instances share identical object shape]]
- [ ] [[entities/Hot-path methods (processStates, processExp, processDay) gate on this.type with early return]]
- [ ] [[entities/followRoute dummy test: 3 geomarker-typed entities resolved sequentially without queue parsing]]

### Failure Conditions
- [ ] [[entities/Regression in core physics A/T targeting loop]]
- [ ] [[entities/Legacy MAGPIE_ENTITY code broken by ECS decoupling]]

---

## Intelligence Context

This mission is the formalized implementation of the architectural consensus reached during session edce653e-42b8-46ed-8787-cf720c75fb21 between Elvin Lambert (ADVISOR) and the user.

### Source Doctrine
- **CCG Pipeline Mechanics**: `OP_001/runtime_pipeline_mechanics.md` — Debate F (Active Tasks as States) and Edge Case 1 (Sequential Waypoints with Dependencies).
- **Friction 7 Resolution**: `OP_001/friction_7_report.md` — Carrier/Dial model for S0 EXP maturation.
- **Handoff Context**: `MAGPIE_Server/tmp/handoff_claude.md`

### Packages
- [ ] [[entities/ECS-Entity-Decoupling]]
- [ ] [[entities/followRoute-State-Generator]]

---

## Technical Context

### Linchpins
- [!] [[geopolitics/JS_OOP_Prototype_Parity]] (1:1 prototype mapping enforces parity. Use OOP prototypes as the scaffold — no hand-rolled schema checks needed.)
- [!] [[geopolitics/POVART_Array]] (Geomarkers need only a valid POVART array. Do not add any other system overhead.)

### Vulnerabilities
- [?] [[geopolitics/Legacy_MAGPIE_ENTITY_Consumers]] (Any code that natively expects `.states`, `.traits`, or `.currentHP` on all entities will break if we gut the base prototype. Use a dedicated MAGPIE_GEOMARKER to isolate the risk.)
- [?] [[geopolitics/Invalid_Waypoint_ID_Mid-Route]] (Decision pending: skip-and-continue vs. hard-fail into Fatigue.)

---

## Tasks

- [ ] Define `MAGPIE_GEOMARKER` prototype in `main.js` (POVART only, no rigid-body components).
- [ ] Implement `followRoute` EXP emote payload schema: `{ type: "followRoute", paths: [entityID, ...] }`.
- [ ] Implement `processStates` resolution logic for `followRoute` State: seek `paths[0]`, on arrival `paths.shift()`, on empty: resolve/discard State.
- [ ] Write dummy integration test: 3 sequential geomarkers, verified sequential A/T targeting.
- [ ] Verify no regression in existing entity physics loop.

---

## Execution Logs

### [2026-04-18]
- Mission created by Elvin Lambert (ADVISOR) following session review of OP_001 Phase 2 planning.
