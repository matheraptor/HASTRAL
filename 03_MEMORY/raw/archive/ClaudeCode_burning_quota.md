---
title: "is Antigravity IDE bugged? I'm noticing infinite loops in some tools like the Search and some MCP calls"
source: "https://www.google.com/search?sca_esv=99e60bb1754c5a2c&sxsrf=ANbL-n5c3-eNXSSv6bsxUX7D5xl51pU3RA%3A1775044542919&source=hp&ei=vgfNaa2gNqqii-gPtpSfkQ4&iflsig=AFdpzrgAAAAAac0Vzm7RhAlgzvsN2N_6ty53APUBIVyi&aep=26&ved=2ahUKEwidldSwzPKTAxWClP0HHf4_N2cQoo4PegYIAQgAEAE&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEByAEAmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcAgAgB&sclient=gws-wiz&mtid=zPbgaaylOuTBi-gP472i-QQ&q=is+Antigravity+IDE+bugged%3F+I%27m+noticing+infinite+loops+in+some+tools+like+the+Search+and+some+MCP+calls&mstk=AUtExfAsCT1DtY-TOzIKspDJ6on30ISrbasCrDxbtgib-tclEP2MGufpjEFC6UUess1B8FnVBtbLukvhnvzJR3T8TgzbGc2JkUOypm61sqiNrujKzD2RL348shy50mA2bi10X1HODtuqeWMYeZtoL0d10aUmVcXXGdUH76RcKRnS2qodejYzICe8wUMzTAj7tVTaVwGviwTGJX1QrRqPsO7Hy6jlP6BTl7eNbApR3ywj39_lkS2wV8xzQQ-lurATezdBABwR5m1ns_VhMmQMCf8r5Bu1iDjrXHF76nk&csuir=1&udm=50"
author:
published:
created: 2026-04-16
description:
tags:
  - "clippings"
---

## Search Results

Hi MaTheRaptor, what's on your mind?

is Antigravity IDE bugged? I'm noticing infinite loops in some tools like the Search and some MCP calls

Yes, **Antigravity IDE** is currently experiencing confirmed issues with infinite loops and hanging tool calls, particularly following the latest updates in early April 2026.

Reported Bug Symptoms

- **Infinite Search Loading**: A known regression in recent versions causes the search tool to hang indefinitely while loading.
- **MCP Protocol Failures**: Users have reported that the **Agent Manager** can silently crash or enter a loop when handling MCP payloads, often leading to the agent forgetting the current task.
- **Approval Prompt Hangs**: In some cases, MCP tool executions skip the "approve" prompt and stay in a permanent loading state because they never receive authorization.
- **Parallel Call Crashes**: There is a high correlation between calling multiple tools in parallel (like `task_boundary` alongside others) and session degradation that leads to loops.

Possible Solutions

The following troubleshooting steps are suggested by the community and developers:

- **Manual Override**: Entering **"continue"** in the chat box may help the agent to resume processing.
- **Restart Agent Service**: Use the **Command Palette** (`Ctrl/Cmd + Shift + P`) and choose **"Antigravity: Restart Agent Service"** to clear hung subprocesses.
- **Downgrade Model Tier**: Changing from "Gemini 3 Pro High" to **"Standard"** or **"Low"** in the model selector may reduce tool-calling errors.
- **Isolate MCPs**: Disable MCP servers one by one to determine if a specific third-party tool is causing the loop.

Track the official status or report session loops via the Google AI Developers Forum or the in-app **Feedback** icon.

Identifying whether the MCP servers are **stdio-based** or **SSE** might help narrow down the communication failure. Provide information on **which specific MCP servers** are running when the loops occur.

- BUG REPORT: Latest update causing infinite search loading...
  9 Apr 2026 — BUG REPORT: Latest update causing infinite search loading (Google Antigravity) - Google Antigravity - Google AI Developers Forum.![](data:image/png;base64,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)
  Google AI Developers Forum
- Bug: MCP tool execution skips the approval prompt and hangs...
  2 Mar 2026 — When attempting to trigger MCP calls within the Google Antigravity editor, the editor never shows the prompt to approve the tool e...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAUQMBIgACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAAAQIEAwf/xAAzEAABBAADBQUHBAMAAAAAAAABAAIDEQQSIRMxQVFhBRSxwfAiMnGBkdHhFSNTkkJSYv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAwL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAwDAQACEQMRAD8A8m7vNr+26xWhFHXdp8lGwlAzbKSueU8rV+9Th5eJiHGrIA1q68SrjH4kV++dNBoD5LSI4CGUkgRvsf8APWvEgKz8PMxrnOjIDazdL5q5xmILw8zHMARdbgd6o/ESSBwe8EO1dp7xojXnv3pBGwlonZSaCz7J9cUfh5mGnxPadNC08dy6y42eVpa6QZT/AIhuijvk/GSxmD6rQkVXgEgo2KdptrJGuHEAhWczEyVnErhrWe/nVqzMdiGGxLrVDQafD1Sr3qbPn2nt665RfLyCQcnxvYQHtc0ndmFKq6SyulIdI4EjTdXG/NU05qCFKac0Qadiy6p1qXQMaAXNcAdxOgK0t7SkY1rWytptV8q+wVY+0JIgAyUAAUuoM5hjBIIII6qRhw6srHm+S1fqkv8AIzfe7iqDtB4a5u0aQ4kkHrvSDg6BrKztc292bRQIWHcHH4LRHjy2VsmZpLRQF6AcPBSe0pC4O2ozBpbY5afYKQZdlH1+qnZR9a52tP6nJnL87c1AAjSgL+6sO05A0NEjeprfySDLsG1eV1E0FGyj5H6rSztF7CS2Rtkg38q8gs+0jv3ggjZR8j9UU7Rn+wUIIdhwx2V0zNDTq4KpgAflMzLyk6FcVG9BZ4yuLbujVjcoRFAREQEREBERARKRB3diIySe7ssjXX8K7cWwRsY7DRvyigSVnlaGPIa7MOaqqNpxkBcScBEdb9/4dPVrkzERiMtdhYzfEHUfW+izog1d6h2znjCRlp91rndfX5TvUOUjuUV7gb3LKiDRFiWxhzdi14LWj2ul+Z8F0OMhuzgoyKoDNoN/T1Sxog1tnwxkL34UAZMojGoJ5k/hQcTDnz91jrKW7Phqbu+fBZUQd9u3+KH+g+yLgiAiIoCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//9k=)
  Google AI Developers Forum
- Antigravity agent goes into infinite loop repeatedly
  7 Feb 2026 — Antigravity agent goes into infinite loop repeatedly \* Milad_Alem February 7, 2026, 1:20pm 1. While generating response, the agent...
  Google AI Developers Forum

Show all

