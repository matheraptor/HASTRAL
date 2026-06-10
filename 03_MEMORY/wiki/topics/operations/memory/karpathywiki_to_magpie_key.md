---
keyID: 1713281250000
type: concept
version: 0.1.0
status: draft
tags: [operations, memory, magpie, wiki, transition]
origin: [1713281200000]
legacy: []
composition: []
composite: []
taxonomy: topics/operations/memory
---

# KarpathyWiki to MAGPIE KEY

**Summary**: A conversation about transitioning a Notion-based database into a Karpathy-style Markdown wiki optimized for AI agents using the MAGPIE_KEY architecture.

**Sources**: KarpathyWiki_to_MAGPIE_KEY.md

**Last updated**: 2026-04-16

---

The source document outlines the design of the [[]], a hybrid "Knowledge Web" that merges a visual Notion-like UI for humans with a Markdown-based wiki optimized for AI agents like Claude Code.

Instead of relying on vector embeddings and traditional Graph RAG, the system uses a deterministically structured JSON object called a MAGPIE_KEY to model relationships.

The core architecture relies on four relational arrays (the semantic compass):

- **origin**: Logical Upstream (where meaning comes from; precursors)
- **legacy**: Logical Downstream (what this key leads to; evolutions)
- **composition**: Physical Downstream (what the key is made of; components)
- **composite**: Physical Upstream (the larger whole the key belongs to; host)

The system uses a Node.js and Better-SQLite3 backend that translates these SQLite entries into virtual Markdown pages on-the-fly, allowing the AI to "walk" the knowledge graph by following explicit numeric IDs.

## Related pages

- [[]]
- [[]]

