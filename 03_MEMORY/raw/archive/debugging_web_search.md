---
title: "my clade code hangs whenever using the websearch"
source: "https://www.google.com/search?q=my+clade+code+hangs+whenever+using+the+websearch&sca_esv=99e60bb1754c5a2c&sxsrf=ANbL-n5c3-eNXSSv6bsxUX7D5xl51pU3RA%3A1775044542919&source=hp&ei=vgfNaa2gNqqii-gPtpSfkQ4&iflsig=AFdpzrgAAAAAac0Vzm7RhAlgzvsN2N_6ty53APUBIVyi&aep=22&ved=0ahUKEwit98GbzMyTAxUq0QIHHTbKJ-IQteYPCBc&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEByAEAmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcAgAgB&sclient=gws-wiz&mstk=AUtExfCPHrn2mioS51zTDicIfW_lgtKQcgsLov5J9bb0gB39uBl441yUEj18xGwYCcway1dCwOZnWO8yZUu-FQ7YJtFWoGucVEI2iDCpWQfkPGSHMyqc87hPNFk52F5JscRRGEQKmugaDF7t7UBDk_H3MZruRNPmSagzxHsFV0D9ZAf9CViNLy7X5HRXWOR5iYyMk-R11nzpI08Qren6SAq3sP6Tp83M_Jmis8mGYkE--L56J-uBw-RMF9XNMYKEV1lXFQd3lvfbwE9CA85CT0tiBZyl9L31PdURq10&csuir=1&mtid=nk8VarOyAaKI9u8P6LPNkAk&udm=50"
author:
published:
created: 2026-05-26
description:
tags:
  - "clippings"
---
## Search Results

Hi MaTheRaptor, what's on your mind?

Transcribing...

You said: my clade code hangs whenever using the websearch

Your Claude Code terminal hanging indefinitely during web searches is a **known community bug specifically tied to the `WebFetch` tool implementation**. When Claude attempts to retrieve external web pages, the system frequently fails to handle specific server responses or concurrent requests, triggering an un-timed-out loop that blocks the agent.

Why It Happens

- **Parallel Execution Hangs**: If Claude attempts to trigger two `WebFetch` operations to the same domain concurrently (or a very close succession), a connection pool block or rate-limiting response from the host regularly causes the tool to lock up.
- **Lack of Native Tool Timeout**: There is a known issue where `WebFetch` can completely swallow responses on sluggish or unoptimized URLs. Because there is no default timeout handler for the tool call itself, the CLI process stays stuck forever.

Immediate Workarounds & Fixes

- **Serialize via CLAUDE.md**: Force the agent to wait between calls. You can explicitly instruct Claude to stop running parallel web fetch operations by creating or modifying a `CLAUDE.md` file in your root project directory with the following rule:
	```
	When fetching or searching from external URLs/APIs, do not issue parallel WebFetch calls. Serialize them strictly.
	```
