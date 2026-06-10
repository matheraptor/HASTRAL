---
title: "I don't remember how I can setup my Ollama model. I'm using Claude Code with Ollama. Do I have to create a custom modelfile or does Claude Code have built-in settings to edit things like the model system prompt etc?"
source: "https://www.google.com/search?sca_esv=99e60bb1754c5a2c&sxsrf=ANbL-n5c3-eNXSSv6bsxUX7D5xl51pU3RA%3A1775044542919&source=hp&ei=vgfNaa2gNqqii-gPtpSfkQ4&iflsig=AFdpzrgAAAAAac0Vzm7RhAlgzvsN2N_6ty53APUBIVyi&aep=22&ved=2ahUKEwi9xIzBlvCTAxXUhf0HHYc0HxsQoo4PegYIAQgAEAE&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEByAEAmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcAgAgB&sclient=gws-wiz&mtid=NrLfacuqK_T87_UPsten2Qg&q=I+don%27t+remember+how+I+can+setup+my+Ollama+model.+I%27m+using+Claude+Code+with+Ollama.+Do+I+have+to+create+a+custom+modelfile+or+does+Claude+Code+have+built-in+settings+to+edit+things+like+the+model+system+prompt+etc%3F&mstk=AUtExfC0FzSQ5cRpnb5hQNKYZrZ0oTti6JUtyhlSyNFcN1x2otq8YCnIkoT6vECjP-eARv1xhCHy09-v9pl8DBRGTyy_PEEFVvyeofiMVPkkqIROboDxo9gM1_aNmvDBNFUbvL_K_dGhXKCQEeoIGwPdC9O0DJQ0dsB_QCo&csuir=1&udm=50"
author:
published:
created: 2026-04-15
description:
tags:
  - "clippings"
---

## Search Results

Hi MaTheRaptor, what's on your mind?

I don't remember how I can setup my Ollama model. I'm using Claude Code with Ollama. Do I have to create a custom modelfile or does Claude Code have built-in settings to edit things like the model system prompt etc?

Claude Code provides built-in CLI flags to edit your session's system prompt directly, so you typically **do not need a custom Ollama Modelfile** unless you want to permanently bake a specific prompt into the model's base configuration.

**Managing the System Prompt**

You can customize the system prompt during launch using the following Claude Code CLI flags:

- **Override the Prompt**: Use `--system-prompt <prompt>` to replace the entire default system prompt for that session.
- **Append to the Prompt**: Use `--append-system-prompt <prompt>` to add specific instructions (e.g., "always use snake_case for variables") to the end of the existing default prompt.
- **Use a File**: If you have a long prompt, you can load it from a file using `claude --system-prompt-file prompt.md`.

**Setup and Configuration**

To connect Claude Code to Ollama, use the `ollama launch claude` command, which simplifies the integration by automatically setting necessary environment variables.

Key settings to keep in mind:

- **Context Window**: Claude Code requires a large context window to understand codebases. It is highly recommended to set this to at least **64k tokens** (or higher, like 128k) in your Ollama configuration to avoid performance issues.
- **Environment Variables**: If you launch manually without the `ollama` wrapper, ensure you point Claude Code to your local endpoint:
  - `ANTHROPIC_BASE_URL=http://localhost:11434`
    - `ANTHROPIC_API_KEY="ollama"` (any non-empty value works).
- **Model Selection**: You can specify the model directly with `claude --model <model-name>` (e.g., `qwen2.5-coder:14b`).

Would you like the specific command to **increase your Ollama context window** for your current model?

