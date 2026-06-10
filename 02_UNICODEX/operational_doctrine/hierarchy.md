---
type: doctrine
version: 0.1.2 2026-04-18
status: draft
tags: [hierarchy, doctrine, standards]
---

# Operational Hierarchy

Work is decomposed into five distinct levels of abstraction to ensure clarity and modularity.

## 1. DOCTRINE (Guideline)

The high-level rules of engagement, standards, and principles.

- **Example**: `UNICODEX/`, `AGENT.md`.
- **Purpose**: Grounding the agent and user in a shared philosophy.

## 2. OPERATION (Outcome)

A significant objective defined by desired outcomes.

- **Folder**: `projects/HASTRAL/06_DISPATCH/03_OP/OP_[opID]/`
- **Document**: `OP_[opID]_plan.md`
- **Purpose**: Tracking a high-level "Epic" or Project.

## 3. MISSION (Objective)

A standalone package of work targeting a specific objective.

- **Folder**: `M-###/` (Inside the operation folder)
- **Document**: `MISSION_[id].md`
- **Purpose**: Tactical execution unit.

## 4. TASK (Goal)

A specific goal or milestone within a Mission.

- **Format**: Markdown checklist item (`- [ ]`).
- **Purpose**: Discrete, trackable unit of accomplishment.

## 5. STEP (Instruction)

Granular, tactical instructions or sub-tasks required to achieve a Task.

- **Purpose**: Technical details for immediate execution.
