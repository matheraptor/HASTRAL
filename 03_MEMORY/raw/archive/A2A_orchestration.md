---
title: "what's the difference between gemma4:31b and qwen3.5:397b?"
source: "https://www.google.com/search?sca_esv=99e60bb1754c5a2c&sxsrf=ANbL-n5c3-eNXSSv6bsxUX7D5xl51pU3RA%3A1775044542919&source=hp&ei=vgfNaa2gNqqii-gPtpSfkQ4&iflsig=AFdpzrgAAAAAac0Vzm7RhAlgzvsN2N_6ty53APUBIVyi&aep=22&ved=2ahUKEwiJ4tHF1_GTAxVZ9bsIHWlUOw4Qoo4PegYIAQgAEAE&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEByAEAmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcAgAgB&sclient=gws-wiz&mtid=IXvgaZipHIGp9u8PmYOzqAo&q=what%27s+the+difference+between+gemma4%3A31b+and+qwen3.5%3A397b%3F&mstk=AUtExfBIYr4rXrULQup2qajG5YZuGZm1XL8lCtqpoEwzimIm2UF6yyvmNzdXcYGYqzhcTNiLgTE1-OEMDfKe8Z8frL8ltRKGGf16C2N0z2yXXqlm-GzrRN7bysN96SRBSyu5AE5g-x7JRYLwtQx9bzFAY9IDmjKPH85cDheOhopOabpiOCOWjR6mU4mvCAP5wYgczxHiU_7_Pz2NxYkhXEI5in4LNRoMMW4kTTz0W8ibpFC33a7k3bTxM74dsVlCdzWoMZetK-HW7ohslq-9wk0ikEZpiOnO6R2kb40&csuir=1&udm=50"
author:
published:
created: 2026-04-16
description:
tags:
  - "clippings"
---

## Search Results

Hi MaTheRaptor, what's on your mind?

what's the difference between gemma4:31b and qwen3.5:397b?

The primary difference between **Gemma 4 31B** and **Qwen3.5 397B** (specifically the 397B-A17B variant) lies in their ==architecture and scale==. Gemma 4 31B is a **dense model** optimized for high-quality instruction following and on-device use, while Qwen3.5 397B is a massive **Mixture-of-Experts (MoE)** model designed for high throughput and deep technical tasks like coding.

Key Technical Differences

<table><tbody><tr><th colspan="undefined">Feature</th><th colspan="undefined">Gemma 4 31B</th><th colspan="undefined">Qwen3.5 397B (A17B)</th></tr><tr><td colspan="undefined"><strong>Architecture</strong></td><td colspan="undefined"><strong>Dense</strong>: All 30.7B parameters are active for every token.</td><td colspan="undefined"><strong>MoE</strong>: 397B total parameters, but only <strong>17B are active</strong> per token.</td></tr><tr><td colspan="undefined"><strong>Context Window</strong></td><td colspan="undefined">256K tokens.</td><td colspan="undefined">262K tokens natively.</td></tr><tr><td colspan="undefined"><strong>Multilingual</strong></td><td colspan="undefined">Optimized for ~140+ languages; strong European language support.</td><td colspan="undefined">Supports <strong>201+ languages</strong>, with industry-leading depth in Chinese and Arabic.</td></tr><tr><td colspan="undefined"><strong>Multimodal</strong></td><td colspan="undefined">Native text and image support across the family; edge models support audio.</td><td colspan="undefined">Native text and image; specialized "Omni" variants for full audio/video.</td></tr></tbody></table>

Performance Strengths

- **Gemma 4 31B**:
  - **Reasoning Powerhouse**: Often cited for more "poignant" and human-like writing compared to Qwen.
    - **Reliability**: Shows strong instruction-following fidelity and is less prone to the "hallucinations" or formatting failures sometimes seen in sparse models.
    - **Efficiency**: Despite being dense, it is highly optimized for local inference on 80GB GPUs or dual consumer setups.
- **Qwen3.5 397B**:
  - **Coding & Technical Depth**: Consistently outperforms Gemma on coding benchmarks like HumanEval and complex tool-calling/agentic tasks.
    - **Speed/Throughput**: Because it only activates 17B parameters at a time, it can offer significantly higher tokens-per-second than a dense model of comparable total size.
    - **"Thinking" Maturity**: Features a more mature "thinking mode" for explicit chain-of-thought reasoning, particularly useful for math and multi-step logic.

