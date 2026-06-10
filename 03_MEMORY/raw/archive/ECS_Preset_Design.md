# ECS Preset Design for Entity Initialization

## Context
Migration of `MAGPIE_ENTITY` initialization from subtype-specific prototypes to a flexible, component-based ECS (Entity Component System) architecture.

## Core Constraint: V8 Monomorphism
Entity instances must maintain a consistent "hidden class" in V8 for high-performance physics refresh loops. 
- All component properties (states, traits, inventory, etc.) MUST exist on the prototype.
- If a component is disabled by a preset, it MUST be initialized to a consistent empty/null value (e.g., `[]`, `new Map()`, `null`) rather than `undefined`.
- This ensures all entity instances share the exact same memory layout regardless of their `type`.

## Workflow
1. Preset Mapping: `ENTITY.TYPE` -> Component Preset Config.
2. Setup Refactoring: `ENTITY.setup()` retrieves preset and conditionally initializes component values.
3. Hot-path Protection: Methods like `processStates()` rely on existing size/length checks to naturally skip disabled components.
