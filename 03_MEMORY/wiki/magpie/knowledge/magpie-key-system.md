# MAGPIE_KEY: Atomic Knowledge System

**MAGPIE_KEY** is the fundamental data structure for the MAGPIE Knowledge Base (KB). It represents knowledge as a modular, atomic, and relational graph within the server database.

## 🔑 Key Structure
Each knowledge atom (Key) is defined by a unique ID and a set of relational vectors.

| Property | Type | Description |
| :--- | :--- | :--- |
| **keyID** | `Number` | Unique identifier generated via `Date.now()`. |
| **type** | `Enumerator` | The classification of the data atom. |
| **label** | `String` | A short descriptor used for indexing and text searches. |
| **origin** | `keyID[]` | The source keys this key evolved from. |
| **component** | `keyID[]` | The sub-keys that make up this key. |
| **legacy** | `keyID[]` | The future keys this key evolves into. |
| **compound** | `keyID[]` | The parent keys that this key is a component of. |

## 🕸️ Relational Logic
The system is inherently bidirectional. Knowledge is not a flat file but a node in a hierarchical tree:
- A key's **origin** is another key's **legacy**.
- A key's **component** is another key's **compound**.

## 🧠 S5 Knowledge Retrieval
When the Agentic OS (S5) requires grounding, it traverses the graph:
1.  **Entry Point**: S5 identifies a `keyID` or `label` linked to a Trait Card or Experience.
2.  **Atom Extraction**: Fetches the core data of the target key.
3.  **Graph Traversal**: 
    - **Upward**: Checks `compound` for broader context.
    - **Downward**: Checks `component` for granular implementation details.
    - **Lateral**: Checks `origin`/`legacy` for versioning and evolutionary history.

## ⚖️ Implementation Rules
- **No Redundancy**: Information should be broken down into the smallest possible atoms.
- **Relational Integrity**: Every link must be validated bidirectionally.
- **Atomic Evolution**: Instead of editing a key's core logic, create a new key and link it via `legacy`.

## 🧩 Axiom Context Pattern
`AXIOM` keys (type 0) can be used to inject ephemeral metadata (like `handIndex` or origin context) into `MAGPIE_EXP.keys` without altering the `EXP` schema. This enables high-performance metadata passing by pre-registering index-mapping keys, avoiding object churn during engine ticks.
