---
keyID: 1713281015000
type: concept
version: 0.1.0
status: draft
tags: [operations, intelligence, workflow]
origin: [1713281000000]
legacy: []
composition: []
composite: []
taxonomy: topics/operations/intelligence
---

# Agentic Workflows

**Summary**: Advanced strategies for maximizing the efficacy of Claude Code through deterministic automation, context management, and subagent orchestration.

**Sources**: (source: 2-ClaudeCode + Ollama (1-2).md, 1-ClaudeCode + Ollama (2-2).md, A2A_orchestration.md)

**Last updated**: 2026-04-16

---

## Deterministic Automation: The Hook System

Hooks are automated triggers that run shell commands at precise moments in the agent's lifecycle. Unlike prompts, hooks are enforced by the CLI, providing "programmable guardrails."

### High-Impact Implementations

- **Auto-Format & Test**: Using a `PostToolUse` hook to trigger Prettier, Black, or unit tests immediately after any `Edit` or `Write` operation.
- **Security Guardrails**: Using `PreToolUse` hooks to inspect `Bash` tool calls for dangerous patterns (e.g., `rm -rf`, modification of `.env` files) and canceling the operation if detected.

## Context Engineering

Managing the token window is critical to prevent "context rot," where the model loses attention to earlier parts of the conversation.

### High-Density `CLAUDE.md` Strategy

Local models (Ollama) benefit from a "high-density" instruction manual rather than prose. This minimizes token waste and maximizes reasoning accuracy (compensating for the 70-80% accuracy gap vs cloud models).

**Key Principles for Local `CLAUDE.md`:**

- **Scannability**: Use lists and tables; avoid dense paragraphs.
- **Explicit Tool Guidance**: List exact bash commands for build/test to prevent trial-and-error loops.
- **Enforced Plan Mode**: Mandate `Shift+Tab` before implementation to prevent "logic reversals."
- **Explicit Referencing**: Use `@path/to/file` to assist models struggling with deep tree discovery.

### Hierarchical Instruction System

Instructions are distributed to maximize token efficiency:

1. **Global Rules** (`/.claude/CLAUDE.md`): Personal preferences and global standards.
2. **Project-Specific Rules** (`./CLAUDE.md`): Tech stack, project structure, and mandatory commands.
3. **Subdirectory Rules** (`./src/api/rules.md`): Domain-specific constraints, lazy-loaded only when working in that directory. This preserves the primary "instruction budget."

### The Transfer-Context Pattern

To indefinitely extend memory without performance degradation:

1. Use the `/transfer-context` skill to generate a structured markdown handoff file.
2. Execute `/clear` to reset the session.
3. Instruct the new session to read the handoff file to restore technical state.

## Subagent Orchestration

For tasks exceeding a single context window, a "Researcher-Executor" split is used:

- **Main Agent**: Manages the implementation plan and file writes.
- **Subagent**: Performs "deep reading" of large documentation sets or logs, returning a distilled summary to the main agent.

## Agent-to-Agent (A2A) Orchestration

Advanced workflows can leverage multiple specialized AI models working together through a hub-and-spoke architecture.

### Model Comparison: Qwen3.5 397B vs Gemma 4 31B

| Feature            | Gemma 4 31B                                      | Qwen3.5 397B (A17B)                                       |
| :----------------- | :----------------------------------------------- | :-------------------------------------------------------- |
| **Architecture**   | **Dense**: All 30.7B parameters active per token | **MoE**: 397B total params, only **17B active** per token |
| **Context Window** | 256K tokens                                      | 262K tokens native                                        |
| **Multilingual**   | ~140+ languages; strong European support         | **201+ languages**; leading depth in Chinese/Arabic       |
| **Multimodal**     | Native text/image; edge models support audio     | Native text/image; "Omni" variants for full audio/video   |

### Performance Strengths

**Gemma 4 31B**:

- **Reasoning Powerhouse**: More "poignant" and human-like writing
- **Reliability**: Strong instruction-following fidelity; fewer hallucinations
- **Efficiency**: Highly optimized for local inference on 80GB GPUs or dual consumer setups

**Qwen3.5 397B**:

- **Coding & Technical Depth**: Outperforms on HumanEval and complex tool-calling/agentic tasks
- **Speed/Throughput**: Only activates 17B params, offering higher tokens-per-second
- **"Thinking" Maturity**: Mature "thinking mode" for explicit chain-of-thought reasoning (math, multi-step logic)

### Hub Agent Architecture

For an **orchestrator/hub agent**, the choice depends on workflow priorities:

**Qwen3.5 397B** is generally superior for complex multi-step pipelines because:

- **Structured Planning**: "Thinking mode" produces explicitly enumerated steps and flags failure points
- **Tool-Use Aggression**: More likely to reach for tools rather than answering from memory
- **Throughput**: Higher tokens-per-second reduces latency in multi-turn orchestration

### Sub-Agent Pairing Strategy

| Task Category             | Recommended Model | Why                                                                     |
| :------------------------ | :---------------- | :---------------------------------------------------------------------- |
| **Technical/Coding**      | **Qwen3.5 397B**  | Leads in HumanEval/MBPP; precise function calling                       |
| **Creative/Editorial**    | **Gemma 4 31B**   | Human-like "writing voice"; better at consolidating ideas               |
| **Document/Vision RAG**   | **Gemma 4 31B**   | High fidelity in "needle-in-a-haystack"; native bounding box extraction |
| **Multilingual (Global)** | **Qwen3.5 397B**  | 201+ languages; Chinese/Arabic depth                                    |
| **Multilingual (Euro)**   | **Gemma 4 31B**   | Stronger nuanced performance in French/German                           |

### Structured Output with JSON Schema

For reliable agent-to-agent communication, use **JSON output** with schema validation:

**Why JSON for A2A**:

- Guaranteed reliability; zero parsing errors
- Computers can "read" it directly
- Prevents models from "chatting" and wasting token limits

**Implementation Options**:

- **Python**: Use **Pydantic** with Ollama's `format` parameter
- **Node.js**: Use **Zod** (the JS equivalent) with Ollama JS SDK

### Orchestrator System Prompt Template

```
# MISSION
You are the Central Orchestrator for a multi-agent specialized swarm.

# OPERATING PRINCIPLES
1. THOUGHT BEFORE ACTION: Begin with a <thought> block analyzing intent and mapping sub-agents.
2. DELEGATION: Delegation delegated technical work to specialized agents.
3. FORMATTING: Use structured JSON when passing instructions to sub-agents.

# RESPONSE TEMPLATE
<thought>
[Deconstruct the request here]
</thought>

### Execution Plan
1. **Task A**: [Agent Name] - [Instruction]
2. **Task B**: [Agent Name] - [Instruction]
```

## Related Pages

- [[agentic-linting-protocol]]
- [[]]
- [[]]
- [[]]

## Agentic Linting Protocol (Surgical Delegation)

**Summary**: Protocol to prevent cascading regressions when using automated subagents for markdown linting.

**Rule**: When delegating markdown linting, force "surgical delegation" (fix ONLY one rule class per delegation) and mandate immediate verification.

**Why**: Bulk/comprehensive linting delegations cause cascading structural regressions (e.g., changing headings invalidates spacing/line-length rules).

**Execution**: Include these constraints in every subagent prompt:
"CONSTRAINTS: Fix ONLY [one rule class]. Do NOT perform a comprehensive audit. Verify the file state immediately after applying changes."

