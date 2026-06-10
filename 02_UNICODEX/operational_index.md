---
type: index
version: 0.1.2 2026-04-18
status: draft
tags: [index, unicodex, doctrine, standards]
---

# UNICODEX: Operational Doctrine

This directory serves as the centralized **Operational Doctrine** for the HASTRAL/MAGPIE ecosystem. It defines the hierarchy, standards, and protocols for all mission-based work.

## 1. Version History

| Version | Date | Changes |
| :--- | :--- | :--- |
| **0.1.4** | 2026-04-18 | Integrated Git Sync Audit protocol (git-sync-audit) to prevent infrastructure stalls. |
| **0.1.3** | 2026-04-18 | Added Workspace Logging convention based on infrastructure repair logs. |
| **0.1.2** | 2026-04-18 | Initial modularization. Integrated Doctrine into UNICODEX. Renamed from TWF. |
| **0.1.1** | 2026-04-16 | Established centralized Dispatch and naming conventions. |
| **0.1.0** | 2026-04-15 | Initial structural draft (Monolithic). |

## 2. Modular Standards

Use only relevant ones, to avoid context bloat.

- [[operational_doctrine/hierarchy.md]]: The 5 levels of decomposition (Doctrine to Step). **Use when planning, or building operational structure**
- [[operational_doctrine/status.md]]: Standard status markers synced 1:1 with Notion Global History. **Use when updating status**
- [[operational_doctrine/naming_conventions.md]]: ID prefixes and folder structure definitions. **Use when creating new files or folders**
- [[operational_doctrine/metadata_schema.md]]: 1:1 Frontmatter and Body integration rules with the Notion Global History database. **Use when updating Notion Global History**
- [[operational_doctrine/workspace_logging.md]]: Standardized format for technical audit logs and shell command history. **Use when logging workspace-wide sessions during /session-review**
- [[operational_doctrine/git_sync_audit.md]]: Pre-flight protocols for repository integrity and submodule health. **Use when performing manual git operations**
- [[fileSystemIO/agent_io_standards.md]]: Strict definitions for the Artifact vs Repository file dichotomy and safed path discovery rules. **Use when generating or auditing project files**

---

> [!NOTE]
> All missions and operations MUST adhere to these standards to ensure seamless synchronization between local workspace state and the Notion Global History database.
