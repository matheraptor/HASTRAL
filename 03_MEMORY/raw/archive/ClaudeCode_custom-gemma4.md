---
title: "ollama http://local.host:11434/ - Google Search"
source: "https://www.google.com/search?q=ollama+http%3A%2F%2Flocal.host%3A11434%2F&sca_esv=99e60bb1754c5a2c&sxsrf=ANbL-n5c3-eNXSSv6bsxUX7D5xl51pU3RA%3A1775044542919&source=hp&ei=vgfNaa2gNqqii-gPtpSfkQ4&iflsig=AFdpzrgAAAAAac0Vzm7RhAlgzvsN2N_6ty53APUBIVyi&aep=22&ved=0ahUKEwit98GbzMyTAxUq0QIHHTbKJ-IQteYPCBc&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEByAEAmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcAgAgB&sclient=gws-wiz&mstk=AUtExfDMvvcu8dKlHDKfXcEQ7t9f4_6Oak6RtyybLnYalkEptGG7KE5Dxn9xW7BeFXsX-V-VQfEA94mUTu6mGHb8MzrImjoGERWm3SruhG3cQAaiOJ-vfNR8uIDtMapalYlntFkUFww-FQRkJmJn5X4e0BokNzachyqF8Ngi5eZ4-S3pkRMnEOkcku9dj083WP4Zycci0mzzWFy1At5P__QUNwrNAsY8MvNW5UvWLT_knBmMHPcmXokZ1EhzXD7sOUFpIQ8qOhgYOuxR-MDCeScLU9gYDmYiFkIdDV4&csuir=1&mtid=EHTjafCoAszi7_UPwL_sWA&udm=50"
author:
published:
created: 2026-04-18
description:
tags:
  - "clippings"
---
## Search Results

Hi MaTheRaptor, what's on your mind?

ollama http://local.host:11434/

