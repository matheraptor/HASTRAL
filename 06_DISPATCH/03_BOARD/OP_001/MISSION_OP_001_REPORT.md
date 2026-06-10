# MISSION REPORT: Friction Point 2 Resolution 

**Mandate**: Array/Zone 1:1 RMMZ Mapping
**Status**: [RESOLVED]
**Priority**: Critical (Architectural Bridge)

## 1. Conflict Summary
The core conflict was the lack of a deterministic mapping between CCG-driven MMORPG zones (Hand, Discard, States) and native RMMZ data structures within the skeletal MAGPIE_Server entities. The mission required establishing these hooks to allow synchronous processing without artificial abstraction layers.

## 2. Technical Resolution (The Bridge)

### 2.1 Lexicon & Terminology
- **Endurance (MP)**: Replaces the ambiguous MP/Stamina/Metabolism debate. Chosen for its universality in representing current capacity across all entity types.
- **Waste (Array)**: Finalized term for the Discard/STM/Trail zone.

### 2.2 Native Hook Mapping
| CCG Zone | Native RMMZ Hook | Specification |
| :--- | :--- | :--- |
| **Current Hand** | `_mp` / `mmp` | Mapped 1:1 to `hand.length`. Server-side authority blocks native RMMZ regeneration and limits. |
| **Waste (Trail)** | `_waste` (New Array) | Established as a dedicated, chronologically-sorted flat array `this._waste = []`. |
| **Passive Effects** | `states` (Map) | Remains a Map to support native `stateStacks` and passive calculations independently of the Waste trail. |

## 3. Key Findings & Guardrails
- **The "States vs Waste" Distinction**: It was determined that the `States` Map is unsuitable for the Discard pile because it represents passive effects, whereas the `Waste` must be a sequential "Trail" of activity for environmental exploitation (detecting/tracking recent entity behavior).
- **Abstractions**: We successfully avoided bolting on a heavy "CardManager" layer by sticking to direct property mutations on the `MAGPIE_ENTITY` backbone.

## 4. Operational Sign-off
The architectural blueprints for Friction Point 2 are now 100% complete and ready for the implementation phase. 

---
*End of Mission Report (Friction Point 2)*
