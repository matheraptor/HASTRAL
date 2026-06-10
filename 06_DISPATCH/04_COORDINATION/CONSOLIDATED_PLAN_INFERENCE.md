# [Consolidated] HASTAL Sovereign Nano-Stack Deployment

Architect and validate a hardware-aligned inference stack for the GTX 1050 (2GB). This plan resolves the "VRAM Wall" and "Intelligence Gap" through physical hardening and few-shot priming.

## User Review Required
> [!IMPORTANT]
> **REMAINING STRESS TESTS**: We must complete the "Red Team" diagnostics (Ambiguity and Hallucination tests) before final integration. If these fail, the Nano-Stack is disqualified for complex reasoning.

## Proposed Changes

### HASTAL Core & RND
Refactoring for 0.5B "Nano" Residency.

#### [MODIFY] [model_profiles.json](file:///C:/Users/Marika/MAGPIE/HASTRAL/01_HQ/config/model_profiles.json)
- Map `fetcher` and `worker` roles to the local Nano tiers.

#### [MODIFY] [hastral-router.Modelfile](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/08_RND/modelfiles/hastral-router.Modelfile)
- ADD: Hardware Residency (`num_gpu 99`, `num_ctx 1024`)
- ADD: Intelligence Priming (Few-Shot Routing Examples)

## Verification Plan

### Red Team Stress Testing
1. **Diagnostic A (Ambiguity)**: Verify if the Router can distinguish between `fetcher` (audit) and `worker` (edit) when given a vague bug report.
2. **Diagnostic B (Ceiling)**: Feed the Worker a nonsensical request to verify hallucination control.
3. **Diagnostic C (Latency)**: Measure the throughput under the 50/50 spill baseline.
