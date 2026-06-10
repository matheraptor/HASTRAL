---
type: doctrine
version: 0.1.4 2026-04-18
status: draft
tags: [logging, convention, workspace, infrastructure]
---

# Workspace Logging Convention

All major technical operations, infrastructure repairs, or significant research sessions must be documented in a **Workspace Log**. This ensures technical transparency and provides a traceable audit trail for future agents and users.

## 1. File Metadata
All log files must be stored in a date-stamped directory within the `logs/` root (e.g., `logs/YYYYMMDD/`) and use the following naming convention: `session_log_YYYYMMDDHHMM.md`.

Required YAML:
```yaml
---
type: workspace_log
version: 0.1.x [Date]
tags: [topic1, topic2, ...]
---
```

## 2. Structure
The document body must follow a strict **Task/Outcome** matrix to ensure clarity.

### Header
`# [Operation Name] Log (YYYY-MM-DD)`

### Entry format
Each discrete operation or shell command execution must be logged as follows:

```markdown
- [x] **TASK**: [Brief goal of the command]

     ```powershell
     [The exact command(s) executed]
     ```

     **Outcome**: [Direct result of the operation, including successes or fatal errors]
```

## 3. Best Practices
- **Atomic Logs**: One task per entry. Do not group unrelated commands.
- **Literal Code**: Always include the exact shell command used.
- **Fatal Error Tracking**: If a command fails, include the error code and the resulting diagnosis.
- **Traceability**: Link to any relevant Missions or Operations in the YAML or intro text.
