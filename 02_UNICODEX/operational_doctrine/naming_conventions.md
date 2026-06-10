---
type: doctrine
version: 0.1.2 2026-04-18
status: draft
tags: [naming, doctrine, standards]
---

# Naming & Directory Standards

Consistent naming ensures that files remain searchable and logically connected across the local environment and the Notion bridge.

## 1. Identifiers (IDs)
The core anchor for any operation or mission is the globally recognized **`eventID`**.

- **eventID**: Globally unique timestamp in milliseconds. **Format**: `Date.now()` (e.g., `1713623000000`).
- **File Handle**: Typed prefix followed by the eventID. **Format**: `[TYPE]_[eventID].md` (e.g., `ASSIGNMENT_1713623000000.md`, `MISSION_1713623000001.md`).

## 2. Directory Structure

### Operations
Every operation has a dedicated root folder:
`projects/HASTRAL/06_DISPATCH/03_OP/OP_[opID]/`

### Missions
Missions are nested within their parent operation:
`projects/HASTRAL/06_DISPATCH/03_OP/OP_[opID]/M-[fragID]/`

- **Primary Index**: `MISSION_M-[fragID].md`
- **Assets Folder**: `./assets/`

## 3. Skills and Tools
When naming tools, skills, or workflows, always use **hierarchy-first** prefixes (e.g., `mcp-deploy-tool` rather than `deploy-mcp-tool`). Because the IDE and chat interfaces autocomplete character-by-character, front-loading the categorical hierarchy (like `mcp-` or `db-`) instantly filters the UI menu to related capabilities and avoids verb-bloat.
