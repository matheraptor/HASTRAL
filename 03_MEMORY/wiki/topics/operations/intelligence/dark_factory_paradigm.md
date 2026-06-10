# dark-factory-paradigm

**Summary**: An experimental AI engineering paradigm where a codebase self-evolves through autonomous, governed feedback loops with minimal human intervention.

**Sources**: (source: AI_darkFactory.md)

**Last updated**: 2026-04-20

---

The "Dark Factory" (named after automated, lights-out factories) represents "Level 4" Autonomous Engineering. It moves beyond simple chat interfaces to a structured system where AI agents autonomously write, triage, implement, and validate code.

## Core Pillars

- **The Harness/Archon**: A rigid framework providing agents with tools, clear missions, and constraints to maximize control over outputs.
- **Specialized Workflows**: Development is modularized into discrete loops:
    - **Triage**: Monitors GitHub issues and filters them against project mission.
    - **Implement**: Writes code based on validated issues and governance standards.
    - **Validate**: Self-healing loop that runs tests, analyzes logs, and fixes bugs autonomously.
- **Token Economics**: Prioritizes cost-efficiency by matching tasks to models based on a "Cost-to-Intelligence Ratio" (e.g., using affordable models like MiniMax for triage).

## Frameworks

### Level 4 Autonomous Loop
This framework treats the LLM as a volatile engine requiring a sturdy "harness" to be useful at scale. It mandates separating development into independent loops—Triage, Implement, and Validate—each with strict success conditions.

## Related pages

- [[governance_constitution]]
- [[claude_code_ecosystem_tools]]
