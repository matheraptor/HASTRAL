---
keyID: 1713280956000
type: concept
version: 0.1.0
status: draft
tags: [operations, claude-code, configuration]
origin: [1713281000000]
legacy: [1713280929000]
composition: []
composite: []
taxonomy: topics/operations/claude_code
---

# Claude Code CTX

**Summary**: Deep-dive configuration guide for Claude Code, focusing on data retention, token limits, telemetry, and advanced workflows.

**Sources**: (source: claudeCode_CTX.md)

**Last updated**: 2026-04-16

---

Claude Code provides advanced configuration options via the `settings.json` file and the `.claude` directory, allowing power users to bypass default limitations and leverage massive context windows.

## Key Configurations

- **Data Retention**: The default 30-day memory limit can be overridden by setting `cleanup_period_days` (e.g., to 365) in `settings.json`.
- **Token Limits**: Terminal output reading limits (default 30k chars) and file reading limits (default 2,000 lines) can be increased to leverage the 1M token context of Opus 4.6. `auto_compact_percentage_override` can be adjusted to 75% for better reasoning quality.
- **Privacy & Telemetry**: Telemetry (Statsig, Sentry) and GitHub co-author attribution can be disabled in `settings.json`.
- **Path-specific Rules**: Using nested `.claude` folders allows directory-specific instructions (e.g., frontend vs. backend rules) to prevent instruction fatigue.

## Advanced Workflows

- **Prompt Stashing**: `Ctrl + S` allows stashing current text to perform an urgent task, then restores the text.
- **Sub-Agent Isolation**: Treat code changes like Git branches by using `isolation` mode. Agents experiment in a "bubble" (temporary work tree) that pops if it fails, protecting the main codebase.
- **[[]]**: Response-Action-Loop-Feedback. Use terminal hooks to enforce rules programmatically via Exit Code 2, forcing the agent to self-correct.

## Related pages

- [[]]
- [[]]

