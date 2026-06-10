# Models as a Service (MaaS)

**Summary**: A strategic architectural pattern shifting from consuming public AI APIs to hosting managed, sovereign models internally.

**Sources**: (source: AIaaS.md)

**Last updated**: 2026-04-20

---

Models as a Service (MaaS) is an enterprise architectural approach where organizations host their own AI models (e.g., LLMs, vision models) on private or hybrid cloud infrastructure rather than relying exclusively on third-party public APIs.

This approach provides three primary benefits:

- **Data Sovereignty**: Keeps sensitive data (PII, proprietary info) within the organization's controlled perimeter, crucial for regulated industries like healthcare and finance.
- **Operational Stability**: Eliminates reliance on external providers for model lifecycle management, preventing service disruptions caused by forced model deprecations.
- **Cost and Resource Control**: Allows for centralized governance of compute resources (GPUs/CPUs) and standardized usage tracking.

## Technical Architecture

The MaaS stack typically follows a multi-layered structure:

1. **Orchestration Layer**: Kubernetes or OpenShift, managing infrastructure and scaling.
2. **AI Platform Layer**: Specialized inference engines (vLLM, KServe) treating models as microservices.
3. **Enterprise Capability Layer**: API Gateway handling authentication, rate-limiting, and usage logging, coupled with observability tools (Prometheus, Grafana, Jaeger) for tracing and debugging.

## Related pages

- [[claude-code-configuration]]
- [[data-sovereignty]]