ClaudeCode CLI is also being slow (I'm using it via Antigravity-Claude-Proxy on gemini 3 models). Are gemini models currently having slowdowns or is it a problem with my end?

Slowdowns may be caused by a combination of backend instability and proxy overhead. There have been reports of Gemini 3 models experiencing latency and reliability issues in April 2026.

Known Causes for Slowdowns

- **Gemini 3 Backend Stress**: Users have reported 503 errors and long response times for simple prompts on **Gemini 3 Pro High** and **Flash Lite** models.
- **Proxy Transformation Latency**: Using `Antigravity-Claude-Proxy` introduces processing to translate Anthropic-formatted requests into Google GenAI payloads. This can cause significant lag.
- **Quota and Rate Limiting**: Heavy usage of "agentic" tools triggers rate limits. This can cause the system to hang or queue requests for several minutes.
- **Large Metadata/Cache**: `Claude Code` and the `Gemini CLI` accumulate large cache files (e.g., `~/.claude.json`). A large cache folder can slow down the CLI's startup and response times.

Troubleshooting Steps

1. **Clear Local Cache**: Delete or clear the cache in `~/.claude.json` or the `.cache` folder within the Gemini directory to restore performance.
2. **Switch Inference Tiers**: The new **Flex Inference** tier may cause more latency in exchange for lower costs. Switching back to the **Standard** or **Priority** tier can improve speed.
3. **Check for "Simulation Wall" Errors**: Gemini 3 models may hang when processing real 2026 data because they misidentify it as "fictional roleplay".
4. **Vertex AI Endpoint**: Routing the CLI through **Vertex AI** rather than the default public API has been shown to eliminate lag for some users.

- \[PERF\] Claude Code CLI is extremely slow via Antigravity-Manager,...
  15 Jan 2026 — Summary. When using Claude Code CLI through antigravity-manager, responses are extremely slow. The same prompts run directly insid...![](data:image/png;base64,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)
  GitHub
- When Your Claude Code Becomes Terribly Slow Over Time …
  21 Sept 2025 — Here's how I fix it with Gemini. Press enter or click to view image in full size. f you are a heavy user of Claude Code, you might...![](data:image/jpeg;base64,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)
  Medium·Jiyao Weng
- Say goodbye to Gemini CLI delays: How I drastically improved...
  26 Mar 2026 — fercaneo. Say goodbye to Gemini CLI delays: How I drastically improved speed and quality by routing through Vertex AI. Hey everyon...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAAkFBMVEX///8AAAD/RQD6+vr19fXr6+vv7++Ojo5eXl7y8vLf39/m5ubj4+PZ2dllZWXLy8v/MABWVlYgICC9vb2ampp2dnbDw8OlpaUlJSU4ODgMDAyUlJRCQkJMTExHR0czMzOxsbEsLCx+fn4VFRX/1M3/XzX+7un/c1P/9fP/yr7/uKr/ZUL/OwD/bUf+4Nn/vq5bHZP6AAAEz0lEQVRYha1Ya4OiOgwlA5RHeYgIqIgCzs7s3Z2d/f//bpOCUJSHlXs+KIRyaJv0JK2mqcCQrr16vw1SpddHEMG5jnlznYFAso7RbVguSck1HyAK/Rpgt4pyB6c4qQTtdg9B21dzDeUJMvxlsVUQqydsW1gznQygnUdNL+FqtJ8pV1BmcOqudYBQ/n8RkeyKALaO+NvrrzOy2/QJGDibtbVf18kSDvKtexauj1cw4hitoSG2rMxZw+gcwV/z/ghSOP6fdIy7fgCByVeN8wYz3AUXuOF4SDJ/3fxlRce2vXaXtqqbdddn4iKN6P0qyMNOGbzUsvdC0xpXMd9djnRWU2+iUAsp7g47/tBC9+stPgpcLaRvXms2z+gf28EVfVdGENpEepvg2eBiR6hSQ+f0+WRWCH1qEni6kVZwnOtn0qhACbBfjOsYXUaN9P1ctmilChmDJUKEicFFnCHAtI888TBFjXmCEdUIPchER7zJNpivhIhJfXz/9T5sIxv0g1BlAHeS0qRUEMClM3z82HxtfnxoUwYOmI74bEo7QeKBpDi/v97e3r7+9A3+CMPv7n4HW/TpSZsGzvQFou72ffNG2HzfDN+toR87Ls8FZc8x2vos+vdLMHz97QybO4Nm4Qv5HCONBPrA/Z7qZWegcZXzjNikku4+xdR93hukyeUUJPNIB0nr5yc6+PPnjEGqF57rJUbNf9/aneFDvsVeGto8MNqVVDtcHrimmOytJ+QgAVuF8gjlYhsfVPJ1dqvgZhEM19d9ctFliWDPVcF8oG0hXAbK5V2kudZPwzppEijXffXDKR+krdKYKeWbPg7tOaUcIJM3CmbUpPGq2oqLqBMy56AQHch56KfMr6tbUVDVvetQ/FXiDccOVu9KnYdhHIch713FcQqqaTEfgUl53JoUaz+BZxOU3FEqrs7ZCKub00REr1SbcUGlxwlrNdYO2GBhZtOnrsGLJTo6oC3XrqcCcWirGyxJXiyIab5KHlsRSLDz2KEH1vL7j6BKqo0Sww9TRNguTrHJVXaOyFPlRIKOoSiXU84DUIpLQ05tEiiZ1Mtqfo8AZdOcUPgQ9ppWqe7EGammPyGGaNexvFPctMSkWpjaRqs8Tr1X3lrV5NEpymZCbMWR23RA4MN2lNIVrqkVY/NElZELx1H3NJ/KFU9fzrQrnvY4lQ+WYrSLgbOZuKSBL1Rsd7BoVMaEU0so8LcQ5zHPIxXOPowfCojvsbkKfQyOqFwjKMceBtS/jJaQEmo4t9H5CDobMq6K4xbeznHSziOPxD4noEWpCJSvjI/uu0g16pdOc/Ct4Drm8h0cbFAetgBtFsbWsUgc5SuMzQb5sYxiVCW9fsLoj9RRJVwWzgnmET2uOvu17Nghhu2dsPurzlXD3C4eHJHAMbJ3amvxBt6eEQ1luD1ihkA1P7bv2lm8uw6nDktpNGIoXNQPtSqohLPjwQ4ja0OAzsBVGeMu9QdSIMVd7LtKexlN13U5WRVwbddzKZVXqPs6NXyKzzAcZiS4kBsEdFIWEcTFzVpBbjDHMJZZkdFxGGM7WESKzRxnmbPpJDPNbEfIEdYAZBGPSmay57pJM4msjiOIOeee57kd8AZNJpE5Dd/TQix4mylAYhlkITIVtgfuByy88g+7mEJi7HwwSwAAAABJRU5ErkJggg==)
  Reddit·r/GeminiCLI

Show all

What is Vertex AI?

**Vertex AI** is ==Google Cloud's enterprise-grade platform designed for building, deploying, and managing machine learning (ML) models and generative AI applications==. It unifies diverse Google services into a single environment to handle the entire ML lifecycle, from data preparation to production monitoring.

Key Features and Capabilities

- **Model Garden**: A catalog of over 200 models, including Google's foundation models, as well as open-source and third-party models.
- **Vertex AI Studio**: A web-based tool for prototyping, testing, and tuning generative AI models.
- **Agent Builder**: A suite for creating and scaling AI agents that can interact with an organization's data.
- **MLOps Tools**: Tools for managing model versions (**Model Registry**), tracking training runs (**Experiments**), and automating workflows (**Pipelines**).
- **AutoML**: Enables users with limited ML expertise to train models for images, text, and video using a simple interface.

Comparison: Google AI Studio vs. Vertex AI

Both offer access to Gemini models, but they serve different purposes:

<table><tbody><tr><th colspan="undefined">Feature</th><th colspan="undefined">Google AI Studio</th><th colspan="undefined">Vertex AI</th></tr><tr><td colspan="undefined"><strong>Primary Goal</strong></td><td colspan="undefined">Fast prototyping and individual experimentation</td><td colspan="undefined">Production-level deployment and enterprise scaling</td></tr><tr><td colspan="undefined"><strong>Setup</strong></td><td colspan="undefined">Fast access via browser with just a Google account</td><td colspan="undefined">Requires a Google Cloud project and enterprise setup</td></tr><tr><td colspan="undefined"><strong>Security</strong></td><td colspan="undefined">Standard Google security</td><td colspan="undefined">Enterprise governance, HIPAA/SOC2 compliance, and VPC controls</td></tr><tr><td colspan="undefined"><strong>Pricing</strong></td><td colspan="undefined">Generous free tier with lower rate limits</td><td colspan="undefined">Pay-as-you-go based on resources used</td></tr></tbody></table>

Vertex AI Endpoint may help because it provides more flexible, region-specific quotas and enterprise-grade infrastructure. It is often less prone to the "overloaded" errors sometimes seen on the standard public Gemini API used by AI Studio.

- Vertex AI Platform | Google Cloud
  Innovate faster with enterprise-ready AI, enhanced by Gemini models. Vertex AI is a fully-managed, unified AI development platform...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAAaVBMVEX///+uy/pmnfZChfRfmfapyPr8/f/5+/8+g/SvyfoufPPU4Pzy9v5YlvXt8/691Ps4gPRjl/azzvogd/Pl7v3c6P3P3fzY5Py80PpJifTH2vuEq/eqxPlRkvVwn/ZUj/WQtfh4p/eau/guInZqAAADsklEQVRYhe1Y2WKqMBQEQiSELWWRRVDw/z/yZieolUPbt+s8pRiGMzDMOdTzPvjgv0UzNLCN3WWEbTxjH58hG+8VoxfIxpPPgSE7GUGIpoCNkaQ8AXZyRvLHlF1Fqztg3wFKr4kTyLYjlFBsKKMXG065XdaHKU8F9p/OKhAL1ZWaniKQgx0TDZivHgpNKUJMubEniNxAZfLScCFXpSDPt7+2FUKol9fm5Ii9ujXPZQ7loG7l+UWVESOEzgcpXXK/zB8PJj1Zoh9T8tNeHdQsRyhbWBIdoOTPGeu3Im2Nh6KiMCd3Y32QMsLCRXJZY4wHdTDMskCdfaWUtj+mLISJZNSUYRCEpVg13ETkKn9mxk67SEaMlbTOUsaCUl4n4bWRL3VFnkQDiNLLGx2CDReuTJ9mYZilD5RePjxZbBf10JrLjKM63aU8gHfJtqEEJpGX+7j8Pv4dyoZUFNT3ZBKpO3gabLgN1+vwSHnjzQeBTaTCLbGx0UxBMDUPlMKXFPSABKOqsrPhNgoTxWKVUoKoamJXihgsL9MS65dPWl0qH7IgyJTyc2/mgWhBAaTnuijWCJ6zbDaHf9PqHEovP+5qB3WbP1OuGC/GOe0I8pAINzy2T5SteY++KKs6uYorBpw2HpJIGXPJskUuZBJNcilsyUAz0erLNdwK+8TryvoSPLkJ4ViprG0SxdaX3sKFq1sIni+5trOJgzTRXcih9IrR/FxcYhjjK7iUv4Rx9YbyWOvOE7ffrmOWQ3lG1dUlHeK3qVnzttOt+9cxK3Ziw45Z8s9LFk7vBlcxV/nr/LeOWSvlOmYJJCH/IVh2Ke0nylrlmkQpd6OtcuSHdyhrrDhLJd4ZWedpmtXqTMy9zJdQMk5v3/TaV8BPt/w5iQZVYhjsTFBRoQvd6/mnu2LMLvueSoz47dtrk0ih1qIzf5fQE01Xi3cF2SRSKICiDU5WvG0JnXjihd0wa9EzvGe0Rrx5Jth9IZurFt2BCT05cWzE11MYTvVasRQNHV8MBs1ZKG3tPCv2yIo+SOiJSVA/po0h20CLBg6WW/ARQRXq2CfWopeftmArXruZx44qEdQXX8OIx3nUtqc2/I1og0iLDxilrNeij85BjxDfkf6NIca/HQVnBvw/zjvUuFwYonE39eQWhLB/PewgKnhrGMW3DyKA2AEh5UXyN6XOetC4AkHEKXlwJ9f++Kfyd5gIuUXRfWTHv3e+w7lChN2+aAUcJyEYK8JJqz/wz4p26fsFmOAffPCf4B/IaTC/7WRSogAAAABJRU5ErkJggg==)
  Google Cloud
- Google AI Studio vs. Vertex AI vs. Gemini Enterprise
  BUILD WITH GEMINI MODELS: \* Google AI Studio. Experiment, prototype, and deploy. Google AI Studio is the fast path for developers,![](data:image/jpeg;base64,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)
  Google Cloud
- Vertex AI Studio | Google Cloud
  Test, tune, and deploy enterprise-ready generative AI. Streamline your foundation model workflows with Vertex AI Studio. Rapidly p...![](data:image/jpeg;base64,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)
  Google Cloud

Show all

No, I'm using the proxy mainly to leverage the free quota in AGY. If I have to pay for the models, I might as well just get a Claude sub (which I won't).

