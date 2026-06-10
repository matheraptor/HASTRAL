---
keyID: 1713281180000
type: concept
version: 0.1.0
status: draft
tags: [operations, intelligence, json, schema, zod]
origin: [1713281000000]
legacy: []
composition: []
composite: []
taxonomy: topics/operations/intelligence
---

# JSON Schema Enforcement

**Summary**: Using libraries like Zod or Pydantic to ensure LLMs output strict, parseable JSON structures for Agent-to-Agent communication.

**Sources**: (source: ClaudeCode_AntigravityProxy.md), (source: A2A_orchestration.md)

**Last updated**: 2026-04-16

---

When building multi-agent workflows, internal agent communication must be strictly formatted (typically as JSON) to prevent parsing errors and "hallucinated" instructions. Text output is best reserved for Agent-to-Human communication.

## Zod (Node.js) and Pydantic (Python)

These libraries act as strict contracts for data validation.

- **Zod**: In Vanilla JS/Node.js, Zod defines the schema. The `ollama.chat` function can be forced to adhere to this schema using the `format` parameter. The resulting JSON is then explicitly validated using `ZodSchema.parse()`.
- **Benefits**: Ensures type safety, prevents agents from generating conversational filler, and allows automatic retries if the output is malformed.

## Related pages

- [[]]

