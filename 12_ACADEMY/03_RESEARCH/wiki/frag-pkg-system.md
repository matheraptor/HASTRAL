# FRAG & PKG System

**Summary**: The hierarchical unit of work used for tasking and code organization.
**Sources**: (source: CONVENTIONS.md)
**Last updated**: 2026-04-15

---

HASTRAL decomposes work into standardized units to ensure precise tracking and execution.

## Definitions

- **FRAG (Fragment)**: A specific task or mission unit.
  - **Format**: `FRAG-###`
- **PKG (Package)**: A collection of related FRAGs or code modules.
  - **Format**: `PKG-###`

## Conditionals

Within FRAGs, two specific conditions are used to track success and risk:

- **LYNCHPIN**: A critical condition that **must be met** for the FRAG to be completed.
  - _Format_: `- [ ] LYNCHPIN: [condition]`
- **VULNERABILITY**: A condition that **must be avoided** for the FRAG to remain valid.
  - _Format_: `- [ ] VULNERABILITY: [condition]`

## Related pages

- [[operational-conventions]]
- [[terminology-index]]