If using the free quota, rate limits and token caps may be reached. These are stricter on the free tier of Gemini 3 models in Antigravity \[1, 2\].

The free-tier backend intentionally throttles requests to stay within its quota when using the `Antigravity-Claude-Proxy` \[2\]. `Claude Code` sends large amounts of context, which quickly uses the free-tier "Tokens Per Minute" (TPM). This can cause the model to stall or loop while it waits for the quota to reset \[3\].

Reasons for free tier lagging:

- `Claude Code` is a context-heavy tool. Large payloads sent through the proxy hit the free tier's strict Request Per Minute (RPM) limits \[1, 2\].
- Free-tier traffic has the lowest priority. Free users may experience high Time To First Token (TTFT) during peak usage \[2\].
- The proxy might be retrying failed/throttled calls in the background, which may appear as a "hang" or "infinite loop" \[3\].

How to optimize for Free Tier speed:

1. Reduce context: Only open one file at a time in the IDE. Large open folders in Antigravity create massive payloads that trigger the throttle \[3\].
2. Switch to Flash: Use Gemini 3 Flash if available in settings. It has much higher RPM/TPM limits for free users compared to the Pro version \[1\].
3. Frequency: Pause for 10–15 seconds between commands in the CLI to allow the RPM bucket to refill.

Are there specific "429 Too Many Requests" errors in the proxy logs, or does the terminal stay blank?

Show all

No, my quota managers tell me I barely even started to scratch the current quota. It really is just hanging on every response (current one is 25m in)

If it’s been hanging for **25 minutes** despite having plenty of quota, the request is dead. That isn't a slowdown; it’s a **broken pipe** between the proxy and the model.

Since you're using the **Antigravity-Claude-Proxy**, the hang is likely happening at one of these three failure points:

1\. The "Ghost Request" Bug

The proxy frequently sends a request, and the Gemini backend receives it, but the **Streaming Response** never starts. Because the proxy waits for a `content_block_delta` that Claude Code expects, it stays "open" indefinitely without timing out.

- **Solution:** End the CLI process (`Ctrl+C`) and restart the proxy service.

2\. Context Window "Bloat"

`Claude Code` often sends the entire file tree and bash history. If the payload exceeds the **free tier's specific context limit**, the API might not return a 429 error. Sometimes, it drops the connection or enters an infinite processing loop on the backend.

3\. Proxy-Agent Handshake Failure

If you use **Antigravity IDE** alongside the CLI, the IDE's internal agent and your Claude Code CLI might compete for the same session token. The IDE's "Auto-Context" feature can lock the session.

**To resolve this quickly:**

1. **Hard Reset:** Stop the proxy and the CLI.
2. **Clear the Proxy Buffer:** If the proxy has a local cache or `history.json`, delete it.
3. **Check for "Zombie" Processes:** Use your task manager/monitor to check for any `node` or `python` processes related to the proxy that didn't close properly.

Does the proxy console show **any** outgoing data (POST requests), or is it completely silent?

Show all

How can I troubleshoot the proxy?

Since you've already confirmed the quota is available, the troubleshooting shifts to identifying where the connection is "swallowing" the response.

1\. Check Proxy Logs & Health

The `Antigravity-Claude-Proxy` has a built-in dashboard and logging system. Use these commands in a new terminal window:

