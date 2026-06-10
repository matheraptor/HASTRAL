---
keyID: 1713281265000
type: concept
version: 0.1.0
status: draft
tags: [operations, memory, architecture, magpie, gateway]
origin: [1713281250000]
legacy: []
composition: []
composite: []
taxonomy: topics/operations/memory
---

# MAGPIE KEY Architecture

**Summary**: A hybrid knowledge web architecture combining a Notion-like UI with a Karpathy-style Markdown wiki through deterministic semantic linking.
**Sources**: KarpathyWiki_to_MAGPIE_KEY.md
**Last updated**: 2026-04-16

---

The **MAGPIE_KEY Architecture** is a highly structured database pattern designed to provide a "Navigable Map of Meaning" for both humans and AI agents. It bridges the gap between visual databases (like Notion) and text-based agent wikis (like Andrej Karpathy's LLM Wiki).

## Core Principles

Instead of relying on vector search or traditional Graph RAG for navigation, MAGPIE_KEY uses **Direct ID Mapping**. Every node in the database is assigned a unique numerical ID, preventing the need for brute-force text searches or fuzzy matching.

## The "Four-Pillar" Semantic Compass

A standard MAGPIE_KEY object replaces basic "parent/child" relations with a four-way structural model:

1. **`origin`** (Logical Upstream): What the key comes from, requires, or stems from (e.g., precursors, unlocks).
2. **`legacy`** (Logical Downstream): What the key leads to or evolves into.
3. **`composition`** (Physical Downstream): The integral components or parts the key is made of.
4. **`composite`** (Physical Upstream): The larger structure, assembly, or host the key belongs to.

This creates an explicit Hyper-graph. An AI agent does not have to guess whether an "Aircraft" _causes_ "Wings" or _is made of_ them; the distinction is explicitly modeled.

## Virtual Wiki Gateway

For AI agents like Claude Code to navigate this database efficiently, the architecture employs a **Virtual Wiki Gateway**:

- A Node.js and Better-SQLite3 backend stores the keys.
- When an AI agent requests context for a key, the backend generates a virtual Markdown file on demand.
- The four relational arrays are converted into standard `[[Markdown Links]]`.
- The AI can then "surf" the database by following links, simulating a traditional Markdown wiki while backed by a powerful relational database.

## Related pages

- [[]]
- [[]]

