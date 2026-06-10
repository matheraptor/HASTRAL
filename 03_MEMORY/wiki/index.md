---
keyID: 1713280000000
type: index
version: 0.2.0
status: stable
tags: [index, home]
origin: []
legacy: []
composition: [1713280500000, 1713281500000, 1713281700000, 1713281850000, 1714145744000]
composite: []
taxonomy: root
---

# HASTRAL Wiki (High-Fidelity Agentic Strategic Tactical Retrieval & Analysis Logic)

**Summary**: A Karpathy-style Markdown wiki designed as a primary knowledge retrieval layer for AI agents, featuring a logical taxomix tree and deterministic semantic bridging.

---

## 🏛️ Knowledge Topics

### [[topics/operations/troubleshooting/index|Troubleshooting]]

**Purpose**: Diagnosis and resolution for common development environment issues.
_Articles_: [[topics/operations/troubleshooting/vscode-drag-drop-freeze|VS Code Drag-and-Drop Freeze]], [[topics/operations/troubleshooting/vscode-gpu-acceleration|VS Code GPU Acceleration]], [[topics/operations/troubleshooting/task-update-schema-validation|TaskUpdate Schema Validation]], [[topics/operations/troubleshooting/claude-code-webfetch-hang|Claude Code WebFetch Hang]], [[topics/operations/troubleshooting/sqlite-fts5-corruption|SQLite FTS5 Corruption]], [[topics/operations/troubleshooting/sqlite-corruption-recovery|SQLite Corruption Recovery]].

### [[topics/codecraft/physics/index|Physics]]

**Purpose**: 3D rotation, geometric algebra, and rotor mechanics.
_Articles_: [[topics/codecraft/physics/geometric-algebra-rotors|Geometric Algebra Rotors]], [[topics/codecraft/physics/rotor-roll-snapping|Rotor Roll Snapping]], [[topics/codecraft/physics/local-vs-global-rotor-operations|Local vs. Global Rotor Operations]], [[topics/codecraft/physics/euler-to-rotor-conversion|Euler to Rotor Conversion]].

### [[topics/operations/markdownlint/index|Markdownlint]]

**Purpose**: Markdown style checking and linting tool documentation.
_Articles_: [[topics/operations/claude_code/containerization_overview|Overview]], [[topics/research/technical/index|Rules Index]], [[topics/operations/markdownlint/md036|MD036]].

### [[topics/foundation/index|1. Foundation]]

**Purpose**: Core identity, ethical constraints, and operational standards.
_Articles_: Ethics, Standards, [[markdown-admonitions|Markdown Admonitions]], Glossary.

### [[topics/operations/hardware/index|Hardware]]

**Purpose**: Troubleshooting and diagnostics for physical hardware components.
_Articles_: [[topics/operations/hardware/microsd-failure-diagnostics|microSD Failure Diagnostics]].

### [[topics/operations/security/index|Security]]

**Purpose**: System audits, post-mortems, and doctrine maintenance.
_Articles_: [[session_friction_audit|Session Friction Audit]], [[session_post_mortem_doctrine_disconnect|Post-Mortem & Doctrine Disconnect]], [[topics/operations/security/predictable_ids|Predictable IDs]], [[server-security-fundamentals|Server Security Fundamentals]], [[tls-jwt-implementation|TLS & JWT Implementation]], [[topics/operations/security/nwjs-env-exposure|NW.js Env Exposure]].

### [[topics/operations/infrastructure/index|Infrastructure]]

**Purpose**: System insights, environment stability, and optimization path.
_Articles_: [[system_insights_2026_04_20|System Insights 2026-04-20]], [[hastral/pmc/ops/maritime-logistics-may-2026|Maritime Logistics May 2026]].

### [[topics/philosophy/index|3. Philosophy]]

**Purpose**: Theoretical frameworks and first principles.
_Articles_: Metaphysics, [[topics/philosophy/cognition/index|Cognition]].

### [[topics/research/index|4. Research]]

**Purpose**: Experimental findings and technical platform guides.
_Articles_: Technical, [[topics/research/technical/nanotech_realities|Nanotech]], [[magic_turing_complete|MTG Turing Completeness]], [[topics/research/openclaw/index|OpenClaw]], [[topics/research/technical/vlc_slow_boot_fix|VLC Slow Boot Fix]].

### [[topics/codecraft/audio/virtual-singers/index|Virtual Singers]]

**Purpose**: AI-based vocal profiling and singing conversion pipelines.
_Articles_: [[topics/codecraft/audio/virtual-singers/local-svc-frameworks|SVC Frameworks]], [[topics/codecraft/audio/virtual-singers/dataset-creation|Dataset Creation]], [[topics/codecraft/audio/virtual-singers/integration-automation|Integration & Automation]].

