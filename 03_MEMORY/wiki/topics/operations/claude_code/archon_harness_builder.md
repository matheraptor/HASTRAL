# archon-harness-builder

**Summary**: An open-source harness builder for orchestrating autonomous AI agent workflows (SDLC) by combining LLM nodes with deterministic validation steps.

**Sources**: (source: ArchonGuide.md)

**Last updated**: 2026-04-20

---

Archon is a platform for "Harness Engineering," designed to wrap coding agents in a structured, deterministic environment. It facilitates the transition from raw AI chatting to reliable, autonomous SDLC automation.

## Core Capabilities

- **Workflows (Harnesses)**: Allows definition of multi-step, automated processes (e.g., Idea-to-PR) composed of LLM nodes and Deterministic nodes.
- **Deterministic Nodes**: Non-AI steps that execute system commands (tests, linters) to ensure code validity.
- **Human-in-the-Loop (HITL)**: Checkpoints for human approval throughout the workflow.
- **Model Orchestration**: Enables assigning different LLMs to different workflow nodes (e.g., cheaper models for boilerplate, more capable models for architectural review).

## Harness Engineering Framework

This framework prioritizes environment structure over prompt complexity to achieve reliable results:

1. **Agentic Core**: Decompose projects into tasks, assigning optimal models for specific strengths (e.g., Sonnet for research, Opus for review).
2. **Deterministic Guardrails**: Implement "hard gates" (linting, unit tests). Agents cannot progress unless code passes these checks.
3. **Automated Correction Loops**: If guardrails fail, errors are fed back into the agent as context for iterative self-healing.
4. **Strategic Human Intervention**: Keep humans focused on high-level intent and final approval, automating the tedious implementation and testing.

## Related pages

- [[dark_factory_paradigm]]
- [[claude-code-ecosystem-tools]]
- [[systematic_insights]]
