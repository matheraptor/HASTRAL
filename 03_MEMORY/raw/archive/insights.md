# Systematic Insights

## 1. Diagnostic Loop Vulnerability (Systematic)
- **Problem**: The tendency to over-explore and bloat context without corresponding implementation/validation actions.
- **Root Cause**: Treating exploration (Grep/Read) as a substitute for progress/validation, leading to context bloat without knowledge synthesis.
- **Remedy**: 
  - **Action-Validation**: Treat the first `Edit`/`Write` operation as the primary validation tool for any mental model built during exploration.
  - **Synthesis-First**: Architectural constraints must be formally synthesized into the Wiki (Library protocol) immediately after discovery to prevent re-derivation.

## 2. Systemic API Constraints (Systematic)
- **Problem**: Persistent API token limit errors disrupting workflows.
- **Root Cause**: High volume of non-essential files in context and failure to preemptively manage token usage.
- **Remedy**: 
  - **Aggressive `.claudeignore`**: Isolate large build, logs, and `node_modules` directories.
  - **Targeted Exploration**: Enforce file scope verification *before* triggering broad `Read` operations; favor specific globbing over recursive scans.
  - **Tool-Oriented Context**: Use Task Agents and Custom Skills to contain context boundaries for complex/repetitive tasks.

## 3. Information Gathering Loop (Systematic)
- **Problem**: Over-reliance on search/diagnostic tools (Grep/Read) at the expense of actionable implementation (Edit/Write).
- **Root Cause**: Viewing exploration as a prerequisite for safety rather than a risk-management tool that must be time-boxed.
- **Remedy**: 
  - **Tool-Budgeting**: Explicitly time-box exploration phases; once the budget is exhausted, forced transition to `Edit` (action) is mandatory.
  - **Action-Orientation**: Prioritize small, verifiable commits over comprehensive understanding; the code is the ultimate source of truth.

## 4. Structured Context Management Doctrine (Systematic)
- **Problem**: Unstructured context bloat and reactive rather than proactive context maintenance.
- **Root Cause**: Treating session context as an infinite resource rather than a managed, finite tool.
- **Remedy**:
  - **Doctrine-Driven Lifecycle**: Establish formal milestones for context resets (`/compact`, `/clear`) as part of the workflow, not just reactive responses.
  - **Context Serialization**: Proactively externalize architectural knowledge into the Wiki (Library protocol) to maintain a lean active session.

## 5. Goal-Oriented Autonomy (Strategic)
- **Problem**: Stalling in reactive loops rather than driving task execution.
- **Root Cause**: Insufficient abstraction and failure to decompose monolithic tasks, leading to fragmented, inefficient progress.
- **Remedy**:
  - **Recursive Decomposition**: Break features into independent sub-tasks executed by parallel, isolated agents.
  - **Autonomous TDD Loops**: Integrate automated test runners to enable closed-loop refinement of code, reducing human/manual bottlenecking.
  - **Workspace Auditing**: Periodically perform "state audits" to synthesize current progress, blockers, and next steps into a memory-efficient summary.

## 6. Default-Restrictive Context Boundary (Operational)
- **Problem**: The agent defaults to an "all-access" view of the workspace, leading to context pollution and token exhaustion.
- **Root Cause**: The absence of a mandatory "deny-by-default" policy for the workspace environment.
- **Remedy**:
  - **Hardened Defaults**: Mandatory `CLAUDE.md` and `.claudeignore` configurations that explicitly define the "allowed" scope for each project area.
  - **Boundary Verification**: Require an explicit "scope-check" before the agent is permitted to operate in a new project subdirectory.
