# Claude Code Quota Management

**Summary**: Understanding and managing token consumption when running Claude Code with local Ollama models, including troubleshooting proxy issues and context optimization.

**Sources**: raw/archive/ClaudeCode_burning_quota.md

**Last updated**: 2026-04-16

---

## Why Claude Code Burns Tokens Faster Than Direct Chat

Claude Code consumes tokens much faster (often 20x) than direct chat with Ollama because it is an **agentic system** that manages massive amounts of hidden context.

### Three Sources of Token Consumption

1. **Massive Hidden Startup Overhead**
   - Before typing the first word, Claude Code injects **15,000-23,000 tokens** of startup context
   - Tool definitions: ~10,000 tokens of instructions for every built-in tool
   - Project files: Automatically reads `CLAUDE.md`, memory files, system reminders
   - MCP servers: Each adds 100-500 tokens per turn, even if unused

2. **The Agentic Loop**
   - **Reasoning**: Claude plans an action (cost: input tokens)
   - **Tool Call**: Executes bash command or reads file
   - **Observation**: Entire output (even 2,000-line logs) injected back into context
   - **Repeat**: Full conversation history re-sent for each step

3. **Context Compounding**
   - LLMs are stateless, so Claude Code must replay entire history every turn
   - After 5 file reads and 3 bash commands, a single "Hello" may use 50,000+ tokens

## Antigravity IDE Issues (April 2026)

### Known Bug Symptoms

- **Infinite Search Loading**: Regression causes search tool to hang indefinitely
- **MCP Protocol Failures**: Agent Manager can silently crash or loop on MCP payloads
- **Approval Prompt Hangs**: MCP executions skip approval and stay in permanent loading state
- **Parallel Call Crashes**: Calling multiple tools in parallel correlates with session degradation

### Troubleshooting Steps

1. **Manual Override**: Enter "continue" in chat box to resume processing
2. **Restart Agent Service**: Use Command Palette → "Antigravity: Restart Agent Service"
3. **Downgrade Model Tier**: Switch from "Gemini 3 Pro High" to "Standard" or "Low"
4. **Isolate MCPs**: Disable MCP servers one by one to identify problematic tools

## Proxy Troubleshooting

### Common Log Errors

```
ERROR [API] Error: invalid_request_error: Invalid model: gemini-3.1-flash
WARN [CloudCode] Account has 5 consecutive network failures, applying extended cooldown
INFO [POST] /v1/messages?beta=true 200 (91931ms)  # 91-second hang
```

### Solutions

1. **Invalid Model Error**
   - Model naming changed; `gemini-3.1-flash` is no longer valid
   - Use `gemini-3.1-pro-high`, `gemini-3.1-flash-lite`, or `gemini-2.5-flash`
   - Update proxy: `npm install -g antigravity-claude-proxy@latest`

2. **Account Cooldown**
   - Accounts with 5+ failures enter extended cooldown
   - Open Antigravity Manager UI (`acc ui`) and remove accounts with red/yellow badges
   - Log out and back in to clear 503 network failure state

3. **Ghost Request Hangs (90s+)**
   - Proxy waiting for `thought_signature` that free tier sometimes fails to provide
   - Update proxy to v4.1.25+ for `skip_thought_signature_validator` fix
   - Disable "Adaptive Thinking" or "UltraThink" in dashboard settings

### Configuration Check

Ensure environment variables point to proxy:

- `ANTHROPIC_BASE_URL=http://localhost:8080` (or your proxy port)
- `ANTHROPIC_API_KEY=sk-antigravity` (or required dummy key)

## Reducing Token Consumption

### Context Management

- **Check Context**: Run `/context` to see what's filling your window
- **Clear Sessions**: Use `/clear` or start fresh sessions frequently
- **Adjust Compaction**: Set `CLAUDE_CODE_COMPACT_THRESHOLD=0.15` to force earlier summarization
- **Audit MCPs**: Disconnect unused MCP servers

### Selective MCP Loading

Create project-specific configs by swapping `claude_desktop_config.json`:

- **wiki-config.json**: Only Filesystem and Obsidian MCPs
- **dev-config.json**: Heavy coding tools

Or use the `--mcp` flag to override global config:

```bash
claude --mcp "npx -y @modelcontextprotocol/server-filesystem C:/Users/Marika/Wiki"
```

### Karpathy Wiki Optimization

For LLM Wiki setups, use the **Three-Layer Split**:

- **`raw/`**: Immutable sources (never let Claude read all at once)
- **`wiki/`**: Compiled layer (small, cross-referenced markdown files)
- **`INDEX.md`**: Table of contents with one-line summaries

Tell Claude to read the Index first, then fetch only specific pages needed.

## Ollama Direct Configuration

For local models without proxy overhead:

```bash
# Pull coding model
ollama pull qwen2.5-coder:7b

# Set environment variables
export ANTHROPIC_BASE_URL=http://localhost:11434
export ANTHROPIC_AUTH_TOKEN=ollama

# Launch Claude Code
claude --model qwen2.5-coder:7b
```

## Related pages

- [[]]
- [[]]
- [[]]
- [[a2a_orchestration]]
- [[memory_architecture]]
- [[karpathywiki_to_magpie_key]]