_Articles_: [[topics/codecraft/physics/4-00-physics-povart|Physics]], [[topics/codecraft/architecture/index|Architecture]], [[topics/codecraft/worldbuilding/index|Worldbuilding]].

---

## 🏗️ Architecture

**Purpose**: Engine architecture and game systems.

- [[database/database-schema|Database Schema]] - The structural design of entities, components, and their relationships within the database.
- [[database/ecs-resource-system|ECS Resource System]] - An architectural approach treating resources as entities within an ECS structure rather than abstract amounts.
- [[database/fts5-search|FTS5 Search Indexing]] - Optimized text search for large datasets using SQLite virtual tables.
- [[database/sqlite-type-affinity|SQLite Type Affinity & Strict Tables]] - Analysis of SQLite's dynamic typing and the use of STRICT tables to prevent corruption.
- [[database/database-sync-scripts|Database Sync Scripts]] - Administrative tools for pulling/pushing database files between environments.
- [[]] - Using foreign keys and cascading deletes
- [[]] - Self-referential hierarchy logic
- [[topics/codecraft/architecture/lazy-hive-architecture|Lazy Hive Architecture]] - Memory-first ECS caching system with 6 urgency levels
- [[topics/codecraft/architecture/structural-composition|Structural Composition]] - LEGO-like assembly of entities via compound/component relationships
- [[topics/codecraft/architecture/resource-as-entity|Resource-as-Entity]] - Resource optimization mapping types to prototypes and quantities to STATS
- [[topics/codecraft/game-design/deckbuilder-mechanics|Deckbuilder Mechanics]] - Float64Array state buffer and Card-as-Stamina system
- [[topics/research/openclaw/architecture|SQLite3 Architecture]] - Database and PRAGMA optimizations

- [[1-00-architecture-stats-and-states]] - Overview of stats and states architecture
- [[better-sqlite3]] - Sovereign Host and single source of truth
- [[hive-logic]] - Derived stat calculation
- [[magpie-runtime]] - Core engine runtime (Legacy v0.19)
- [[magpie-v20-runtime]] - Redesigned multi-layered heartbeat system (v0.20.0)
- [[magpie/magpie-server-architecture]] - Structural design and HIVE layer architecture of MAGPIE Server
- [[magpie/server/shutdown-hang-resolution|Shutdown Hang Resolution]] - Root cause and worker termination fix for the MAGPIE_HIVE.save() 10% progress hang
- [[magpie/magpie-server-tech-stack]] - Core technologies and integrations of MAGPIE Server
- [[magpie/magpie-server-code-quality]] - Conventions, missing tests, and monolithic core concerns
- [[topics/research/openclaw/index|OpenClaw (Research)]] - Local-first agentic framework blueprints
- [[magpie-entity-structure]] - Dumb-container data schema and V8 shape optimizations
- [[magpie-coordinate-system]] - Spherical spatial logic, sea-level relativity, and z-floor physics
- [[enumstate]] - Buffer for state transitions and UI updates
- [[3-00-architecture-components]] - Technical architecture and component optimization for Shelder Evolution
- [[component-prototype]] - Cold data structure defining immutable component specifications
- [[component-instance]] - Monomorphic hot data structure managing active components
- [[zero-garbage-collection]] - Performance constraints preventing V8 GC stalls
- [[ecs-preset-design]] - High-performance ECS entity initialization maintaining V8 monomorphism
- [[topics/codecraft/architecture/geo-three-tiling|Geo-Three Tiling]] - Data-driven terrain architecture relying on OSM quadtrees and fragment shaders instead of mesh geometry

---

## 🛠️ Maintenance & Utility

- [[topics/foundation/standards/git-commit-standards|Git Commit Standards]] — Standards for commit messages.
- [[topics/operations/cli-commands|CLI Commands]] — Administration, monitoring, and git management commands.
- [[git/pull-requests|Pull Requests]] — Mechanism for peer review, validation, and merging.
- [[log|Wiki Log]] — Record of changes and ingestion.
- [[log|Terminology Index]] — HASTAL-specific glossary.

---

_System Grounding: UNICODEX | MAGPIE_KEY Bridge

## 🌿 Version Control & Project Management

**Purpose**: Git workflows, issue tracking, and repository architecture.

- [[git/git-issues|Git Issues vs Project Issues]] - Distinguishing command-line Git errors from platform project management tickets.
- [[git/github-projects|GitHub Projects]] - Overview of customizable Kanban boards and timeline tools built into GitHub.
- [[git/mmorpg-project-blueprint|MMORPG Project Blueprint]] - Actionable structure and Agent prompt for scaling a solo game development repository.
