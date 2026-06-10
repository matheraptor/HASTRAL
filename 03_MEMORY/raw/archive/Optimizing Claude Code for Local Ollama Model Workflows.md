To maximize the effectiveness of **Claude Code** when using local **Ollama** models, your `CLAUDE.md` should function as a high-density "instruction manual" that compensates for the slightly lower reasoning accuracy (70–80%) of local models compared to cloud versions [1-4].

The following template is designed to be scannable, as dense prose wastes valuable local context [5].

### The Recommended CLAUDE.md Template

```markdown
# Project: [Project Name]

## Tech Stack & Context

- **Primary Language:** [e.g., Java 21, TypeScript, Python 3.12]
- **Frameworks:** [e.g., Spring Boot 3.5, Vue.js 3, FastAPI]
- **Database:** [e.g., PostgreSQL using JOOQ or SQLAlchemy]
- **Ollama Optimization:** Running on [Model Name, e.g., Qwen3-Coder 30B] with a [32K/64K] context window [1, 6].

## Architecture Guidelines

- **Pattern:** [e.g., Layered Architecture: Controller -> Service -> Repository] [7].
- **Key Directories:**
  - `src/main/java/.../controller`: REST endpoints [8].
  - `src/main/resources/db/changelog`: Liquibase migrations [8].
- **Rules:**
  - Prefer [e.g., Maven over Gradle] [9].
  - Use [e.g., AssertJ for assertions] [10].

## Development Commands

- **Build:** `[e.g., ./mvnw clean compile]` [8]
- **Test:** `[e.g., ./mvnw test]` (Specific test: `./mvnw test -Dtest=ClassName`) [8]
- **Run:** `[e.g., ./mvnw spring-boot:run]` [11]
- **Lint/Format:** `[e.g., npx prettier --write]` [12]

## Agentic Workflow Instructions (Ollama-Specific)

- **Plan First:** Before implementation, ALWAYS enter **Plan Mode** (`Shift+Tab`) to design the approach [1, 13].
- **Context Management:** Use `/compact` proactively when context reaches 50% capacity to summarize history and preserve reasoning depth [1, 14, 15].
- **Reference Accuracy:** Use `@path/to/file` syntax to explicitly provide context, as local models may struggle to "find" files in deep trees [16, 17].
- **Error Handling:** If a command fails twice, use `/compact` then `/clear` and provide a handoff summary to "reset" reasoning [18].

## Coding Standards

- [Standard 1, e.g., Always use functional programming patterns] [19].
- [Standard 2, e.g., All API endpoints must have rate-limiting decorators] [19].
- [Standard 3, e.g., Explain reasoning before producing code] [20].
```

---

### Why This Template Works for Ollama Users

1.  **Combats Context Rot:** Local models suffer from "context rot" faster than cloud models [1, 14]. Explicitly instructing the agent to use `/compact` and providing clear directory maps ensures the model stays oriented [1, 18, 21].
2.  **Enforces Plan Mode:** Local models are more prone to "logic reversals" and incorrect implementations [3, 22]. The instruction to use **Plan Mode** first allows you to verify the model's logic before it wastes tokens on incorrect file edits [1, 23].
3.  **Specific Tool Guidance:** While cloud Claude is excellent at inferring tools, local models benefit from being told exactly which bash commands are available for building and testing, preventing "trial-and-error" loops that consume VRAM [4, 8, 18].
4.  **Hierarchical Loading:** For very large projects, developers are encouraged to place more specific `rules.md` files in subdirectories (e.g., `./src/api/rules.md`), which Claude Code will lazy-load only when working in those areas to save the primary instruction budget [19].
5.  **Scannability:** Keeping instructions under 500 lines prevents them from consuming too much of the model's limited context window on every turn [5, 24].
