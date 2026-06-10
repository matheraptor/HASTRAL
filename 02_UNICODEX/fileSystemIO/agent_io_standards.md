---
type: doctrine
version: 0.1.0 2026-04-18
status: active
tags: [FileSystem, IO, Doctrine, Standards, Agents]
---

# Agent File System I/O Standards

Consistent, standard boundaries around File System I/O ensure operational sanity and prevent context bleed or artifact corruption during complex logic payloads.

## 1. The File Writing Dichotomy

The native IDE file-writing utilities inherently cross-pollinate ephemeral session artifacts with permanent operational workspaces. To maintain an airgap, all file writes must strictly adhere to the following logic constraint:

- **Session Memory / Ideation**: When tracking ephemeral checklists, walkthroughs, or active-session documentation, you **MUST** use the `mcp_hastral-mcp-server_create_artifact` tool. This restricts data strictly to the localized `.gemini/` instance bounds.
- **Codebase / Operations Delivery**: When deploying permanent mission reports, executing codebase integration, or writing persistent configurations to the project repository, you **MUST** use the custom `mcp_write_repo_file` tool.

The native `write_to_file` command is officially deprecated to prevent the `IsArtifact` boolean trap.

## 2. Safed Path Discovery

Agents must orient themselves geographically using deterministic, headless tools rather than blind, logic-breaking system shells.

- **Terminal Hubris (`dir` / `grep`) is Banned**: Utilizing `run_command` in powershell to blindly iterate filesystem roots (`dir /s /b`) represents an architectural failure resulting in ParameterBindingExceptions and operational lock-up.
- **Local Protocol**: If path semantics are needed, strictly utilize the hierarchical `mcp-path-resolver` capabilities, which hybridize raw local folder traversal securely capped by maximum-depth limiters, feeding results to a fast, non-agentic semantic headless gate.

Adhering to these structured bridges stabilizes inference overhead and enforces the Standard Architecture logic model.

## 3. Markdown Formatting & Linking

To ensure workspace portability and high-fidelity navigation between Wiki nodes, Assignments, and Missions, all internal document references must utilize a clinical relative-path naming convention.

- **Standard Syntax**: All internal links must follow the format: **`[document/file name](relative/path/to/file.ext)`**.
  - *Example*: `[Modular Design](../../03_MEMORY/wiki/concepts/modular_design.md)`
- **Portability Requirement**: Absolute file paths (e.g., `C:\Users\...`) are strictly discouraged for cross-document references.
- **Handle Parity**: The document name inside the brackets should ideally align with the filename or the `eventID` for taxonomic consistency.
