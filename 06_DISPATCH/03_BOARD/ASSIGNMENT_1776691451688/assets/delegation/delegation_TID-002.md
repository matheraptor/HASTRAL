# TID-002: IO Engineer Briefing

**Role**: IO Engineer
**Objective**: Developing the HASTRAL "Muscle" (H-Prompt IO Driver).

## [Context Whiteboards]

- MISSION: [MISSION_002](../../03_BOARD/ASSIGNMENT_002/MISSION_002/MISSION_002.md)
- NERVE: [hastral_proxy.js](../../01_NERVE/hastral_proxy.js)
- DOCTRINE: [Agentic Architecture Wiki](../../../../03_MEMORY/wiki/concepts/agentic_architecture.md)

## [Mission Deliverables]

1. **H-Splice Logic**: Implement the "Abort -> Buffer -> Splice -> Resume" input loop.
2. **TTY Mastery**: Ensure ANSI handling and sub-second signal awareness using `AbortController`.
3. **Signal Handler**: Integrate with the v2 Proxy `/signal` endpoint.

## [Critical Instructions]

- Enter **Planning Mode** immediately upon startup.
- Focus strictly on `hastral_prompt_v2.js`.
- Focus on the non-destructive nature of the splice; terminal stability is paramount.

## [Hardware & Runtime]

- Platform: Node.js (TTY-Aware)
- Memory: Standard (S1)
