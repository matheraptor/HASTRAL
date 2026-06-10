# Claude Code Custom Skills

**Summary**: Custom skills in Claude Code are local, file-based instructions stored in specific directories, requiring a SKILL.md file with YAML frontmatter for discovery and invocation.

**Sources**: ClaudeCode_customSkills.md

**Last updated**: 2026-04-17

---

Custom skills in Claude Code are local, file-based instructions that Claude discovers automatically to perform specific, repeatable tasks.

## Setup Locations

Skills can be configured at two different levels:

- **Personal (Global)**: Available across all projects on your machine. Create them in `~/.claude/skills/`.
- **Project (Local)**: Shared with your team via git. Create them in your project root at `.claude/skills/`.

## Directory and File Structure

To create a new skill:

1. **Create the Skill Directory**: Inside your chosen skills folder, create a new subfolder named after your skill using **kebab-case** (e.g., `git-commit-helper`).
2. **Create the SKILL.md File**: Every skill directory must contain a file named exactly `SKILL.md`.

## YAML Frontmatter

The `SKILL.md` file must start with YAML frontmatter. This tells Claude what the skill is and when to trigger it:

```yaml
---
name: explain-code
description: Explains code with visual diagrams and analogies. Use when the user asks "how does this work?"
---
```

- `name`: Must match your directory name (lowercase, hyphens only).
- `description`: Critical for discovery. Claude uses this to decide when to invoke the skill automatically.

## Markdown Instructions

Below the frontmatter, write the step-by-step instructions or constraints Claude should follow when the skill is active.

## Optional Advanced Capabilities

- **Supporting Files**: You can add a `references/` or `assets/` folder within your skill directory to provide Claude with templates or documentation.
- **Executable Scripts**: You can include scripts (e.g., Python or Node.js) in your skill folder that Claude can run to perform automated actions.
- **Invocation Control**: Use `disable-model-invocation: true` in the frontmatter if you want the skill to only trigger when you manually type `/skill-name`.

## The skill-creator Tool

Claude Code includes a built-in `skill-creator` to help automate skill creation:

1. Navigate to **Customize > Skills** in the Claude UI or start a session in Claude Code.
2. Enable the **skill-creator**.
3. Prompt: `"Use the skill-creator to help me build a new skill for [your task]"`.
4. Claude will generate the necessary `SKILL.md` and supporting files for you to save into your skills directory.

## Related pages

- [[]]
- [[]]

