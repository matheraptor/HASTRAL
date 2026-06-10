---
keyID: 1745001100000
type: entity
version: 0.1.0
status: draft
tags: [llm, local-model, google, gemma, tool-use, claude-code]
taxonomy: topics/research/llm_models
---

# Entity: batiai/gemma4-e2b:q4

**Summary**: A 4-bit quantized build of Google's Gemma 4 Effective 2B model, published to the Ollama registry by community user `batiai`. Verified to support function calling, making it the recommended local model for [[claude_code_custom_local_model]].

**Sources**: `raw/ClaudeCode_custom-gemma4.md`

**Last updated**: 2026-04-18.

---

## Specifications

| Property | Value |
|---|---|
| Publisher | `batiai` (community, Ollama registry) |
| Base | Google Gemma 4 E2B |
| Quantization | Q4 (Q4_K_M quality) |
| Active Parameters | ~2.3B (Per-Layer Embeddings architecture) |
| Total Parameters | 5.1B |
| VRAM Required | ~3.2 GB |
| Context Window | 128K tokens |
| Tool / Function Calling | ✅ Native |
| Multimodal | ✅ Text, Image, Audio |
| License | Apache 2.0 |

## Characteristics

- Built for agentic workflows from the ground up. Supports the XML/JSON tool schemas required by [[claude_code_custom_local_model]].
- Higher-quality quantization preserves reasoning coherence at small parameter counts.
- Community-verified for Mac hardware; tested for tool-calling accuracy.
- On Mac mini M4: achieves ~100+ tokens/sec.

## Usage

```powershell
ollama pull batiai/gemma4-e2b:q4
ollama launch claude --model batiai/gemma4-e2b:q4
```

## Related pages

- [[]] — The base model family.
- [[]] — Predecessor; does NOT support tools.
- [[ollama_launch]] — Integration command.
- [[claude_code_custom_local_model]] — Full setup guide.

