---
status: "#canon"
author: matheraptor
tags: ["#active", "#hierarchy"]
---

# OPERATIONAL HIERARCHY

**Version**: 1.0  
**CTZ**: 202604081100Z  
**Status**: CANONIZED  
**Scope**: Mission Planning & Execution Framework

---

## 1. HIERARCHY STRUCTURE

The operational framework defines five levels of activity, each mapped to a specific purpose type:

| LEVEL     | PURPOSE   | DEFINITION                                      |
| --------- | --------- | ----------------------------------------------- |
| STEP      | FUNCTION  | Atomic action with a single executable function |
| TASK      | INTENT    | Sequence of steps achieving a single intent     |
| MISSION   | OBJECTIVE | Collection of tasks achieving an objective      |
| OPERATION | GOAL      | Collection of missions achieving a goal         |
| CAMPAIGN  | DOCTRINE  | Collection of operations aligned to doctrine    |

---

## 2. SINGLE PURPOSE RULE

**Core Principle**: Each level has ONE and ONLY ONE purpose of its type.

- **STEP** → ONE FUNCTION
- **TASK** → ONE INTENT
- **MISSION** → ONE OBJECTIVE
- **OPERATION** → ONE GOAL
- **CAMPAIGN** → ONE DOCTRINE

**Rationale**: Prevents scope creep and maintains clarity. If an activity requires multiple purposes at the same level, it must be fragmented into separate entities.

---

## 3. FRAGMENTATION LOGIC

### Example 1: Single Task

**Scenario**: Need 4 steps to achieve X  
**Structure**:

- **TASK** (INTENT: X)
  - STEP 1 (FUNCTION: A)
  - STEP 2 (FUNCTION: B)
  - STEP 3 (FUNCTION: C)
  - STEP 4 (FUNCTION: D)

### Example 2: Mission with Multiple Tasks

**Scenario**: Need 4 steps for X + 4 steps for Y to achieve Z  
**Structure**:

- **MISSION** (OBJECTIVE: Z)
  - **TASK 1** (INTENT: X)
    - STEP 1-4
  - **TASK 2** (INTENT: Y)
    - STEP 5-8

---

## 4. PACKAGE (PKG) DEFINITION

**PKG** = Self-contained meta-asset pool

**Composition**:

- Entities (agents, systems, tools)
- Documentation (specs, guides, references)
- Support coordination (roles, protocols, interfaces)

**Relationship to Hierarchy**:

- PKG is **NOT** a level in the hierarchy
- PKG is assigned to MISSION (TASK) for resource availability
- TASK ≠ PKG (TASK is activity, PKG is capability)

**Assignment Model**:

- PKGs are assigned to MISSION (TASK)
- Tasks within that MISSION can draw on ANY assigned PKG
- Coordination: Automatic (asset matching) or Manual (direct order)

**Example**:

```
MISSION: ADELE.phase1 is GO
├─ Assigned PKGs: PKG-001, PKG-009, PKG-014, PKG-016
└─ TASK: Implement Agentgateway
   └─ Can utilize: Any of the 4 assigned PKGs
```

---

## 5. CONDITIONS

**CONDITION** = External validation gate (not internal purpose)

### 5.1 Condition Types

From the **Condition's perspective**:

- **LYNCHPIN**: What activity depends on (enables success)
- **VULNERABILITY**: What can cause activity to fail (blocks success)

### 5.2 Two-Way Relation

From the **Activity's perspective**:

- **SUCCESS CONDITION** → references → **LYNCHPIN**
- **FAILURE CONDITION** → references → **VULNERABILITY**

### 5.3 Operational Terminology

Use **LYNCHPIN** and **VULNERABILITY** directly.  
SUCCESS/FAILURE framing is relational metadata (database schema), not operational terminology.

### 5.4 Example

**MISSION**: ADELE.phase1 is GO

