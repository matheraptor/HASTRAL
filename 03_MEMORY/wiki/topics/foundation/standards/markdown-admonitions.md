# Markdown Admonitions

**Summary**: Markdown Admonitions (or callouts) are extensions to standard Markdown used to create visually distinct alert blocks, widely adopted by platforms like GitHub and tools like Obsidian.

**Sources**: List of raw source files: `markdown_callouts.md`

**Last updated**: 2026-04-29

---

Markdown Admonitions are extensions to the standard Markdown specification that allow for visual callouts, often used for alerts, warnings, or helpful tips. While they look like standard blockquotes, they are processed by specific renderers to display as distinct UI elements.

## GFM Alerts (GitHub Flavored Markdown)

GitHub, VS Code, and many modern editors support a specific subset of alerts based on blockquote syntax.

Supported types:
- `[!NOTE]`: Highlights useful background information.
- `[!TIP]`: Provides advice for efficiency or better results.
- `[!IMPORTANT]`: Identifies essential requirements or steps.
- `[!WARNING]`: Alerts users to potential problems or breaking changes.
- `[!CAUTION]`: Warns about high-risk actions.

Example:
```markdown
> [!TIP]
> Use standard GFM for the best compatibility across VS Code and GitHub.
```

## Advanced Admonitions (MPE/MkDocs)

Tools like **Markdown Preview Enhanced (MPE)** or **MkDocs** support more advanced, extensible admonitions using `!!!` syntax, offering a significantly wider variety of alert types (e.g., `success`, `danger`, `bug`, `example`).

## Related pages

- [[terminology_index]]
- [[]]