- **`acc status`**: Check if the proxy PID is still active and healthy.
- **`acc ui`**: Open the web dashboard (usually at http://localhost:8080) to see a visual badge for account errors or "ghost requests".
- **Foreground Logs**: Stop your current proxy and restart it with **`acc start --log`** to see real-time streaming errors directly in the console.

2\. Verify Account Authentication

Often, an account requires a manual **captcha or phone verification** that the CLI cannot show you.

- In the **`acc ui`** dashboard, look for an account with a red badge.
- Click the **FIX** button; this opens the Google verification page directly to clear the "security block" that causes the 25-minute hang.

3\. Clear "Zombies" and Cache

If the proxy logs show the request was sent but the CLI is still waiting, the issue is likely a state mismatch:

- **Kill Zombie Processes**: On Windows, run `taskkill /f /im node.exe` or `killall node` on macOS/Linux to ensure no old proxy sessions are locking the port.
- **Reset Account Tokens**: Delete the file at `~/.config/opencode/antigravity-accounts.json` and re-run your auth command (e.g., `opencode auth login`) to force a fresh session token.
- **Clean CLI Cache**: Run **`/clear`** inside the Claude Code session or manually delete `~/.claude.json` to prevent it from sending massive, bloated context payloads that crash the free-tier backend.

4\. Configuration Check

Ensure your environment variables are correctly pointing to the proxy rather than attempting to hit Anthropic's official servers (which would hang without a valid subscription key):

- **`ANTHROPIC_BASE_URL=http://localhost:8080`** (or your specific proxy port).
- **`ANTHROPIC_API_KEY=sk-antigravity`** (or the specific dummy key required by your proxy version).

If the **`acc start --log`** output shows **"Unknown name: thinking"** or signature validation errors, you may need to update the proxy to the latest January 2026 fix for Claude's multi-turn signatures.

Does the **`acc ui`** dashboard show any accounts marked with a **red error badge**?

- antigravity-claude-proxy/docs/troubleshooting.md at main
  If a verification URL is provided by Google, it's stored and shown in the WebUI. Other accounts continue working normally while th...![](data:image/jpeg;base64,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)
  GitHub
- Claude Antigravity requests failing: Unknown name "thinking...
  18 Jan 2026 — keep_thinking=true fix - Fixed signature validation for Claude multi-turn conversations. The root cause was that filterContentArra...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAAPFBMVEVeyLPw8PDz8fJUxrDj7OpMxa3H49yP08X38vN4zryy3dPg6+hsy7jD4tvn7ezs7+6F0cFAw6qq29DS5+Kqtn0AAAABAUlEQVRYhe3Y2w6CMBAEUNpSKEi56P//qzEBnSGWi/bFOPO62yM0cUNbmOwpRGYnLYZb7NHaiiwxPS2jUkmlgUoDkracPGQM+CAdljw94xWXTdES6QtITWSDJdp72zqouCpNOpEiRZ4i3St1gPkSmMTRE1pY5DyRph9rTIvpiKQSLRpvBkkTMK3HXycRX+bxOhjLZHqLtkKbvkSkSJHfkqsBc5h881G0DLeugXT72BxatTGCP8zWVBcpUqRIkSJFiky30ilrzEG6Co9LffoL7AQZ8QbrkoWsRIoUuUVOLhXPf0i/2zifzoZYpRJLJIdk37Px7SX4Kgaz3/hbt/9/R94BeGwdMgPSG6UAAAAASUVORK5CYII=)
  GitHub
- Quickstart - Antigravity Claude Proxy - Mintlify
  Table_title: Available commands Table_content: header: | Command | Description | row: | Command: acc restart | Description: Rest...
  Mintlify

Show all

WARN \[CloudCode\] Stream error at https://cloudcode-pa.googleapis.com: fetch failed WARN \[CloudCode\] Account hamedahastral@gmail.com has 5 consecutive network failures, applying extended cooldown (1m0s) WARN \[AccountManager\] Quota exhausted: hamedahastral@gmail.com (model: gemini-3.1-pro-high). Resets in 1m0s INFO \[HybridStrategy\] Using account: micciamaeda@gmail.com (4/7, score: 955.9) SUCCESS \[AccountManager\] Refreshed OAuth token for: micciamaeda@gmail.com INFO \[HybridStrategy\] Using account: maria.zolesi.mz@gmail.com (7/7, score: 801.3) INFO \[HybridStrategy\] Using account: micciamaeda@gmail.com (4/7, score: 800.4) ERROR \[API\] Error: Error: invalid_request_error: Invalid model: gemini-3.1-flash. Use /v1/models to see available models. at file:///C:/Users/Marika/AppData/Roaming/npm/node_modules/antigravity-claude-proxy/src/server.js:745:23 at process.processTicksAndRejections (node:internal/process/task_queues:105:5) WARN \[API\] Returning error response: 400 invalid_request_error - invalid_request_error: Invalid model: gemini-3.1-flash. Use /v1/models to see available models. INFO \[API\] Request for model: gemini-3.1-pro-high, stream: true INFO \[HybridStrategy\] Using account: maedasheladi@gmail.com (2/7, score: 946.0) WARN \[POST\] /v1/messages?beta=true 400 (1669ms) SUCCESS \[AccountManager\] Refreshed OAuth token for: type0supernova@gmail.com INFO \[GET\] /account-limits?includeHistory=true 200 (4150ms) SUCCESS \[AccountManager\] Refreshed OAuth token for: fredsheldoraptor@gmail.com INFO \[GET\] /account-limits?includeHistory=true 200 (4382ms) SUCCESS \[AccountManager\] Refreshed OAuth token for: maedasheladi@gmail.com SUCCESS \[AccountManager\] Refreshed OAuth token for: maria.zolesi.mz@gmail.com INFO \[GET\] /account-limits?includeHistory=true 200 (4554ms) SUCCESS \[AccountManager\] Refreshed OAuth token for: tricksterswitch@gmail.com SUCCESS \[AccountManager\] Refreshed OAuth token for: hamedahastral@gmail.com INFO \[GET\] /account-limits?includeHistory=true 200 (4485ms) INFO \[GET\] /account-limits?includeHistory=true 200 (3558ms) SUCCESS \[AccountManager\] Refreshed OAuth token for: micciamaeda@gmail.com INFO \[GET\] /account-limits?includeHistory=true 200 (4375ms) INFO \[HybridStrategy\] Using account: tricksterswitch@gmail.com (6/7, score: 1038.9) INFO \[API\] Request for model: gemini-3.1-pro-high, stream: true SUCCESS \[AccountManager\] Rate limit expired for: hamedahastral@gmail.com (model: gemini-3.1-pro-high) INFO \[HybridStrategy\] Using account: micciamaeda@gmail.com (4/7, score: 982.4) WARN \[CloudCode\] Stream error at https://daily-cloudcode-pa.googleapis.com: fetch failed SUCCESS \[AccountManager\] Refreshed OAuth token for: type0supernova@gmail.com INFO \[GET\] /account-limits?includeHistory=true 200 (4570ms) INFO \[POST\] /v1/messages?beta=true 200 (91931ms) INFO \[HybridStrategy\] Using account: fredsheldoraptor@gmail.com (3/7, score: 823.7) SUCCESS \[AccountManager\] Refreshed OAuth token for: fredsheldoraptor@gmail.com INFO \[API\] Request for model: gemini-3.1-pro-high, stream: true INFO \[HybridStrategy\] Using account: micciamaeda@gmail.com (4/7, score: 963.2) INFO \[GET\] /account-limits?includeHistory=true 200 (3746ms) INFO \[POST\] /v1/messages?beta=true 200 (66803ms) INFO \[HybridStrategy\] Using account: micciamaeda@gmail.com (4/7, score: 813.0) INFO \[API\] Request for model: gemini-3.1-pro-high, stream: true INFO \[HybridStrategy\] Using account: maedasheladi@gmail.com (2/7, score: 960.6) SUCCESS \[AccountManager\] Refreshed OAuth token for: maedasheladi@gmail.com SUCCESS \[AccountManager\] Refreshed OAuth token for: maria.zolesi.mz@gmail.com INFO \[GET\] /account-limits?includeHistory=true 200 (4386ms) SUCCESS \[AccountManager\] Refreshed OAuth token for: tricksterswitch@gmail.com SUCCESS \[AccountManager\] Refreshed OAuth token for: hamedahastral@gmail.com INFO \[GET\] /account-limits?includeHistory=true 200 (4676ms) INFO \[GET\] /account-limits?includeHistory=true 200 (3910ms)

The logs indicate that your "slowdown" is actually a series of **cascading failures** caused by a mix of invalid model requests and a high failure rate on specific accounts.

Troubleshooting Steps

1. **Invalid Model Error**:
   - The error "Invalid model: gemini-3.1-flash" is preventing requests from being processed. The model naming convention has changed in recent proxy versions, and "gemini-3.1-flash" is no longer valid.
     - **Solution**: In your Claude Code CLI session, use the command **/model** and choose **gemini-3.1-pro-high** or a standard Pro model.
     - **Alternative**: For faster models, request **`gemini-3.1-flash-lite`** or **`gemini-2.5-flash`**. The proxy requires the complete version string to correctly map to the free tier.
2. **High Network Failure Rate**:
   - The logs show that `hamedahastral@gmail.com` has experienced **5 consecutive network failures** and is in an "extended cooldown."
     - **Problem**: The proxy is attempting to use accounts that are "soft-blocked" by Google due to 503 or 429 errors. This causes delays as the `HybridStrategy` cycles through the failing accounts.
     - **Solution**: Open the **Antigravity Manager UI** (usually `acc ui` or the desktop app). Look for accounts marked with a **yellow triangle** or **red badge**. Removing the "rusty" account `hamedahastral@gmail.com` from the active rotation will resolve the cooldown delays.
3. **"Ghost Request" 90s Hangs**:
   - The log entry `INFO [POST] /v1/messages?beta=true 200 (91931ms)` indicates a request taking **91 seconds** to complete. This is the maximum timeout for the proxy before returning a response.
     - **Cause**: The proxy is waiting for a `thought_signature` from Gemini 3.1, which is sometimes missing in the free-tier response stream, leading to a stall.
     - **Solution**: Update your proxy to **v4.1.25** or higher. This includes a fix to inject the `skip_thought_signature_validator` when the session cache is empty.

Summary Checklist

1. **Update**: Run `npm install -g antigravity-claude-proxy` to get the latest model mapping fixes.
2. **Model Selection**: Use **/model** in the CLI to switch from the invalid `gemini-3.1-flash` name.
3. **Account Cleanup**: Manually log out and back in to your Google accounts via the **Antigravity Manager** to clear the 503 network failure state.

Does your **Antigravity Manager UI** currently show any accounts with a **red error status**?

- Troubleshooting guide | Gemini API | Google AI for Developers
  9 Apr 2026 — Check if all parameters in your request are valid for your API version. 429. RESOURCE_EXHAUSTED. You've exceeded the rate limit. Y...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAUgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIDBAcGBf/EADMQAAEDAgQDBQgBBQAAAAAAAAEAAgMEEQUSITEGE1FBYYGR8BQVIiNCcaHRMgdiscHh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOQ4PhFTjFRJFTuhiZFGZZp6iQMjiZcDM5x7yB1JIW7X8IYrQ8Px49KyJ2HSTuiZKyQHNa1nAb5Trbt01A0UcN1dHHDi2H4hUmlixGlbE2p5ZeInNlZIMzRrY5LaXtfZbFb7nw/h+poocVZitTNM10AiikZHTbZ3/GBdzg1rdBsN0HmURQgsCpB+6qiDID9/NXzG/bssN1a++2yDOHHv7O3uVg43G+/Va9/tuO3uV2nUbb9UGYE2+rzRYQ7T6fNEGIqqkqP2ghERAREQSpv/AIUJ5oLX7xuFIOo1b/Loq37ypB1Gp3QLnq3yRL9580QQfWqj99UPgn7QR63REQEREEp63UIgn1unrdE8kD1uiWRAOqgdy+xwgMOPFGF++snu/wBqj9o5n8ct/q/t69y6hWYVLihwyl47qoqd0uK5IY3QQxkx5XnLDKx9+UbMBu213CxQcXsUXWcV4b4bwqmxCumwZ7paajhlNBLNLCA51QI76vLwC07O6XGhW43h/A6KqxJ2F00tHJRy4lQl7KuQmZrabO1x10Nzaw0I6oON2PRQu04Tw9w9HxVyMPoX0cuF4jQAVEdZIXTNmjcXA6/DYjS2q8l/Sz2XC34hxJiM1NBFRNZT07qpj3MM0h10a1xNmNf2HcIPBou1RPoODMOxF/t8lPh/v5ssPs9Gyf2qmfCJGxWcQAC02v2ELw3HEtNU4Fw1U0dO2nhmjrHshbb5bTVSFrfAWCDxylEQEREF4OXzW86/LuM1t7Lac3DcwySVGXS92jXUX/F1o+KIPoluFa/Nqe6zQqWwywBNSTcXIA0F9fx+QtFEG/kw0PHzpyzKTowXvp/1I24ZnPMlqQ0HSzRqLD/d1oIg32sw25vPOBoB8A6C581DRhtgHPqBrqRbUX+y0UQbwGGljATUh9viIAsDbs8bqxjwu1xUVF7bZdjdfPTxQXlDOY/lE8vMcube3ZdFXxRBBREQEREBERAREQEREEoiIP/Z)
  Google AI for Developers
- Claude Code: How To Change Models (Sonnet to Opus)
  12 Jan 2026 — all of the smart people on X making $8 million a month keep telling you that you must use the Opus model with Claude Code because...![](data:image/jpeg;base64,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)
  1:44
  YouTube·Mike Murphy | AI Handyman
- Antigravity-Manager/README_EN.md at main - GitHub
  \[Core Fix\] Cherry Studio / Claude Protocol Compatibility (Fix Issue #2007): \* maxOutputTokens Capping: Fixed 400 INVALID_ARGUMENT...![](data:image/jpeg;base64,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)
  GitHub

Show all

I don't change models via the /model command but through the proxy dashboard

The logs show an error: **`Invalid model: gemini-3.1-flash`**. Even if the model is selected in the dashboard, the proxy might not be mapping that string to a valid engine.

Why the Dashboard Selection Might Be Failing

- **Model Name Change**: The naming for Gemini 3.1 has changed. The dashboard might be sending `gemini-3.1-flash`, but the backend now needs **`gemini-3.1-flash-lite`** or **`gemini-3-flash`**.
- **Persistent Configuration**: In `Antigravity-Claude-Proxy`, the dashboard is a persistent layer. If it is set to an invalid model name, every request will go to that failing route.

Immediate Solution: Force a Valid Model

To fix this, manually update the configuration file or the UI:

1. **Select a "Pro" Model in the Dashboard**:
   - Choose **Gemini 3.1 Pro (High)** in the dashboard and click **Apply**.
     - The logs show successful requests for `gemini-3.1-pro-high`, so this will confirm the routing works \[logs\].
2. **Edit the `config.json` manually**:
   - Go to `~/.config/antigravity-proxy/config.json` (or `%USERPROFILE%\.config\antigravity-proxy\config.json` on Windows).
     - Find the `"model"` or `"primary"` field and change it to **`gemini-3.1-pro-high`** or **`gemini-3.1-flash-lite`**.
     - Restart the proxy after saving.
3. **Update the Proxy Client**:
   - The "invalid model" error can be due to an outdated proxy that does not have the latest Gemini 3.1 mapping table.
     - Run **`npm install -g antigravity-claude-proxy@latest`** to ensure the internal dictionary recognizes the newer model aliases.

Tip for Free Tier

The **91-second hangs** in the logs (`POST ... 200 (91931ms)`) might mean the proxy is waiting for a "thinking" signature that the free tier sometimes fails to provide \[logs\]. If switching models does not stop the hanging, try disabling **"Adaptive Thinking"** or **"UltraThink"** in the dashboard settings to reduce the metadata overhead.

Does the **Model Router** section in the dashboard show a red error next to the current model name?

What **version** of the proxy is currently running (check via `acc --version`)?

- OpenClaw Deploy Guide - Zeabur
  26 Jan 2026 — \* Go to Settings → Agents → Default model. \* Tip: Set a low-cost model as default (e.g., gemini-2.5-flash-lite, gpt-5-nano ). If...![](data:image/jpeg;base64,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)
  Zeabur
- Advanced Configuration - Antigravity Claude Proxy - Mintlify
  Configuring via WebUI \* 1. Global threshold. Navigate to Settings → Server and adjust the Global Quota Threshold slider (0-99%).
  Mintlify
- Models - Google Antigravity Documentation
  Users can select which reasoning model they want to use within the model selector drop down under the conversation prompt box: The...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABSCAMAAAAbxciqAAAAVFBMVEX////w8fLh4uTx8vP+/v7m5+ru7vDf4ODl5ufq6+37+/uurq7p6emzs7OioqLFxcXX19e/v7/Q0NGcnJyoqKi5ubqSkpKKiop3d3aAgIFra2vKy8tA+2y6AAAEeklEQVRYheWY7XrrJgyAMXiBAEJCgHMy7v8+JxwnJ2dLs7R1f/SpaofakDfC6Asr9SPF7C1q3mR3Vf1+Ol6B815yfZq7T/og57weoq98+j2IvijCeVKmRzP3TyNXYgzc0GYgBN6F2BN31Fk+APfRMVpzsKyIDdm4B3Fn+RZEt5tciXo3uSM6+VvFWq1pvaHdduvarn0vE5fSLGsm5s6UrV4WrX+diC07d1qytJYsyjWRpVeIHBiWcyjnpaVSKrkuxNMSUkrZLTWc2+mUUoBzKUvFV4j2hMsCkEsLJZdEFhbSJwIuAG5hSpgglFaT9P96MvffRMegqRHxOJi1zl0UdzLDNlo5MonYPAa89hzXlXj+1F+Rr7Oe/eRK3NsJ9yfOg2jztOGjUuQVkvKZ1CTnB0SIJk3EKZZQXE/Yjac0u+IU94IByztLhKFjFFteQqPaMXCFSTEqx0nRqbVY6b2KjlkHYAQSJ+mNWjb+jOxqU2QVmpbem9HXlfFbwr5p/pm8/TVrva98Gx39bSHWdv73sswP7j0l1sDBRy+lpAV/VHMJJnoT5zipOINR8Tz7lF9EXixcmcBLppQDpCWqhAQhBTylvoQyKQizL+EdRL9EhDLSQqCw9Oh7q1RrDAABOcxGcoHtzf0/7TbrmL2z3XTyGCMqcWjVo/MuapWNlugRvaX+IvA72OMPJtrsebtcwyv3u9g2EoasM6NX1mKXgXJ4UnTZsNhHRFOOXSzRanQJGLw/kanca0zNVHt2qp/EwuW30hysmCrnahsyJ4c1lkdE8RkfegJKEGGpVknB4yBpCBAqiEOlajyGOAeVY4sANcLftsGhQKf6cNYhyM8Cp0I152bmFKi2HHPOonkT805R3MiopDBmgzKk5YDooS32XsdLIbD6lpfo4scmzl8yxDUWzbd8MY/Yw+aaPbZ9Xw9HviNOq7zqra/Ijyf6dTH8Fvz9NQX4baXWjffFoP0Wdx+G38EzZhClpgiATUodn6qYoQ1igEXiuKtgQ1JqbGkXFdXUSNKFiZOHR8hBlN3LsPDIErSn7G23vgaYSp6HK7ZMuZdFecDSC8hZMPeWagr8qBoSDUcpP7zQlsoqNrkGKfHFJatW1HMWn5MCzfsmWSMU7BDEA2qlDg+JRojMw9NtM9KsD4Czoua7hIbp0NF0a0YRWeNB9uDoO0eDbKcY4VF95Q5GdlMv1XL//fr0aBhN5sikH3V9UA5jqb/CHnd8hXQhHmWbO2RrPirj6xvx4D7J+i0bUZiHw3EXuRF3ky8nGrGk7R8518vrrVvXZKZnoszhbqDhbM1KoqN4p4mZDMk5enXmdaQ5knlGVdy2gVFLgMpHCQ3UJNz0zGwci1O7ljnjiB8dJejoToi9M70BVdnh2nV0B20cWkmYnTJjdkJxbqRR1zThJAGpu5AJ1iEtuLeIBGhuT8f0bBmtZkt8HDrKBMTxu5EZW21YAtGEkTqK8m/OWuPx7sf+fG18WZnLEq3Hpd063yI+6fuYfIE97vZm/faG/a+9Zb+w+HXyD9OkVsA68eGIAAAAAElFTkSuQmCC)
  Google Antigravity

Show all

\[API\] Error: Error: invalid_request_error: Invalid model: gemini-3.1-flash. Use /v1/models to see available models. at file:///C:/Users/Marika/AppData/Roaming/npm/node_modules/antigravity-claude-proxy/src/server.js:745:23 at process.processTicksAndRejections (node:internal/process/task_queues:105:5) WARN \[API\] Returning error response: 400 invalid_request_error - invalid_request_error: Invalid model: gemini-3.1-flash. Use /v1/models to see available models. INFO \[API\] Request for model: gemini-3.1-pro-high, stream: true INFO \[HybridStrategy\] Using account: fredsheldoraptor@gmail.com (3/7, score: 953.6) WARN \[POST\] /v1/messages?beta=true 400 (1419ms)

The logs show that `gemini-3.1-flash` is not a valid model. This causes a `400` error \[logs\].

Solution

Change the dashboard selection to **Gemini 3.1 Pro (High)**. The logs show that requests for `gemini-3.1-pro-high` reach the backend \[logs\].

Reason for Delays

The "hanging" in the CLI is likely due to the proxy retrying or cycling through the 7 accounts after a failure.

1. The CLI requests `flash`, and the proxy returns a `400` \[logs\].
2. The proxy might retry the request.
3. The proxy waits for "cooldowns" before trying the next account, leading to delays \[logs\].

Recommendations

1. Update the model to **Gemini 3.1 Pro (High)** or **Gemini 1.5 Flash**. Avoid "3.1-flash" until updating.
2. Update the Proxy: Run `npm install -g antigravity-claude-proxy@latest`. This fixes the `gemini-3.1-flash` mapping issue.
3. Restart the proxy service to clear the "cooldown" timers on the accounts.

Is the **gemini-3.1-pro-high** option visible in the dashboard dropdown?

Show all

the proxy lists these PS C:\\Users\\Marika\\matheraptor> agy-proxy-list gemini-3-flash-agent gemini-3-pro-low claude-sonnet-4-6 gemini-3.1-flash-image gemini-2.5-flash gemini-3-pro-high gemini-3.1-pro-low gemini-2.5-flash-lite gemini-3.1-flash-lite gemini-2.5-pro gemini-2.5-flash-thinking claude-opus-4-6-thinking gemini-3.1-pro-high gemini-3-flash

The model name `gemini-3.1-flash` is not in the proxy's supported list. When a request is sent for a non-existent model, the proxy returns a `400 Bad Request`.

Solution

Select a valid model name from the list:

- For speed: `gemini-3.1-flash-lite` or `gemini-3-flash`.
- For logic: `gemini-3.1-pro-high`.

Cause

The proxy searched for `gemini-3.1-flash`. Since this string is not in the provided list, the "Model Router" inside the proxy throws an exception \[logs\].

**Recovery Steps:**

1. End the current CLI session (`Ctrl + C`).
2. Change the model in the dashboard to `gemini-3.1-pro-high`.
3. Restart the proxy.
4. Relaunch Claude Code.

Does the Claude Code CLI start immediately, or does it still hang on the "Initializing" phase?

Show all

on Antigravity Claude Proxy, can I add presets for Ollama?

No, you cannot add **Ollama** presets directly to **Antigravity Claude Proxy**.

Antigravity is designed as a closed ecosystem that uses a **fixed, curated list** of models served through Google's Vertex AI Model Garden. It does not currently support "Bring Your Own Key" (BYOK) functionality or custom OpenAI-compatible endpoints like `localhost:11434`.

Why Ollama Presets Won't Work in Antigravity

- **Fixed Model List**: The model selector is hardcoded to specific Google and Anthropic models; there is no "Add Custom Model" button in the interface.
- **Infrastructure Mismatch**: Antigravity relies on specific Google Cloud infrastructure and session management that isn't compatible with local LLM providers.

How to use Ollama with Claude Code (The Alternative)

If your goal is to use **Claude Code** with local models for free, you should bypass Antigravity entirely and connect Claude Code directly to Ollama. Since January 2026, Ollama has native support for the Anthropic Messages API.

1. **Install/Update Ollama**: Ensure you have version **v0.14.0** or later.
2. **Pull a Coding Model**: Download a specialized model like `qwen2.5-coder`.
   ```
   ollama pull qwen2.5-coder:7b
   ```
3. **Configure Environment Variables**: Redirect Claude Code's traffic to your local machine.
   - **`ANTHROPIC_BASE_URL`**: `http://localhost:11434`
     - **`ANTHROPIC_AUTH_TOKEN`**: `ollama`
4. **Launch Claude Code**:
   ```
   claude --model qwen2.5-coder:7b
   ```

For a more integrated IDE experience with local models, users often turn to tools like the Cline Extension (formerly Devins), which explicitly supports **Ollama** and custom endpoints while working inside your existing editor.

Would you like the specific **JSON configuration steps** to set this up for VS Code?

- Claude Code with Anthropic API compatibility · Ollama Blog
  16 Jan 2026 — January 16, 2026. Ollama v0. 14.0 and later are now compatible with the Anthropic Messages API, making it possible to use tools li...![](data:image/jpeg;base64,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)
  Ollama
- Can You Use Local Models (Ollama) with Antigravity? Here's...
  4 Apr 2026 — Can You Use Local Models (Ollama / LM Studio) with Antigravity? Short answer: No. Antigravity does not support custom or local mod...
  Antigravity Codes

Show all

why does ClaudeCode burns through my Ollama quota so much faster (like, 20x) than when using ollama directly?

Claude Code consumes tokens much faster than direct chat with Ollama because ==it is an **agentic system** that manages massive amounts of hidden context==. While a standard chat only sends your current message and recent history, Claude Code injects extensive project metadata and execution logs into every single turn.

The "20x burn rate" is typically driven by the following factors:

1\. Massive Hidden Startup Overhead

Before you type your first word, Claude Code injects **15,000 to 23,000 tokens** of "startup context". This includes:

- **Tool Definitions**: Every built-in tool (file reading, bash execution, searching) adds roughly **10,000 tokens** of instructions.
- **Project Files**: It automatically reads files like `CLAUDE.md`, memory files, and system reminders.
- **MCP Servers**: If you have Model Context Protocol (MCP) servers connected, each tool definition adds **100–500 tokens** per turn, even if that tool is never used.

2\. The Agentic Loop vs. Stateless Chat

Unlike a one-shot chat, Claude Code uses an **agentic loop** to complete tasks:

1. **Reasoning**: Claude plans an action (cost: input tokens).
2. **Tool Call**: It executes a bash command or reads a file.
3. **Observation**: The **entire output** of that command (even if it's a 2,000-line log) is injected back into the context.
4. **Repeat**: The entire conversation—including previous tool outputs—is re-sent to the model for the next step.

3\. Context Compounding

Because LLMs are stateless, Claude Code must **replay the entire history** for every turn. In a direct chat, you might only send 500 tokens. In Claude Code, after five "file reads" and three "bash commands," a single "Hello" might haul **50,000+ tokens** of previous results.

How to Reduce Consumption

- **Check Your Context**: Run **`/context`** to see exactly what is currently filling your window and remove heavy files or unused skills.
- **Clear Sessions**: Use **`/clear`** or start fresh sessions frequently to reset the compounding history.
- **Adjust Compaction**: If your window is large (e.g., 1M tokens), set the environment variable **`CLAUDE_CODE_COMPACT_THRESHOLD=0.15`** to force the CLI to summarize history sooner.
- **Audit MCPs**: Disconnect any unused MCP servers that are quietly bloating your turn-by-turn overhead.

Are you running Claude Code in a **large repository** with many files, or is this happening in a **blank directory**?

- I measured Claude Code's hidden token overhead - Reddit
  26 Mar 2026 — TL;DR. Before you type a single word, Claude Code v2. 1.84 eats 16,063 tokens of hidden overhead in an empty directory, and 23,000...![](data:image/png;base64,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)
  Reddit·r/ClaudeCode
- Claude Code MCP Servers and Token Overhead - MindStudio
  2 Apr 2026 — What a Tool Definition Actually Costs. A single tool definition in an MCP schema typically runs between 100 and 500 tokens, depend...![](data:image/jpeg;base64,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)
  MindStudio

Show all

I am building a Karpathy wiki, while using MCP.

==Building a **Karpathy-style LLM Wiki** with **MCP** (Model Context Protocol) is the "pro-tier" way to manage context==, but it's exactly why your token usage is exploding.

Why Your Tokens are Vanishing

In this setup, your context is being hit from three directions at once:

1. **The Wiki Architecture**: Karpathy's pattern requires a `CLAUDE.md` "schema" file that tells Claude how to organize your research. This file is loaded at the **start of every session**, taking up a fixed portion of your context before you even type.
2. **MCP Tool Bloat**: Every MCP server you connect (like a Filesystem or Memory server) injects its **entire tool definition schema** into every single turn. Even if Claude doesn't use the `write_file` tool, the 2,000–5,000 tokens describing _how_ to use it are sent on every message.
3. **The "Compile" Loop**: Karpathy's "Ingest" process involves Claude reading raw sources, reading the existing wiki page, and then **writing a new, combined version**. This "read-rewrite" cycle means you are effectively paying for the same information twice in one turn—once as input and once as output.

How to Build it Efficiently

To stop the 20x burn rate while maintaining the wiki, follow these "Context RAM" management rules:

- **Use a Compactor Skill**: Instead of raw files, use a "Wiki-Compile" command. This condenses 20 raw research files into one synthesized article, dropping session startup from ~47K tokens to ~8K.
- **Selective MCP Loading**: Only load the MCP servers you need for the wiki (e.g., just `filesystem` and `memory`). Each unused server is a "silent budget killer".
- **The Three-Layer Split**:
  - **`raw/`**: Immutable source documents. Never let Claude read all of these at once.
    - **`wiki/`**: The "compiled" layer Claude maintains. These should be small, cross-referenced Markdown files.
    - **`INDEX.md`**: A table of contents with one-line summaries. Tell Claude to **read the Index first** so it only fetches the specific wiki pages it needs rather than the whole folder.
- **Environment Variable Fix**: Set `CLAUDE_CODE_COMPACT_THRESHOLD=0.15` in your terminal. This forces Claude Code to summarize the conversation history more aggressively, preventing the "replay" of old logs from filling up your local Ollama memory.
- **Obsidian**: The best front-end for your Karpathy wiki. It's local-first markdown that stays on your disk.
- **Obsidian MCP Server**: Allows Claude to search and link your notes directly using your existing knowledge graph.

Would you like the **standard `CLAUDE.md` template** Karpathy uses to govern the wiki's "Ingest" and "Lint" operations?

- Karpathy's Pattern for an “LLM Wiki” in Production
  12 Apr 2026 — The starting path: \* Set up Obsidian and the Obsidian MCP server. This gives you a persistent, searchable, graph-connected vault t...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAUQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAABAgUGB//EADYQAAIBAwIDBgMHAwUAAAAAAAECEQADIRIxBEFRBRMiYXGRMsHRBhRSYoGhsSMz4RZCU1SS/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACMRAAICAQMDBQAAAAAAAAAAAAABAhEhAxIxQ3HBBAUGMjT/2gAMAwEAAhEDEQA/AK+8KkFiBO1V3gcnW+J2g70PSrEu4BIzuau2qsVa4qgbgA1y2e/QwHXTpFbN1BZCjqaG1xLVs6UA6GKlv+oilsCNoyancwpFJcVjvC8zTaXwDABEDcilreu4ZRAByhaZ0BFOo5PTlSTYmkI3Ha7cxqjqaG+JxMedMXHJLFWU+rUIW7jmEChd5z9KNxSiKFnZ4VQW6gzRBbaCxO3lgUcWtJy7Sd5P0q10MZJmNhg/OkrKbFO5b8be1XT+lP8AjX3/AMVKqjOzB4a2SoLnTucTmjfdLAIJL+4+lYCsHlvfNEI1HP74q7RNM0nAcM3xFttztTD8NwaqBNxsZgxQkSFkmSByxFaiQZkYmaWAyULdgHwhj08RxWrzWVUYknnQmQTmRVXtMjrFGAyYZrSA7x61G4hU2tg+sn51lredRXbafpQbrDVB0z+4p4AJ94zIRD6KKLa4q58IAA8jSkoBvPpTFldRJiAMRRuoGhrvrv4z71VVo/K3tUpbxUKBLzXJ7y1oG3iyaZ7t1GHVSee9YtQJYAfpWmffGAOlFIqzVvh3Kgm8Cx5EEUVrboPFdE+lE4MAwzmIzA51V1Qtw5BAopE3kWa3cOTe356YrD2wGH9Rj1imuJvC5C2lCLOwH80m7AtAYk8zE0sDyZKqGJHIcxSrACdKiOZmmHiJMnyoQQBsgT0oZSNcPbA8R7sE06rmPipezCtgfrRyQ0R/NMTL1/lNXVaR5VdFkgEUwZdY5ZrduwzN8YioiKuTmmbDoJBWRyPKnSG2wgbQoAgnnvS9/wAR+PB/LsKZFuWkjbMUG8OUbnnQxIAVkSCVAxOmh6BMHX/5q7l0WwTIHLApa52k9m0WvOy2AR4GI26/4qo6VqzGXqUpUOEW1Xwi56YzQSoO/wDNNnR3KtaMqwkHqKXXDYMT71FG6ZtFx4RgcjWioWJ0+1XbkiNqvuxj51SRLkVI6j2qVvQPKpToVgZAgeeSavvNJABJPkKFEHO/rNQZcBMn0qSx8O3+4sJ60t2hxFrg+Hfibofu0EsVBJrYDavESJzHlWe0LN272deFhC50+IaZkcxSbIclHLZ5W/x7K3eo0q/iiuL2n2ldvuFwCxhRJMevSuxf4C4UuPcsuqMoCnRAY+hrz3Fdi8Wbya7IbUxDW7U61WdzJ6dKULvnBx6koLN4PpThbdi3atqPAgVYOMVm3bbUDIINI9karXZdjh719bl22ug4IJA2mf0po3Cs/KtaOrT1Yakbg7Q1tOYj96oufM0FW1Ris8RxC8Paa7eYJbXcnn5AUyqGZP4RUrh/6hs/9LiPcfWrpUPazqL/AGpq7WNEYz8qlSoKGRutdxABYwIqVKFyeF7zxEQ+0Sr3HBnSJN4DavMdmgH7RdokiSqqFnlk7VKlYdQ4J/kfbyM9rqquxVQCCMgUOfGfUVKld74RPxv76y7eRpf7bHnFcn7Qk/d+GEmCWJHXAqqlZn1iODqb8R96lSpSND//2Q==)
  aaronfulkerson.com
- How Claude remembers your project - Claude Code Docs
  CLAUDE.md vs auto memory. Claude Code has two complementary memory systems. Both are loaded at the start of every conversation. Cl...![](data:image/jpeg;base64,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)
  code.claude.com
- LLM Wiki - GitHub Gist
  2 Apr 2026 — Raw sources — your curated collection of source documents. Articles, papers, images, data files. These are immutable — the LLM rea...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAUQMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQQDBQIHBv/EAEAQAAEEAQMBBAYGBQ0BAAAAAAEAAgMRBBIhMQUTQVFhFCIycYGRBhUzU6HwJFJUscFCVWJzk5SjssLR0tPxI//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABsRAQEBAAIDAAAAAAAAAAAAAAARAQIhMVGB/9oADAMBAAIRAxEAPwD6/h5fU5Zohk9OZBG7Vrd24cWUNthza6VpIQO0WkjZA7RazfJGxzGvexrnmmgkAuPNDxSbPC4EtljIBo04bFBraLSseSNkDtFpIQO0JIQCTnNY0uc4NaBZJNABNQ9UimMEk0D8kvjidphgcwGU8gDVtZ4skDdA7yMxz2lroMUtaWSB5bKXXfFbCgPPc7Be4cJscJjknnmurMkhvb3UveEQ7HY5sz5g7cOfV+7Yd3C3QYMw8Vjmujx4WuabaWxgEHj+JXpmNjsDgyCJofu4BgGr3rRCCU9OxRJ2sUfYyaCwOiOmgavYbE7DkIjxZMYF0c807tIAbPJt+A5VayyIzLGWNlfGbB1Mqx80HjGy4ch0jGOqWIhssZI1RkiwD8N1QuTjROyHyNi6nkv7I9m+RpjovF232eRt+bXVGwCBoQhAIK4WT1POkk0R9F6vGWuO8UuH6w9zpePhacHU+oxNIf0LrMxvl8mHY+UoVg6GVGIA6eH1JXEDb2XEmhqHfuRvzsmMRh9uWdzu89s4X8AaUDOoZOYJo8jpGZgtilh0vyHRESW5vGh7uPz5a50zmZ8DGzaAattgXvvyN9vBSLekbcmdt9r0/qEl/cySDT5HU4X3bjnwCQznyH9H6b1GT19BJne0NN1vvxt+7xV/UMkQvia17GnX6+o1Tf1vPjjz8lL9IZswYkLumZEcTnvBLnad21/SBHw5V+F323wLymOdNj5eMWmtMk799z5+QPxWk+MRJAxs+Q1j30QJTd0Tyd624UX0mk6gzpkP1VK2LIdPHql9UNDAbf7QOxAI+KtilfLj4MsjQJHPBc1nF6XcKauXfK3GgbjxCNpLqJJc7kk95Wq5EnWMprCX9C6kwV7RkxhX+KpIc3qGsEYPWpGtq268I37/AP6WrGK/RIXJ+tc3+YOp/wBpjf8AamkK9zjR1ZkuhxAABLMWzvY3f4e5dGlzeoYuRJkdpDE14oCzmSRV8GijyvcfTY3RM7YSteBRDMqQjk99j8+5Fb5/2A/rY/8AO1T5kkjMqJjJ4maqqNxALt/cq5oe0xzEHEbCnHcgjg+e6mldmGg2ItI5LdLgfdZB/BZazemHUMzsp4I4pIxpfcoMrWkDzB7tz8guV9Mpervw8V/0dzocdxkcXPc9gD6G1lwPq3zQvwXYZ6cCNTXu5umMF+H8tH6fd07n7tn/ADWs5RN4l1LIMUDBHNE2V2/rSBgcK3Ite4pRLHhO7Rsju0Ac5pBs6DfGyTvTt9LXjc1bGH/Ut2tlmmjdJH2bYzqokFzjVd2wG/575TMj3mfYO3rb7vX+ChwJocfZvsOA0iLBez+C6U0faxlmt7LHLDRHxWUOKYpA/wBIyH0K0vfYRHn6wh+7yf7u/wD2SVdIQBKV+SUsUczCyVjXsPLXCwVOOnYTRTcWECq2jH57kFN1yP3Iu/8A0KdvT8NrdLcWEN8OzFIPT8P9lg5v7Mc+KCjuuinv4FS/VuDp0+iQab1V2Y5T9Aw6r0WGuK7MIKL7qRddyn+rsL9jg5v7MJuwcR4AfjQuAbpAMY48EG+/gUb+BU46fhg2MWAHx7MIGBhgtIxohpNtpg293yCDfWPEfMJL1pb+qPkhA0IQgEIQgEIQgEIQgEIQgEIQg//Z)
  GitHub

Show all

How do I handle selective MCP loading?

To handle selective MCP loading, you need to manage which servers are active in your **`claude_desktop_config.json`** or via the CLI flags, as Claude Code attempts to spin up every configured server by default.

Claude Code looks for its config in a specific directory. You can create "Project Profiles" by swapping the config file or using a symlink.

- **Location**: `~/AppData/Roaming/Claude/claude_desktop_config.json` (Windows) or `~/Library/Application Support/Claude/claude_desktop_config.json` (Mac).
- **Strategy**: Create a `wiki-config.json` that _only_ contains the Filesystem and Obsidian MCPs, and a `dev-config.json` for your heavy coding tools. Swap them before launching.

2\. Disable via Environment Variables

The **`ignore`** logic can be used if you do not want to edit JSON files. Most proxy/adapter setups allow you to filter tools.

In the terminal before running `claude`:

```
# Example: Tell Claude to ignore specific tools from the session
export CLAUDE_CODE_IGNORE_TOOLS="brave_search,google_maps"
```

3\. Use the `--mcp` Flag

You can define which servers to connect to when launching Claude Code. This overrides the global config:

```
claude --mcp "npx -y @modelcontextprotocol/server-filesystem C:/Users/Marika/Wiki"
```

By manually specifying the server in the startup command, Claude Code will ignore other servers in your global config. This reduces "tool schema bloat" in your context window.

4\. Direct Tool Disabling (In-Session)

Once the CLI is open, check what’s currently using your context:

- Run **`/skills`** to see all active MCP tools.
- If you see an unneeded tool, you can sometimes "soft-disable" it by telling the agent: _"Do not use any tools from the Brave Search MCP for this task."_ This prevents the "output tokens" from the agent trying to search.

5\. Audit your `claude_desktop_config.json`

Open your config file and look for "Zombie" servers. These are old experiments, like a YouTube or Weather MCP. Each adds roughly **500–1,500 tokens of "noise"** to every message.

**Pro-Tip**: If you are using a **Karpathy-style Wiki**, the **Filesystem MCP** is likely all you need. Everything else uses your Ollama tokens without reason.

Show all

Google apps

Google Account

MaTheRaptor

hamedahastral@gmail.com