- **LYNCHPIN**: PKG-009 (Agentgateway) is operational
- **VULNERABILITY**: npm dependency freeze unresolved

---

## 6. HASTRAL IMPLEMENTATION

### 6.1 Current Mapping

| UNICODEX Term | HASTRAL System | Description                       |
| ------------- | -------------- | --------------------------------- |
| MISSION       | TASK (MISSION) | Fragmentary Order (operations)    |
| TASK          | Task (JSON)    | Task entry in `currentTASKS.json` |
| PKG           | PKG-XXX        | Package identifier                |

### 6.2 TASK Structure

**MISSION** = MISSION level

- **Objective**: Single objective statement
- **Assigned Packages**: List of PKG-IDs available for tasking
- **Tasks**: Array of work items with INTENT
- **Priority**: STRATEGIC → DIRE → CRITICAL → SIGNIFICANT → NOMINAL
- **Gravity**: TACTICAL → VITAL → SEVERE → PRESSING → IMPORTANT → TRIVIAL

### 6.3 Example TASK

```json
{
  "019": {
    "objective": "ADELE.phase1 is GO",
    "package": "Multiple",
    "assigned_packages": [
      "PKG-001",
      "PKG-009",
      "PKG-011",
      "PKG-012",
      "PKG-013",
      "PKG-014",
      "PKG-015",
      "PKG-016",
      "PKG-017"
    ],
    "tasks": [
      {
        "id": "019-01",
        "description": "PKG-011: Set up Apriel Cloud API",
        "intent": "Establish cloud reasoning capability"
      }
    ]
  }
}
```

---

## 7. AUTHORITY MODEL

### 7.1 Governance Fields

Every MISSION must specify:

| Field     | Description                              | Example                       |
| --------- | ---------------------------------------- | ----------------------------- |
| COMMAND   | Who issued the mission                   | CDR V. McLane (user)          |
| EXECUTION | Who is authorized/responsible to execute | C38-HAREM (user)              |
| AUTHORITY | Authority restriction type               | RESTRICTED / DELEGATED / OPEN |

### 7.2 Authority Types

**RESTRICTED**: Execution limited to specific person/entity

- Use for: Sensitive operations, user-only tasks, classified work
- Example: "RESTRICTED to COMMAND" (only issuer can execute)

**DELEGATED**: Execution authorized to specific role/team

- Use for: Team-based work, role-specific capabilities
- Example: "DELEGATED to DISPATCHER" or "DELEGATED to CURATOR_TEAM"

**OPEN**: Any authorized agent with capability may execute

- Use for: General maintenance, routine operations, collaborative tasks
- Example: "OPEN to all HASTRAL agents"

### 7.3 Example MISSION with Authority

```json
{
  "024": {
    "package": "PKG-012",
    "objective": "ENTERPRISE Roster is GO",
    "command": "CDR V. McLane (user)",
    "execution": "C38-HAREM (user)",
    "authority": "RESTRICTED",
    "priority": "IMMEDIATE",
    "gravity": "VITAL"
  }
}
```

---

## 8. ANTI-PATTERNS

### 8.1 Multiple Purposes

❌ **WRONG**: TASK with 2 intents  
✅ **CORRECT**: 2 TASKs, each with 1 intent

### 8.2 Confusing PKG with TASK

❌ **WRONG**: "RoboEmote is a package in MISSION-019"  
✅ **CORRECT**: "RoboEmote tasks are in MISSION-019, utilizing assigned packages"

### 8.3 Success/Failure as Condition Names

❌ **WRONG**: "SUCCESS CONDITION: Agentgateway operational"  
✅ **CORRECT**: "LYNCHPIN: Agentgateway operational"

### 8.4 Missing Authority Fields

❌ **WRONG**: MISSION without COMMAND/EXECUTION/AUTHORITY  
✅ **CORRECT**: All missions specify who commands and who executes

---

**Status**: CANONIZED  
**Action**: Apply to all Mission Planning and Execution workflows.
