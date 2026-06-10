---
type: DOCTRINE
version: 0.1.4 2026-04-18
status: OPERATIONAL
tags: [doctrine, orchestration, workflow, standards]
---

# Operational Orchestration Protocol

**Purpose**: This doctrine codifies the deterministic 9-step lifecycle of the HASTAL assignment hierarchy, ensuring consistency across all **ASSIGNMENTS** and **MISSIONS**.

---

## 📐 Orchestration Workflow

### Phase I: Scaffolding
**Responsible Agent**: `[DISPATCHER]`
1. **Directory Foundation**: Create the **ASSIGNMENT_xxx** folder scaffold within the appropriate tier directory (e.g., `06_DISPATCH/03_ASSIGNMENT/`).
2. **Assignment Mapping**: Generate the **ASSIGNMENT** `ASSIGNMENT_xxx.md` document using the [[../../../../.agents/templates/operational/ASSIGNMENT|ASSIGNMENT Template]].
3. **Mission Scaffolding**: Generate the **MISSION** `MISSION_xxx.md` document using the [[../../../../.agents/templates/operational/MISSION|MISSION Template]].

### Phase II: Preparation & Analysis
**Responsible Agent**: `[ANALYST / DISPATCHER]`
4. **Context Extrapolation**: Ingest active workspace context to populate the necessary properties (urgency, gravity, success conditions, packages) within the scaffolding.
5. **Phase Escalation (PREP)**: Escalate the prepared material for validation.
    - **To User**: Create a temporary artifact for review and discussion.
    - **To Escalation Agent**: Dispatch a high-fidelity summary to the assigned supervisor.

### Phase III: Briefing
**Responsible Agent**: `[COORDINATOR]`
6. **Briefing Coordination**:
    - Finalize material gathering.
    - Assign specific duties to all participants.
    - Invoke participants and distribute materials/checklists.

### Phase IV: Deployment & Monitoring
**Responsible Agent**: `[MONITOR / DISPATCHER]`
7. **Operational Dispatch**:
    - Dispatch agents to their respective targets.
    - Monitor overall **ASSIGNMENT** progress in real-time.
    - Respond to telemetry queries and route signal requests.
    - Escalate intermediate SITREPs and friction reports.
8. **Outcome Handling**:
    - Evaluate mission success/failure against conditions.
    - Coordinate mission-level debriefings.
    - Update the global progress pool and intelligence memory.

### Phase V: Closure & Debriefing
**Responsible Agent**: `[ARCHIVIST / COORDINATOR]`
9. **Finalization**:
    - Coordinate **ASSIGNMENT** closure and comprehensive debriefing.
    - Manage agent and resource release (context purging).
    - Archive material into `10_ARCHIVE/` or relevant long-term vaults.
    - Coordinate post-operational learning opportunities and wiki updates.

---

## 📏 Operational Standards

- **Strictness**: `ENFORCED` (Assignments are dictated by these rules).
- **Transparency**: `CLEAR` (Documents must follow the established schema).
- **Persistence**: `ESCALATE` (Always pause and report back upon unexpected failure).

---
*Grounding: UNICODEX | Operational Doctrine*
