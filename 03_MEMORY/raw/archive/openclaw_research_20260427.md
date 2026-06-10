# Research: OpenClaw Agentic Framework

**Source**: Web Research & Architectural Extrapolation
**Date**: 2026-04-27
**Status**: DRAFT (for ingestion)

## 1. Core Architecture

OpenClaw operates on a local-first, hub-and-spoke model.

### 1.1 The Gateway

The central control plane.
- **Function**: Routing input from multiple channels (Telegram, Discord, Shell) to the Agent Runtime.
- **State Management**: Handles user sessions and authentication.
- **Technical Insight**: Acts as a middleware that normalizes incoming events into a standard "Stimulus" format.

### 1.2 The Agent Runtime
The "Brain" of the system.
- **Logic**: Implements a ReAct (Reasoning + Acting) loop.
- **Process**:
    1.  **Stimulus**: Receives normalized input.
    2.  **Context Assembly**: Pulls relevant memory, project files, and tool definitions.
    3.  **Inference**: Queries an LLM (Claude, GPT, local) with a prompt containing the assembled context.
    4.  **Tool Call**: If the LLM requests an action, the runtime executes it locally.
    5.  **Observation**: The result of the action is fed back into the loop.
    6.  **Resolution**: The loop concludes when the LLM provides a final answer.

## 2. Proactive Intelligence: The Heartbeat

OpenClaw is distinct from standard chatbots due to its **Heartbeat system**.
- **Mechanism**: A background process (cron-like) that triggers the Agent Runtime periodically.
- **Workflow**:
    - The agent reads a `HEARTBEAT.md` or similar task file.
    - It evaluates if any scheduled tasks need execution.
    - It can "wake up" to check on long-running processes (e.g., waiting for a build to finish).
- **Extrapolation for MAGPIE**: The heartbeat should be non-blocking and prioritize "experience queue" items to influence low-level instincts.

## 3. Skills System

Skills are modular, file-based extensions.
- **Definition**: Each skill is a Markdown file defining its own triggers, instructions, and tools.
- **On-Demand**: The agent only loads skills relevant to the current task to save context.
- **Self-Modification**: OpenClaw agents are often capable of writing new skills or refining existing ones based on repeated friction points.

## 4. Memory & Knowledge Retention

- **Memory**: Stored as persistent JSON/Markdown files.
- **Knowledge Retrieval**: Uses a "Wiki-style" storage (like HASTAL) to provide a grounded layer of truth that supersedes the LLM's internal weights.

---
**Links to MAGPIE**:
- MAGPIE's `non-blocking experience queue` mirrors OpenClaw's proactive heartbeat.
- MAGPIE's `card game mechanics` can be implemented as specific **Skills** or **Instincts** within the runtime.
