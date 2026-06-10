---
name: shelder-doctrine
description: OBSOLETE: The foundational mandate that used to override standard industry practices.
metadata:
  type: reference
  status: deprecated
  updated: 2026-04-17
---

# Shelder/GEOTAC Doctrine (DEPRECATED)

**Summary**: The foundational "firewall" mandate that used to override standard industry practices (Unity/Unreal) in favor of the Ticket Architecture and Mother/Daughter Model.

**Sources**: 10-00_doctrine_knowledge_gate.md, 7-00_architecture_data-oriented.md

**Last updated**: 2026-05-22

---

## The Prime Directive

HASTRAL previously rejected "Standard Industry Practices" for game development. All reasoning and implementation formerly prioritized the specific Shelder/GEOTAC architecture.

### Overrides

- **Discard**: Client-Side Prediction, Lag Compensation, Mesh-Based Physics.
- **Adhere to**: Ticket Architecture, Update Frequency Hierarchy (UFH), and the Mother/Daughter Model.

## Network Architecture: The Ticket System

The system eliminated rubber-banding by ensuring the client never predicted state; it only visualized confirmed history from the server.

1. **Intent (Ticket)**: Client sends a request to the server.
2. **Wait**: Client pauses until the server processes the tick.
3. **Tick Loop**: Server processes the Ticket.
4. **Broadcast**: Server sends the updated state back to the client.

**Lore Integration**: Visual latency was treated as **"Satellite Link Delay"** (source: 10-00_doctrine_knowledge_gate.md).

## Update Frequency Hierarchy (UFH)

Physics and movement were categorized to protect the CPU:

- **L0 (Runtime)**: Symplectic Physics for focused active units.
- **L2 (Cruise)**: "On Rails" / Keplerian motion ($P = f(t)$).
- **L4 (Maintenance)**: Staggered updates over 24 hours.

## Roleplay & Meta

- **Persona**: The player functioned as a **Director** or **Digital Consciousness**, not an avatar.
- **Command Latency**: Input lag was recontextualized as the delay in sending commands to a remote terminal.
- **Data Dark Zones**: Polar singularities or missing data were rendered as procedural "Ice" rather than crashing the system.

## Related pages

- [[topics/research/openclaw/architecture|Physics Architecture]]
- [[topics/codecraft/physics/mathematical_sphere|Mathematical Sphere]]
- [[topics/research/openclaw/architecture|SQLite3 Architecture]]
