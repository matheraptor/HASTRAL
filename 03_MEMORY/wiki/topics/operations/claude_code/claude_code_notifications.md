---
keyID: 1713280941000
type: concept
version: 0.1.0
status: draft
tags: [operations, claude-code, notifications]
origin: [1713281000000]
legacy: []
composition: []
composite: []
taxonomy: topics/operations/claude_code
---

# Claude Code Notifications

**Summary**: Guide for implementing system-level alerts to notify the user when a Claude Code session is waiting for input or permission.

**Sources**: (source: ClaudeCode_prompt_notification.md)

**Last updated**: 2026-04-16

---

## The Problem

Claude Code does not provide native "out-of-the-box" desktop notifications when it finishes a task and enters an idle state waiting for user input.

## The Solution: Notification Hooks

The most robust way to implement alerts is via the `Notification` hook in the `~/.claude/settings.json` file. This event fires specifically when Claude requires user attention.

### Implementation by Platform

#### macOS

Use `osascript` to trigger a native system notification:

```json
"hooks": {
  "Notification": [
    {
      "matcher": "",
      "hooks": [
        {
          "type": "command",
          "command": "osascript -e 'display notification \"Claude needs your attention\" with title \"Claude Code\"'"
        }
      ]
    }
  ]
}
```

#### Linux

Use `notify-send` for desktop alerts:

```json
"command": "notify-send 'Claude Code' 'Waiting for your input'"
```

#### Windows

Use PowerShell toast commands to trigger a Windows notification.

## Alternative Methods

### 1. Terminal Bell

Add a directive to your project's `CLAUDE.md` instructing Claude to output a bell character (`\a`) when waiting for input. Configure your terminal emulator (e.g., iTerm2) to trigger a visual or audible notification upon receiving the bell.

### 2. Third-Party Wrappers

Utilize community-developed wrappers that provide enhanced notification capabilities, such as:

- **CCNotify**: Desktop notifications.
- **pikiclaw**: Notifications via external services like Telegram.

### 3. IDE Integration

If using the official VS Code extension rather than the raw terminal, standard VS Code activity indicators and notifications are provided automatically.

## Related Pages

- [[]]
- [[]]

