---
keyID: 1745001150000
type: concept
version: 0.1.0
status: draft
tags: [ollama, llm, configuration, modelfile, quantization]
taxonomy: topics/research/llm_models
---

# Concept: Ollama Modelfile

**Summary**: A plain-text configuration file that defines a custom Ollama model build — specifying base model, inference parameters, a prompt template, and an optional system prompt. Used to create persistent custom model configurations via `ollama create`.

**Sources**: `raw/ClaudeCode_custom-gemma4.md`

**Last updated**: 2026-04-18.

---

## File Format

```
FROM <base_model>
PARAMETER <key> <value>
...
TEMPLATE """<prompt_template>"""
SYSTEM """<system_prompt>"""
```

## Key Parameters

| Parameter | Purpose | Claude Code Recommended |
|---|---|---|
| `num_ctx` | Context window in tokens | `32768` (minimum) |
| `num_predict` | Max output tokens per turn | `4096` |
| `num_gpu` | Layers offloaded to GPU | `99` (auto-cap) or `0` for CPU |
| `temperature` | Sampling randomness | `0.5` (lower = more deterministic code) |
| `top_p` | Nucleus sampling threshold | `0.95` |
| `top_k` | Top-K sampling | `64` |
| `repeat_penalty` | Repetition suppression | `1.0` (do NOT raise for Gemma) |
| `stop` | Stop token sequences | `<end_of_turn>`, `<turn\|>` |

## Workflow

```powershell
# 1. Write Modelfile
# 2. Create custom model from it
ollama create gemma4-coder -f Modelfile
# 3. Verify
ollama list
# 4. Launch with Claude Code
ollama launch claude --model gemma4-coder
```

## `num_gpu` Guidance

Run `ollama show <model> --verbose` to see `block_count` (= total transformer layers). Set `num_gpu` to `99` to offload all layers and let Ollama auto-cap.

Run `ollama ps` to verify the `PROCESSOR` column shows the target GPU percentage.

## Related pages

- [[]] — Primary target model for this config
- [[]] — Why `num_ctx` matters
- [[claude_code_custom_local_model]] — Full custom model setup guide

