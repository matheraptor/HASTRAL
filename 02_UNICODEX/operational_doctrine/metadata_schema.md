---
type: doctrine
version: 0.1.2 2026-04-18
status: draft
tags: [schema, metadata, doctrine, notion]
---

# Notion Schema Parity (Metadata)

All Operation and Mission files are structured around an internal **Event Prototype**, mirroring the Notion Global History schema. To maintain 1:1 synchronization capability, information is distributed strictly according to the following matrix.

## 1. Global Event Properties

Universal properties inherited by every mission or operation. **Source of Truth: YAML Frontmatter.**

| Property Category | Integration Strategy |
| :--- | :--- |
| **Event Name** | Map `name:` in frontmatter to the `# H1` header in document body. |
| **Unique ID** | Map `eventID:` in frontmatter to the filename timestamp. **Format**: `Date.now()`. |
| **Event Type** | Map `type:` in frontmatter only. |
| **Event Status** | Map `status:` in frontmatter only. |
| **Date** | Map `date:` in frontmatter only. |
| **Hierarchy** | `parent:` links to parent `eventID` in frontmatter. |
| **Location** | Map `location:` in frontmatter only (links to `geopolitics/` wiki). |
| **Sides Involved** | Map `sides_involved:` in frontmatter only (links to `geopolitics/` wiki). |

## 2. Type-Specific Extensions (Missions & Operations)

Properties specific to tactical deployment. **Source of Truth: YAML Frontmatter.**

| Property Category | Integration Strategy |
| :--- | :--- |
| **Tactical Priority** | 1:1 matching in frontmatter (`gravity:`, `urgency:`, `ambiguity:`). |
| **Execution Target** | Map `target:` in frontmatter. |
| **Objective Assets** | Body sections referencing `Packages` link to `entities/` wiki. |
| **Strategic Risk** | Body sections referencing `Linchpins` / `Vulnerabilities` link to `geopolitics/` wiki. |
| **Event Chaining** | Map `cause:` and `consequence:` in frontmatter only. |

## 3. Emergent Rollups

- **Nation**: Derived dynamically via established wiki interlinking between `Location` and `geopolitics/`. No manual mapping required.

## 4. Frontmatter Versioning Protocol

Apply frontmatter versioning (`version: [num] [date]`) to new or edited markdown files. Use this version specifically to identify "stale" documents and assess validity based on status, interval between the version and now, and relevance in current context. If an instruction document or crucial source is `status: draft` or is > 30 days old, you must bring it to the attention of the user before executing logic against it.
