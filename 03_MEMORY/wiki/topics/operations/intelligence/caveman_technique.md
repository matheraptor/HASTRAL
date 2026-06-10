# caveman-technique

**Summary**: A prompt engineering strategy to reduce verbosity and improve LLM efficiency by forcing minimalist, monosyllabic communication.

**Sources**: (source: CavemanLLM.md)

**Last updated**: 2026-04-20

---

The "Caveman" technique (CAVEM) is a prompting strategy designed to force coding agents to communicate with extreme brevity. By restricting the AI's output to minimal, fragmented language, this approach significantly reduces token consumption and speed, while in some cases improving technical accuracy by mitigating "overthinking."

## Benefits

- **Token Efficiency**: Reduces input/output tokens by up to 75%.
- **Latency**: Increases generation speed by reducing total tokens produced.
- **Accuracy**: Mitigates "overthinking" by minimizing the opportunity for the model to deviate from core logic during verbose explanations.

## Implementation

The technique can be applied as a system prompt or a skill in most coding assistants (e.g., Claude Code, Codex). It typically offers varying "intensities" of compression:

- **Light/Full/Ultra**: Varying degrees of conversational stripping.
- **Wenyan (Classical Chinese)**: Maximal compression using Chinese characters (may hinder human auditability).

## Framework: Overthinking Mitigation

The technique is grounded in the observation that verbose models often suffer from cumulative errors. Verbosity provides more chances to introduce subtle errors that compound over the course of an output. Forcing brevity acts as a filter that strips linguistic overhead, allowing the model's latent intelligence to focus purely on the task's technical requirements.

## Related pages

- [[]]
- [[prompt-engineering]]
- [[claude-code-custom-skills]]

