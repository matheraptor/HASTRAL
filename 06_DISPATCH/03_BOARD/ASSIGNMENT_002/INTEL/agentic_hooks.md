---
tags: [agentic, app, hooks]
---

# AGENTIC HOOKS

*source: ClaudeCode CLI*

## 1. PreToolUse

Before tool execution

## 2. PostToolUse

After tool execution

## 3. PostToolUseFailure

After tool execution fails

## 4. PermissionDenied

After auto mode classifier denies a tool call

## 5. Notification

When notifications are sent

## 6. UserPromptSubmit

When the user submits a prompt

## 7. SessionStart

When a new session is started

## 8. Stop

Right before Claude concludes its response

## 9. StopFailure

When the turn ends due to an API error

## 10. SubagentStart

When a subagent (Agent tool call) is started

## 11. SubagentStop

When a subagent finishes

## 12. PreCompact

Before conversation compaction

## 13. PostCompact

After conversation compaction

## 14. SessionEnd

When a session is ending

## 15. PermissionRequest

When a permission dialog is displayed

## 16. Setup

Repo setup hooks for init and maintenance

## 17. TeammateIdle

When a teammate is about to go idle

## 18. TaskCreated

When a task is being created

## 19. TaskCompleted

When a task is being marked as completed

## 20. Elicitation

When an MCP server requests user input (elicitation)

## 21. ElicitationResult

After a user responds to an MCP elicitation

## 22. ConfigChange

When configuration files change during a session

## 23. InstructionsLoaded

When an instruction file (CLAUDE.md or rule) is loaded

## 24. WorktreeCreate

Create an isolated worktree for VCS-agnostic isolation

## 25. WorktreeRemove

Remove a previously created worktree

## 26. CwdChanged

After the working directory changes

## 27. FileChanged

When a watched file changes
