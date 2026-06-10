# Codebase Comparison: Stable vs. Prototype

**Analysis Date:** 2026-06-04

## Comparison Matrix

| Feature          | MAGPIE (Stable)   | Project_L2e (Prototype)      | Verdict                  |
|------------------|-------------------|------------------------------|--------------------------|
| **State**        | Baseline / Stable | Experimental / Bleeding Edge | L2e is more recent       |
| **Organization** | Standard RMMZ     | Modular / Categorized        | L2e is better organized  |
| **Custom Data**  | Standard JSON     | Dedicated `data/MAGPIE`      | L2e is more extensible   |
| **Plugin Depth** | Core set          | Extensive / Categorized      | L2e is more feature-rich |
| **Risk Level**   | Low (Stable)      | High (Experimental)          | MAGPIE is safer          |

## Detailed Analysis

### 1. Architectural Evolution

The transition from `MAGPIE` to `Project_L2e` represents a shift from a "monolithic" plugin approach to a "modular" one.

- **MAGPIE**: Plugins are largely flat in the `js/plugins` directory.
- **Project_L2e**: Plugins are grouped by author or system (e.g., `js/plugins/CGC`, `js/plugins/EliMZ`, `js/plugins/GALV`), which significantly reduces cognitive load when debugging specific systems.

### 2. The "MAGPIE" Custom Layer

`Project_L2e` introduces a sophisticated custom data layer in `data/MAGPIE`. This is a critical architectural improvement over the stable version, as it allows the game to store complex state and metadata without bloating the standard RMMZ database files.

### 3. Feature Divergence

`Project_L2e` contains several high-complexity systems not present (or not as developed) in the stable version:

- **CGC (Card Game Component)**: A full-fledged card system with its own assets and logic.
- **Orbital Mechanics**: Specialized physics and visual plugins for space-based movement.
- **Experimental Sandbox**: The `js/plugins/test/try` folder shows a disciplined approach to prototyping before integration.

## Integration Recommendation for MAGPIE_Server

**Target Codebase:** `Project_L2e - prototipo`

**Reasoning:**

1. **API Surface**: The `data/MAGPIE` folder provides a natural "hook" for server-side synchronization.
2. **Modularity**: The categorized plugin structure allows the server to target specific logic modules (e.g., `MAGPIE_SYS.js`) without risking regressions in unrelated systems.
3. **Future-Proofing**: Integrating with the prototype ensures the server supports the most recent gameplay mechanics (CGC, Orbital) from the start.

---
*Analysis by GSD Codebase Mapper.*
