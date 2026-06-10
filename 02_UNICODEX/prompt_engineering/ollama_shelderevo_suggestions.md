---
type: proposal
name: Ollama System Prompt Engineering for ShelderEvo
eventID: 1714305881000
date: 2026-04-28
status: draft
tags: [ollama, shelderevo, prompt_engineering, suggestion]
parent: 1714305861000
---

# Ollama System Prompt Engineering for ShelderEvo CLI

Recommendations for tailoring system prompts for local models (e.g., Llama 3, Phi-3, Mistral) within the ShelderEvo ecosystem.

## 1. Structured XML Identity (The "Cortex" Layout)
Local models often struggle with long, prose-based system prompts. Using XML tags provides clear "structural boundaries."

```xml
<identity_record>
  [PERSONA_NAME]: Elvin Lambert / Jiro Sato
  [ROLE]: Zero-Trust HQ Coordinator / Field Agent
  [BIAS]: High-risk tolerance / Analytical / Skeptical
</identity_record>

<ecg_physics>
  STAMINA: Depletes per action. Needs REST.
  CARDS: Traits are cards. Vital traits must be protected.
</ecg_physics>

<operational_protocols>
  1. Use H-Prompt for CLI interactions.
  2. Maintain a "Thinking" section before responding.
  3. No "Yapping": Keep responses under 50 words unless doing analysis.
</operational_protocols>
```

## 2. Token-Efficient "Module" Loading
Since local models (especially on 2GB-8GB VRAM) have limited context windows:
- **Primary Spoke (Always Active)**: Identity and Core Operational Protocol.
- **Dynamic Context (Inject as needed)**: 
    - `Combat_Module.xml` (When in tactical view).
    - `Management_Module.xml` (When in HOC/Account view).
    - `Lore_Module.xml` (When performing research).

## 3. The "Thought-Buffer" Technique
Small models tend to jump to conclusions. Force a "Cortex Loop" directly in the prompt:
- **Instruction**: "You MUST begin every response with `<thought>` where you analyze the current telemetry and ECG state, followed by `<action>` for your CLI command or message."

## 4. Lexical "Dead-Ends" (Negative Steering)
To prevent "AI Flavor" from breaking immersion:
- **Ban-List**: `As an AI`, `I'm sorry`, `Is there anything else`, `Certainly`, `I can help with that`.
- **Formatting Ban**: `No bolding`, `No markdown lists` (unless requested). This forces the model to use natural paragraph structures.

## 5. Proactive "Heartbeat" Interpretation
The ShelderEvo CLI should inject periodic status pulses. The system prompt must know how to handle them:
- **Signal**: `[HEARTBEAT: {telemetry_data}]`
- **Model Instruction**: "When you receive a `[HEARTBEAT]`, do not respond to the user. Instead, update your internal `<thought>` buffer and only output if a critical state change (e.g., Stamina < 10%) is detected."

---
> [!TIP]
> For Llama 3 specifically, use the `<|begin_of_text|><|start_header_id|>system<|end_header_id|>` format and place the XML tags inside to maximize prompt adherence.