- **Force a Session Refresh**: When the prompt interface freezes or loops on an active search, typing `Ctrl + C` to terminate the process and starting a new session with the `continue` command usually forces Claude to recover without losing context.
- **The Follow-Up Prompt Trick**: Users on the Anthropic developer forums have noted that sending any random follow-up message during a passive "thinking/searching" block sometimes forces the Server-Sent Events (SSE) stream to unstick and process the queued web data.
- **Routing Through Third-Party Proxies**: If you rely heavily on stable automation workflows with Claude Code, consider intercepting your web requests server-side through proxy solutions like [LiteLLM WebSearch Handler](https://docs.litellm.ai/docs/tutorials/claude_code_websearch) to handle connection retries outside of the Claude terminal client.

If the issue persists despite serialization rules, let me know:

- Whether you are running **Claude Code locally** via your terminal, inside **VSCode**, or using the **Web sandbox**.
- The **exact text or animation** displayed right when it halts (e.g., "Not Responding", "Starting Claude Code", or standard loader).

This will help isolate if your setup is experiencing a localized environment failure.

- WebFetch still freezes session on hanging URLs (fix from #24684...
	19 Feb 2026 — Context. This is a follow-up to #24684 which was closed after a contributor mentioned a fix would ship. The fix does not appear to...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAAVFBMVEXw8PDed2vw8fHx9PTu5eTcalzec2bedWndb2Hqzcngi4LnubTx9vfjnZXcZljpycbv6+vbW0vilYzfgXfmtK/cYVHffHDowb3jmZHr1tTgh33r0c9eLG/hAAAA50lEQVRYhe3YyQ6CMACE4S5CK7K5IeL7v6fxxAwJpiIeJPNfJ3w2HhqCMeoPctQKkzE7ClfHE4ktTS1tu2M2Vp9K2Py5xs3Az/kLTtfGE5nZsbwisgi4EXnIYYp7kSJFihQpUuRGST9WMulxSiZtV2AdToGms00lbcBs4vSeXJRIkSJ/QoY8sZBK8n35ps+uYJfS0lt9tVOKFLlRsobLIDLpKSYjPJZNyFM11l9oux0wIpseH7vTlyJXYnyUAY8S8c3NeHps+u1p/g+bfxlcmkiRIheTQ4SyNUj32EPN9+DLnL0v1R/2BHoSJo8VmwtwAAAAAElFTkSuQmCC)
	GitHub
- \[BUG\] Claude Code VSCode extension webview "Not responding"...
	27 Mar 2026 — Steps to Reproduce \* Install Claude Code extension v2.1.85 on Windows 11. \* Open any project in VSCode. \* Click "New Session" in t...![](data:image/png;base64,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)
	GitHub
- \[BUG\] \[URGENT!!!\] Claude Code is hanging / freezing / stuck...
	16 Feb 2026 — Ever since the release of Opus 4.6 at least, and maybe slightly before (I can't remember exactly when it started), Claude gets stu...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAATlBMVEXw8PDKi9vy9fHJiNrw8fDHgdnt6O7UqeHIhNrk0enIhtrdwebPm97r5O3TpeDGftn0+fLn2uvDdtjFetjNk93ZtOPgyOfOl93l1urXr+J3vDtsAAAA3ElEQVRYhe3Yyw6DIBCFYcVBUbz2Zvv+L9runCGRTIQmNj3/lvClLpyCRYF+IMpQQNYZkr+xvtjkri0J0pbJOZAgQWYipyo5G5Bjk9y4iPFGJkPhwEQInSY69rJGtlF967fWu1GKj5Vve+7Py65RksY7ti021Ss92Sn/KECC/E9y/750lKRBlIM0q+u2XBayr/gaSJAgv0/Ko8HMzyWSFGcWcTSIX6U871ZyUiy9tFep2Vs2e/izfeIrTj5O5HRGPmD2Uo9/kCBBJpCTU2VHNTm0yhb9Pe7od290/t6tSCXCsbqVxgAAAABJRU5ErkJggg==)
	GitHub

Show all

You said: tutorial on how to setup LiteLLM websearch handler

Setting up the [LiteLLM Web Search Interception Handler](https://docs.litellm.ai/docs/integrations/websearch_interception) allows you to route all internet searches through a stable third-party provider (like Perplexity or [Tavily](https://tavily.com/)). This server-side handoff completely circumvents the buggy, native `WebFetch` execution in the Claude Code terminal client.

Here is a step-by-step tutorial to configure the handler using the LiteLLM Proxy.

---

Step 1: Install LiteLLM Proxy

Ensure you have the latest stable version of LiteLLM installed with proxy extensions:

```
pip install 'litellm[proxy]' --upgrade
```

Step 2: Acquire a Search Engine API Key

LiteLLM requires an external provider to handle the heavy crawling. Create an account and obtain an API key from one of these supported platforms:

- [Perplexity AI](https://www.perplexity.ai/) *(Recommended for comprehensive search summaries)*
- Tavily AI *(Optimized for LLM agents)*
- [Exa AI](https://exa.ai/)

Step 3: Configure `config.yaml`

Create a `config.yaml` file to tell LiteLLM to intercept search intents and process them using your chosen provider.

```
model_list:
  - model_name: claude-3-5-sonnet
    model: anthropic/claude-3-5-sonnet-20241022
    api_key: os.environ/ANTHROPIC_API_KEY
    litellm_settings:
      callbacks: ["websearch_interception"]
      websearch_interception_params:
        enabled_providers: ["anthropic"]
        search_tool_name: "perplexity-search"
        search_tools:
          - search_tool_name: "perplexity-search"
            search_provider: "perplexity"
            api_key: os.environ/PERPLEXITY_API_KEY
```

*(If you prefer Tavily, change `search_provider` to `tavily` and use `os.environ/TAVILY_API_KEY`.)*

Step 4: Export Environment Keys & Launch

Set your active API credentials in your terminal session and activate the proxy gateway:

```
export ANTHROPIC_API_KEY="your-anthropic-key"
export PERPLEXITY_API_KEY="your-perplexity-key"

# Boot the LiteLLM Proxy server
litellm --config config.yaml
```

The server will stand up locally, typically assigning itself to `http://localhost:4000`.

Step 5: Route Claude Code to LiteLLM

By default, the Claude Code terminal connects directly to Anthropic's endpoints. Point it to your newly deployed local LiteLLM server by overwriting the client base URL target:

```
export ANTHROPIC_BASE_URL="http://localhost:4000"
claude
```

How it operates under the hood

When Claude Code decides it needs to query the internet, it sends a native `web_search` tool call payload. Instead of letting the terminal attempt to fetch raw pages, LiteLLM intercepts the request, runs the query safely via Perplexity's structured engine, injects the neat search fragments back into the completion loop, and forwards the clean dataset back to your terminal window.

Would you like help mapping this configuration into a **Docker Compose setup** or generating custom **spending and request budgets** for your web searches inside the LiteLLM UI?

- Web Search Integration - LiteLLM Docs
	Enable transparent server-side web search execution for any LLM provider. LiteLLM automatically intercepts web search tool calls a...
	LiteLLM
- LiteLLM - Getting Started | liteLLM
	from litellm import completion. import os. ## set ENV variables. environ\["OPENAI\_API\_KEY"\] = "your-api-key" response = completion(![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAUgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAABAAIDBAUGBwj/xAAvEAABBAEDAwIEBgMBAAAAAAABAAIDBBEFEiEGMUETURQiYXEHIzJSgZEWobEV/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQIDAP/EABsRAQEBAAMBAQAAAAAAAAAAAAABERITUTEh/9oADAMBAAIRAxEAPwD15BSSACScAeSsGe5YLX/B1HPa3vLMfTZ/vuFtGVZiFZpzGeIOeYvUH6hFIHgfyFrOntUsalPrMdgRgUtRfWi2NIywNYRnnv8AMV2jG4QVyfUvU82jVuo54ZWWZdPjgMVb4V59Jz25y9w/UDjOeNvY91tZ+pNPgr1JZBbElsu9GsKcpndtOHH09u4Ae5AHI9wnYMrbIXO3upY3w6TPpMjJYrepspzCSNzXR8O3NLTgtcCB3H8K91xq9nQelNR1Sk2N1isxpYJQS05e1vIBHglOjG7QVY1aZ1TT7s8WN8MMj27uRlrSRn+lzHT3Wsdvo+bWNVjENqmwfFQM4y5wBj2A/vDm4+pTygyutUXg1n8Yuqa9mWCalpkckTyx7HQvJaQcEH50o7Irrr2/XNOu3n05KOofCuryF7mOj3tly0gZ5GMZyO/28ritTb1fq7X0JtOtCvJJtMpcxgLc8E/NkDz7r0pCzyWy+Lch+Hmi3NGqXmXq74HPnwwPka/e1oxuGD2OTjPPHZWdOGv6JqOt+j05Jdhuag+zFKy9CzLS1o7OOR+ldohV+37Q4TV9B1bU6vV7hTEMuq06za8bpmH52x4c0kHjB4yeD9k6lpesXdXodQHTLkbxUfUsUK2pNjmjG8Oa5rwQx2cctLh474XclC7HcnB2tC1KKhTuU9Klfd/9Zl6xWk1ASPc1rC0F0jzjdjbkAkfUq71THr/UvSmraX/jz6c8sTPRMl2F4kcJGkjg8cAnJ9l2ypKcTrnJruualXt1J+m5ajZ68rRK69C8BxYcDDTnk4C1+mdFsJ6eu3pHxTUKcMduo05ZPJG38suIODsJcR3zx7LslE8fRvj551v8MOr7etX7MGlsdFNZkkY74uEZaXEg4LlF9CqI64rsrKQqihQoIKUKgFSVUUJClBVSEpUoShLgolROhlOIa0ucQABkk+FaknhjY58k0bGNxuc54AGe2T/IWjjuGalXEV19i1NAfXgOCQDGTnaB8uDtwfOfOQVcYW3ZaGyYuhFhm10L+CPQf5H1WDZumua9ocxwc1wyCDkEKOc1oy4gDIGSfJ4C5yC9cfUiM1mOKc1ojB6sxYZCWAl20MO87iQR9BgDOTetTh4LLFssti5GDVa4EBgmbjDe+C0B277844TobwkZxkZxnGUZGSARkdwsC3Zr1tXgdZniha6tIAZHhoPzM91bj1CjHfsuku1mNeyNzC6ZoDhg8jnkKg2WQexBwcHCAQ4ZaQR24WlhitRS2HUGktuWJGyPBH5Ls8S89/lGMDPIZ4yVcrk0NEkbTjb6jZpYq7HE4LjK5rM+cZIyfbJToxs3SRtjMjpGNYM5cXAAeO6ojmhlbvilje3ONzXAjPstLLFLSqy0hBGGufDLA31S4OIkYH5O3jna4nByXuKyZoJhbhszshjc+aJmyJxdwN5yXED93bHHuc8doxtFE8e3/VEhkRRtghjhjyI42hrQTnAAwFUeUlCya0ZI8ozxhKEhMkdijJ9z/aiEwBBSUKgPshKEhSolRcGWeypSosm1UlCiiUhQqKJAKEKJAQUqKgFFFFwf/9k=)
	LiteLLM
- Getting Started Tutorial - LiteLLM Docs
	Optional — Navigate to the LiteLLM UI and generate a virtual key Open http://localhost:4000/ui in your browser and log in with yo...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAAflBMVEX////+/v77/Pz9/f34+fnv7/339/77+/+srfWBgvNmaPF2ePKRkvNUVvDm5vtfYfFZW/BrbfLx8vNiZPGVlvSjpPbDxPjJyvnc3Pu/v/jOzvq9wMbT1dnHyc6qq/exsvi3uPiMjfTU1frf4OOxtLycnfVxc/FOUPCHiPR8ffPco+0FAAACMklEQVRYhe2YDZOiIBiABVFJjS/TLDc/2s6r//8HD109Mhu9gma3G59GtJh5BuSFXrAsLQBxbiB6QstyXMvrHj27vbmOrtJzy2S3J7tkm8orOQLX1VW6NpG46TF1CXFSxzKgbMo0BZ58qe2zIeVu72DZ/61BJeiuVqk7PICM0DS+M8AkX0poEgSm2/8Etm1eCRflolyUOkqjKxFslcgoxvvdYbKN8AWtfKcgWpSLUluJhBD9PEKfokFXecpOh0P3i8gOpyw76SohgvBvJoOgADrv452G55uV+8tqRDqtBBBYTXYs71fprLfvd0ch833KKKeSiDNZRCyeVqIs+8g+Pw4NqjLN+5ZsWIWLosrzIsdVUub5r2pOCZCA8iOaiFcpsrPtN1whi3hd+0HFecD5ZRX4fE45x64Obqn3ekq55xwxqDcdRHavtB/hTs5yVftUK70Rw73T48qS+oqoLWkyrbQFsmUaApG4TpjcRAVRHUhNwCPO+cr3ZflAqGeqkmAV6ue8LMMYl3lx3pUYz4e6lFoIQFuA64TJTdWElHOQUh7QyI+oX3M6OyHnOIZjBgcPL1vcHgnLu3twVftUrn6nYYPaJzp+ewwoudPxR8h/rxsGZTmthF+pwU1+4BT9qG5YcJbrWSUXtUuwacvZUD+oUFeBSQoV6qtYrupxiWN8LsoCh/8Q6p168M0j/annZs1kXxmjTbmWN8bWmqFOcjxiMD4/4n/8v1Ka3EO+bqe7sPAD+QPGGCz58RGVZwAAAABJRU5ErkJggg==)
	LiteLLM

Show all

You said: yes

**Searching**

Deploying LiteLLM inside Docker Compose ensures it runs continuously as a stable background daemon. Pairing it with Postgres activates LiteLLM’s advanced database-backed features, unlocking the capability to set strict spend budgets.

---

Part 1: Docker Compose Setup

This production-ready blueprint isolates your credentials in an environment file, establishes a local PostgreSQL database container for tracking logs, and mounts your local routing rule sheet.

1\. The Environment File (`.env`)

Generate a randomized master admin token alongside your provider API keys:

```
LITELLM_MASTER_KEY="sk-secure-admin-pass-1234"
LITELLM_SALT_KEY="generate-any-random-string-here"
DATABASE_URL="postgresql://llm_admin:db_secret_pass@db:5432/litellm_db"

ANTHROPIC_API_KEY="sk-ant-..."
PERPLEXITY_API_KEY="pplx-..."
```

2\. The Model Registry (`config.yaml`)

Ensure `database_url` is added to your root structure. This instructs LiteLLM to activate persistent key monitoring and budget rules:

```
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

3\. The Orchestration Script (`docker-compose.yml`)

Create your container mapping using the stable distributed images:

```
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

Launch the environment with your command shell:

```
docker compose up -d
```

---

Part 2: Hard Spends & Model Budgets

To keep unpredictable agentic loops or heavy text scraping from running up high bills, configure explicit dollar thresholds using code parameters or the management dashboard.

Option A: Enforcing Constraints inside `config.yaml`

You can append strict operational dollar caps directly to individual engine routes. For example, if you want to cap Perplexity-driven lookups to a total cost of $5 every 30 days:

```
# Add these arguments directly inside your target model mappings
- model_name: claude-3-5-sonnet
  model: anthropic/claude-3-5-sonnet-20241022
  api_key: os.environ/ANTHROPIC_API_KEY
  max_budget: 5.00                       # Max cost allowed in USD
  budget_duration: 30d                   # Reset calendar interval (e.g., 1d, 30d)
```

Option B: Creating Scoped Virtual Keys via Admin Dashboard

Because your Docker container is mapped with PostgreSQL, you can access LiteLLM's integrated management interface.

1. Navigate to **`http://localhost:4000/ui`** using a browser.
2. Provide your **`LITELLM_MASTER_KEY`** value to bypass the login prompt.
3. Head to the **Virtual Keys** screen and press **`+ Create New Key`**.
4. Under the configuration window, apply a strict **Max Budget ($)** constraint and a defined **Budget Duration**.
5. Generate the key, swap out your base terminal profile string, and use that isolated virtual token inside your project environment to track and limit your Claude Code queries.

If you plan to utilize this setup with a team, let me know if you would like to explore **User Profile isolation policies** or configure **Slack Alert Callbacks** to notify you the instant an active agent hits 80% of its monthly web-search spend limit.

- Getting Started Tutorial - LiteLLM Docs
	See all docker images. $ uv tool install 'litellm\[proxy\]' Docker Compose bundles LiteLLM with a Postgres database. Follow the step...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAAflBMVEX////+/v77/Pz9/f34+fnv7/339/77+/+srfWBgvNmaPF2ePKRkvNUVvDm5vtfYfFZW/BrbfLx8vNiZPGVlvSjpPbDxPjJyvnc3Pu/v/jOzvq9wMbT1dnHyc6qq/exsvi3uPiMjfTU1frf4OOxtLycnfVxc/FOUPCHiPR8ffPco+0FAAACMklEQVRYhe2YDZOiIBiABVFJjS/TLDc/2s6r//8HD109Mhu9gma3G59GtJh5BuSFXrAsLQBxbiB6QstyXMvrHj27vbmOrtJzy2S3J7tkm8orOQLX1VW6NpG46TF1CXFSxzKgbMo0BZ58qe2zIeVu72DZ/61BJeiuVqk7PICM0DS+M8AkX0poEgSm2/8Etm1eCRflolyUOkqjKxFslcgoxvvdYbKN8AWtfKcgWpSLUluJhBD9PEKfokFXecpOh0P3i8gOpyw76SohgvBvJoOgADrv452G55uV+8tqRDqtBBBYTXYs71fprLfvd0ch833KKKeSiDNZRCyeVqIs+8g+Pw4NqjLN+5ZsWIWLosrzIsdVUub5r2pOCZCA8iOaiFcpsrPtN1whi3hd+0HFecD5ZRX4fE45x64Obqn3ekq55xwxqDcdRHavtB/hTs5yVftUK70Rw73T48qS+oqoLWkyrbQFsmUaApG4TpjcRAVRHUhNwCPO+cr3ZflAqGeqkmAV6ue8LMMYl3lx3pUYz4e6lFoIQFuA64TJTdWElHOQUh7QyI+oX3M6OyHnOIZjBgcPL1vcHgnLu3twVftUrn6nYYPaJzp+ewwoudPxR8h/rxsGZTmthF+pwU1+4BT9qG5YcJbrWSUXtUuwacvZUD+oUFeBSQoV6qtYrupxiWN8LsoCh/8Q6p168M0j/annZs1kXxmjTbmWN8bWmqFOcjxiMD4/4n/8v1Ka3EO+bqe7sPAD+QPGGCz58RGVZwAAAABJRU5ErkJggg==)
	LiteLLM
- Open WebUI - LiteLLM Docs
	LiteLLM allows you to specify what models are available on Open WebUI (by specifying the models the key will have access to). 3. C...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAUgMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAAAwQBAgYH/8QANhAAAgEBBAUJBgcAAAAAAAAAAAECAwQFERIUIVFSkwYHE0FUYWTR4TEycaGxwRYXIiNCkZL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A5WlzgUKXu1bRJbJwx+5bp85Nh1KrTrLvjH1PPgB6J+Y11+J4a8zD5xLq8Tw15nngA9CfOHdXieGvM0fOBdT6rRw15nAADvHy9up9Vo4a8zSXLm6n2jhrzOGAHavltdT7Rw/U0fLO632jh+pxoA7D8ZXZ4j/HqDjwAAAAAAAAAAAAAAAAAAAAtXXd9pvW8KFgsUFO0V5ZYKUsq9jb1/BMxZ6dCcf3HhLXrdRRXV3PaTVKFnpRdSnP9cWsuWsm09vsA3q3DelJVnKy6qMpRnlqReDi8HqTxfsZidw3rCEpuxSyRWLkqkGl8yl0VPHHKsdpjoaa15EBbtd0W+x0FXtNnyU8cMc8W1sxSePWUSRUoLWopMloUIVqsYOpSpYvDPVlhFfFgVgWbxs0bFb69lhXo2iNKeVVqEs1OffF9aKwAAAAABNZFjaIJxzLH3cyjjq2tr6lq00IdFKSs0lLVhJVoTf9KT+hSozVOpGUoZ0v4vrJ5W1ZsYWailslmf3Aqg2qT6SebJCHdBPD5moAAAAAAAAAEGkx3ZDSY7sgJwQaTHdkNJjuyAnBBpMN2Q0mO7ICcEGkx3ZDSY7sgJwQaTHdkNJjuyAnBBpMd2QAqgAAAAAAAAAAzIAAAAf/2Q==)
	LiteLLM
- Gateway Quickstart - LiteLLM Docs
	Gateway Quickstart \* Install The Gateway uv tool install 'litellm\[proxy\]' \* Set One Provider Key export OPENAI\_API\_KEY="your-api...
	LiteLLM

Show all

Transcribing...

Google apps

Google Account

MaTheRaptor

hamedahastral@gmail.com