- Using Claude Code with Ollama local models: r/LocalLLaMA
  18 Jan 2026 — arcanemachined. • 3mo ago • Edited 3mo ago. Not sure about the source code part, but claude --help yields the following options (I...
  Reddit·r/LocalLLaMA
- Claude Code - Ollama's documentation
  Telegram. Chat with Claude Code from Telegram by connecting a bot to your session. Install the Telegram plugin, create a bot via @
  Ollama
  ![](data:image/jpeg;base64,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)
- How to Run Claude Code for Free Using Ollama and Open Router
  4 Apr 2026 — The most reliable tool for this is LiteLLM, a lightweight proxy that converts between API formats. \* Step 1: Install Ollama. Downl...
  MindStudio
  ![](data:image/jpeg;base64,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)

Show all

doing it via launch flags sounds useful for spot uses, but annoying for permanent use. Is the alternative to this the creation of a modelfile?

Yes, creating an **Ollama Modelfile** is the correct way to permanently bake a system prompt or specific parameters (like context window) into your model so you don't have to use launch flags every time.

**Option 1: The "Permanent" Way (Ollama Modelfile)**

This is ideal if you want a dedicated version of a model (e.g., `qwen-code-pro`) that always starts with your specific instructions.

1. **Create a file** named `Modelfile` (no extension) in any directory.
2. **Add your configuration**:
   ```
   # Specify the base model
   FROM qwen2.5-coder:14b
   # Set permanent parameters (Claude Code works best with 64k+ context)
   PARAMETER num_ctx 65536
   # Set your permanent system prompt
   SYSTEM """
   You are a senior software engineer.
   Always prioritize readable code and use modern ES6+ syntax.
   """
   ```
3. **Build your custom model**:  
   Run this command in your terminal:  
   `ollama create my-custom-model -f Modelfile`
4. **Launch with Claude Code**:  
   `claude --model my-custom-model`

**Option 2: The "Project-Specific" Way (CLAUDE.md)**

If you want instructions that apply only to a specific codebase (e.g., "Use this project's naming conventions"), [Claude Code](https://code.claude.com/docs/en/claude-directory) automatically reads a file named **`CLAUDE.md`** at the root of your project. This is often better than a Modelfile because it stays with the code, not just your local Ollama setup.

**Option 3: Global User Settings**

For settings that should apply to **every** project you open with Claude Code on your machine, you can edit the global config file:

- **Location**: `~/.claude/settings.json` (or `%USERPROFILE%\.claude\settings.json` on Windows).
- You can also modify these via the interactive UI by running the `/config` command inside a Claude Code session.

**Summary of Methods**

<table><tbody><tr><th colspan="undefined">Method</th><th colspan="undefined">Best For...</th><th colspan="undefined">Persistence</th></tr><tr><td colspan="undefined"><strong>Modelfile</strong></td><td colspan="undefined">Prompt/Context tied to a specific model version.</td><td colspan="undefined">Permanent (System-wide)</td></tr><tr><td colspan="undefined"><strong><code>CLAUDE.md</code></strong></td><td colspan="undefined">Rules for a specific repository (e.g. "Run <code>npm test</code> ").</td><td colspan="undefined">Permanent (Project-wide)</td></tr><tr><td colspan="undefined"><strong><code>settings.json</code></strong></td><td colspan="undefined">Tool permissions and global UI preferences.</td><td colspan="undefined">Permanent (Global)</td></tr><tr><td colspan="undefined"><strong>Launch Flags</strong></td><td colspan="undefined">Temporary overrides or one-off tests.</td><td colspan="undefined">Session-only</td></tr></tbody></table>

Would you like a template for a **`CLAUDE.md`** file tailored to your specific tech stack?

Show all

I'd like a template/cheat-sheet for the launch flags

**Searching**

When using **Claude Code with Ollama**, the `ollama launch claude` command acts as a wrapper that passes flags through to the underlying Claude CLI. To send flags specifically to Claude Code, use the `--` separator: `ollama launch claude -- [Claude Flags]`.

**Quick Reference: Claude Code Launch Flags**

<table><tbody><tr><th colspan="undefined"><strong>Flag</strong></th><th colspan="undefined"><strong>Action</strong></th><th colspan="undefined"><strong>Example Usage</strong></th></tr><tr><td colspan="undefined"><strong>Model Selection</strong></td><td colspan="undefined"></td><td colspan="undefined"></td></tr><tr><td colspan="undefined"><code>--model <name></code></td><td colspan="undefined">Specify which model to use.</td><td colspan="undefined"><code>--model qwen2.5-coder:14b</code></td></tr><tr><td colspan="undefined"><strong>System Prompt</strong></td><td colspan="undefined"></td><td colspan="undefined"></td></tr><tr><td colspan="undefined"><code>--system-prompt <str></code></td><td colspan="undefined">Replaces the default prompt entirely.</td><td colspan="undefined"><code>--system-prompt "You are a Rust expert"</code></td></tr><tr><td colspan="undefined"><code>--system-prompt-file <path></code></td><td colspan="undefined">Loads a custom prompt from a specific file.</td><td colspan="undefined"><code>--system-prompt-file ./rules.txt</code></td></tr><tr><td colspan="undefined"><code>--append-system-prompt <str></code></td><td colspan="undefined">Adds extra rules to the end of the default prompt.</td><td colspan="undefined"><code>--append-system-prompt "Use tabs"</code></td></tr><tr><td colspan="undefined"><strong>Session Control</strong></td><td colspan="undefined"></td><td colspan="undefined"></td></tr><tr><td colspan="undefined"><code>-c</code>, <code>--continue</code></td><td colspan="undefined">Resume the most recent local session.</td><td colspan="undefined"><code>claude -c</code></td></tr><tr><td colspan="undefined"><code>-r</code>, <code>--resume <id></code></td><td colspan="undefined">Resume a specific session by its ID.</td><td colspan="undefined"><code>claude -r auth-fix-123</code></td></tr><tr><td colspan="undefined"><code>-p</code>, <code>--print "<query>"</code></td><td colspan="undefined">Run a one-off query and exit (print mode).</td><td colspan="undefined"><code>claude -p "Refactor this file"</code></td></tr><tr><td colspan="undefined"><strong>Permissions & Tools</strong></td><td colspan="undefined"></td><td colspan="undefined"></td></tr><tr><td colspan="undefined"><code>--allowedTools <list></code></td><td colspan="undefined">Allow specific tools to run without asking.</td><td colspan="undefined"><code>--allowedTools "Bash(git:*)"</code></td></tr><tr><td colspan="undefined"><code>--dangerously-skip-permissions</code></td><td colspan="undefined">Skip all confirmation prompts (YOLO mode).</td><td colspan="undefined"><code>--dangerously-skip-permissions</code></td></tr><tr><td colspan="undefined"><strong>Context & Logging</strong></td><td colspan="undefined"></td><td colspan="undefined"></td></tr><tr><td colspan="undefined"><code>--add-dir <paths></code></td><td colspan="undefined">Give Claude access to extra folders.</td><td colspan="undefined"><code>--add-dir ../lib ../docs</code></td></tr><tr><td colspan="undefined"><code>--verbose</code></td><td colspan="undefined">Enable detailed logging for debugging.</td><td colspan="undefined"><code>--verbose</code></td></tr></tbody></table>

**Common "One-Liners" for Ollama Users**

- **Launch with a specific model and auto-accept all tool calls:**  
  `ollama launch claude --model llama3.3 -- --dangerously-skip-permissions`
- **Run a quick code review without entering the interactive shell:**  
  `claude -p "Review the changes in the current directory" --model qwen2.5-coder`
- **Start a session with project-specific style rules added:**  
  `claude --append-system-prompt "Always use snake_case and provide JSDoc comments."`

**Interactive Mode Shortcuts**

Once you are _inside_ the session, use these instead of flags for quick changes:

- **/model**: Switch your active model on the fly.
- **/config**: Open the interactive configuration menu.
- **Shift + Tab**: Cycle through permission modes (Normal, Auto-Accept, Plan).

Would you like to see how to define **custom tools** or **MCP servers** within your launch configuration?

- Claude Code CLI Cheatsheet: config, commands, prompts, +...
  20 Jan 2026 — Table_title: Core commands Table_content: header: | Command | Description | Example | row: | Command: claude "query" | Description...
  shipyard.build
  ![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAUgMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgMEBQYBB//EADcQAAIBAwMDAQUFBgcAAAAAAAECAwAEEQUSIQYTMUEUIlFhcSMygZHRFUJyobHhBxYkM1Ji8P/EABsBAAIDAQEBAAAAAAAAAAAAAAABAgMFBAYH/8QAMxEAAgIBAgUBBQYHAQAAAAAAAAECAxEEIRITMUFRBRQiI2HwMjNxgZGxUmKSocHR4UL/2gAMAwEAAhEDEQA/APO9J0q81i79k06JJbgqWCNMkeQPONxAJ+Va0pKKyzMjBy2RJu+m9YtPZi+nzyrdAGF7dO8khOcKrJkFuCcAnjnxUVZF9yTpkhq10LVLqV4obKXupcR2zxyYjZZZM7FIYgjO0/lzTc4oSqkydJ0drkURmlsmSARmTvZyvEXdxxnnZ+GeM+ajzoeSXIkQJ9D1i3RnuNI1GFFxuaS0kUDJwMkjjJ4FT44+ROqS7Dp6a11YJp30bUEjhKCTuWzKQWOFwpGTkjHANLmQ8hyZ+CBdWtxZzvBeW81vMn3opoyjL9Qeakmn0ISi47MZpkQoAKAFbRSJYJug31zpmr215ZQia5iLduMqW3EqV8Dk8E0ppSjhkq5OMti90/rPWdHhttlrCIo4I7VO9G+1xD3AR5HvfbMGx448VU6YyfUu5011Qzb9bahDql7qDW1lLLdSRTBJVcrFJECI2X3s+6D6k5qTpXCokVc8t4HZ+tNWSFra6srZWeLCmSN1YK1uIdwG7BygU+PPI4OKiqY9UyTukuqHj17r0U63/s8Kb2neNmR9hMkiOcZODtMYA+RNLkQewc+S3wKj6+1h5C9np9mBCqyBUSVxHslaQOcuTjLkHJxz6cUciPdgr5PojPa/rVxr2oe23KRxkRrEkcW7aiL4A3En+dWwgoLCKbJub3K2plYUDHprWeCVYpYZEkbG1Spy2fGPj+FLKHwse/Ztx+97Op9VeaMMPqCcg0uIfCyb0tq8ejX1xLMtxsntZLcyWrhJot2PfQnjPGPoTUbI8S2J1TUXuaq26901Wj9qsL242PIy3E7RTTYZoTgllwdwiIY4yMjGfNUuiT6MvV0TkfW2gLO1w2hy91ygYbYiqKjSlXUEfe+1B54ygpcifTIc+Hgb1zrjSdS0jUbNdFJuLmNI0uJlTcNqIoY7eAVKEgAY59OalCmUZJ5FK6LXQb/zrYvJayT2+ouFVA9qZo3t7cpCY1eCNlI3A4YBuM/HzRyX02+vIc6O2SYnX2iJHdLHoTIs5bfCqQhLgEoS0hC5DHYcge773g0nRPK3Hz4+DLdZazaa7rPtthZC0i7KoUChS5BJ3HBPOCB9FFW1RcI4bKLZqb2RRVaVBQBc2kl53LGKEzO3Y3SRKCylctt3L4Pu48+mKK4pzwFsZyg1HP5f8LuO6tO2uen9KY4HPYQZ/lXVyTDcLM/fS/VlL0pLp0OozHVBa820i2zXkRlgSc42GRQDlfPofI4rhsUsbHoaXFS3NIZOl3eCdptH+yN6s8cNm8YlLRKISqMD7ocNjJ4zkAZwKfiYxv2OjNfyG9Gvem4rXRDMdJVI3t/a457F3ujKJcyt3PHbK+hJGONuacozbfUUZV4Qpk6Alsbm4k7kV01uGEEUsp2PhwRHngtnYcPlcH05IPjZSD4RIuv8gwQXMVolm7TRSbJGkuX2BZEKYLAlZCm/wMZGPHBS5z6jzUdvm6DS3msbbtPDJOzrKjTb4PsG2lWblhvCjB4yx4+BHm5y/rcTdWMCjb/4ae0NiZ+32Ny/a3AU8+vGRJj0+78qWb8D+EZPqybSp721l0SKCG3azh7kcKsNsoXD7gf3s/Dg8HJJNX18ST4jnucW04kSG4VrJtlvbCa3AO8xBtyEgcg8ZBI8+R9OZNbkU9jQdDarbwz3UV45WedgwmbJ3YzwfWumjujq02rqoi3Y8D7wRs7EBgCeK7FHY8pba5TlJd2Yisw3QoGFAgoAKACgYUALhiaaVY1KAscAu4QfiTwKGC3LO2052uP2bHJEt3ckIWlLIijOQuSOSSBzjHHBOajnJJ4jFs0+k/4c6wk6zyXdnDt8Y3Nn8MCpws4JZOSyyFkXE0o6MnwM38WfXER/Wuj2z+U4PZl5PHa5jXCgAoAKACgAoAKAOqCSABkngCnFOTSQ0enWA05NFjTMXsixYffjHzzWDrKNRVqpRaeU9vw7P8D3+lek9jWMcON/85JPRmsa9qlnIlpHBNHDx3pydxBJ2555OBWpfqdPpoxeoby/B83up4rZKjpnuW7X2rqxVtR0JWBwQZ/FQWv0r3Vdn9JV7Pd5iYiXoOI/7OoOv8cQP9CK1OR8z0T9Pj2kRZehLsD7K9gf+JSv61HkS8kH6fLsyJJ0Xq6fd9mf+GX9QKjyZlb0FvyIj9L62nmwYj/rIjf0NJ1z8Fb0d3giyaPqcX39Pux8+yxH54pOMl2K3RausWRJYpITiWN0PwZSKiVuMl1QijIh60XdcxgjPvD1q/SriugvmOPUs747bWQ+uMVv62TWnlgul0yaC1tuz01bRy3E0cVw5BCMQDyEGQPPNebq5dl01JLMMLPdZWTFvsshJOHfLf5FYel+Tibj6n9K6vZxL1Db7J6HUz3IUAFABQBx3WNGdzhVBYn4AUCk1FNshaHeNdadNf6nLFb23c2xEnaMfMnz8PwNVOU3PggsswF6rfKWIxTJVzZWUjYaCCZceWjVs1KK4lmSNfTyd1SlZFJsgT9P6XMjKLKCJz4eNApU/GpwUYTUkuhOWnrksYMdPANruqMbfftVnHkjn+9bvuzXDLfJkvhbaQPczSRRxPM7RxjCIW4UZz4+tQr01NcnKEUm938+xFVwWNugnZI3vbXOec4PNW5ihccI7ZX9j0asA3w9M+nigAoAKAKvqWSSPSJTGPvEKx+AP/sfjQzh9SlKOmlw9/2KPXgTFarbuzWEMSiIFcYOOWI+JPrXf6fwRi1/6+sGBotRVLMOkv3/AAFaJrbWmILrLQeh8lP7fKrtRpVP3o9Tco1Dh7suhq1dJ4Q8Thkce6wrLaaeGd+VJbGLtHm03VPZQY5kWYApIm5CR64Pg/PzTdU4pS3We6PIamuzSuW/Qsdal70UTGOJP9RGcRoFGTIufFJrEcZ8GZC+dsnxPs/2Y/VhxGgRtrqeeDng4NUtZR9RJ95fpNbmGLugbgT3G3ZA+ZqiulxlxMgo4eQuNQSVcCLLBtwZ+TnKflwpGPHNEKWn1+t/9gosBc2RdC8BYb2d93k/ewM+vlfy+tHBYls/rYMSGmntWgCG1Ut2ipJVSC3HP8j+fyqXLnnrtkHFvZjN8be5IVLdFiCbBGVGMZJxjx61OqMq113IqitdYr9DI6v0+8bNNYAuh5MXquT6D4VrUatP3Z/qct2ma3gVNnfXNizezysnPvL5GfmDxmuqdULPtI5oWTh9lnbS2uL68REYiSVie4QcZ5yeKVk41w37BGt2yw+5puoLWWS1iFqi/ZFWAJwPdYHHy8Vhyy0cnrVUlOE+F8KTTa7ZKr9oSj72nXmfXCqR+eaOY/4Web9nj2sj9fka2g+jhQAUAFABQAUAB8GgTK3U4InurctEhJjk5Kj/AImuimcuCW/gptjFzWxzpwAaNDgAZ3E4+tPV/fsNL9yi0WuYul0IrxR72+zXz8KZi26TT8yXw118I//Z)
- Claude Code Cheatsheet: r/ClaudeCode
  26 Feb 2026 — Essential. Enter: Send message / submit. Esc: Interrupt / stop generation. Esc Esc: Open rewind menu (go back in conversation or c...
  Reddit·Free-\_-Yourself
  ![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIACYAQAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAABwQFBgED/8QANhAAAQMCAwUFBAsBAAAAAAAAAQACAwQRBRIhBhMUMVEiI0FxsUKBkpMWMjNDRFJTkaHR8BX/xAAYAQADAQEAAAAAAAAAAAAAAAADBAUBAP/EACIRAAICAQQBBQAAAAAAAAAAAAECAAMEERIhMUEFEzJRYf/aAAwDAQACEQMRAD8AT99CnNSSxing7X3bevQJMnkU6KWVnDwd437NvtDoEnl+JT9N7aLnGJ2Up3gpoJDLNIS57fHMvTBKWqxrfcJSULd1a+dpHO9lG2kaXOisNXTSAfGtNsbhVbg/F8ZTEb0Ny5XNdy5rWbbX+zFQvftPUjt2bxVpaWw4Y0jUEZtP4UGbYnFZ5nyvlpcz3Fxs53j7loHbaYMxxaXzXacpG6XPprguneTfKKGHuHQh2qxSOTMfi2zFdhVHxU74XszBto3EnW+vJUh/37pg1u1FDiQp6Wikk3rpe1nZYZQDdYKoFp5B4Zz6pmpmPyiGTXWhHtnieadNLbh6e9heMegSWW82FmgqnlgzPlipw1zXN7PPndDyV1XWGwH2uV+5Q4+e+gF/xElvjTN3zej+X5Hf0qraeKIYDUuEUbXNALTlGnaHirXfR3+uOXUpWxtyiUKq9jtFjiFW+iZTCKOE7xhc4uZfVQv+xP8Ao0/y1dbiKdhjnuGupQA5o1B3gAsszVRCGpliF7McQL+aer0I0MlX7lOok0YzUtIIjpwRy7tV7yXuLjzJuuIRAAIsWJ7grXZ2SaHEbRSujzMcHZTz8VxC5hxOQkONJYVNNWsgvJilTK3MLsc42OvmmSNbn3eqEJHI8S1h9tFwInyVVIRKWhkWdwHtDPeyosS7VfUnrJohCaSTr5G8kIQixSf/2Q==)
  0:03

Show all

Google apps

Google Account

MaTheRaptor

hamedahastral@gmail.com
