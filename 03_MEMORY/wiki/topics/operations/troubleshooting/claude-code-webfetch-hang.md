# Claude Code WebFetch Hang

**Summary**: Troubleshooting and fixing the issue where Claude Code hangs indefinitely during web searches using the WebFetch tool.

**Sources**: [[debugging_web_search.md]]

**Last updated**: 2026-05-26

---

Claude Code can sometimes hang indefinitely when using the `WebFetch` tool. This is a known issue caused by:
1. **Parallel Execution Hangs**: Concurrent `WebFetch` operations to the same domain can trigger a connection pool block or rate-limiting response, locking up the agent.
2. **Lack of Native Tool Timeout**: `WebFetch` can swallow responses on sluggish URLs without timing out, leaving the CLI process stuck forever.

## Immediate Workarounds

- **Serialize via CLAUDE.md**: Instruct Claude to avoid parallel fetching. Add this to your `CLAUDE.md`:
  `When fetching or searching from external URLs/APIs, do not issue parallel WebFetch calls. Serialize them strictly.`
- **Force a Session Refresh**: Press `Ctrl+C` to terminate the process and restart with `continue` to recover context.
- **The Follow-Up Prompt Trick**: Send a random follow-up message during the passive "thinking/searching" block to potentially force the SSE stream to unstick.

## Advanced Fix: LiteLLM Proxy Integration

To bypass the buggy native `WebFetch` completely, you can route web searches through a stable third-party provider (like Perplexity or Tavily) using the **LiteLLM Web Search Interception Handler**.

### Docker Compose Setup

Using Docker Compose and PostgreSQL, you can run LiteLLM as a background daemon and enforce spending limits.

**1. Environment File (`.env`)**
```env
LITELLM_MASTER_KEY="sk-secure-admin-pass-1234"
LITELLM_SALT_KEY="generate-any-random-string-here"
DATABASE_URL="postgresql://llm_admin:db_secret_pass@db:5432/litellm_db"

ANTHROPIC_API_KEY="sk-ant-..."
PERPLEXITY_API_KEY="pplx-..."
```

**2. Model Registry (`config.yaml`)**
```yaml
model_list:
  - model_name: claude-3-5-sonnet
    model: anthropic/claude-3-5-sonnet-20241022
    api_key: os.environ/ANTHROPIC_API_KEY
    litellm_settings:
      callbacks: ["websearch_interception"]
      websearch_interception_params:
        enabled_providers: ["anthropic"]
        search_tools:
          - search_tool_name: "perplexity-search"
            search_provider: "perplexity"
            api_key: os.environ/PERPLEXITY_API_KEY

general_settings:
  master_key: os.environ/LITELLM_MASTER_KEY
  database_url: os.environ/DATABASE_URL
```

**3. Docker Compose (`docker-compose.yml`)**
```yaml
services:
  db:
    image: postgres:16-alpine
    container_name: litellm-db
    environment:
      POSTGRES_USER: llm_admin
      POSTGRES_PASSWORD: db_secret_pass
      POSTGRES_DB: litellm_db
    volumes:
      - pgdata:/var/lib/postgresql/data
    restart: unless-stopped
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U llm_admin -d litellm_db"]
      interval: 5s
      timeout: 5s
      retries: 5

  litellm:
    image: ghcr.io/berriai/litellm-database:main-latest
    container_name: litellm-gateway
    ports:
      - "4000:4000"
    env_file:
      - .env
    volumes:
      - ./config.yaml:/app/config.yaml
    command: ["--config", "/app/config.yaml", "--port", "4000"]
    depends_on:
      db:
        condition: service_healthy
    restart: unless-stopped

volumes:
  pgdata:
```

Launch with: `docker compose up -d`

**4. Route Claude Code to LiteLLM**
In your terminal session, override the Anthropic base URL before launching Claude Code:
```bash
export ANTHROPIC_BASE_URL="http://localhost:4000"
claude
```

## Related pages

- [[claude_code_configuration]]
- [[containerization_overview]]
