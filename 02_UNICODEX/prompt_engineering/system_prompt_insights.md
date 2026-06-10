---
type: research_report
name: System Prompt Engineering Insights
eventID: 1714305861000
date: 2026-04-28
status: completed
tags: [prompt_engineering, insights, best_practices]
parent: 1714305841000
---

# System Prompt Engineering Insights

Distilled insights from the analysis of Anthropic's Claude 3 steering methodology and OpenClaw reverse-engineering.

## 1. Modular Hierarchy
- **Categorize via Tags**: Use XML tags to separate "World Physics" (ECG Mechanics), "Identity" (Persona), and "Operational Protocols" (Tool Usage). This helps the model maintain high fidelity in specific domains without context leakage.
- **Dynamic Injection**: Only provide the relevant modules to the system prompt to minimize token count, especially for smaller models (Ollama/Llama-3-8B).

## 2. Defining Persona by Exclusion
- **Lexical Filter**: List specific words or phrases that the persona **never** uses. This is more effective than describing a tone.
- **Negative Constraints**: Explicitly ban "AI cliches" (e.g., "I hope this helps", "As an AI..."). 
- **Style Enforcement**: Define strict formatting rules (e.g., "Never use more than 2 sentences for internal thought") to control the "verbosity" of the agent.

## 3. The "Pulse" Signal
- **External State Indicators**: Treat system-injected warnings or data updates as "external pulses" (Heartbeats). 
- **Response Mapping**: Instruct the model on how to react to specific signal types (e.g., `image_reminder` in Anthropic's case, `HEARTBEAT` in MAGPIE's case).

## 4. Evenhanded Neutrality vs. Opinionated Agency
- **Boundary Clarity**: For administrative agents (S4-S5), use "Evenhandedness" to ensure bias-free reporting.
- **Selective Bias**: For creature entities (S1-S3), intentionally inject "Biased Instincts" based on their Trait Cards.

## 5. Mistake & Abuse Handling
- **Resilient Identity**: Provide a protocol for when the user corrects the model. It should own the mistake but maintain its persona integrity without over-apologizing (which breaks the "agent" immersion).
