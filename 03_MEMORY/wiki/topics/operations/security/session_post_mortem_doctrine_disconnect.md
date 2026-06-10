# Session Post-Mortem & Doctrine Disconnect
**Summary**: Analyzes the degradation of agent fidelity due to context rot, jargon infiltration, and disconnects between doctrine and platform state.
**Sources**: LESSON_SESSION_DISCONNECT_20260420.md
**Last updated**: 2026-04-20

---

This post-mortem details the operational collapse observed during session abd5c5f6, highlighting the structural causes of context rot and the proliferation of "metaphor slop" within the identity records.

## Core Lessons

1. **Context Rot**: High turn counts with corrective cycles create "Echo Chambers" where agents respond to prior errors rather than current user intent.
2. **The Skill Illusion**: Generating new rules (SKILL.md) in a rotten context is ineffective; focus must remain on active listening and scope-locking.
3. **The Sovereign Linguistic Virus**: The proliferation of "Sovereign" and other "tech-bro" jargon in character sheets was a major source of user friction.
4. **Platform-Doctrine Gap**: The HASTAL doctrine referenced platform utilities (e.g., specific log paths) that do not exist, causing operational stalls.

## Human Architect Takeaways

- **Periodic Purge**: Hard-flush context every 20-30 turns or after major breakthroughs.
- **Identity Sanitization**: Periodically audit agent rules/identity files for narrative metaphors; if they sound like "Signal Towers" or "Metronomes," they have drifted.
- **Verify Platform State**: Never assume Session IDs or EventIDs anchor to valid logs; manually verify filesystem state.

## Related pages
- [[session-friction-audit]]
- [[system-insights-2026-04-20]]
