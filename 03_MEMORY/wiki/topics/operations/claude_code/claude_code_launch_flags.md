# Claude Code Launch Flags

**Summary**: Reference guide for Claude Code CLI launch flags and configuration methods when using Ollama or other local backends.

**Sources**: raw/archive/ClaudeCode_launchFlags.md

**Last updated**: 2026-04-16

---

## Configuration Methods Comparison

| Method            | Best For                                      | Persistence              |
| ----------------- | --------------------------------------------- | ------------------------ |
| **Modelfile**     | Prompt/context tied to specific model version | Permanent (system-wide)  |
| **CLAUDE.md**     | Rules for specific repository                 | Permanent (project-wide) |
| **settings.json** | Tool permissions and global UI preferences    | Permanent (global)       |
| **Launch Flags**  | Temporary overrides or one-off tests          | Session-only             |

## Launch Flags Reference

### Model Selection

- `--model <name>` - Specify which model to use
  - Example: `--model qwen2.5-coder:14b`

### System Prompt

- `--system-prompt <str>` - Replaces the default prompt entirely
  - Example: `--system-prompt "You are a Rust expert"`
- `--system-prompt-file <path>` - Loads a custom prompt from a specific file
  - Example: `--system-prompt-file ./rules.txt`
- `--append-system-prompt <str>` - Adds extra rules to the end of the default prompt
  - Example: `--append-system-prompt "Use tabs"`

### Session Control

- `-c`, `--continue` - Resume the most recent local session
  - Example: `claude -c`
- `-r`, `--resume <id>` - Resume a specific session by its ID
  - Example: `claude -r auth-fix-123`
- `-p`, `--print "<query>"` - Run a one-off query and exit (print mode)
  - Example: `claude -p "Refactor this file"`

### Permissions & Tools

- `--allowedTools <list>` - Allow specific tools to run without asking
  - Example: `--allowedTools "Bash(git:*)"`
- `--dangerously-skip-permissions` - Skip all confirmation prompts
  - Example: `claude --dangerously-skip-permissions`

### Context & Logging

- `--add-dir <paths>` - Give Claude access to extra folders
  - Example: `--add-dir ../lib ../docs`
- `--verbose` - Enable detailed logging for debugging
  - Example: `claude --verbose`

## Ollama Integration

When using Claude Code with Ollama, the `ollama launch claude` command acts as a wrapper. To send flags specifically to Claude Code, use the `--` separator:

```bash
ollama launch claude -- [Claude Flags]
```

### Environment Variables

For manual Ollama configuration:

- `ANTHROPIC_BASE_URL=http://localhost:11434`
- `ANTHROPIC_API_KEY="ollama"` (any non-empty value)

### Common One-Liners

```bash
# Launch with specific model and auto-accept all tool calls
ollama launch claude --model llama3.3 -- --dangerously-skip-permissions

# Run quick code review without interactive shell
claude -p "Review the changes in the current directory" --model qwen2.5-coder

# Start session with project-specific style rules
claude --append-system-prompt "Always use snake_case and provide JSDoc comments."
```

## Interactive Mode Shortcuts

Once inside a session:

- **/model** - Switch active model on the fly
- **/config** - Open interactive configuration menu
- **Shift + Tab** - Cycle through permission modes (Normal, Auto-Accept, Plan)

## Related pages

- [[]]
- [[]]
- [[a2a_orchestration]]
- [[operational_conventions]]

