---
title: Notion Integration & Block-Atomic Storage
description: Design for a Notion-like second brain within the MAGPIE database.
tags: [Notion, Architecture, Sync, Blocks]
---

# Notion Integration & Block-Atomic Storage

This module defines the integration between the external Notion workspace and the local `MAGPIE_DATABASE` "Second Brain."

## Core Philosophy

### 1. Staggered ID Generation
We use `Date.now()` as a safe Numeric ID. Since the creation process is staggered (single-threaded), collisions are mathematically improbable, providing a clean chronological anchor for all entries.

### 2. Soft Deletion (Archiving)
**Rule: [CORE-001] No Delete, Add Only.**
Records are never deleted from SQLite. Instead, an `archived: 1` flag is set. This preserves foreign key integrity and historical links permanently.

### 3. Block-Atomic Storage
Content is shredded into a `blocks` table:
- Every paragraph, header, or task is a unique row.
- **Shredder**: Converts Markdown/Notion-JSON to atomic block rows.
- **Stitcher**: Reassembles blocks into a coherent document for the UI.

## The Hybrid Format
- **Storage**: JSON-structured blocks (power/meta).
- **Interface**: Markdown (writing speed/compatibility).

## Sync Strategy: Cloud-First
To avoid the dangers of overwriting the server file (merge conflicts), the server remains the single **Source of Truth**. Interaction occurs via the **Ticket System**, ensuring strictly ordered state updates across all clients.
