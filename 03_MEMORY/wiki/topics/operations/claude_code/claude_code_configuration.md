---
keyID: 1713280965000
type: concept
version: 0.1.0
status: draft
tags: [operations, claude-code, configuration]
origin: [1713281000000]
legacy: []
composition: []
composite: []
taxonomy: topics/operations/claude_code
---

# Claude Code Configuration

**Summary**: Comprehensive guide to launching and configuring Claude Code, with a focus on Ollama integration and system prompt persistence.

**Sources**: (source: ClaudeCode_launchFlags.md, A2A_orchestration.md)

**Last updated**: 2026-04-16

---

## Ollama Integration

To connect Claude Code to Ollama, the recommended method is using the `ollama launch claude` wrapper.

### Manual Setup

If launching manually, use the following environment variables:

- `ANTHROPIC_BASE_URL=http://localhost:11434`
- `ANTHROPIC_API_KEY="ollama"` (any non-empty value)

### Performance Requirement

Claude Code requires a large context window for codebase understanding. It is highly recommended to set this to at least **64k to 128k tokens** in the Ollama configuration.

## Persistence Methods

There are three primary ways to persist instructions and settings:

| Method              | Scope        | Best For...                                                |
| :------------------ | :----------- | :--------------------------------------------------------- |
| **Modelfile**       | System-wide  | Permanent prompt/context tied to a specific model version. |
| **`CLAUDE.md`**     | Project-wide | Repository-specific rules and naming conventions.          |
| **`settings.json`** | Global       | Tool permissions and global UI preferences.                |

## Launch Flags (CLI)

Flags are used for temporary overrides or session-specific configurations.

### System Prompt Management

- `--system-prompt <prompt>`: Replaces the default prompt entirely.
- `--append-system-prompt <prompt>`: Adds rules to the end of the default prompt.
- `--system-prompt-file <path>`: Loads a prompt from a specific file.

### Session Control

- `-c` or `--continue`: Resumes the most recent local session.
- `-r` or `--resume <id>`: Resumes a specific session by ID.
- `-p` or `--print "<query>"`: Executes a one-off query and exits.

### Permissions & Tools

- `--allowedTools <list>`: Allows specific tools to run without confirmation.
- `--dangerously-skip-permissions`: Disables all confirmation prompts (YOLO mode).

### Context & Logging

- `--add-dir <paths>`: Grants access to additional directories.
- `--verbose`: Enables detailed logging for debugging.

## Structured Output for Agent Workflows

When using Claude Code with Ollama for agent-to-agent (A2A) workflows, structured JSON output ensures reliable communication between models.

### JSON Schema Validation

| Language    | Library      | Purpose                                                    |
| :---------- | :----------- | :--------------------------------------------------------- |
| **Python**  | **Pydantic** | Data validation and schema enforcement                     |
| **Node.js** | **Zod**      | Schema-first validation (industry standard for AI outputs) |

### Ollama Structured Outputs

Ollama supports passing schemas directly to enforce JSON structure:

**Python Example (Pydantic)**:

```python
from pydantic import BaseModel, Field
from ollama import chat

class AgentTask(BaseModel):
    task_id: str
    target_agent: str
    action: str
    content: str

response = chat(
    model='qwen3.5:397b',
    messages=[{'role': 'user', 'content': 'Write a script.'}],
    format=AgentTask.model_json_schema()
)
```

**Node.js Example (Zod)**:

```javascript
import { z } from "zod";

const TaskSchema = z.object({
  task_id: z.string(),
  target_agent: z.enum(["TECH_AGENT", "CREATIVE_AGENT"]),
  instructions: z.string(),
});

const response = await ollama.chat({
  model: "qwen3.5:397b",
  format: TaskSchema,
  messages: [{ role: "user", content: "Design a header." }],
});
```

### Output Strategy

| Output Type         | Used For       | Why                                         |
| :------------------ | :------------- | :------------------------------------------ |
| **JSON (Schema)**   | Agent-to-Agent | Guaranteed reliability; zero parsing errors |
| **Text (Markdown)** | Agent-to-Human | Easy to read; allows nuance and formatting  |

## Related Pages

- [[]]