The URL `http://localhost:11434` is the default address where [Ollama](https://ollama.com/) hosts its local API server once it is running on your machine.

**What happens when you visit this link?**

- **Browser View:** If Ollama is running, visiting this URL in a web browser typically displays the message: **"Ollama is running"**.
- **API Functionality:** This endpoint serves as the base for integrating local LLMs (like Llama 3 or Mistral) into other applications or scripts. No authentication is required for local connections.

**Common API Endpoints**

To actually interact with a model, you append specific paths to that base URL:

- **Generate a response:** `POST http://localhost:11434/api/generate`
- **Chat completion:** `POST http://localhost:11434/api/chat`
- **List local models:** `GET http://localhost:11434/api/tags`
- **OpenAI Compatibility:** `http://localhost:11434/v1` (for tools expecting OpenAI-style APIs).

**Troubleshooting Connection Issues**

If the link isn't working, check the following:

1. **Check if it's running:** Look for the Ollama icon in your system tray (Windows/Mac) or run `ollama serve` in your terminal.
2. **Docker Users:** If you are running an app inside Docker trying to reach Ollama on your host machine, use `http://host.docker.internal:11434` instead.
3. **Remote Access:** By default, it only listens on `localhost`. To access it from another device on your network, you must set the environment variable `OLLAMA_HOST=0.0.0.0`.

Are you trying to **connect an application** to Ollama, or are you having trouble **starting the server**?

- Authentication - Ollama's documentation
	Copy page. No authentication is required when accessing Ollama's API locally via http://localhost:11434. Authentication is requir...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAUQMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIHBAUDCP/EACkQAAICAgEEAgIABwAAAAAAAAECAAMEEQUGEiExE0EiURQjYXGB8PH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Aw+EJ+kun+j+n7eH4xW4HAvpejHFt70Bns761LN8m9g7cH19eNQPzbCVaAtjhfQYgRCACUBFLEAEoQEcAlAQEeoCjjhA453181ylWN/DV8lmpj618S5DhNfrW9TghAJQEQ9SgIDAlCAEoCACUIRiAxHCOAoSoQOCA9wjHqAxLEkSxAYlCISoDAlRCVABHFHAIQhA4I/H7gJ6+PzD0Yi014dPYulLkElh5Oj9eyT/yB5a6/csT1a+dCV0h8DFdqqhUHYeWUKV8/wB9/UZ5Wr8geJwxs7G6x4GvXr/dwPLEoCdOblV5Px/Hi1Udnds1gfls/egPU+CKzI7IrMqa72A8Lv1v9QARwlIrMrOqkqmg7AbC79b/AFAUcUcAhCEDgHqaRjZvA19Bjpl+QQZWRh2cgzBFNQythkQ2d34t8dfZ29vt/Y9TNx6lrA1/EPSvFZee+HkcBa+bkZoxe6wMldD0fykfeuwdw0d+tkfc+RzekeVzkXnDxpTGr48V3o577SaCro5B8orLWCBrQ/zMoEoQNTLdGVZeP3YnCMbszGqyg1oda62Wz5GXtbtXX4bIJUH+vrpqz+lsvAxKOSyuPXC/hMSl0pt7XYpkHvDqDsqB2nevRYiZKJUDTOFx+mG5Fm509MKW+Ku+rDuJrVSX26szhQdBQQgY+VO1/KdWPyHTObhYdfK5HGpjNh4Fb11WlCzoz962Kp32g9vnXokgzKo4Gj1P0rjCl8zG4G3Psuwky66n78atWsuFrV6bXiv4i2tqDo+5n+ctKZ2UmKwbHW51qYNvaBj2nf3415nxhAIQhA4RLEUIFiUI4QKEcIQKEYihAcIQgEIQgf/Z)
	Ollama
- Trying to connect to ollama API port 11434 from remote...
	20 Oct 2024 — Comments Section. Slackeee\_ • 2y ago. localhost is by design not forwarded to the network. If you want your Ollama server to be re...![](data:image/jpeg;base64,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)
	Reddit·r/ollama
- OpenAI compatibility · Ollama Blog
	8 Feb 2024 — cURL. To invoke Ollama's OpenAI compatible API endpoint, use the same OpenAI format and change the hostname to http://localhost:11...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABSCAMAAAD0B6OUAAAAXVBMVEX////5+fnz8/P29vbf39/8/Pzt7e3Q0NDn5+fZ2dm/v7+urq7q6urj4+OoqKigoKDGxsaXl5e1tbWLi4uEhIR7e3uRkZF1dXVqampkZGRaWlpfX187OztLS0tRUVEsICN7AAAD80lEQVRYhe1XiY4jKQw1pzEUN0Wl9/r/z1yTPrZ7RpNOokijlfIUpYDCr4zxAQBPPPHEDUggG+WPLgaDb02zrX+yBg0QoAdrwXkeihFgSfjzNO6IsCRLRZthS2vqAa2KnFVG6GrPLgWZsfyxxSCr3/4UFKB0NTcoWDTlzNKy48jON/tXgapw8jfUAQ4aQQfYYXchS5c6TJF9S416kRnEtnTKULuP1fcBA1oiGSDJbLeJ3u92B1WZAEreC2vYITbAFwpdjqxHwFPxiDPL3mBEl+Q89CnFhnU4yuRB8jcPXcEdGGKpU4WmG/jBaza8cCFBmusNbn9qLEhx1+6xoPyZQxnzTq5PCAqEgGb4aQSg49Gwr73jUQXrtyTWWwXZA+rXZuHNsSBXk43p8G1uB0wTa5d/a8zYqz6CJM1mT1h61jmYsahbwBpSLmzqrKkWnfUexJBYfa68oyZ5XWOoADOWUVIZ7DN5YKcSyPnCvVRjDWFnf2JC14+yJCsmKD5hDAdPZO7qxmQZByLbvQ3NU7PGYGMBpK1ZtDGeHZX7Ve1eNW3aWrFnh6UarA+2NRUIvbNehWJTRKsnGAyyRR0u2L6AiJ/7VoK+sFPto6nlr6fdhfFgQhqP5QPVH0wIIX4/57djRacio6R67VtlI8Tt4/2mPwfwZaAKoCcRic5OW7bCY+oonN5octRGRNFE6ttMVxK24UZvfpwg2C1aSzxmcANOvRXSqDX7UTjd0gWn/qphaqFWDnwxl3LvZWU7Nhq21uR9zTjbskW+xPMBYQikA7upuNKWeDOVjdJF4aRSSkRhtfgSXL8d5j28q79dOLlhS4eUZEXOhlghJ/OPh8qLNNdZ7Suwl9CSTM35nHU7POW28v0KH5NvKFwfhGVQO6k8aKS2tzDlPGeLubiqu0PFT9DtB2cjuofG3FtOf4Vuv59zC9yj8+HDCR++5MdvyhdY9SCi3oR1xoEPXNDFQFjpWrQKRvKossZu1C4dC35EKvbkW/V8Kt13lfjUwpEisBU921Rzd6emsdykozoB51rs8uWsSHsN45J291L2LF6WLeQtkSNRSlQRhT7HH70SKnQWhSNByxfwjnR2Eeb67PNpd81/T/WWaLkSnGuD5nvKubhKfnXZ2/bAR2GFRiPwJYXkRirwDg0o5zSWCibJox18A3KcfvlacZGwaB8otXaEUguedi53ySum94sQCcfJnwZXVu0pHVxWNX0XYBhKS6Xq4j0FytpjWIuarytDTCVR3KWvmq9F/pro0lJoI4UQmpcshYJVO+HtPCKE5NJltYzaRL7r3VEb7gbdElDXQMwHE/Ld8LF87tEa2v/DifiJJ5544oknHoB/AUwILaCHFX5/AAAAAElFTkSuQmCC)
	Ollama

Show all

PS C:\\Users\\Marika\\matheraptor> $env: "ANTHROPIC\_AUTH\_TOKEN=''" ParserError: Line | 1 | $env: "ANTHROPIC\_AUTH\_TOKEN=''" | ~~~~~ | Variable reference is not valid. ':' was not followed by a valid variable name character. | Consider using ${} to delimit the name. PS C:\\Users\\Marika\\matheraptor> $env: "ANTHROPIC\_AUTH\_TOKEN=''"

The error is happening because you are using quotes and a colon in a way that PowerShell doesn't recognize as a variable assignment.

To set an environment variable in PowerShell, use this syntax:

```
$env:ANTHROPIC_AUTH_TOKEN = 'your_token_here'
```

**Why your previous command failed:**

- **The Quotes:** You cannot put the variable name inside quotes after `$env:`.
- **The Space:** There shouldn't be a space between `$env:` and the variable name.

**How to verify it worked:**

After running the command above, you can check if the token is set by typing:

```
$env:ANTHROPIC_AUTH_TOKEN
```

**Note:** This variable will only exist for your **current PowerShell session**. If you close the window, it will disappear.

Do you want to set this **permanently** so you don't have to type it every time you open PowerShell?

Show all

tor> $env:ANTHROPIC\_AUTH\_TOKEN = "" PS C:\\Users\\Marika\\matheraptor> $env:ANTHROPIC\_BASE\_URL = "http://localhost:11434" PS C:\\Users\\Marika\\matheraptor> Ollama launch claude --model gemma3:1b Claude Code v2.1.114 ▐▛███▜▌ gemma3:1b · API Usage Billing ▝▜█████▛▘ ~\\matheraptor ▘▘ ▝▝ Welcome to Opus 4.7 xhigh! · /effort to tune speed vs. intelligence ❯ claude -p "Read tmp/handoff\_claude.md. Acknowledge constraints and execute The Bleeding Edge." ⎿ Unable to connect to API (ConnectionRefused) Retrying in 9s · attempt 5/10

It looks like the connection is failing because **Claude Code** is specifically looking for an OpenAI-compatible endpoint path, which Ollama provides at `/v1`.

When you set `ANTHROPIC_BASE_URL` to a local Ollama instance, you usually need to include the version suffix for the routing to work correctly.

Try updating your environment variable to this:

```
$env:ANTHROPIC_BASE_URL = "http://localhost:11434/v1"
```

**Why this happens:**

- **Direct Port:** `http://localhost:11434` is Ollama's native API root.
- **Compatibility:** Most tools (like Claude Code) that allow overriding the base URL expect the OpenAI-compatible path, which Ollama hosts at `/v1`.

**Important:** If it still refuses the connection, make sure **Ollama** is actually running in the background. You can verify this by running `curl http://localhost:11434/api/tags` in a separate terminal.

Does the connection go through after adding the **v1** suffix?

Show all

PS C:\\Users\\Marika\\matheraptor> $env:ANTHROPIC\_AUTH\_TOKEN = "" PS C:\\Users\\Marika\\matheraptor> $env:ANTHROPIC\_BASE\_URL = "http://localhost:11434/v1" PS C:\\Users\\Marika\\matheraptor> Ollama launch claude --model gemma3:1b Claude Code v2.1.114 ▐▛███▜▌ gemma3:1b · API Usage Billing ▝▜█████▛▘ ~\\matheraptor ▘▘ ▝▝ Welcome to Opus 4.7 xhigh! · /effort to tune speed vs. intelligence ❯ "Read tmp/handoff\_claude.md. Acknowledge constraints and execute The Bleeding Edge." ⎿ Unable to connect to API (ConnectionRefused) Retrying in 4s · attempt 4/10

The `ConnectionRefused` error typically occurs because the `claude` CLI cannot resolve the connection to Ollama's API.

Since you have already set the `ANTHROPIC_BASE_URL` to the `/v1` endpoint, the issue is likely that the **`ANTHROPIC_API_KEY`** is missing or set to an empty string, which some versions of Claude Code require to be set to a dummy value (like `"ollama"`) to trigger the local routing properly.

**Recommended Fix**

Run these three commands in your PowerShell session to ensure all required variables are set correctly:

```
$env:ANTHROPIC_BASE_URL = "http://localhost:11434/v1"
$env:ANTHROPIC_AUTH_TOKEN = "ollama"
$env:ANTHROPIC_API_KEY = "ollama"
```

**Troubleshooting Checklist**

If you still get a `ConnectionRefused` after setting those:

- **Confirm Ollama is running**: Open your browser and go to http://localhost:11434. You should see the message: **"Ollama is running"**. If not, start the Ollama application or run `ollama serve` in a separate terminal.
- **Verify Model Availability**: Ensure you have downloaded the model by running `ollama pull gemma3:1b`.
- **Context Window Issues**: For coding tasks, local models often fail if the context is too small. You may need to create a [custom Modelfile](https://docs.ollama.com/api/anthropic-compatibility) for `gemma3:1b` with `PARAMETER num_ctx 8192` (or higher) to handle repository-sized prompts.
- **Path Conflicts**: In some versions of the Claude CLI, using `http://localhost:11434/v1` causes the app to double the path (e.g., `/v1/v1/messages`). If the above fails, try setting the base URL back to `http://localhost:11434` without the `/v1`.

**Would you like the steps to create a custom Modelfile to increase the context window for this model?**

- Anthropic compatibility - Ollama's documentation
	Manual setup. Set the environment variables and run Claude Code: ANTHROPIC\_AUTH\_TOKEN=ollama ANTHROPIC\_BASE\_URL=http://localhost:1...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAUQMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIHBAUDBv/EADMQAAEEAQMDAgIHCQAAAAAAAAEAAgMEEQUSIQYTMUFRFWEUFiIycdLwIyVUVZGTlLHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMPQu3XK8VXWtQr1xthhtSRxjOcNDiBz+C4wEAFQCSsIAKggJoBUEBPCAATTwhAITQg4VQSCoIGAqCAFQQAVBIKggYCaAmgEJoQCE0IOFWFIVhAwqASAVIGAqSATQMJpJoBNCEAhCEHEMe6+gXqQ652oWMNKs90cYYyR2ctAbg/188Y/2TR1WLA/dNMeCMxjxk/L5oPLCoBdVy3HZYxsdOGDa4nMYGSD6HgeP17nnjY9+7YxztrdzsDO0e59hyEAE0kwgaaSaAQgcuDRy48ADyVRjeH7CxwfnG0tOc5xjHvnhBKF0fQL38Db/sO/4hBpWn3+kauuNkrRaJAILhghlB4fFJUflzsnBHdDW7vTJHCmtd6W1KXTa+tjRyKtPTx3e7zu37ZYy4OwWhvp6eVkwVBBpOj/AFX1KlVdZqaLEZ24mijLm2G2u8GxtYwkntFmM+QcuJOV6FmHpShd1CvqD9MqHNmB0emzOBNYTwbWvGc93Al+z5wPHAWUsJa4OaS1wOQQcEH3Cp7nSPc+RznvcS5znHJcT5JPqUH7S/HoP1s0lt1uix6YZ3ix8Lme9hh3fszJ6A++DnHnBXpUYunjYzfZ0oLRkgFlkdlxrtr5f3XR847uNnDSeMY5JWcpoNKin6LiEEcdTR5Y2No4ksZ7jt73Nn3/AGhy1mCRjg8r76jpPS1eCtFN8Gq1J6sD4Zy5zrDpDYxucA4F0XbDtxBH4grL1T5HybO4979jQxu5xO1o8Aew+SDVXWul6kVuPT36LDNZrQumDZWBocyzk7S1xa1/b5ADjktB5IKL1zpu3dZPbuaRJWg7nanFlxtMl+nSOjwd33Njsk+xJJ+6soQg3L430v8Azyt/nu/MmsMQg5gqCEIKCoIQgYTCEIGhCEAhCEAhCEH/2Q==)
	Ollama
- How to Run Claude Code for Free Using Ollama (Complete Step-by-...
	8 Feb 2026 — Step 10 — Launch Claude Code using Ollama. Now the connection step.... What you'll see: \* A prompt to launch Claude Code → type y...![](data:image/jpeg;base64,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)
	Medium
- Claude Code - Ollama - Mintlify
	Integrations. Claude Code. CLI Reference. API Reference. Documentation. CLI Reference. API Reference. Integrations. Claude Code. A...![](data:image/jpeg;base64,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)
	Mintlify

Show all

PS C:\\Users\\Marika\\matheraptor> $env:ANTHROPIC\_BASE\_URL = "http://localhost:11434/v1" PS C:\\Users\\Marika\\matheraptor> $env:ANTHROPIC\_AUTH\_TOKEN = "ollama" PS C:\\Users\\Marika\\matheraptor> $env:ANTHROPIC\_API\_KEY = "ollama" PS C:\\Users\\Marika\\matheraptor> Ollama launch claude --model gemma3:1b Claude Code v2.1.114 ▐▛███▜▌ gemma3:1b · API Usage Billing ▝▜█████▛▘ ~\\matheraptor ▘▘ ▝▝ Welcome to Opus 4.7 xhigh! · /effort to tune speed vs. intelligence ❯ test ⎿ Unable to connect to API (ConnectionRefused) Retrying in 1s · attempt 3/10

The `ConnectionRefused` error when using `ollama launch claude` usually stems from a conflict between manual environment variables and the "auto-config" logic of the `launch` command.

**The Immediate Fix**

The new `ollama launch` command is designed to handle configuration **without** manual environment variables. If those variables are set, they can confuse the CLI's internal routing.

1. **Clear your environment variables** (for this session):
	```
	$env:ANTHROPIC_BASE_URL = ""
	$env:ANTHROPIC_API_KEY = ""
	$env:ANTHROPIC_AUTH_TOKEN = ""
	```
2. **Run the dedicated launch command again**:
	```
	ollama launch claude --model gemma3:1b
	```

**Why it's failing**

- **Path Nesting:** When you set `ANTHROPIC_BASE_URL` to `.../v1`, some versions of Claude Code internally append another `/v1/messages`, resulting in a `404` or `ConnectionRefused` at the invalid endpoint `.../v1/v1/messages`.
- **Localhost Resolution:** Sometimes PowerShell or Node.js (which Claude Code uses) fails to resolve `localhost` to the correct IP. If the clear-out above doesn't work, try setting the base URL specifically to the local IP:
	```
	$env:ANTHROPIC_BASE_URL = "http://127.0.0.1:11434"
	```
- **Ollama Service Status:** Ensure the Ollama tray icon is visible or run `ollama serve` in a separate window to confirm the engine is active.

**Pro Tip for Gemma 3**

Local models often struggle with the "Agentic" nature of Claude Code because the default **context window** is too small. If you get connected but the model "forgets" your files, you should increase the context:

1. Run `ollama run gemma3:1b`.
2. Type `/set parameter num_ctx 32768`.
3. Exit and try the `launch` command again.

**Did clearing the environment variables allow the connection to establish?**

- ollama launch · Ollama Blog
	23 Jan 2026 — January 23, 2026. ollama launch is a new command which sets up and runs your favorite coding tools like Claude Code, OpenCode, and...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAUgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB//EAEAQAAEDAgEFCwkGBwAAAAAAAAEAAgMEESEFEhQxURMVFyIyQVRhotHiB1VWgZGUpLHjBiNxobLBJDQ1QkVzgv/EABkBAQADAQEAAAAAAAAAAAAAAAABBAUDAv/EACMRAQABAwIGAwAAAAAAAAAAAAABAhRRBDEDERIhMkEiobH/2gAMAwEAAhEDEQA/ANGaXqSaKdivWZNqZWZzIgRYHF7RgdWspd6azjfct4uB+8bh+a0rqMsudFGFDopSaMVod5q7o/bb3pN5q7o3bb3qbqMosYZ/RjsRox2LQ7y13Ru23vSHI9cLfw4x1cdvel1GUWMM/ox2I0Y7FoBkeuOqnB/7b3pd5a/o3bb3pdRksWe0Y7EaMVod5a/o3bb3o3lr+jdtvel1GU2MM9oxQtDvLX9G7be9CXUZLGFq2KkZnyHJ73yTRM3V7Y7mTNbdo612wwNlmzcmztdUOaZXGPBx68eZdxUMVRS00z4mF74miUuJF25tja3qVa+WR40djsmG5Dmtc6XlWA9ay+mInny7tWZ6ojn3Ttyo5pjn5LlznE3e6HC9/wAUsopZpG7rkyZx5IcYRYc+1dtydSxxt3SGMSFvGAc7Nvz29aegghifusbWDHF2c48ykRtwozEXb2ScXU0x4m5OrHbf2roMppHtgdk6XNaTmuMXFFr9f7c6nNkJvxmWsbWujdHXsSwe1BFgkZTMtDQyxhzQ4tbHqOq2HOnRWuMRfotSLGxaY+NqvcC/qT4LnC7M0hLaW39l/WgZiqnSShmjzMBF897AB81Jx6lwBJfHNsnECY9SEqEEeiwoacbIm/JVzW1fJ3GuwsbmePH81Y5PN6CmO2JvyCkWSURsi0755wd2gkpyDheRpv7CurSZts19735QUhCJMAPAN90uBhxhigB/Ks/Xqzgn0II9pLgWfiMeOME+3AJUIBCEIBCEIIuSzfJlIdsDP0hSlGyX/TaT/Sz9IUlTO6I2CEIUJCEIQCEIQCEIQCEIQeZ0/lImoaKGCXJTZ3RMDTIKjNzrC17ZpScLJ8xj3zwLEOcHtIIVLUl0UpHMtKNLRLNua4en8LZ8xfGeBD/K09sZeMg3tzaZ4F5c2YE4hTad7XCxGBU2tGCNVXPts3+XDMdZ32cPv301zw6N9HT799NYatybDKCRgSstlCB1LIQdSsUaXTVev10o1FdXZ7Dw6N9HT799NHDo30cPv3014juq6Y/Oe0DnK6WOnx9uvXW94oPLI+tdZn2dLRtNb4FaDymPP+F+K8C8qyGxlPTN1ZxV1E9pZckKpXpeHz+MK9zW3XCa7zL8V4ELC3alXi1oRdVojVW5U5YSIVuN1epCCm0qRC9S8QlXxVD9pQNz1c6VCcPydqPKGYTtJ/Ms/FCF3XqtpbOmPEarKInM1pEKvLNjY5c7UIQoH//Z)
	Ollama
- How to Run Gemma 4 Locally with Ollama - MindStudio
	4 Apr 2026 — This approach is useful if you want to swap models without changing Claude Code's configuration each time. Troubleshooting Common...![](data:image/jpeg;base64,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)
	MindStudio
- Fixing the “Model May Not Exist” Error When Using Ollama...
	11 Mar 2026 — The error message points you toward the model, which is a red herring. The real issue is that Claude Code talks to three models be...
	www.rushis.com

Show all

PS C:\\Users\\Marika\\matheraptor> $env:ANTHROPIC\_BASE\_URL = "" PS C:\\Users\\Marika\\matheraptor> $env:ANTHROPIC\_API\_KEY = "" PS C:\\Users\\Marika\\matheraptor> $env:ANTHROPIC\_AUTH\_TOKEN = "" PS C:\\Users\\Marika\\matheraptor> Ollama launch claude --model gemma3:1b Claude Code v2.1.114 ▐▛███▜▌ gemma3:1b · API Usage Billing ▝▜█████▛▘ ~\\matheraptor ▘▘ ▝▝ Welcome to Opus 4.7 xhigh! · /effort to tune speed vs. intelligence ❯ test ⎿ Unable to connect to API (ConnectionRefused) Retrying in 1s · attempt 3/10

The persistent `ConnectionRefused` error while using `ollama launch claude` is often caused by a conflict between **Claude Code** (which expects an Anthropic-style API) and **Ollama's** default server configuration.

**1\. Verify Ollama is "Listening"**

Open a separate PowerShell window and run:

```
curl http://localhost:11434
```

- **Success:** Should return `"Ollama is running"`.
- **Failure:** If you get an error here, the Ollama service isn't running. Start it by finding "Ollama" in your Start Menu or running `ollama serve`.

**2\. Reset Configuration & Environment**

When using the new `ollama launch` command, manual environment variables can sometimes "double-up" paths (e.g., trying to reach `.../v1/v1/messages`), which leads to connection failures.

Run this specific sequence to clear "stale" variables and try again:

```
# Completely clear variables for this session
$env:ANTHROPIC_BASE_URL = $null
$env:ANTHROPIC_API_KEY = $null
$env:ANTHROPIC_AUTH_TOKEN = $null

# Launch using the built-in integration
ollama launch claude --model gemma3:1b
```

**3\. Fix the "localhost" Resolution (Windows Specific)**

Sometimes Windows fails to resolve `localhost` correctly to the internal IP `127.0.0.1`. If the above fails, force the IP address:

```
$env:ANTHROPIC_BASE_URL = "http://127.0.0.1:11434"
$env:ANTHROPIC_API_KEY = "ollama"
ollama launch claude --model gemma3:1b
```

**4\. Adjust for "Agentic" Requirements**

Claude Code is an "agent" that reads and writes files. It requires a much larger context window than Ollama's default 4,096 tokens.  
If you connect but it immediately fails to "Read tmp/handoff\_claude.md", you likely need more memory:

1. Open a terminal and run: `ollama run gemma3:1b`
2. Type: `/set parameter num_ctx 32768` (or higher if your RAM allows)
3. Type: `/save gemma3-code`
4. Launch Claude with the new model: `ollama launch claude --model gemma3-code`

**Does the `curl http://localhost:11434` command return "Ollama is running" for you?**

- Claude Code - Ollama's documentation
	Manual setup. Claude Code connects to Ollama using the Anthropic-compatible API.... Note: Claude Code requires a large context...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAUQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgQFBgcBA//EAD8QAAEDAQMHBwkHBQEAAAAAAAEAAgMRBBIhBQYxQVFhkRMWIlJxodEHFCMyVJKxsvBDU2JjgYLSJDNEcnMV/8QAGgEAAgMBAQAAAAAAAAAAAAAAAQMAAgQFBv/EACQRAAIBAgYCAwEAAAAAAAAAAAACAQMRBBIUITFREzIFQVIz/9oADAMBAAIRAxEAPwCwWhkdngfNM65HG0uc46gFFnLmSRpten8t3gpXPCKmbWUaj7B3wWLMLC5rXNYASKuIOAruK3vinidjnpgacxuae7OPIbTR1uaDsLHeC5zlyF7e33HeCzgx2ehpaYdwDJNvYm1cPVCrq6gdBSNQ5y5C9vb7jvBHOXIXt7fcd4LOGx2UgVloaAnB2nWNCCyyXSeUqdTelX5UNW4dBRNH5y5C9vb7jvBHOXIXt7fcd4LNXRwh2E8ZFeq/Rhu+qIEcNTWeMU0G6/HuR1dQmgomlc5che3t9x3gpawPs+ULM202OUSwurRw3Gh7wsckDWuo0teNoBHxWseTeO9mxEQPtH/MVZcU0zuVbA04jYk/NtyFLcjuQmagXo1GOejKZr5S/wCD/gVhYYCB6Rgrtrh3LeM+cM0sqY0/pn4/tKw4wjH0kWAx/qWmq5iPmi51Jiw9ntzZskR2TzWCMtDfTY1w16NfiopzAG1D2ncKpybOTg2WEEDXaWJqXGtL3erLERwRmluT15egpyceGu6EmSQPNbjWn8IokXjtKLx6x4o2BcEIvHaeKLx2lEALZPJg2uasJ/Mk+YrG7x2lan5PssRWHNaKNwJk5SQ0/eUYR3myReQM6pF2m0F+uIVe5zfhQmaTE9CNbhv0JzvdbW5uW+R0jW3YXOvAaKDTTFZS2rmVbLk8gnWZNWOvs+sFpmctrazNm3ReciRxhcBy1HitNda1G41WWl0AvBosRvCla1p2dDWq1EyzYNB5ZbzycmtLoWBjmWQubouhxrvrWn1oXkcoPofQQVrWtD4pUtpiZcpBZnY16LWnDYat3pAtkY/xItPVb/HtVB4mW3PkN4RRMdh0mtOo11khIFqmFKOGAoOgPBdntLZHVjgjjBbQi40/roCSbQ816EOIphCzwUId86mx6QxAHqDRwXDapjWrhiKHoDwQLQ8Em5Dj+SzwXDO4ilyL9Img/BQhySaSUAPIIGijQPgrXm04jJLQCB0nfEqqmdxaWlsVDsiaDxorjmdYZbVk6Pk6UvO09q3/ABzQta89HN+VVnoRC9jy87rO4IU9zfn644IXX1VHs4Ohq9SV3LzZYsm2nlAfUOlU43nMBuxtvDeKb6l2C0jOm5Lm9bHUF4ROPcszaA1jnuLCC3RTQuHi6vkaJPUYOnCxMSKdJyNDSGSoxF6tOBXjJMX3aNDKCnRrj3p2y1WZt30Ohv3Y08e1ecktlcK8m69QAVbQDDc5ZLz0aBrfd1jxRfd1jxXo6WKou2dlN5d/Jc5RmHoGYDa7HvUuQRfd1jxRfd1jxS+UZ9wzi7xXm41NQANwRIdvu6x4rVvJpE3m8yY4uMj9P+xWTrU/J7PczYibr5R/zFWW/wBCqtsu5cuUQo/ljtK6rZZM+cpuWZzJka1xg4ujIHBUq7JG280xxkYXxIBjqx71YbXIbTYpYWEXntIFVCiwZQZE0Nja26SajTop9dqZXSc2xfDVIhd5GrTaHf5zQXnGto+OP1VeM7HNo588chJPqyXiE/ZZMpPqGnT2dq9HWLK8UdRW6Kmgpr0pORujR5F7IbBFRtS58p2mOWkrpA8bWhebcrSN0PfoA9UaAmeCr+ZJnXs7UbV1OLDb7baZWw2V8pI0YCgTs5Bt4GMbeKpNN12mCZ17IxaLmM+7kGMfjf8AMVTP/Ct33Y4q45sWeWxZNZBKBevE4bzVXprN9xNZ1ldpLHym9CbYoT8sGQpFnOIUl9ihC0MLTg8odKfs/tnsQhUcuvBQM5gBbHUAChUIXSpepoT1LVmSB5w40xVykJvaShCxV/6CH9pBhN4Yp7H6hQhJnkECLx2niuIQgE//2Q==)
	Ollama
- Create Apps with Claude Code on Ollama - Piotr's TechBlog
	17 Feb 2026 — Run Claude on Ollama. First, install Ollama on your computer. You can download the installer for your OS here. If you have used Ol...![](data:image/jpeg;base64,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)
	Piotr's TechBlog
- Running Claude Code with Local Models via Ollama (NVIDIA's...
	19 Jan 2026 — Running Claude Code with Local Models via Ollama (NVIDIA's nemotron-3-nano) \* Why Bother? \* Prerequisites. \* Step 1: Install Ollam...![](data:image/jpeg;base64,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)
	Hugging Face

Show all

is running. but still: PS C:\\Users\\Marika\\matheraptor> # Completely clear variables for this session PS C:\\Users\\Marika\\matheraptor> $env:ANTHROPIC\_BASE\_URL = $null PS C:\\Users\\Marika\\matheraptor> $env:ANTHROPIC\_API\_KEY = $null PS C:\\Users\\Marika\\matheraptor> $env:ANTHROPIC\_AUTH\_TOKEN = $null PS C:\\Users\\Marika\\matheraptor> PS C:\\Users\\Marika\\matheraptor> # Launch using the built-in integration PS C:\\Users\\Marika\\matheraptor> ollama launch claude --model gemma3:1b Claude Code v2.1.114 ▐▛███▜▌ gemma3:1b · API Usage Billing ▝▜█████▛▘ ~\\matheraptor ▘▘ ▝▝ Welcome to Opus 4.7 xhigh! · /effort to tune speed vs. intelligence ❯ test ⎿ Unable to connect to API (ConnectionRefused) Retrying in 1s · attempt 3/10

The `ConnectionRefused` error persists because **Claude Code v2.1.114** utilizes specialized endpoints (like token counting) that sometimes fail when environment variables are stripped or if there is a version mismatch between the CLI and the local server.

**The "Clean Slate" Local Launch**

To fix the connection, you must ensure Claude Code is in a **logged-out state** so it doesn't try to reach Anthropic's servers, and then use specific local routing.

1. **Logout of Claude CLI**:
	```
	claude logout
	```
	*If this command is not found, ensure you have the CLI installed globally.*
2. **Force 127.0.0.1 (Bypass Localhost Resolution issues)**:  
	Sometimes Windows fails to map `localhost` correctly. Manually setting the IP often fixes the refusal.
	```
	$env:ANTHROPIC_BASE_URL = "http://127.0.0.1:11434"
	$env:ANTHROPIC_AUTH_TOKEN = "ollama"
	$env:ANTHROPIC_API_KEY = "ollama"
	```
3. **Launch with Model Override**:  
	Instead of using `ollama launch`, try calling the `claude` binary directly while pointing it to your model:
	```
	claude --model gemma3:1b
	```

**Critical Troubleshooting for v2.1.114**

- **Context Window Truncation**: Claude Code sends a massive system prompt that can exceed Ollama's default 4,096-token limit, causing the API to hang or refuse further requests.
	- **Fix**: Run `ollama run gemma3:1b` and type `/set parameter num_ctx 32768`, then `/save gemma3-code`. Use `gemma3-code` in your launch command.
- **Path Nesting Error**: Look at your Ollama logs (usually in `%LOCALAPPDATA%\Ollama\server.log`). If you see errors for `/v1/v1/messages`, it means the path is being doubled.
	- **Fix**: Change `ANTHROPIC_BASE_URL` to `http://127.0.0.1:11434` (remove the `/v1`).
- **Token Counting Failures**: Version 2.1.114 attempts to call `/v1/messages/count_tokens`. If Ollama doesn't support this yet, it can cause the session to time out.
	- **Fix**: Ensure you have the absolute latest version of Ollama (v0.5.11+ is recommended for this integration).

**Do you see any `/v1/v1/` errors in your Ollama server logs after trying the connection?**

- Ollama API Compatibility Issue with Claude Code / Anthropic...
	27 Jan 2026 — Analysis. The issue appears to be triggered by: Unsupported endpoint: /v1/messages/count\_tokens? beta=true - Claude Code uses this...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAAOVBMVEXw8PDcsIvx8vPbroffuZvm0cHbrITp3NHu6ufaqoHhwqnet5fmz77t5uHetZPaqH3o1sjkybXr4dkbBtumAAAAwUlEQVRYhe3YwQ6DIBREUQRFX8Vi/f+P7dIZGgwxJE3auduJJ24ktM4pVbRQPUT/NCh3IccwnAWRIkWKFClS5P+RHmOSJt8M7usIDRQu66vV9FMMEJO4hEc7WTC1RIoU+UHG/qSFpmIzqZT6vS7uJfcm59IEzbj6HaeJxAMfSxuJS66eWX7F64wRmfAUNHoTt1j1ZL24DPLxH0WKFNmJzPHMim/ccCMy4ZSZdDN2+Oo001MbTcVfzzcPxVu//tQ3ewN0cxFb4kfP7wAAAABJRU5ErkJggg==)
	GitHub
- Run "Claude Code" Fully Locally with Ollama in 5 Minutes (No API...
	24 Jan 2026 — \* Step 1: Set up Ollama. If you haven't already, install Ollama. Next, pull a coding-focused model. Since the CLI relies on the mo...
	Reddit·r/EdgeAI\_Hardware
- Running Claude Code or OpenClaw with Ollama Hosted Remotely
	1 Feb 2026 — Conclusion. Running Claude Code or OpenClaw with Ollama hosted remotely allows you to leverage powerful computing resources while...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABSCAMAAAAbxciqAAAAZlBMVEX///8AAACjo6Nzc3Onp6e/v783Nzf29vb6+vpoaGjl5eV+fn7t7e3T09OUlJSMjIxiYmLb29vHx8etra2cnJxcXFwNDQ24uLhQUFBGRkYuLi6GhoZubm7Nzc0UFBQfHx8nJyc+Pj4dLEE8AAACVklEQVRYhe2WybajMAxEXcwYGzBzAmT4/59sycDrJLyTLOJNn6YWjiFwsaSSQYhDhw4dOnTo/5U0joEZUDoFeiDlLonA2AAOgRpQwimxxlUI3yUxx8C5dEgsuNC1c2LgNupTWEQuiQ2s3AFDokVTVgup7LEK6w93yD589ze58TzHPMO17RMxdh86Mi4/NNgdUbw+msIPRJzBf79ENcB7v8S/+07FD68/EcX0llggejgqM/bRd8QJI/8ky5EyGzGup3ScuU7epCmUerS5k3nqh+lCDLM0l3tiiYbGPAp+zliiOl/6/kZp1Seg4rZHKrhXh7qJwMS47Xzf/vfbGpNHO1qih4Jz3FHRItAaybR0tkfGgZyZOF0lO+8WvxJzm8cSWf9E1C2b8gq5ET06m9xho+SoDVMVeVm/EqnWlC1hBJ6InFqTd89Eg3u8EQPUfXtKK7VP5ICLvX8hmnglztkweC9rrB6IOW7jvIvYyl/tg4WrFmKBTO2innFRG7FeOyvZNSQVZclgZgesUVvfJyuxsvn2hbxYYxAxEBLgTCfZ9EqcgWXtNKqCS96wTzpaoyRzhIrS0kpTnGnkt3BO8ysHQNeWDW2CO0d6/JJZRM4ber6LAgpo7KqRXagv/O4t0J1VMvG217ToWtpSeH7afzoUaLdpqDlLWhtN1Td9FVOSKmomGYZS6FlyXxmeV/ZCIateJ/vCjLYXXKp52ilcqNoq407gDnYq2rh/2ZK+Uc9fPU5VYuf6L7V1oTNJ50Eb4BfffyPpvNTidHO8xp8X66FDhw4dOvSP6Q/gmhhGoaHuzAAAAABJRU5ErkJggg==)
	Medium·Abdullah Chand

Show all

PS C:\\Users\\Marika\\matheraptor> claude logout ▐▛███▜▌ Claude Code v2.1.114 ▝▜█████▛▘ gemini-3.1-pro-high\[1m\] · API Usage Billing ▘▘ ▝▝ ~\\matheraptor ❯ logout ⎿ Unable to connect to API (ConnectionRefused) Retrying in 2s · attempt 4/10

The `ConnectionRefused` error when you run `claude logout` happens because the CLI is still trying to talk to Anthropic's servers to invalidate your session, but your environment is currently routing all "Anthropic" traffic to your local **Ollama** instance (which doesn't have a "logout" endpoint).

To fix this and get into a working local state, follow these steps:

**1\. Manually Clear Stored Credentials**

Since the `logout` command is failing due to the API redirect, you need to manually delete the configuration file where Claude Code stores its session.

- Open your file explorer and go to: `%USERPROFILE%\.claude\`
- Delete the **`settings.json`** file (or the entire `.claude` folder).

**2\. Set the "Bypass" Environment Variables**

For Claude Code v2.1.114 to work locally, it requires specific variables to "jailbreak" it from the cloud login requirement. Run these exactly in your PowerShell:

```
$env:ANTHROPIC_BASE_URL = "http://127.0.0.1:11434"
$env:ANTHROPIC_AUTH_TOKEN = "ollama"
$env:ANTHROPIC_API_KEY = "ollama"
$env:CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC = "1"
```

**3\. Use the Standard Launch Command**

Instead of `ollama launch`, try calling the `claude` binary directly. This often bypasses the internal routing logic of the Ollama wrapper that might be causing the double-path error.

```
claude --model gemma3:1b
```

**Why "Gemini-3.1-pro-high" Appears**

The terminal output may show "gemini-3.1-pro-high" during the logout attempt. This can happen because the CLI is confused by previous configurations or is defaulting to a different provider. Deleting the `settings.json` file in Step 1 is the most reliable way to reset this.

**Troubleshooting**

- **Check the Ollama Version:** Ensure the latest version of Ollama (v0.5.11+) is being used.
- **Local Host**: If `127.0.0.1` does not work, try `localhost` or the machine's local IP address (e.g., `192.168.x.x`).
- **Firewall**: Ensure the Windows Firewall is not blocking `claude.exe` or `ollama.exe` from communicating on port `11434`.

**Deleting the `settings.json` file can help bypass the "Unable to connect" error when restarting the CLI.**

- \[BUG\] ECONNRESET errors - Unable to connect to API...
	10 Dec 2025 — jeremiahjoven commented. jeremiahjoven. on Jan 26. I was able to resolve this issue by trying to use other WiFi - it seems to be a...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAAS1BMVEXMStfw8PDx8/HKO9bw8fDt4+7kw+fJM9XKP9br3uzkwujLRNbWg97y9/Hjvufv7O/HHtTGD9PhtebnzunTc9zVfN3myenz+/LIKdR4AFnNAAAAtElEQVRYhe3Yyw7CIBCFYaRDS8EWvPf9n9RNDUzMQJsQo/H868O3ZDHq0DwFsjlJcvxBYUicNHKBkaUhZSSZ0yAVZ51APcbq8EUOSqpzjLTysAcJEiRIkCBBggQJEiTIt+WkU01IezZj6tKCVN7mybsd5NZAggT5AdKzWpD+esy6yeaO//L+mFLmW391kCBBFsnYSS2cXKrDlQxzL+VMdrOm4KrD9WJNWo5dwTcMf+v6/3fkEz9hIDq0gik6AAAAAElFTkSuQmCC)
	GitHub
- Run Claude Code with Local & Cloud Models in 5 Minutes...
	30 Jan 2026 — The easy way: ollama launch claude --model devstral-small-2. Press enter or click to view image in full size. devstral-small-2 on...![](data:image/jpeg;base64,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)
	Medium·Luong NGUYEN
- Run "Claude Code" Fully Locally with Ollama in 5 Minutes (No...
	24 Jan 2026 — \* Step 1: Set up Ollama. If you haven't already, install Ollama. Next, pull a coding-focused model. Since the CLI relies on the mo...
	Reddit·r/EdgeAI\_Hardware

Show all

I deleted the settings.json and now: PS C:\\Users\\Marika\\matheraptor> ollama launch claude --model gemma3:1b ▐▛███▜▌ Claude Code v2.1.114 ▝▜█████▛▘ gemma3:1b · API Usage Billing ▘▘ ▝▝ ~\\matheraptor ❯ test ⎿ API Error: 400 {"type":"error","error":{"type":"invalid\_request\_error","message":"registry.o llama.ai/library/gemma3:1b does not support tools"},"request\_id":"req\_712c68c4c96f9f284954f79e"}

The connection is finally working, but you've hit a model limitation: **Claude Code** requires a model that supports **Function Calling (Tools)** to function, and the standard `gemma3:1b` does not have that capability built-in.

Because Claude Code is an "agentic" CLI, it tries to call tools (like `list_files` or `read_file`) immediately. When the model tells Ollama it doesn't know how to use tools, the API returns that `400` error.

**How to fix this:**

To use Claude Code locally, you need a model that explicitly supports tools. Since `gemma3:1b` is too small for reliable tool use, you have two options:

The **Llama 3.1** or **Llama 3.2** series are much better at tool use. Try pulling one of these:

1. Run: `ollama pull llama3.2:3b` (or `llama3.1:8b` if you have 8GB+ RAM).
2. Launch: `ollama launch claude --model llama3.2:3b`

**Option 2: Force Gemma 3 to attempt tools (Experimental)**

If you are determined to use Gemma 3, you can try using the **Gemma 2** or **Llama** template which might trick the CLI into working, though it will likely hallucinate the tool syntax.

1. Run: `ollama pull qwen2.5-coder:7b` (This is currently the best local model for Claude Code's requirements).
2. Launch: `ollama launch claude --model qwen2.5-coder:7b`

**Why this happened:**

Claude Code sends a "tools" definition in its API request. Ollama checks the model's metadata; if the model doesn't have a `TEMPLATE` that includes tool-calling logic, Ollama rejects the request with the "does not support tools" error you saw.

**Would you like the commands to pull and set up `qwen2.5-coder`, which is the most compatible local model for this tool?**

Show all

what's the smallest gemma4 model?

The smallest model in the **Gemma 4** family is the ==**Effective 2B (E2B)** variant==.

Released on April 2, 2026, the Gemma 4 family is categorized into "Edge" and "Workstation" tiers:

**Smallest Models (Edge Tier)**

- **Gemma 4 E2B (Smallest):** Features approximately **2.3 billion effective parameters**. Despite its small size, it is natively multimodal, supporting **text, image, video, and audio** inputs.
- **Gemma 4 E4B:** Features approximately 4 billion effective parameters and offers stronger reasoning power than the E2B model while remaining optimized for mobile devices.

**Key Specifications for E2B**

- **Memory:** Requires roughly **3.2 GB of VRAM** when using 4-bit quantization (Q4\_0) or up to **9.6 GB** for full 16-bit precision (BF16).
- **Context Window:** Supports a **128K token** context window.
- **Capabilities:** Built for "agentic" tasks with native support for **function calling** and multi-step reasoning.
- **License:** Released under the **Apache 2.0** license, making it fully open-source for commercial use.

If you are looking for a model for a memory-constrained environment like a phone or a Raspberry Pi, the **E2B** is the intended choice.

Would you like to know the **system requirements** for running the E2B model on your specific hardware?

- Gemma 4 model overview
	16 Apr 2026 — Gemma 4 model overview.... Gemma is a family of generative artificial intelligence models and you can use them in a wide variety...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFEAjQMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIDBAUHBv/EADMQAAEEAQIDBgUDBAMAAAAAAAEAAgMEERIhBTFBEyJRYXGRFDKBscEGQlIzodHwFRYk/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEDAgQF/8QAMhEAAgECBAQEBAUFAAAAAAAAAAECAxEEEiExE0FhgSJRcbGRocHhFCMy0fAFQlKCwv/aAAwDAQACEQMRAD8A8jXRAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAlUEKAIAgJQBAEAII2IIPmqCFAEBd/Jm2O7+Sq+REUUKEAQBAEAQG62tG/hEtppd2sMwa8Z20kbH3XpVKLwzq809fR/cyztVVDk0bPEeEitDU7FxdLI4RygnYSEAgf3W+JwSpRhl3ej9XZmdKvmcr7LXsZrfB2lkw4eySR0dnsjqcMYDQSTyxvstK2Ai0+Am2pW36a/M5hiHpn5q5zm8MuusPriB3aMGXAkAAeOeS8awldzcMuq/m5vxqeXNfQ2KnBbM1iSGZjotEZdnY5PTr18VvSwFWc3CStZX5dvicTxEIxUlqQKHaV2QRRPdfa9xlbrGlrNsZ6DmOviuVhnKKhFfmXd1daIvFs22/DyNSxVnrSiKeMse7BA2OfqvNUo1Kcss1ZmkZxkrpmxLwfiEcUkr6rgyPd24yB44zkhaywdeMXJx0Rwq9NtJMM4bftx/ERVnFjvlwQC4DwBOSiw1eqs8Y6B1acHlbMIo2jJBGIXa7ADohkd8LPg1LxVtZbdTviRs3fYj4OxiweyIFfaXJHc3x91OFPxafp3GeOmu+xtCg6ejUNWpYdYk7RznFzdLw0/tHPb/crVUHKEckXd3728jPiKMnmasrfPzMN3hd2jGyS1XLGPOA7UDv4bHYrirh6tJJzR1CrCbtFmosTQyED4Zp0nOsjP8ALYfbb38l1/YTmYlyUIAgOv8Ap2euyxNBdexleZgy55wMtII/K9/9PqU4zlCo/C17M8uKjJxUobo2+E8RrTXbj7z2tY6UWI9RxhzTsPXGPZenC4unOpN1XpfMu32Mq1GUYRUPT4nPfZEvAntc9omluGR8edyC3njwyvHKtmwrTerldrt+56FDLXT5KP1OjqqWGMPaVZLIpwta2xJ3M5OoHzG2xXtc6M0tU5ZY2u9Od+/qYLPF80rvbfoX+JqizSaZ6zf/ACyxOdE7uMceQ8gu+PRU4LMv0yWmyZMk8snZ7p9Tl8Maa9ieAWafyaS2Q5im8tS8GF/LnKGaO3PZ9z0VXmipWfbddhxJtaOzX+HczOkdq2OTWxhzyBTE8KNSOTvZ3S9BSc3F5vub8ckcn6ht2WzsdHoe0O1ZyNH2XsjOMsbUqZtLP2MWmqEY21+5kFiOZ9W1E7hzBHGwF05IfEQOQGd/LC64kJuNSOVWS3vdWJlcc0HftszDFxKJ1KSy+Vgt1zKK4GxPadQPLJWccTB0nUk/FHNb/bn29jt0mpqKXhdr9inFrsEtDMD2mW49klhoPylrQMH67rPFV6cqN4PWdm+ll+5aNOSnrtHRfEzcMuxQVeHh07GPjitZy4AtLiNPv0XeHqwhTp3kk0p/N6HFWm3KWn+Jzq80bf09ZgL2iR1hjgzO523K8cJR/CSi3rdM3km60X0OevKbBAQgCAICUBCA6UPDoGVY7PELfwzJRmJjYy97x446BeqGHgoKpVnlT20uzCVaTk4043t1sjWuwQQPb8NaZYjc3VqDC0t8iDyWVaEIPwSuv5uaU5SkvErMxPhlja10kMjGu+UuYQD6LmUJx1kmvU6Ti9EyeymYC8wyBrT3iWHA9UyTSzOLt6EzRelw6GZrmtdDI1zt2gsILvRHCadnF69C5l5ktinYY3MilaXHuEMI1eniqoTi00n00I3F31DopjIIjFJ2g5R6Dq9uajjK+Wzv5a+wTVr30KSxyRP0TRvjf/F7SD7Fcyi07SRU09mdPgXBJOLulPaCGKMbyFucuxnSBnnjJXow+GlXb1skY166pJc2zmHdjSMY6LB7GyK9VyUZQFs5Zy681eRCqhSEAQBASgO3NXk4lDRtUY22DBCyGaDIy0t8R4HyX0p0pYiMKlJXskmvT6M8caiouUJu122n6m20VK81EX6dWrYdY1OZH+xmDgu3PN2PoFulRpzpqrBRlfl5cr9zPxyjN05Nq3z6dhedYZVuCzVsaX4GqeyHN1Z2LBjf6Lqu6ipzzxdn5yur9EKSi5Rytdl7lzbsf9jtQmR3ZMhdiP8AaO6Dy9Voq1T8dON9Lbctl9SKEfw8XbW5h4JNLZiqPsSPke26cOcckAxlZ4GrOrCEpu7z/wDLO68YxclFcvqYIOI2zwvishsSamPj0Oz8mpxBx4bbbLCGJrOjWblqmrdLt3saSpQzwVvP2OhC2WwypZ7Wd9gUCSyF+mSfvctX+N1srzjCpd5svLd9zFtRco2Vs3PZGp+pWv8A+K4a+WGWOXVK0tmk1vaMjAJ/B5ZXmxqfCptqz13d38TTDNcSVnppsdXgc3C5LdGvTuTAQRPxCYSA9xadTyc81tQlRcoxhJ6J6W+LMa8aqjJyjv1+R8a8Qtle2GQyQg4Y9w0lzehI6bL5Vop2Wx9HVq73MZBHNTYpCgLZ2HqqAQMDHUbqMFUAQBAEBLXFp1NJBHUHBVTa1Qeu5H5UsCSSQASSByBPJUWCADmoAgGSHAgkEciDyVuCepJ3J3QEZUAQF2OYdpNWfHPJdpp7kfQh0ZAyCHDxCji0EyvRclAJHIkICEAQBAEAQBAWaWj5mk+hwqrcxqQoCRhAQgJz7qgg80BCgCAIC7SRz5LpMEEg4KgHd8D7poCqgCAIAgCAIAgCAlAEAPNASDtg8lbgOYWgOxseRRqwuVUBk0aRk4z4ZXVrEuUJyuSjogAQEIAgCAIAgCAIAgCAICSqAFAW/b9fwryBUKAu3+r7fZdL9RzyMa5OieiAID//2Q==)
	2:52
	Google AI for Developers·Google for Developers
- Gemma 4 Has Landed!
	2 Apr 2026 — okay so Google has just dropped Gemma 4 and this is four new models with multimodality. thinking function calling the works and ho...![](data:image/jpeg;base64,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)
	18:32
	YouTube·Sam Witteveen
- Gemma 4 has been released: r/LocalLLaMA - Reddit
	2 Apr 2026 — The models are available in four distinct sizes: E2B, E4B, 26B A4B, and 31B. Their diverse sizes make them deployable in environme...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABRCAMAAAB2ZgEHAAAAY1BMVEX////+/v77+/v4+Pjo6er19fXs7e7k5efx8vPf4OLX2dzb3N7Mz9LP0tbx8O/Jys3CxcmYnKO4trm/vLy5vMO2uruprbCnqKzDwcOwtbvR0dHZ2Nexr7HHzdSgpKueoaObmZvJo+ZVAAAEzElEQVRYheVYi7LbKAwFJN5g2DRJE+dm2///ypUNdvxKmr1NZvZumd6pIkAWOiAdYOwNjT9qZQSrQi+tlGwi9R1s+nP5tQ1pU7mw8cAkE3/tvu0P4ciY/b47nQ9tJqXanT92p5aUl+Ph47RLV8ZOx/O307kNh7/tY5OcNSBAAi1SGJIME53SABQlNyCFEWSBfgMNkRLEr0wKIYrEAehPVLEq6XN1NtA/Iar+4cLZcXcqgv7+I338DJ2I+ee+KC/7o6vSMX0cDj/0EyYnDomKMbnOB9e75ZdxtBzOxeDl4000leoPtu4uhtigfBTLtXR/60yaNEoKvW1SgTJlZUrgsFwFzahU0EtkQonbRBuSsy7YDZsiU4fsJAw6xupCdK7tberkXex9bfXF+Sfc//zpeXV7DzwNIkqtpIERjLFZg9gLoMHKakipUSnRVBtKw20aOufQeW+djd7PLIporestqaB9gYeDJ2VvyVjlXO+rpuk3fN+w8P8oPEsbqkGrLDpEbfQMHs6i8r4fL6309YSBxkHplStKtMZPpqL2WjurrdXKqtnXhEeNPZKgJJbZXFhNW6SYJKALPIgK7zr9goV/EXgolj5SKJGCuTQ6bGpmtPVDBvdZ1pnWjTZmicwQBI0iuBEXx5FxjbqkQUn7onICobCePakHHxROcX0fNbgT6qG8DORlpuSjctb9FnhsjsG3lI7iZQVP1m3qg4lJ5YqFTC6EPpqKlCU9RWenlYbIhwbKltJIsbDYMZRCMYQialE9MhKqkoSihI7f3HX6MwtfzXv96VlwrV859BQ8F0fBDTFlKtU2zLZ78jn1McK9TrWOQ7KxKM2otK2ewEPkTlITQqmOS00hIkZF+p5biUodO2UHWe8XQVJBkWC4mJh8FNkpkbrphv0/aie976njfNhwsO5ikrZeGSTUiuLeN+5TsOlyzUktOmhk60IqNMv6PLLX0ZkxfLCYd7f9zwrFsoExFHwpABq57FPC9Fuf9u6AzzPw6BDw2toYk1slt+RiW2iWU67SrBs8MJqaV5g/B55VHSc6YyQq1RhFzGdmkypxia/R4MpR4IKGFqVEWUmU0Y2dxFPHPRWejmlFfbFx5qUm8lXy2EVXhsw5UYhCshtifIUwoNZaT+a9fOFfBB7rYkJkW41TdEuwmgihUlYeBxasvIxFqeluMUlkRK8QN6+ljNvhPkPQVpjp3kOct2CmiJ6VkoGmuZn8cy8pl4+U29ea7Bjwquz8lsmvBA/f/CSRkoFciJGBM8Grkv7G4jEz4HI+exfckq/2ddymwoKN1XmgWd63hQXjoalvKCFinNIs+oAhfrXhJNEsEOWhjWgW1PHGQF916M8U7tXRkgXNujGnVVwYW0qbyln3W2gWeSx7WkMLHd4LGfRfg6rgggMMQIpRKYZnPuAwpUU+uXwKKeccvA86p5Czz/su78DVxVIe0La5ZitDybBAYW3Yl0MS9D5vLaRv3VeF+ZcLX52e4ny5BQgKADyc81RWpyWfko70n21DPmf9cM7zZ3yy0cV65Kcq5GRb/uaxf8u+ZMagktIArIZwhpNX1vqgSjdUWZVScVXOMV1pZ6+sdCdDd3VunYfFlTpLhkgYXTXpvI+FdFKyKM94rvXutc94X5DA/APkHykbT8XvcwAAAABJRU5ErkJggg==)
	Reddit·r/LocalLLaMA

Show all

does this model support tools for ClaudeCode?

Yes, ==**Gemma 4 E2B** natively supports **function calling** (tools)==, making it a viable candidate for use with **Claude Code**. It is designed specifically for "agentic" workflows like file reading and terminal execution.

However, the "does not support tools" error you saw previously with `gemma3:1b` is often caused by how the model is configured within Ollama rather than the model's actual intelligence. To make it work with Claude Code, follow these requirements:

**1\. Use a Tool-Optimized Version**

Standard base models sometimes lack the correct `TEMPLATE` metadata in Ollama to trigger the tool-calling logic. Using a community-verified version or the official **Gemma 4** library usually resolves this.

- **Ollama Command**: `ollama launch claude --model batiai/gemma4-e2b:q4`

**2\. Increase the Context Window (Crucial)**

The most common cause of tool-calling failure in Claude Code is the **context window**.

- **The Issue**: Ollama defaults to **4,096 tokens**. Claude Code sends a massive system prompt containing all tool definitions (XML/JSON schemas), which can be 4,000+ tokens alone.
- **The Fix**: You must bump the context to at least **32k** (Gemma 4 E2B supports up to 128k) so the tool instructions aren't cut off.

**3\. Performance Expectations**

- **E2B (2.3B)**: Best for single-file edits, writing tests, or basic error explanation. It is 3x faster than the 4B model but can occasionally "forget" to format the tool call correctly.
- **31B Dense**: If you have the hardware (32GB+ RAM), the **Gemma 4 31B** is the recommended choice for multi-turn refactoring and complex architectural tasks.

**Summary Table: Gemma 4 Sizes for Claude Code**

<table><tbody><tr><th colspan="undefined">Model Size</th><th colspan="undefined">Best Use Case</th><th colspan="undefined">Min. RAM Required</th></tr><tr><td colspan="undefined"><strong>E2B (Smallest)</strong></td><td colspan="undefined">Simple CLI tasks, single-file edits</td><td colspan="undefined">~4GB</td></tr><tr><td colspan="undefined"><strong>E4B</strong></td><td colspan="undefined">Better reasoning for complex bash commands</td><td colspan="undefined">~8GB</td></tr><tr><td colspan="undefined"><strong>31B Dense</strong></td><td colspan="undefined">Multi-file refactoring and project audits</td><td colspan="undefined">~32GB</td></tr></tbody></table>

Would you like the specific **Modelfile commands** to permanently set the larger context window for your local Gemma 4 model?

- Gemma 4 doesn't work well with Claude Code, is it only me?
	4 Apr 2026 — Gemma 4 doesn't work well with Claude Code, is it only me?... I am a newbie, and I tried gemma4 with ollama-Claude code, it doesn...![](data:image/jpeg;base64,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)
	Reddit·r/LocalLLM
- batiai/gemma4-e2b - Ollama
	9 Apr 2026 — batiai/gemma4-e2b. batiai/ gemma4-e2b. 497 4 days ago. Cancel. tools thinking. ollama run batiai/gemma4-e2b:q4. curl http://localh...
	Ollama
- Gemma 4 model card | Google AI for Developers
	18 Apr 2026 — Core Capabilities. Gemma 4 models handle a broad range of tasks across text, vision, and audio. Key capabilities include: Thinking...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABSCAMAAAAionnxAAAAz1BMVEUAAABBhf8LFiQmTqs3c/9Ag/8oUrc/fss3ff8fRpYpXcYjSaMmUKUxZcRPoP8/gf9CiP9Uqf9FjP85dO4ABAtJlP8GDBkHDyAtXtArWLITJUc6d+kcOXMJESgYMW0vYdkyaelHkP8VK1ApU5FMmf8uXK4dOVslSngvYbsOHDQOHCxLl/M8ecASJUxFjeQmTpExY50WLVsNGzwePHAyZcs1bd8aO30iRo4dO4c4cto4cdBBhPE9fOAwYa4UKl4rWboqVYo/gNk1bMEjR4A2bK0H2tVPAAACTklEQVRYhe2TbW+iQBCAZ1uo6xuLgCCIhSq2UmmrvKgoV1vs//9NNyzYmEsudx/8cMntE8ysy/BkdgYABAKBQCAQCASCfwjneqrHp0cDxovwSrrn5TK6AaKOX67je1WU1g28jefWVXQrJah8EJ/Pu3Zd3kwztGByfx/jMq6DhTuh61bLFzdp8tdJctn7x2UQDSrf2ZZmup61cbXJtvcj3/c20PYw7ABj+32Ed13oZfo4TzDptD8cDsWP794/twarpwufOyY0zRi18Wmq68ynkt+VJB+vd7iVPJ/qjGVHJhOVHCawVR+0fTEclmfBh7KEj8q3roA4J0fcdSjdoo92DHB0SboDmPhSF30S3o11KmNICJmDlZ8wffqgJc1pg8CpfZqmqSpsGAPLsqAt21V9a0zpSVKVeYdWrA97Z9qYhORkUQVn6phlMKt9n8oKap9tp0yGnqz30zQ9ZnI6adPOBFO6kgc8VD6sFIxeVR5An/SxP2VRFGUxrH0zpWUCYP8MsGDLSOVr4D6Li0a/+ph99m1VrSjLw7D2rYPgcxVFLWUZYdqCpNAjtmEihmHA733yty/XStywmvPOgiBQOAMw50R+gROjcf0Ohn/jc3KteveeD019ZRlFTX0LFccFYS533Dje6Hy+f/QZuTY3ISyb8zZg/wA0lX9va13Ws4yyNIY2477epa/DfaT2qX1409Q9TmMfXPr4fBdTg/8Jj1QldIeT3XhdHBbsvFvgoct/6Nvyzwfm+RsYJ20YFNNZkVzW9/plgkAgEAgEAoHgv+InrgBDqVtB2KYAAAAASUVORK5CYII=)
	Google AI for Developers

Show all

tell me more about batiai/gemma4-e2b:q4

The **batiai/gemma4-e2b:q4** is ==a 4-bit quantized version of Google's **Gemma 4 Effective 2B** model==, specifically optimized for high-speed local performance on [Ollama](https://ollama.com/batiai/gemma4-e2b).

**Key Performance Specs**

- **Active Parameters:** ~2.3 Billion (derived from a 5.1B total parameter architecture using Per-Layer Embeddings).
- **Memory Footprint:** The `q4` quantization requires only **~3.2 GB of VRAM**, fitting easily into 8GB or 16GB machines while leaving room for the context cache.
- **Speed:** On modern hardware like the Mac mini M4, it can reach speeds of over **100 tokens per second**.
- **Context Window:** Features a natively large **128K token context window**, which is essential for reading long files or entire directories in Claude Code.

**Tool & Agentic Capabilities**

Unlike the older `gemma3:1b` model, the **Gemma 4 E2B** was built from the ground up for agentic workflows:

- **Native Tool Use:** It supports the function-calling schemas required by Claude Code.
- **Multimodal:** It natively processes text, image, and audio inputs.
- **Reasoning:** Optimized for "thinking" or chain-of-thought processing, allowing it to plan multi-step coding tasks more reliably than previous small models.

**Why use this specific version?**

The `batiai` variant is specifically verified for **Mac hardware** and has been tested for **tool-calling accuracy**. It uses higher-quality quantization methods (like Q4\_K\_M) compared to standard default quants, which helps maintain reasoning performance even at a small size.

**How to Run with Claude Code**

To ensure it doesn't fail with a "does not support tools" error, make sure your context window is set high enough to accommodate Claude's system prompts:

```
# 1. Pull the model
ollama pull batiai/gemma4-e2b:q4

# 2. Run with enough context for Claude Code's tools
ollama launch claude --model batiai/gemma4-e2b:q4
```

**Would you like to see how to customize a Modelfile to optimize this model for larger codebases?**

- Gemma 4 E2B vs E4B: How to Run a Multimodal AI Model on Your...
	6 Apr 2026 — What Are Gemma 4 Edge Models? Google's Gemma 4 family, released in 2025, includes a set of edge-optimized models built specificall...![](data:image/jpeg;base64,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)
	MindStudio
- Gemma 4: Our most capable open models to date - Google Blog
	2 Apr 2026 — Advanced reasoning: Capable of multi-step planning and deep logic, Gemma 4 demonstrates significant improvements in math and instr...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAUgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIDBAUH/8QAKxAAAgIBAwMEAQMFAAAAAAAAAAECEQMEITEFEkETIlFhcYGh4RQVM5Gx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEDBAL/xAAcEQEAAQQDAAAAAAAAAAAAAAAAAQIDERIhMVH/2gAMAwEAAhEDEQA/APw0AqTbpAaWOThKaXtjV/qYexq2lSez5IwC5NZGnK1VfRlcm8sFCbim9vko5lpijrjydkMkfE41VWQcnsQrIAAAGo9ra7nS80FyZAHoy5IZIxl2VNbSa4fwcG9yFAJbo3ltzbfkyvkt9y35KMmlvv5MvbYqIC534JKrdcFdUv3MgAABWEJNydsJ7gfWfSdPixxWr1vo6iUFP0/SclFPi2uP5PJDp2qnpnqY4JvDG7n+OT6eDrOnjkhqskNTDVwjGMlhy9sM3bw5eV4uiz69HPp28kHHUrHOHdCMO1qV+Wu5cvZPf6OnW1Pcs81PD/Zeo3X9Hl3dcImLpHUJx78elzNfPb91/wBPTn6xHJk1U1jlWbUQyq5cKN7G8/W8eXUTyrDKN4M2NLuXM3Jp/pY1s+rmp5F0bqE8uTEtJl78aTkvzx+bL0bpGXqmujpoS9KNr1Mkltj3rf7bpJfZ9LSde0uHFg9bSyeTDHGlJRg3JRv2+5Olvytzh07r70WrnNabDkwZNSs8lNe/Z2knf+vsmtrMcpmt8jPh9LNkxu32SlG/wziejWZ1qNVlzRhGCyTcuyPCt8Hnswl7gABFQprHGMnUpdq+as1OEY32zUt/AGFwyF2ogGr7o/FfuIe12yISZQk7ZkpuMU0/kDmDbjW7tL7QnGK4aZBgFABCyAChlTpNfJkCosqsiNTq9rr7AkXRrufLOZuM+2MkuWqAuXJLJJyk7MMEAoIAAAApAAL4N5v8sigDkAAKgyAAAAP/2Q==)
	blog.google
- Gemma 4 E2B vs E4B: The Edge Models That Run Audio and Vision...
	9 Apr 2026 — Gemma 4 E2B and E4B are edge-optimized models that run natively on-device, supporting audio, vision, and function calling at 2 and...![](data:image/jpeg;base64,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)
	MindStudio

Show all

yes, please. I'd like a full modelfile customization template. I want to edit all parameters.

This Modelfile template is optimized for **Gemma 4 E2B** on Ollama (April 2026 release) and configured specifically for **Claude Code** 's heavy tool-calling requirements.

**1\. Create the Modelfile**

Save the following content as a file named `Modelfile` (no extension) in your current directory.

```
# Base model
FROM batiai/gemma4-e2b:q4

# --- PERFORMANCE & CONTEXT ---
# Crucial for Claude Code to handle large system prompts + repository context
PARAMETER num_ctx 32768      
# Limits how many tokens are generated per turn
PARAMETER num_predict 4096   
# Offload as many layers to GPU as possible (adjust based on VRAM)
PARAMETER num_gpu 35         

# --- SAMPLING & CREATIVITY ---
# Recommended 1.0 for Gemma 4; lower (0.2-0.5) for strict coding accuracy
PARAMETER temperature 0.5    
# Controls diversity via nucleus sampling
PARAMETER top_p 0.95         
# Controls diversity via top-k sampling
PARAMETER top_k 64           
# Alternative to Top_P, 0.01-0.05 is good for stability
PARAMETER min_p 0.01         

# --- REPETITION CONTROL ---
# 1.0 is disabled; increase slightly (1.1) if the model loops code
PARAMETER repeat_penalty 1.0 
# How far back the model looks to penalize repetition
PARAMETER repeat_last_n 64   

# --- FORMATTING & STOP TOKENS ---
# Gemma 4 standard turn-end token
PARAMETER stop "<turn|>"      
PARAMETER stop "<end_of_turn>"

# --- PROMPT TEMPLATE ---
# Configured for Gemma 4's native tool-calling structure
TEMPLATE """<bos>{{ if .System }}<start_of_turn>system
{{ .System }}<end_of_turn>
{{ end }}{{ if .Prompt }}<start_of_turn>user
{{ .Prompt }}<end_of_turn>
{{ end }}<start_of_turn>model
{{ .Response }}<end_of_turn>"""

# --- AGENTIC SYSTEM PROMPT ---
SYSTEM """You are a highly capable AI software engineer using the Claude Code interface.
- You have native access to terminal and file system tools.
- Your goal is to solve the user's task by reading files, writing code, and running tests.
- Always provide concise, functional code and acknowledge constraints.
- When using tools, follow the structured XML/JSON schema requested by the CLI."""
```

**2\. Create and Launch the Model**

Run these commands in your PowerShell to build your custom version and launch it with Claude Code:

1. **Build the custom model**:
	```
	ollama create gemma4-coder -f Modelfile
	```
2. **Verify it exists**:
	```
	ollama list
	```
3. **Launch Claude Code using the new model**:
	```
	ollama launch claude --model gemma4-coder
	```

**Why these specific settings?**

- **`num_ctx 32768`**: The [Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4) notes a native 128K context, but 32K is the "sweet spot" for 8GB–16GB RAM machines to stay responsive while allowing Claude Code to "see" your project files.
- **`temperature 0.5`**: While the official recommendation is `1.0` for general chat, lowering it to `0.5` significantly reduces "hallucinated" tool calls when the model is writing complex file paths.
- **`repeat_penalty 1.0`**: Gemma 4 is highly sensitive; setting this higher than 1.0 often breaks its ability to write repetitive syntax (like repetitive `import` statements or boilerplate), which is necessary for coding.

**Would you like me to explain how to adjust the `num_gpu` parameter specifically for your VRAM capacity?**

- batiai/gemma4-e2b:q6 - Ollama
	8 Apr 2026 — Why Gemma 4 E2B? \* 5.1B total params, 2.3B effective — PLE (Per-Layer Embeddings) for on-device efficiency. \* Multimodal: text, im...
	Ollama
- Gemma 4 model card | Google AI for Developers
	18 Apr 2026 — Core Capabilities. Gemma 4 models handle a broad range of tasks across text, vision, and audio. Key capabilities include: Thinking...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABSCAMAAAAionnxAAAAz1BMVEUAAABBhf8LFiQmTqs3c/9Ag/8oUrc/fss3ff8fRpYpXcYjSaMmUKUxZcRPoP8/gf9CiP9Uqf9FjP85dO4ABAtJlP8GDBkHDyAtXtArWLITJUc6d+kcOXMJESgYMW0vYdkyaelHkP8VK1ApU5FMmf8uXK4dOVslSngvYbsOHDQOHCxLl/M8ecASJUxFjeQmTpExY50WLVsNGzwePHAyZcs1bd8aO30iRo4dO4c4cto4cdBBhPE9fOAwYa4UKl4rWboqVYo/gNk1bMEjR4A2bK0H2tVPAAACTklEQVRYhe2TbW+iQBCAZ1uo6xuLgCCIhSq2UmmrvKgoV1vs//9NNyzYmEsudx/8cMntE8ysy/BkdgYABAKBQCAQCASCfwjneqrHp0cDxovwSrrn5TK6AaKOX67je1WU1g28jefWVXQrJah8EJ/Pu3Zd3kwztGByfx/jMq6DhTuh61bLFzdp8tdJctn7x2UQDSrf2ZZmup61cbXJtvcj3/c20PYw7ABj+32Ed13oZfo4TzDptD8cDsWP794/twarpwufOyY0zRi18Wmq68ynkt+VJB+vd7iVPJ/qjGVHJhOVHCawVR+0fTEclmfBh7KEj8q3roA4J0fcdSjdoo92DHB0SboDmPhSF30S3o11KmNICJmDlZ8wffqgJc1pg8CpfZqmqSpsGAPLsqAt21V9a0zpSVKVeYdWrA97Z9qYhORkUQVn6phlMKt9n8oKap9tp0yGnqz30zQ9ZnI6adPOBFO6kgc8VD6sFIxeVR5An/SxP2VRFGUxrH0zpWUCYP8MsGDLSOVr4D6Li0a/+ph99m1VrSjLw7D2rYPgcxVFLWUZYdqCpNAjtmEihmHA733yty/XStywmvPOgiBQOAMw50R+gROjcf0Ohn/jc3KteveeD019ZRlFTX0LFccFYS533Dje6Hy+f/QZuTY3ISyb8zZg/wA0lX9va13Ws4yyNIY2477epa/DfaT2qX1409Q9TmMfXPr4fBdTg/8Jj1QldIeT3XhdHBbsvFvgoct/6Nvyzwfm+RsYJ20YFNNZkVzW9/plgkAgEAgEAoHgv+InrgBDqVtB2KYAAAAASUVORK5CYII=)
	Google AI for Developers
- Gemma 4 - How to Run Locally | Unsloth Documentation
	13 Apr 2026 — Recommended practical defaults for local inference: \* Start with 32K context for responsiveness, then increase. \* Keep repetition/ ![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAZQMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAABQMGAQIEB//EADYQAAIBAQMICAUEAwAAAAAAAAECAAMEERIFBhQhMVFhkRMzQVRxc5OxIjVyodEygcHSNFOS/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEDAv/EABoRAQACAwEAAAAAAAAAAAAAAAABEQISMRP/2gAMAwEAAhEDEQA/APXXYKLzIGtSDfynPlOsaaoN7AfedzWVRaa2Glbj0j4iy2m5ezYMYIGrZdIxxxtz6ZT48oaYm48p3UrDRpVulV7UWw4bmtVRl5E3X8Z0tUYAHoXY3kXArz1mKdeZRplPc3KGmU+PKNjVfu9Xmv8AaYN7EsadUEi67GPzFHmVaZT48oaYm48o1NEPSwlqii4j9ZB18QYuyDkCz5D6XR7Vba/ShQdJrmpddfs469Z2nVFHmj0ynuPKGmU+PKOiL+085qtMBr8T/uxijQn0ynx5SRLQjHceMaGmMN17f9GLsuP0NkU3HVUQAk374onCoSAwkVFsVMGEjMty1sp/WvvHdppLUqn/AB8XYKlLEfcRJlvZT+tfeWNwSSASNe0Sw0w4wNQAHZJZEoI2sW4m7+JLK0EIQgEJhmCqWY3AC8mcuT8o2XKKu1kq4whuOq7wgdcIQgEUZz/Lk85Y3ijOj5cnnJCTwWXqVhCy9SsJywL8t7Kf1r7yxttPjK5lvZT+tfcSyNtMsNMOMSSRySVoJhmCC9vCR1+muHQYL+3ECZqmkkfG1JTuCE/zAhrWqvewpUaDoR8Jeoy37NownjOLJ9nOTzUFms9IK2sKbQ1y7NQ+DUN3gI1QVQ171EZe0KhB95pWNcunRXhSDebxqgFntDOg6dUSoTdhRiw5kD2nROXBa/8Aauzh/WSUulUHpiG3XbfYQJoozn+XJ5yRuNkUZ0fLk85ISeCzdSsIWXqVhOWBdlvZT+tfeWRtp8ZXMt7Kf1r7yxttPjLDTDgkkjkkrRyC1WO0161Fa1N6lmcJVp360YqGAPipB/ebpToMSFCk9ovMkFFFqNURVV3uxsBra7ZfDA93Wt9vxAFoopBAF42GYqUFqOrsf09l2ozbC94OI6uzf9ptr3DnAj0elddgEyKKKb1GE7xN9e4c5pVR3UhXKHeIEkUZ0fLU85I3EUZ0fLU85IlJ4LL1KwhZepWE5YF+WheKf1r7ywVKhDkCmx4gj8xVlCzdPSI7YptFoy6G+CvTPFqKkn7Su8Zpa1YnahXxIk8pItucY2Wmn6C/iZ07OTvSegsW62hdYSladnJ3pPQWGnZyd6T0Fi13hdYSladnJ3pPQWGnZyd6T0FizeF1hKVp2cnek9FYadnJ3pPQWLN4XWKM59eTk85Ih07OTvSeis6aRynbMC2+sHRWxABAuv8AaEnKKNbL1KwklJcKAboSMmxmpA3CEIGMI3DlMYRuEIQMXDcJm4bhCEAuG4QuG4QhAxcNwmSBuEIQC4bhNlAu2QhA3EIQhH//2Q==)
	Unsloth

Show all

yes

To find the perfect **`num_gpu`** setting for your VRAM, you want to offload as many "layers" as possible to your graphics card without running out of memory (OOM).

**1\. Identify Your Total VRAM**

Open PowerShell and run:

```
nvidia-smi
```

Look for **MiB / MiB** under "Memory-Usage." Note your total capacity (e.g., 8192 MiB for 8GB).

**2\. Calculate the Layers**

For **Gemma 4 E2B (2.3B)**, the model typically has **35-42 layers** (depending on the exact architecture version).

- **100% GPU:** Set `PARAMETER num_gpu 99`. Ollama will automatically cap it at the actual maximum of the model.
- **Split Memory:** If your VRAM is low (under 4GB), you may need to offload only some layers to keep the **Context Window** in memory.

**3\. The "Context Math" Rule**

The model itself (Gemma 4 E2B Q4) takes up **~3.2GB**. However, your `num_ctx 32768` also requires VRAM.

- At **32k context**, you need an additional **~1.5GB to 2GB** of overhead.
- **Total needed for 100% GPU:** ~5.2GB VRAM.

<table><tbody><tr><th colspan="undefined">If you have...</th><th colspan="undefined">Set <code>num_gpu</code> to...</th><th colspan="undefined">Reason</th></tr><tr><td colspan="undefined"><strong>8GB+ VRAM</strong></td><td colspan="undefined"><code>99</code></td><td colspan="undefined">The entire model + 32k context fits easily.</td></tr><tr><td colspan="undefined"><strong>6GB VRAM</strong></td><td colspan="undefined"><code>99</code></td><td colspan="undefined">It will be tight but should fit.</td></tr><tr><td colspan="undefined"><strong>4GB VRAM</strong></td><td colspan="undefined"><code>20</code></td><td colspan="undefined">Offload half the layers to GPU; keep the rest and context in System RAM.</td></tr><tr><td colspan="undefined"><strong>Integrated/Intel</strong></td><td colspan="undefined"><code>0</code></td><td colspan="undefined">Run entirely on CPU/RAM (slow but stable).</td></tr></tbody></table>

**How to test for "OOM" (Out of Memory)**

After running `ollama create gemma4-coder -f Modelfile`, watch your **Task Manager** (Performance tab -> GPU) while you run the model.

- If the "Dedicated GPU Memory" hits 100% and then Claude Code crashes, **reduce** `num_gpu` in your Modelfile by 5 and rebuild.

**Would you like to know how to check your specific model's total layers using the `ollama show` command?**

Show all

yes

**Searching**

To check the total number of layers for your model, use the **`ollama show`** command with the **`--verbose`** or **`--parameters`** flag.

**The Command**

Run this in your PowerShell:

```
ollama show gemma4-coder --verbose
```

**What to look for**

Under the **`Parameters`** or **`Architecture`** section of the output, look for a field called **`block_count`** or **`n_layer`**.

- **`block_count`**: This is the official number of transformer layers in the model.
- **Total Layers**: If you see `block_count 35`, then setting `PARAMETER num_gpu 35` in your Modelfile will offload 100% of the model's computation to your GPU.

**Verification**

To verify exactly how many layers are *currently* running on your GPU versus your CPU, use:

```
ollama ps
```

The **`PROCESSOR`** column will show a percentage (e.g., `100% GPU` or `48%/52% CPU/GPU`). If it’s not `100% GPU`, you can try increasing the `num_gpu` value in your Modelfile and recreating the model until it hits the max.

For a deep dive into how Ollama manages these model layers and parameters:

![Related video thumbnail](data:image/jpeg;base64,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)

1m[3\. How to use the Ollama.com site to Find Models](https://www.youtube.com/watch?v=_fQTOMdqjfY&t=487)

[

Matt Williams

YouTube• 6 Aug 2024

](https://www.youtube.com/watch?v=_fQTOMdqjfY&t=487)

**Would you like me to help you interpret the `ollama show` output once you've run it?**

- FAQ - Ollama's documentation
	How can I tell if my model was loaded onto the GPU? Use the ollama ps command to see what models are currently loaded into memory.![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAUQMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAAAQIEBQcIBv/EACkQAAICAQMCBQQDAAAAAAAAAAABAgMRBAUxEhMGIUFRYRQVIqEH0fD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A4eAHpHYPB/h+3ZttjPYdBfTOjTq2+dClOzrri5S7mcp5mnx6eWAPNwFWpRsnGPCk0hIARSQi0AIpAhgBSQIeAEMYAYZn171ulWm+mq3LWw0+MdqOomoY9sZwYAACKSEuCkgGkUgSKSAEUgGgGhgMBAUAGAC5Aa4AaLRKLQDRSEigGkUJFACGIYAAABgFL2EuTd1bs4aSFdu1UW1xhGPXOD88LCbePn9gadFrzNlDcF3XCO2adynCMHWq85cc5ljHLz+i5bxXZN2PbdG5ST6m4J5b9eOf7A1i5wUkbT7vU4dH2vSdHl+OPjHt/smBqLFdfO1VwrUnnogsJeXoBCGA0ADEMAAAAwFwdW0fiPaJ1+G9DrdbqPo9Ft1Op1ShuL7LlU5TVLoxiVjcYrlPzXscpXBcQOtT3Xbt0eo1u1+Ja9s3XdaNKrtbe1p7oumUoXZ6ZNVua7U0lL8sNfB8b/IVlNvi3VTosqufbpVt9OOi+3tx67I49JPLPmkUlgBotEooBoYhgMAAAAAAwUWhABaKQwApDAAKQ0IAGAAAAAAf/9k=)
	Ollama
- Ollama Show model gpu/cpu layer - Reddit
	2 May 2025 — You can tell ollama how many layers to force to the GPU with the num\_gpu value.![](data:image/jpeg;base64,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)
	Reddit·r/ollama
- How can I know the max value of \`num\_layers\` of each LM in ollama?
	14 Feb 2025 — To set the layers in the cli or the API it's the num\_gpu parameter. On ollama's website it is listed under. block\_count. You can...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAApVBMVEX////6+vry8vL8/Pz39/f/+Pj8+fn/3t7/1tb/4uLv7u/0+///29vw7+7q6+zi4+Pb3d3Dxcfj9v/U1db75ub/z8/Kycbb3ODq6Obe29j/x8f/ra3P0tDQzMvd5+rJy860srq8vcTIwry6u7bR0NjGwMHy9v/q7P3Cx/TGwva93PqVvfTT7/6fxfa51/qmwvausLGgoqK0wMG5xr7/mpr/ior/vLy1PoiWAAAEN0lEQVRYhdWYC3faNhTH9YKlInqhYEkgxSFAt3brypIu3/+j7cqQ00BtgYnZOfkfbEgs/3z1ug8jggYWQVdBxmStcuFeax9rbVMdvPEPgScbYlg+3htdqa2uVdKmWi3lOUjuGScEYyIZIYxIzhihnGDJmBAy/xT5IPCHFByfgyRIceo9o5QzIT2iGDM4KDzl0o5X8iHisJHLah2jXQWTzCZtjKwqc7KXHcgjjS8x7Qj5OYtOp1MEx2Qyzed3In//48uXz5Ovf04nf337Pp38/f3b1/ciEaaUoslkko/mx3uIDRJ4NEPz/HI4aPPJ/74YqaTQ2qpQE8SUUBakvA7WShsvwLbM+BsKu9TKgfVxkLhFndNCS2pWY0a2TQJGrJVaXgGUwpLcIbfu4AoTgFTKO+UcO74pKJ24D8TryipxOGxUarnrOCK/GArLnlNGiTwyCzYEY9A/hhiIMnx01ZOdlQyzY3V6ypNjSf/HGb9cu47jpjsY7879IeiNn4EQlpGjZYraYRJtrfozaTJLozZ1JUM0Ce2QEP84ZzlE5nNvJMRViKxcwGQTQnfIQYX3Y4myF+5vYKsa5PifZV2ZC4axG0kFlxLSiuGQeNxDxd1DX3fP3fwWdHN7Ax/47tKsuTg7tXl2yNHT85NZPy+fTF09dbZVartF6Ezk7PbTT/3Wpd3Fm7OQdNRDp4h7JMrJH8kbpxRlCVzF0IgWW+2R1FSmWm9MqqLpbhtsVN5uauHCOVYWu9JPe+SQ2iOll5ALgSMqZb3+vJR4jzTaahWUXbtCW9ELOaSuh9TaaZe0cqrQVintXDiZH+6RVijPuQcPV2gLBRaUXCe79JHGktbJxPXKRihQu9uGoJFxyDoaNI4JYoDw3VZKmmMb4cQXtibLLnsMcQ9SiMZ90NYa87pjedJ1MFg/49OP34/ltoIqd2k2BdcGY6m3W+fvz7TyovqmjBxSe2R+/8AhRyq29URCFg/xhAmqsSSC4O5FRI011lXWFO2FslL6kCJVilVYWSWtb7nhI21IJJUCLyS8EkESr7xsWwLivKD3GiiUDS5GBTW48+A2dRvyuAQqI4fU9ZAx1tZFqx5jIUTG7qSuBenyEuaCi9IU0F7TM6Suh6xz5lZVvNg22GQhueNiZS2O1tqgqY2rmviUNtLmuOB+ImX2/q1O4I3Y6wuqXCNBLf5aRzcVaFNVN4nndcey/V3GoZ3n1O57ZBMoHh9KeRtCdXpen48csuvXG0sF7l8RwZlgjDPaHjFIvyy4jkkbq61LyUEsaL2Z6z7ISzQfzWZ3L7P53XDI2fzH4se/i8VLK5KCX5MRKiWttVJehfvQMppHCfDLaHw3Gv/6yvw1sZZKQ+yB+OMzEs4tlh8kwPNFl/UXdvzT4ngE34kcLUpF+Q45NskGWEg6aluzOq5FXHub6sOUOLjwkL9f5sUHUvIfjolHNfQguhQAAAAASUVORK5CYII=)
	Reddit·r/ollama

Show all

Google apps

Google Account

MaTheRaptor

hamedahastral@gmail.com