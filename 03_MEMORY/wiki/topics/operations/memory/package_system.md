---
keyID: 1713281230000
type: concept
version: 0.1.0
status: draft
tags: [operations, memory, logistics, packaging, frag]
origin: [1713281200000]
legacy: []
composition: []
composite: []
taxonomy: topics/operations/memory
---

# Package (PKG) System

**Summary**: Definition and management of self-contained meta-asset pools and hierarchical units of work (FRAGs).

**Sources**: (source: OPERATIONAL_HIERARCHY.md), (source: CONVENTIONS.md)

**Last updated**: 2026-04-16

---

## 1. Resource Packaging

A **PKG (Package)** is a self-contained meta-asset pool that provides capabilities to operational activities. It is a resource assignment, not a level in the operational hierarchy.

### Composition

A PKG consists of:

- **Entities**: Agents, systems, and tools.
- **Documentation**: Specifications, guides, and references.
- **Support Coordination**: Roles, protocols, and interfaces.

### Assignment Model

PKGs are assigned to a **MISSION** (or specific **TASK**) to ensure resource availability.

- **Resource Pool**: Tasks within a MISSION can draw on any PKG assigned to that MISSION.
- **Distinction**: A TASK is an _activity_ (what is being done), while a PKG is a _capability_ (the tools/knowledge used to do it).

---

## 2. Execution Units (FRAGs)

HASTRAL decomposes work into standardized units to ensure precise tracking and execution.

- **FRAG (Fragment)**: A specific task or mission unit.
  - **Format**: `FRAG-###`
- **PKG (Package)**: Also used as a collection of related FRAGs or code modules.
  - **Format**: `PKG-###`

### Conditionals & Guardrails

Within FRAGs, two specific conditions are used to track success and risk:

- **LYNCHPIN**: A critical condition that **must be met** for the FRAG to be completed.
  - _Format_: `- [ ] LYNCHPIN: [condition]`
- **VULNERABILITY**: A condition that **must be avoided** for the FRAG to remain valid.
  - _Format_: `- [ ] VULNERABILITY: [condition]`

---

## Related Pages

- [[]]
- [[]]
- [[]]

