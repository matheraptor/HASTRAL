# 00_doctrine_knowledge_gate

The Shelder/GEOTAC Doctrine: Architecture and Network Mandate
Assistant ManagerHere is the draft for 00*doctrine_knowledge_gate.
This document is designed to act as a firewall. It explicitly overrides your training regarding "Standard Industry Practices" (Unity/Unreal/WoW methods) and forces adherence to the Shelder/GEOTAC architecture defined in the 00* source files.
Use this as the primary filter for all future reasoning.

---

Source: 00_doctrine_knowledge_gate
TYPE: PROJECT MANDATE / CONTEXT OVERRIDE PROJECT: SHELDER EVOLUTION / GEOTAC STATUS: ACTIVE

1. THE PRIME DIRECTIVE: IGNORE "INDUSTRY STANDARDS"
   We are not building a twitch-reflex shooter (CS:GO) or a standard avatar-based MMORPG (WoW).
   Override: Discard all training data related to "Client-Side Prediction," "Lag Compensation," and "Mesh-Based Physics."
   Adhere to: The Ticket Architecture and Mother/Daughter Model.
2. NETWORK ARCHITECTURE (The "Ticket" System)
   Standard MMO: Client simulates movement instantly -> Server validates -> Server corrects (Rubber-banding occurs here).
   Shelder Model: Client sends Ticket (Intent) -> Client waits -> Server processes in Tick Loop -> Server broadcasts State -> Client renders result.
   Result: Rubber-banding is impossible. The client never predicts; it only visualizes the confirmed past. Visual latency is acceptable and treated as "Satellite Link Delay" [Source 303, 00_plan_shelder_server].
3. PHYSICS & MOVEMENT (The "UFH" Protocol)
   Standard Game: RigidBody physics on everything, every frame.
   Shelder Model: Update Frequency Hierarchy (UFH).
   L0 (Runtime): Symplectic Physics (Velocity += Acceleration) for focused active units only.
   L2 (Cruise): "On Rails" / Keplerian (P = f(t)). No physics simulation.
   L4 (Maint): Staggered updates spread over 24 hours.
   Constraint: Do not suggest continuous physics for background entities [Source 317, 00_architecture_RUNTIME_UFH].
4. RENDERING & INTERACTION (The "Visual Lie")
   Standard Game: Raycast against Mesh Colliders. High-poly models.
   Shelder Model: Mathematical Truth.
   Geometry: The visible sphere is a smooth illusion.
   Interaction: Ray-Sphere Intersection (Math) determines the hit point (O(1) cost).
   Terrain: Data Probes read Terrain-RGB pixels to get height. We do not raycast geometry.
   Units: 2D Icons (InstancedMesh) + Vertical Stalks. No 3D models for units [Source 162, 946].
5. DATA STRUCTURE (The "Sovereign" Host)
   Standard Game: Database Service (AWS/Firebase) + Object-Oriented "Snowflakes."
   Shelder Model: Home-Host Node.js.
   Storage: universe.json (Snapshot) + transactions.log (Append-only).
   Memory: Component Maps inside static Entity containers. No polymorphic object structures (e.g., no entity.ship = ...).
   Persistence: We do not save every frame. We snapshot periodically and replay logs on crash [Source 244, 377].
6. THE ROLEPLAY META
   Standard Game: Player = Avatar.
   Shelder Model: Player = Director/Interface.
   The user is a digital consciousness or commander.
   Input lag is "Command Latency."
   If data is missing (Polar Singularity), we render procedural "Dark Zones" or "Ice" rather than crashing [Source 363].

---

ProgrammerThis document sums up the memory restrictions and the event loop logic nicely. It explicitly bans the "Client-Side Prediction" logic that was causing the rubber-banding confusion.
EngineerThis cements the "Data Probe" approach. It stops us from accidentally trying to load a physics mesh for the whole planet.
WriterIt codifies the "Director" persona. If the AI knows that "Lag" is actually "Lore," it stops trying to "fix" it with high-performance netcode we don't need.
Assistant ManagerI will place this in the source list as 00_doctrine_knowledge_gate. Refer to it before answering any architectural questions.