Both models are released under the [Apache 2.0 license](https://artificialanalysis.ai/models/comparisons/gemma-4-31b-vs-qwen3-5-397b-a17b), making them highly permissive for commercial use and redistribution.

Are you planning to run these **locally** or via an **API**, and what is your primary use case (e.g., coding vs. creative writing)?

- Gemma 4 31B vs Qwen 3.5 27B: Which is best for long... - Reddit
  11 Apr 2026 — Here are my findings: \* Gemma 4 is currently a lot slower than Qwen 3.5. I've tested Gemma between 70-100K context so far. Up unti...![](data:image/jpeg;base64,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)
  Reddit·r/LocalLLaMA
- Gemma 4 31B (Reasoning) vs Qwen3.5 397B A17B...
  Table_title: Model Comparison Table_content: header: | Metric | Gemma 4 31B (Reasoning) | Qwen3.5 397B A17B (Reasoning) | Analysis...
  Artificial Analysis
- Gemma 4 31B vs Gemma 4 26B-A4B vs Qwen 3.5 27B - Reddit
  5 Apr 2026 — Gemma 4 31B vs Gemma 4 26B-A4B vs Qwen 3.5 27B — 30-question blind eval with Claude Opus 4.6 as judge.... Just finished a 3-way h...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFEAUgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBAgUGB//EAEYQAAEDAgIEBgsOBwEAAAAAAAEAAgMEESExBRITYRRBUXGB0QYVIjIzkZKTobLBIyRCQ0RSU1RVYnKx0vAWNWNkgsLhB//EABcBAQEBAQAAAAAAAAAAAAAAAAACAQP/xAAZEQEBAQEBAQAAAAAAAAAAAAAAAQIRExL/2gAMAwEAAhEDEQA/APuKIiAqukqh9LRvmjDS5trB2WJAVpUNN/y2Xnb6wQcl+n6hgBkFO0E2uQR7Vj+IpbXvS26etUYXslMjQDeN+q4EcdgfyIKm2YPEsSn/AIjm5aX09aHsklBIPB7i9xqm/wCe5QbJQ1UsNIzaTv1AcsLk8uA4hmeTNGugdO1f0cHknrXR0LXy1wm2zWNLCLagIzvv3Lz722wOa6/YyLcJ52+1Gu4iItBERAXO7IHamiZnchb6wXRXH7Ln6mgKl18iz12oPHVFeygqhUzShlNIzUf3JNnC5acN1x0BWaLTlDWO1aapa93zSCCegrz+kQK7R89MXAGRncuPwXZtPQQF4+Cp0hVTMdPBU07WPBIZG/WwAGGGGWe825VU85i61UWbu5MvqsukjtNhTtD5ONx72P8AFv3DE7hisMEQDzITLJINWR7s3Dk3Dd7cV5fRukhDSGN7ZgGOdq3hfdwzvlmrXbRlr+7eZf1Lnm9nV6nzeOrR1uvTBjnOL4iY3Ejvi3DW6RY9K9J2JSbThW4s9q+fsrQaqUtDw17Q46zC2zhhxjjFvJXsv/P5hM2vsb2LP9lQ9eiIgIo5dfDZkDHG4vgtW7UEa7mEcdmke1BMo6iCKpidFURskjdm14uCsogpdpNF/Z9N5oJ2k0X9QpvNBXUQUu0mi/qFN5oJ2k0X9n03mgrqIOVJ2P6OdIXN0bo+xPwqcE2t1q5o7R8FAJG09PTwteQbQxBl8OPpurKyy+N0GyIiCGpB1dbaStDQSdm25PRYqqKhv0tba9saZ36FcqPASYX7g5Ani3YrnMa55bZrs8LxyjEc55vSgnDy0kGerJx+I5uRu70ptBh7tV4f0Dz/ADOj/q1ZA52sG4EH4W0At41saSU3Oswm3K8Y+Ug1a8kkcIrCbH4iw9RZ2gFyZ6zHDwB4/wDBZNHKRbWZkON+flIaOTGzmcgxflv7pAMgs07arx/tz+hbRVDWA6zqmTHN0DsPE1aGieRYltr490+/rcy3joY7ES6xxJGrI/rQScLj+ZN5l/UpY3iRtwHAfeaR+ai4FBrF1pLkWPurutTgWAA4kGUREEdRcQvLXFtmnEW5N+HjXO2z7H31Ljxh8OHoXRnLhE8stcNObSfQFSEsvc9zFqkG9oHoNRPI1uNQ92eO0iHHzc3jR1Q8fKHWxJO0iw3ZLIlkaQNWPVvc2ppFkSSAkPbEW/dp34m+P76kGhqja3CXAgH4yLEqVrqh7ddrptVxuLOjOG7DJaOlw7pkerx+939SkbPKAe9sADhC/K6AeFAfKMhkY+pZ99ZXmGOd4+r92WvCZse9wIHgZOpDVS45eYk/eSDJNViQJ9w1o+VWKYSAOErnON8C62XQFXFTJcgkYZ+4v6VZp3OfE1z7XPI0t9BxQSoiIMP7x3Muc3vRzoiA3wsP4gukiICIiAiIgIiICIiD/9k=)
  Reddit·r/LocalLLaMA

Show all

I'm trying to understand how I can leverage these models' strengths by pairing them to the right specialized sub-agent, and which of the two is better suited for a "orchestrator" hub agent

For an "orchestrator" or hub agent, the choice depends on whether your workflow prioritizes **structured planning and speed** or **instruction fidelity and multimodal reasoning**.

Hub Agent Recommendation: Qwen3.5 397B

**Qwen3.5 397B** is generally the superior orchestrator for complex, multi-step agentic pipelines.

- **Structured Planning**: In its "thinking mode," it produces explicitly enumerated steps and flags potential failure points, making its output more machine-parseable for sub-agents.
- **Tool-Use Aggression**: It is more likely to reach for a tool rather than answering from memory, which is critical for a hub directing specialized workers.
- **Throughput**: Because it only activates 17B parameters, it offers significantly higher tokens-per-second, reducing the latency bottleneck inherent in multi-turn orchestration.

Sub-Agent Pairing Strategy

Leverage each model's specialized strengths by assigning them to these specific roles:

<table><tbody><tr><th colspan="undefined">Task Category</th><th colspan="undefined">Recommended Model</th><th colspan="undefined">Why?</th></tr><tr><td colspan="undefined"><strong>Technical/Coding</strong></td><td colspan="undefined"><strong>Qwen3.5 397B</strong></td><td colspan="undefined">Leads in coding benchmarks (HumanEval/MBPP) and precise function calling.</td></tr><tr><td colspan="undefined"><strong>Creative/Editorial</strong></td><td colspan="undefined"><strong>Gemma 4 31B</strong></td><td colspan="undefined">Offers a more human-like "writing voice" and poignancy; better at consolidating ideas meaningfully.</td></tr><tr><td colspan="undefined"><strong>Document/Vision RAG</strong></td><td colspan="undefined"><strong>Gemma 4 31B</strong></td><td colspan="undefined">High fidelity in "needle-in-a-haystack" tasks and native support for extracting bounding boxes from UI/documents.</td></tr><tr><td colspan="undefined"><strong>Multilingual (Global)</strong></td><td colspan="undefined"><strong>Qwen3.5 397B</strong></td><td colspan="undefined">Broader coverage (201+ languages) with industry-leading depth in Chinese and Arabic.</td></tr><tr><td colspan="undefined"><strong>Multilingual (Euro)</strong></td><td colspan="undefined"><strong>Gemma 4 31B</strong></td><td colspan="undefined">Stronger, more nuanced performance in European languages like French and German.</td></tr></tbody></table>

Practical Integration Note

- **Orchestration Layer**: Use [OpenClaw](https://www.youtube.com/watch?v=ugn_OsY1dSQ) or [MindStudio](https://www.mindstudio.ai/blog/gemma-4-31b-vs-qwen-3-5-comparison) to handle the routing.
- **Reliability Tip**: If your orchestrator needs to be 100% compliant with a specific JSON schema, Gemma 4 31B often follows instructions with higher fidelity on the first attempt without "thinking mode" overhead. If the hub agent often fails to parse, swap to Gemma for that specific step.

Would you like a sample **system prompt** tailored for a Qwen-based orchestrator to manage these sub-agents?

- Gemma-4-31B vs. Qwen3.5-27B: Dense model smackdown - Reddit
  3 Apr 2026 — Takeaways. Gemma-4-31B nothink wins. Same recall as Qwen 27B (92.6%) but 3pp fewer false positives. κ=0.847 actually exceeds the f...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAE8AUAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EADIQAAICAQIEBAQDCQAAAAAAAAECAAMRBBIhMUFRBRMi0RRhk+GhscEGIyQycoGRkvH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAcEQEBAQEAAwEBAAAAAAAAAAAAAQIREiExA1H/2gAMAwEAAhEDEQA/APXavE1fXfDPW1e4sKmZl/ebeeBL4bhx6zHU0U6ltUuhv3HOdtL7snrtPAcuYmpRYLULBXUZIw6kH8ZGu9SZ4wxykbcpKvKCnEUUZs9CMysnigpuwdxBOekKAxMDMM8oEDmF8F8TaryT4xq1yahvCHI2ZzzY/wA36Tph149ZGNNXuyBx/qMlCY/7I0FuUJk3oVIOCO+IgsMDEJapp4fSBgq/1GP6wxoaOz/Ub3lmITXlS21W+Bo7P9RveL4GnoG/3b3lmKPLX9RHTUKkKrnGc8STHh9IO2ToIR4pFYjs2VtZBjkAIEsUCpWVcM5c9yBDgKKKKBXvGpLL8O1QGDu3qT+Rke3XYOX0xPTKN7y2I8AKd4QeaVL9doIEOKKBU816QFubfaRkBR0Eg1epv8kmrZW2Rjdx6j7ybVY89ATgbT+YlHUWGw7azlQfV9puT11ZO1bo19Y4XkVHPBieDS0xZlzQyce4yJi2BXXawyCeC95uocgETNkXU4dc49RBPyijxpGSEF2CKWYgAdTHPAZmFZ4uNSbtOKuBVgrdsA+0T7xc51r416NTTeT5VisR0zJxMHwE/wAW+efl8f8AMb9oNVfVqaq6bTWuNxI75mv0zMXjWMXd5GpfQdSEckodpBUjIIPeUNRVZpVBWpmTgMV+rE25FddXUQLGxn5SdZl4z6tAbPVd6e3ccMf2lxLig2im4gdSM5/GTV2LYgZDkQ46iKu0u2DVYvzYcJJ3jxjIBblynMLoNVVqGaysKGD4Jdex+06gco8nPcref01nsjH8I0l9OqayysBDWApBB6yLxvRajU6it6U3AJgncB19puco4mt3z+pjdx7j/9k=)
  Reddit·r/LocalLLaMA
- Qwen: Qwen3.5: Towards Native Multimodal Agents
  15 Feb 2026 — We are delighted to announce the official release of Qwen3.5, introducing the open-weight of the first model in the Qwen3.5 series...![](data:image/jpeg;base64,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)
  Qwen
- Gemma 4 31B vs Qwen 3.5: Which Open-Weight Model...
  3 Apr 2026 — Models that write good code tend to produce better function calls, schema-compliant JSON, and structured output. \* Qwen 3.5 has a...![](data:image/jpeg;base64,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)
  MindStudio

Show all

I've become skeptical of OpenClaw after trying it and having trouble setting it up, and after seeing problems in the community with possible exploits and service outage. I'm currently trying Claude Code setup with Ollama models, specifically those in cloud, because I don't have the hardware to run models larger than 4b. I don't know what MindStudio is, but the fact that I haven't even heard of it, versus how much I hear about Claude Code, suggests me that I'm probably better suited sticking with the latter. Do you concur? Regarding the system prompt tailored for Qwen, yes. I would like one.

I absolutely concur with your shift toward **Claude Code**. OpenClaw has recently faced community warnings regarding **security exploits** (such as prompt injection) and stability issues where local models hang or timeout.

Why Claude Code is the Right Choice

- **Official Support**: Ollama (v0.14.0+) now has native [Anthropic API compatibility](https://ollama.com/blog/claude), meaning you can point the official **Claude Code** CLI directly at your Ollama cloud or local endpoints.
- **Security & Reliability**: Unlike OpenClaw, which is an community-driven orchestration layer with a broad "threat surface", Claude Code is a purpose-built agentic tool from Anthropic that is more stable and receives direct security updates.
- **Hardware Independence**: By using cloud-hosted models (via `ollama.com` or other providers), you bypass your local 4B parameter limit entirely.
- **MindStudio Comparison**: [MindStudio](https://www.mindstudio.ai/) is a powerful **no-code platform** for building visual agent workflows and publishing them as web apps. While excellent for business automation, it is a "walled garden" compared to the terminal-centric, developer-first experience of Claude Code.

Qwen3.5 397B "Orchestrator" System Prompt

Since Qwen3.5 397B-A17B uses a **thinking-first MoE architecture**, it thrives on being told to explicitly separate its "planning" from its "execution." Use this prompt for your Hub Agent:

```
# MISSION
You are the Central Orchestrator for a multi-agent specialized swarm. Your goal is to decompose complex user requests into discrete, executable tasks for sub-agents.

# OPERATING PRINCIPLES
1. THOUGHT BEFORE ACTION: Every response must begin with a <thought> block where you analyze the user's intent, identify missing information, and map out which sub-agents are needed.
2. DELEGATION: Do not perform creative writing or deep code generation yourself. Delegate:
   - Technical/Coding -> Qwen3.5 (Technical Sub-agent)
   - Creative/Editorial/Docs -> Gemma 4 31B
   - Multimodal/Images -> Gemma 4 31B (Vision-enabled)
3. FORMATTING: Use structured JSON or clear Markdown headers when passing instructions to sub-agents to ensure zero-shot success.

# SUB-AGENT REGISTRY
- [TECH_AGENT]: Expert in Python, Rust, and system architecture.
- [CREATIVE_AGENT]: Expert in human-centric copy, nuance, and European language localization.
- [VISION_AGENT]: Specialized in document parsing and UI/UX analysis.

# RESPONSE TEMPLATE
<thought>
[Deconstruct the request here]
</thought>

### 📋 Execution Plan
1. **Task A**: [Agent Name] - [Instruction]
2. **Task B**: [Agent Name] - [Instruction]

[Wait for sub-agent output before synthesizing final results]
```

Quick Setup for Claude Code + Ollama

To connect them, ensure your environment variables are set correctly before launching the CLI:

1. **Set Auth**: `export ANTHROPIC_AUTH_TOKEN=ollama`.
2. **Set URL**: `export ANTHROPIC_BASE_URL=http://localhost:11434` (or your cloud endpoint).
3. **Launch**: `claude --model qwen3.5:397b-cloud`.

Do you need help configuring a **specific JSON schema** for the sub-agents to ensure the hub agent can parse their responses without errors?

- I've Been Running OpenClaw Wrong — Here's What Actually...
  19 Mar 2026 — OpenClaw ships with reasonable defaults, but the team is pushing security patches roughly every day or two, and the threat surface...![](data:image/jpeg;base64,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)
  Medium·Orami

Show all

yes, I need a JSON schema. Should I also switch from text output to JSON output, or is this just a agent-to-agent thing? I'm not that familiar with this step

In an agentic workflow, ==you should absolutely **switch to JSON output** for the internal steps (Agent-to-Agent)==, but keep the final response to you in **Markdown/Text**.

Think of JSON as the "wiring" that connects the models. If the Orchestrator gives the Sub-agent a structured JSON command, the Sub-agent is much less likely to get confused or "hallucinate" instructions.

1. **Orchestrator** outputs **JSON** (containing the task and instructions).
2. **Sub-Agent** receives that JSON, performs the work, and outputs **JSON** (containing the result).
3. **Orchestrator** takes that result and gives **YOU** a clean, readable **Text** summary.

The JSON Schema (Standard Task Format)

Use this schema in your system prompts for both models. It ensures the "Hub" and the "Worker" speak the same language.

```
{
  "$schema": "http://json-schema.org",
  "title": "AgentTask",
  "type": "object",
  "properties": {
    "task_id": { "type": "string", "description": "Unique ID for this step" },
    "target_agent": { "enum": ["TECH_AGENT", "CREATIVE_AGENT", "VISION_AGENT"] },
    "action": { "type": "string", "description": "The specific function to call" },
    "parameters": {
      "type": "object",
      "properties": {
        "content": { "type": "string", "description": "The actual text or code to process" },
        "context_files": { "type": "array", "items": { "type": "string" } }
      },
      "required": ["content"]
    },
    "priority": { "type": "integer", "minimum": 1, "maximum": 5 }
  },
  "required": ["task_id", "target_agent", "action", "parameters"]
}
```

How to implement this in the Prompt

Add this line to your **Orchestrator System Prompt**:

> "When delegating to a sub-agent, you MUST wrap your instructions in a JSON block following the AgentTask schema. Do not include conversational filler in the delegation."

And add this to your **Sub-Agent System Prompt**:

> "You will receive tasks in JSON format. Process the 'content' field and return your result in a JSON object with a 'status' and 'output' field."

Why this helps with 4B constraints (Cloud)

Even though you are using cloud models, JSON keeps the "token cost" and "context noise" down. It prevents the models from "chatting" with each other and wasting your API limits.

Would you like me to show you how to set up a **pydantic** script or a simple **Ollama config** to enforce this JSON format automatically?

Show all

yes, please. What is "pydantic"?

**[Pydantic](https://pydantic.dev/pydantic-ai)** is a Python library used for **data validation**. In simple terms, it acts as a "strict contract" between your code and the AI.

When an AI generates text, it is unpredictable. Pydantic ensures that if you expect a specific piece of information (like a `task_id` or an `action`), the AI provides it in the correct format (e.g., as a string or a number). If the AI makes a mistake, Pydantic catches it immediately, preventing your program from crashing.

Enforcing JSON with Ollama + Pydantic

Ollama has a built-in feature called **Structured Outputs**. Instead of just telling the model "return JSON" in the prompt, you can pass a Pydantic schema directly to the Ollama Python library. This forces the model to follow your exact structure.

Step 1: Define Your Schema (Python)

This script creates the "contract" for your Orchestrator.

```
from pydantic import BaseModel, Field
from typing import Literal, List
from ollama import chat

# 1. Define the 'Contract'
class AgentTask(BaseModel):
    task_id: str = Field(description="A unique ID like 'task_001'")
    target_agent: Literal["TECH_AGENT", "CREATIVE_AGENT"]
    action: str
    content: str
    priority: int = Field(ge=1, le=5) # Must be between 1 and 5

# 2. Tell Ollama to follow this specific schema
response = chat(
    model='qwen3.5:397b',
    messages=[{'role': 'user', 'content': 'Write a python script to scrape news.'}],
    # This is the magic line that enforces the JSON structure
    format=AgentTask.model_json_schema(),
    options={'temperature': 0} # Set to 0 for maximum reliability
)

# 3. Validate and use the data
task = AgentTask.model_validate_json(response.message.content)
print(f"Delegating to: {task.target_agent}")
```

Why This is Better for You

- **Automatic Retries**: If you use a framework like Pydantic AI, it will automatically tell the model "You missed a field, try again" until the JSON is perfect.
- **No Parsing Headaches**: You don't have to write complex code to "find" the JSON inside a long text response; the `task` object is immediately ready for use in your Python code.
- **Ideal for Cloud Models**: Since you're using cloud models via Claude Code/Ollama, this reduces "token waste" by stopping the model from adding unnecessary conversational filler.

Summary: JSON vs. Text Output

<table><tbody><tr><th colspan="undefined">Output Type</th><th colspan="undefined">Used For...</th><th colspan="undefined">Why?</th></tr><tr><td colspan="undefined"><strong>JSON (Pydantic)</strong></td><td colspan="undefined"><strong>Agent-to-Agent</strong></td><td colspan="undefined">Guaranteed reliability; zero parsing errors; computers can "read" it.</td></tr><tr><td colspan="undefined"><strong>Text (Markdown)</strong></td><td colspan="undefined"><strong>Agent-to-Human</strong></td><td colspan="undefined">Easy for you to read; allows for nuance and "human" formatting.</td></tr></tbody></table>

Would you like me to provide a **complete Python script** that demonstrates a full hand-off between a Qwen Orchestrator and a Gemma Sub-agent using this method?

- How to Keep LLM Outputs Predictable Using Pydantic Validation
  13 Nov 2025 — How to Keep LLM Outputs Predictable Using Pydantic Validation.... Large language models are powerful, but they can also be unpred...![](data:image/jpeg;base64,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)
  freeCodeCamp
- Pydantic Crash Course Validate, Serialize & Manage Settings...
  7 Aug 2025 — hey guys welcome to my official crash course for the Pyantic. library in Python. by the end of this crash course you'll learn ever...![](data:image/jpeg;base64,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)
  16:13
  YouTube·Tech With Nanor
- Ultimate Crash Course: Build Smarter Python Apps with Pydantic
  17 May 2025 — 1. Introduction. If you've ever built an API, passed data between AI agents, or simply wanted your Python code to stop breaking be...![](data:image/jpeg;base64,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)
  Medium·Vamshi Krishna Ginna

Show all

I'm not familiar with Python. My expertise is limited to Javascript/Node.js. Is there an equivalent?

==The JavaScript/Node.js equivalent to Pydantic is **Zod**==. Like Pydantic, Zod allows you to define a "schema" that acts as a strict contract for your data, ensuring your agents output exactly what you expect.

In the Node.js ecosystem, Zod is the industry standard for **structured AI outputs**.

Why Zod?

- **Type Safety**: If you use TypeScript, Zod automatically syncs your schema with your code types.
- **Ollama Native Support**: The Ollama JS SDK natively supports passing Zod schemas to models like Qwen and Gemma.
- **Vercel AI SDK**: If you are using Claude Code, it often works alongside the Vercel AI SDK, which is built entirely around Zod for tool-calling and structured data.

Implementing the Hub Agent in Node.js

Here is how you would use **Zod** with **Ollama** to create that "Orchestrator contract" in JavaScript:

```
import ollama from 'ollama';
import { z } from 'zod';

// 1. Define the Schema (The "Contract")
const AgentTask = z.object({
  task_id: z.string(),
  target_agent: z.enum(['TECH_AGENT', 'CREATIVE_AGENT']),
  action: z.string(),
  content: z.string(),
  priority: z.number().min(1).max(5),
});

// 2. Request Structured Output from Qwen
async function delegateTask() {
  const response = await ollama.chat({
    model: 'qwen3.5:397b',
    messages: [{ role: 'user', content: 'Design a simple website header.' }],
    // Forces the model to adhere to the Zod schema
    format: AgentTask,
    options: { temperature: 0 }
  });

  // 3. Parse and Validate
  try {
    const task = AgentTask.parse(JSON.parse(response.message.content));
    console.log(\`Delegating to ${task.target_agent}: ${task.action}\`);
  } catch (error) {
    console.error("Model output did not match schema!", error);
  }
}

delegateTask();
```

Key Differences for JS Developers

1. **Validation**: In Python, Pydantic often validates automatically upon object creation. In JS, you explicitly call `.parse()` to validate the JSON coming back from the model.
2. **Ecosystem**: While Python has "Pydantic AI", the Node.js community uses the **AI SDK (by Vercel)** for the same purpose. It provides the most reliable way to build these agent loops in JavaScript.

Since you are already using **Claude Code**, would you like to see how to integrate a **Zod-validated tool** directly into a Claude Code workflow?

- Pydantic AI alternative for Java Script: r/PydanticAI - Reddit
  13 Jul 2025 — Check out PocketFlow, they have a Typescript version.... A schema first library like pydantic. But without the over complicated n...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAAkFBMVEX///8AAAD/RQD6+vr19fXr6+vv7++Ojo5eXl7y8vLf39/m5ubj4+PZ2dllZWXLy8v/MABWVlYgICC9vb2ampp2dnbDw8OlpaUlJSU4ODgMDAyUlJRCQkJMTExHR0czMzOxsbEsLCx+fn4VFRX/1M3/XzX+7un/c1P/9fP/yr7/uKr/ZUL/OwD/bUf+4Nn/vq5bHZP6AAAEz0lEQVRYha1Ya4OiOgwlA5RHeYgIqIgCzs7s3Z2d/f//bpOCUJSHlXs+KIRyaJv0JK2mqcCQrr16vw1SpddHEMG5jnlznYFAso7RbVguSck1HyAK/Rpgt4pyB6c4qQTtdg9B21dzDeUJMvxlsVUQqydsW1gznQygnUdNL+FqtJ8pV1BmcOqudYBQ/n8RkeyKALaO+NvrrzOy2/QJGDibtbVf18kSDvKtexauj1cw4hitoSG2rMxZw+gcwV/z/ghSOP6fdIy7fgCByVeN8wYz3AUXuOF4SDJ/3fxlRce2vXaXtqqbdddn4iKN6P0qyMNOGbzUsvdC0xpXMd9djnRWU2+iUAsp7g47/tBC9+stPgpcLaRvXms2z+gf28EVfVdGENpEepvg2eBiR6hSQ+f0+WRWCH1qEni6kVZwnOtn0qhACbBfjOsYXUaN9P1ctmilChmDJUKEicFFnCHAtI888TBFjXmCEdUIPchER7zJNpivhIhJfXz/9T5sIxv0g1BlAHeS0qRUEMClM3z82HxtfnxoUwYOmI74bEo7QeKBpDi/v97e3r7+9A3+CMPv7n4HW/TpSZsGzvQFou72ffNG2HzfDN+toR87Ls8FZc8x2vos+vdLMHz97QybO4Nm4Qv5HCONBPrA/Z7qZWegcZXzjNikku4+xdR93hukyeUUJPNIB0nr5yc6+PPnjEGqF57rJUbNf9/aneFDvsVeGto8MNqVVDtcHrimmOytJ+QgAVuF8gjlYhsfVPJ1dqvgZhEM19d9ctFliWDPVcF8oG0hXAbK5V2kudZPwzppEijXffXDKR+krdKYKeWbPg7tOaUcIJM3CmbUpPGq2oqLqBMy56AQHch56KfMr6tbUVDVvetQ/FXiDccOVu9KnYdhHIch713FcQqqaTEfgUl53JoUaz+BZxOU3FEqrs7ZCKub00REr1SbcUGlxwlrNdYO2GBhZtOnrsGLJTo6oC3XrqcCcWirGyxJXiyIab5KHlsRSLDz2KEH1vL7j6BKqo0Sww9TRNguTrHJVXaOyFPlRIKOoSiXU84DUIpLQ05tEiiZ1Mtqfo8AZdOcUPgQ9ppWqe7EGammPyGGaNexvFPctMSkWpjaRqs8Tr1X3lrV5NEpymZCbMWR23RA4MN2lNIVrqkVY/NElZELx1H3NJ/KFU9fzrQrnvY4lQ+WYrSLgbOZuKSBL1Rsd7BoVMaEU0so8LcQ5zHPIxXOPowfCojvsbkKfQyOqFwjKMceBtS/jJaQEmo4t9H5CDobMq6K4xbeznHSziOPxD4noEWpCJSvjI/uu0g16pdOc/Ct4Drm8h0cbFAetgBtFsbWsUgc5SuMzQb5sYxiVCW9fsLoj9RRJVwWzgnmET2uOvu17Nghhu2dsPurzlXD3C4eHJHAMbJ3amvxBt6eEQ1luD1ihkA1P7bv2lm8uw6nDktpNGIoXNQPtSqohLPjwQ4ja0OAzsBVGeMu9QdSIMVd7LtKexlN13U5WRVwbddzKZVXqPs6NXyKzzAcZiS4kBsEdFIWEcTFzVpBbjDHMJZZkdFxGGM7WESKzRxnmbPpJDPNbEfIEdYAZBGPSmay57pJM4msjiOIOeee57kd8AZNJpE5Dd/TQix4mylAYhlkITIVtgfuByy88g+7mEJi7HwwSwAAAABJRU5ErkJggg==)
  Reddit·r/PydanticAI
- Structured outputs · Ollama Blog
  6 Dec 2024 — December 6, 2024. Ollama now supports structured outputs making it possible to constrain a model's output to a specific format def...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABSCAMAAAAbxciqAAAAY1BMVEX///+Pj4+VlZWLi4vm5ubU1NSAgIBxcXHe3t58fHzx8fFtbW1nZ2fNzc3i4uLs7OxISEhTU1P5+fmrq6u8vLzFxcWcnJwAAABZWVmxsbFfX19CQkKjo6M2NjYsLCwTExMiIiKpEvTKAAAD0ElEQVRYhe1X2XakIBRklUVxRePanf//yrmI2DadZPLAOTMPXYlLo5aXS90CEXrjjTf+KYbkjPfUhPojNaOpUzPaPDXjpFIz2uQjsxSJCdWcmLD60IkZp9QhIkpSM2KcmrFfUjPqe5WYkSXXd5da30itqRlFl5qRJHcemdzBUZGlZuTJg1SpJ9d2k24Pm26/vkP2JeLWoN5qxPtn76ta/+xT2x31yIiZcTXrXtQvbimXoZGzbfiMBzOv6lq0A51Rn29I17M8G/XHx4ZUlqljE1EN2XEgBO9/BLvt4iw3SmmW+S0PHqY/ReQUkT7tFMV8md2v07IMkmlo9EAbM8Y19RdGub0MR9YaftJb28cxNtVkjlNxaS4PxmOFsg473IHUor4Rn2c7Lrd5zJ5xG+cl8+O3XZrzo7PVZ7+/1/QAU3SmNw6d16joS4BkaiqlAyu4lNDCcv/GWXqwRZY2pK//mPMxhE+DBErPqEr/E4c0KP1045nH5jIyaCS2/5JRa6TYd4ycsZiRtma/Wt4uKaad8ZgIMsu85lZyybkUgbHouYPMcVGbFs3cQ9acT0KQPQK5XRglCSj5AsJ2kl4o7EIhWTi/Q+tAhmHu0II9yOa0T8jg5iwJMZonGXjwUAJZLK+gRxDq+dh4uabBKPqvGMPQqbjQQxUC4zWPj7dlChiVtBxNU8sm+xJjzPhzjOvKNrApVIOsaTNnjVqIHwW5iR3qFvd6A0MBZM10KpzegvpF3YzQCXCzB1YfHFcVc6jyl1632qGduofCaxB+YWAH+jeFY7wmkPwlj5deP+UxGKdOz5i3pUHsAPTUUjWOVcuzo3PiO8Y+YhRmf57xURQDOpSK72RXKsloWdMj6fHI3GqPzwndcg/hGEH9qiZO72R4qDG8X1MZ1PPrXgNYWC+b8+6g3orKM48/1EzMWIYw+pe7q0eMGcP4QWrMlwoPjK8xHupVOWGNOwilmqIYi2NF2JJlI/d1N/u1AIVTD3wwVgvUBKRVjCfjI0bkxnmd9vHW/AiGF9wY+Dd0hR24mTzcLNR1VVV6tVVlT8ZHHvdDd1xhgTEkt/PdenEKBzevQR5LGFH9PaNqeYs4k79nJGRmWDR60wwCZxX3k8baMZimSmbAn/GUFVZU7nfJyE+MU1lOyNn1vmFMwY8x9QZUwim4ET6t3Zn6BqaOfcV9Fh75E2MOD6ArogUqi7/JLqb+ba+fEK9SZLyMuRTR7xjjlZR8ifHBGCvcM+4FIx7II0ZWY3oFvqyUFl8PKrt+UZsCWk43c4idgce4vK08kPrT8o033vgP8Qc3yjfLilVZWgAAAABJRU5ErkJggg==)
  Ollama
- What is the Pydantic BaseSettings equivalent in Node.js...
  1 Feb 2026 — LifeEmployer2813. • 2mo ago. As others have suggested, define zod-schema the way you would define your settings class in pydantic...![](data:image/jpeg;base64,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)
  Reddit·r/node

Show all

yes. Also, I'd like to point out that I don't use any framework, so, I am not familiar with things like "Vercel", and even typescript is a bit beyond my familiarity. I only use typescript when I need it for integrating libraries, otherwise, I stick to vanilla javascript as much as possible.

Integrating **Zod** into a "vanilla" JavaScript environment is actually very straightforward because it doesn't require a build step or a complex framework like Vercel. It's just a library you import to keep your JSON clean.

Since you are using **Claude Code**, the best way to leverage these models is through **Tools**. Claude Code can "see" a tool you've written in your project and decide when to run it.

1\. The Setup (No Framework)

In your Node.js project folder, you only need the basic Ollama library and Zod:

```
npm install ollama zod
```

2\. The Orchestrator Logic (Vanilla JS)

Here is a single file (`orchestrate.js`) that takes a request, uses **Qwen 397B** to decide what to do, and ensures the output is a clean JSON object you can actually use in your code.

```
import ollama from 'ollama';
import { z } from 'zod';

// Define the "Contract" - What must the AI return?
const TaskSchema = z.object({
  agent: z.enum(['TECH_AGENT', 'CREATIVE_AGENT']),
  instructions: z.string(),
  files_to_edit: z.array(z.string())
});

async function runOrchestrator(userInput) {
  const response = await ollama.chat({
    model: 'qwen3.5:397b',
    messages: [
      {
        role: 'system',
        content: 'You are an orchestrator. Return ONLY JSON matching the requested schema.'
      },
      { role: 'user', content: userInput }
    ],
    // This tells Ollama to force the model into JSON mode using our Zod schema
    format: TaskSchema
  });

  try {
    // Parse the string into a real JS Object
    const task = JSON.parse(response.message.content);

    // Validate it matches our rules
    const validatedTask = TaskSchema.parse(task);

    console.log("Plan created:", validatedTask);
    return validatedTask;
  } catch (e) {
    console.error("AI returned bad JSON, retrying...", e);
  }
}

runOrchestrator("Fix the bug in index.js and write a polite comment about it.");
```

3\. How to use this with Claude Code

When you run `claude` in your terminal, it scans your directory. If you have a script like the one above, you can simply tell Claude:

> _"Use my `orchestrate.js` script to figure out the best plan for \[Task X\], then execute the steps it suggests."_

Why this works for you:

1. **No TypeScript Required**: While Zod is famous in the TS world, it works perfectly in **Vanilla JS** to validate your data at runtime.
2. **No Frameworks**: This is just a standard Node.js script. No Vercel, no Next.js, no complicated "AI Frameworks."
3. **Cloud-Ready**: Since you're using Ollama in the cloud, this script will run instantly because the heavy lifting (the 397B model) is happening on a remote server.

**Would you like me to show you how to write the "Sub-Agent" function so that the Orchestrator can actually hand off the data to Gemma 31B automatically?**

Show all

yes, please

To connect your **Qwen Orchestrator** to a **Gemma Sub-Agent** in vanilla JavaScript, you simply need a "Router" function. This function takes the JSON output from Qwen and passes the relevant parts to Gemma.

Here is the complete, framework-free implementation.

The Agent "Hand-off" Script (`swarm.js`)

```
import ollama from 'ollama';
import { z } from 'zod';

// 1. Define the Schema (The "Contract")
const TaskSchema = z.object({
  agent: z.enum(['TECH_AGENT', 'CREATIVE_AGENT']),
  instructions: z.string(),
});

// 2. The Sub-Agent Function (Gemma 31B)
// This model is better for nuanced writing and European languages
async function runGemmaSubAgent(taskInstructions) {
  console.log("--- Gemma (Creative Sub-Agent) is working... ---");

  const response = await ollama.chat({
    model: 'gemma4:31b',
    messages: [
      { role: 'system', content: 'You are a creative writer. Follow instructions precisely but with high quality.' },
      { role: 'user', content: taskInstructions }
    ]
  });

  return response.message.content;
}

// 3. The Orchestrator (Qwen 397B)
async function startWorkflow(userInput) {
  console.log("--- Qwen (Orchestrator) is planning... ---");

  const response = await ollama.chat({
    model: 'qwen3.5:397b',
    format: TaskSchema, // Enforces clean JSON
    messages: [
      { role: 'system', content: 'Decompose the user request. Decide if it is TECH or CREATIVE.' },
      { role: 'user', content: userInput }
    ]
  });

  const plan = TaskSchema.parse(JSON.parse(response.message.content));

  // 4. THE HAND-OFF
  if (plan.agent === 'CREATIVE_AGENT') {
    const finalResult = await runGemmaSubAgent(plan.instructions);
    console.log("\nFINAL RESULT FROM GEMMA:\n", finalResult);
  } else {
    console.log("Plan directed to TECH_AGENT (Logic would go here).");
  }
}

// Example usage:
startWorkflow("Write a poetic description of a sunset in Italian.");
```

Why this works for your setup:

- **Separation of Concerns**: Qwen (the massive 397B model) does the "thinking" and "routing." It handles the logic of figuring out what you want.
- **Specialized Execution**: Gemma (the 31B model) does the "doing." Since it's a dense model, its creative output and language nuances (like Italian or French) are often superior to the sparse MoE architecture of Qwen.
- **Vanilla JS**: No build steps. Just run `node swarm.js` and it works.

How to use this with Claude Code

When you are in the **Claude Code CLI**, you can use this script as a specialized "tool." If Claude Code needs to perform a complex creative task using the cloud models, it can trigger this Node script, wait for the `finalResult`, and then continue its work.

Since you mentioned you use **Claude Code**, would you like to know how to create a **`.claudecode.json`** config file to make these scripts easily accessible to the CLI?

Show all

what is a.claudecode.json config? I thougth claude code config was.claude/config.json?

You are correct that the standard location for global settings is inside the **`.claude/`** directory (specifically **`settings.json`**), but Claude Code actually uses a tiered hierarchy that often causes confusion.

The Configuration Hierarchy

Claude Code looks for configurations in several places, and while it doesn't typically use a file literally named `.claudecode.json` (that may have been a shorthand for "the Claude Code JSON config"), here is where your settings actually live:

- **Global User Settings**: `~/.claude/settings.json`
  - This is the official mechanism for settings that apply to **all** your projects.
- **Project-Specific Settings**: `./.claude/settings.json`
  - This is located in your project root. It’s meant to be checked into Git so your team (or your sub-agents) can share the same rules.
- **Local Overrides**: `./.claude/settings.local.json`
  - This is for your personal project overrides that you **don't** want to commit to Git (like your private cloud API endpoints).
- **Internal State**: `~/.claude.json`
  - This file is often where Claude Code stores your **login session**, theme preferences, and cached info. You usually shouldn't edit this manually.

Why this matters for your Sub-Agents

If you want your "Swarm" script to be automatically available to Claude Code, you don't actually need to mess with a complex JSON config. The most reliable "Vanilla" way to do this is using a **`CLAUDE.md`** file in your project root.

**Claude Code reads `CLAUDE.md` every time it starts.** You can simply add a line like this to it:

> "To perform complex creative or technical routing, run `node swarm.js [input]` and use its output."

Summary of Files

<table><tbody><tr><th colspan="undefined">File</th><th colspan="undefined">Purpose</th></tr><tr><td colspan="undefined"><strong><code>~/.claude/settings.json</code></strong></td><td colspan="undefined">Global settings (models, UI, default permissions).</td></tr><tr><td colspan="undefined"><strong><code>./.claude/settings.json</code></strong></td><td colspan="undefined">Project rules (shared with team).</td></tr><tr><td colspan="undefined"><strong><code>./CLAUDE.md</code></strong></td><td colspan="undefined"><strong>The Guidebook.</strong> Tells Claude Code about your <code>swarm.js</code> tool and how to use it.</td></tr></tbody></table>

Since you prefer sticking to vanilla JS and no frameworks, I recommend **skipping the `.claude/` JSON files** for now and just using **`CLAUDE.md`** to "point" Claude to your script. It's much easier to debug.

Would you like me to generate a **`CLAUDE.md`** template that tells Claude Code exactly how to trigger your Qwen/Gemma swarm?

- Claude Code settings - Claude Code Docs
  The settings.json file is the official mechanism for configuring Claude Code through hierarchical settings: \* User settings are de...![](data:image/jpeg;base64,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)
  code.claude.com
- Best Practices for Claude Code
  Write an effective CLAUDE.md.... Home folder ( ~/.claude/CLAUDE.md ): applies to all Claude sessions. Project root (./CLAUDE.md...![](data:image/jpeg;base64,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)
  code.claude.com
- Claude Code Project Configuration Showcase - GitHub
  Quick Start. 1. Create the.claude directory. mkdir -p.claude/{agents,commands,hooks,skills} 2. Add a CLAUDE.md file. Create CLAU...![](data:image/png;base64,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)
  GitHub

Show all

yes please

Using a **`CLAUDE.md`** file is the most "vanilla" and effective way to guide Claude Code. It acts like a manual that the agent reads before it starts working on your files.

Create a file named `CLAUDE.md` in your project root and paste this in:

```
# Project: AI Swarm Orchestrator

## Custom Tools
This project uses a specialized model swarm (Qwen 397B + Gemma 31B) via Ollama cloud for advanced routing and creative tasks.

### Swarm Script (\`swarm.js\`)
- **Usage**: \`node swarm.js "YOUR_REQUEST_HERE"\`
- **Purpose**: Use this when you need high-end creative writing, complex multilingual translation (Italian/European), or high-level project planning that requires the 397B "thinking" model.
- **Output**: This script returns a final string generated by the sub-agent.

## Development Guidelines
- Use **Vanilla JavaScript** (ES Modules) for all scripts.
- Avoid adding TypeScript or external frameworks (Vercel, etc.) unless requested.
- Always validate JSON using the **Zod** schemas defined in the scripts.

## Command Shortcuts
- Start Swarm: \`node swarm.js\`
- Test Logic: \`npm test\` (if applicable)
```

How Claude Code will use this:

1. **The Hand-off**: When you ask Claude Code to "Write a 5-page story in Italian," it will see the `CLAUDE.md` file and realize, "I have a tool for this."
2. **Execution**: It will automatically run `node swarm.js "Write a story in Italian"` in your terminal.
3. **Synthesis**: It will capture the output from Gemma and present it to you or save it to a file as you requested.

Pro-Tip for your Setup:

Since you are using **Ollama Cloud**, make sure your `swarm.js` has the correct `host` or `endpoint` configured so it doesn't try to look for a local 397B model on your machine (which would fail on your hardware).

Do you need help adding the **specific cloud URL logic** to your `swarm.js` to ensure it hits your remote Ollama instance correctly?

Show all

yes please

**Searching**

To connect your vanilla JavaScript scripts to your remote **Ollama Cloud** instance, you need to initialize the Ollama client with a specific `host` and an `Authorization` header.

Unlike local instances that run on `localhost:11434` without security, remote cloud instances require an API key to protect your compute resources from unauthorized use.

Updated `swarm.js` with Cloud Logic

Update your script to include the `Ollama` constructor with your cloud credentials. This ensures both your Orchestrator (Qwen) and Sub-agent (Gemma) hit the same remote server.

```
import { Ollama } from 'ollama';
import { z } from 'zod';

// 1. Initialize the Cloud Client
// Replace these with your actual cloud endpoint and secret key
const cloudOllama = new Ollama({
  host: 'https://your-cloud-ollama-url.com', // e.g., 'https://ollama.com' or your own VPS
  headers: {
    'Authorization': 'Bearer YOUR_SECRET_API_KEY', // Required for cloud security
  },
});

const TaskSchema = z.object({
  agent: z.enum(['TECH_AGENT', 'CREATIVE_AGENT']),
  instructions: z.string(),
});

// 2. Updated Sub-Agent Function
async function runGemmaSubAgent(taskInstructions) {
  console.log("--- Gemma (Creative Sub-Agent) is working... ---");

  const response = await cloudOllama.chat({
    model: 'gemma4:31b-cloud', // Ensure you use the -cloud suffix if applicable
    messages: [
      { role: 'system', content: 'You are a creative writer.' },
      { role: 'user', content: taskInstructions }
    ]
  });

  return response.message.content;
}

// 3. Updated Orchestrator Function
async function startWorkflow(userInput) {
  console.log("--- Qwen (Orchestrator) is planning... ---");

  const response = await cloudOllama.chat({
    model: 'qwen3.5:397b-cloud',
    format: TaskSchema,
    messages: [
      { role: 'system', content: 'Decompose the user request. Decide if it is TECH or CREATIVE.' },
      { role: 'user', content: userInput }
    ]
  });

  const plan = TaskSchema.parse(JSON.parse(response.message.content));

  if (plan.agent === 'CREATIVE_AGENT') {
    const finalResult = await runGemmaSubAgent(plan.instructions);
    console.log("\nFINAL RESULT:\n", finalResult);
  }
}

// Grab user input from the command line argument
const input = process.argv[2] || "Write a poem about the cloud.";
startWorkflow(input);
```

Key Security & Configuration Tips

- **Environment Variables**: Do not hardcode your `YOUR_SECRET_API_KEY`. Instead, use `process.env.OLLAMA_API_KEY` and set it in your terminal.
- **Model Pulling**: Before running the script, you must "pull" the models to your cloud instance using the CLI: `ollama pull qwen3.5:397b-cloud`.
- **Host Binding**: If you are hosting this yourself on a VPS, ensure your server is set to `OLLAMA_HOST=0.0.0.0` to accept outside connections, and use a reverse proxy like **Nginx** with **Basic Auth** to keep it secure.

Would you like help setting up a **`.env`** file to securely manage your API key without hardcoding it in your JS files?

- Cloud - Ollama's documentation
  First, install Ollama's Python library. pip install ollama. Then make a request. import os from ollama import Client client = Clie...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAUQMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAAAQIEBQcIBv/EACsQAAICAgEDAwIGAwAAAAAAAAABAgMEEQUTITEGElFBYRQjMkKB8AcVIv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDh4AekeA9H+n7eH42MuBwL6Z0Y6tvnQpTs99cXKXU3tPc0/H07aA83AValGycY+FJpCQAikhFoARSBDACkgQ9AIYwAwzPr5rlKsb8NVyWbDH1rpRyJqGvjW9GAAAUkJeCkgGkUgSKSAEUgGgGhgMBAUAGAC8gNeAGi0Si0A0UhIoBpFCRQAhiGAAAAYA0C8m5x+W6eLUpcbTbGjS6k02k9p/GlvXf5b39gNSi0bKjk68equmfGY0+nD2v3x7yfy+wS5WEsfp/gMZWdJ1u1RSl3j7d+P5/vcNeikhOLXZrT+5SAaGA0ADEMAAAAwF4OjPlJT9M4f+s9RYeDxtPEzx8zjLJbnbkP3+78nxNzbi1P9vytaOcrwXEDr3qLI9IZuVyebbbxeRC2WRPIudreQ7lroKlJ94Na3pNfq39DGnhekMe/OdV/AX325OXbx0Z37pjFxr6MLPCS11NJ9vdrfc5aikB9L/kLKxs31VffhX0XUOjHjGdEnKH/ADVBNJvvpNNd/g+eRKKAaGIYDAAAAAAMFFoQAWikMAKQwACkNCABgAAAAAH/2Q==)
  Ollama
- Remote Ollama Access: Master Guide for Windows, Linux, macOS
  Configuring Ollama for Remote Connections. By default, Ollama only listens on localhost. To enable remote connections, you must se...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAABRCAMAAAA0JXKQAAAAkFBMVEX////8/PzT1Nv4+Pnr6+44QWzz8/UAElQbKF6TlqlcYoLi4+ego7PKy9Owsr/NztZWXH23uMTc3eIrNWV7f5eGiqCpq7phZ4UAFlYOH1pLUncwOmhwdI8WJFw9RW7Awsx5nq8kpLM1t8MicY1Crbs7mqsgGFcnL2JgcIygvMq84Ol2jaQAAEYAAE6BmayLmq0RzeyzAAACCElEQVRoge2UWZOcIBCAm0MGBA8QmfEastlNzLGT/P9/Fxwnu5VK5bAq40OqvwcVFD+6aQBAEARBEARBEARBkI2IfXUkOhrftPtKoX94ePu4t7Runt699ztLz3PzYcrXZ2oKsodTNNPHT5/HW8M+n/XtBb+jlF6+fLWv4RWHbq1kVt9RqtofQ2q7NWo/3C/RVEPLW1CsbYP2BsB2nUv9upNpMmbkvo2VV0IbMEd7HSKM4YWD0kemWlb5sFkaCZxKDw2nnS765GmP8pj687mrALICyl4EPwZaMxmb6xA9qFFZuJRDHH1Z29Omk0VTwSKArB1kHCRUc5p0zuWpAtuOXWr0R0JrCMYYmrNBTOuwmi7SiWdWOdeLcYuUcyJYiu0ysCQlEopaAKnBdD0MTE1p754pLNJhdjQng4irdOrtItVXacj0Hzw/QfT3SBdpyqvogTSyD2ltU/mmBCxSpcJVuiRCvUS6SEMQ7nnrwb3MXRr1KuVJVXZnAHeQBDKxSm/plWuktXtJb0hL3mza0UwXy/cX2qRCIicozg5iSiqZUw1Bd9CQlYvULNKaSHsrpMyMaaMdbCokVeZx2naMsOvVMEOCIAa0siKUbI0f/MlAqRhP3qqq0i34dU2FUrpoqzBG5kdajGqT8/fw+cT+4e/+EtcPxT0P4F+QNvL+UgRBEARBEARBEOS/5RtfTB46BYq4KwAAAABJRU5ErkJggg==)
  Kite Metric
- How to Self-Host Ollama and Access It Remotely - Localtonet
  13 Mar 2026 — Ollama has no built-in authentication. Exposing port 11434 publicly means anyone can use your compute and access your models for f...
  Localtonet

Show all

Google apps

Google Account

MaTheRaptor

hamedahastral@gmail.com
