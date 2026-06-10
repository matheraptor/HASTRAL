---
type: reference
version: 1.0.0
status: active
tags: [Markdown, Formatting, Linting, Rules]
---

# MarkdownLint Formatting Rules Reference

This document provides a condensed reference for the VSCode `markdownlint` extension rules (based on David Anson's implementation). Use this to identify and fix formatting violations in any Markdown document.

## Rule Summary Table

| ID | Name | Aliases | Fixable | Key Fix Strategy |
| :--- | :--- | :--- | :---: | :--- |
| **MD001** | Heading levels increment | `heading-increment` | No | Ensure heading levels increase by only one (e.g., # followed by ##, not ###). |
| **MD003** | Heading style | `heading-style` | No | Use consistent heading style (`atx`, `setext`, etc.). |
| **MD004** | Unordered list style | `ul-style` | Yes | Use consistent markers (`*`, `+`, or `-`) for unordered lists. |
| **MD005** | Inconsistent list indentation | `list-indent` | Yes | Align list markers at the same level. |
| **MD007** | Unordered list indentation | `ul-indent` | Yes | Use consistent indentation (default 2 spaces) for sublists. |
| **MD009** | Trailing spaces | `no-trailing-spaces` | Yes | Remove whitespace at the end of lines. |
| **MD010** | Hard tabs | `no-hard-tabs` | Yes | Replace hard tabs with spaces. |
| **MD011** | Reversed link syntax | `no-reversed-links` | Yes | Change `(text)[url]` to `[text](url)`. |
| **MD012** | Multiple blank lines | `no-multiple-blanks` | Yes | Ensure no more than one consecutive blank line (except in code blocks). |
| **MD013** | Line length | `line-length` | No | Keep lines under 80 characters (configurable). |
| **MD014** | Dollar signs in shell | `commands-show-output` | Yes | Remove `$` from shell commands unless showing output. |
| **MD018** | No space after hash (atx) | `no-missing-space-atx` | Yes | Add a space after `#` in headings (e.g., `# Heading`). |
| **MD019** | Multiple spaces after hash | `no-multiple-space-atx` | Yes | Use only one space after `#`. |
| **MD020** | No space inside hashes (closed) | `no-missing-space-closed-atx` | Yes | Add spaces inside closed atx hashes (e.g., `## Heading ##`). |
| **MD021** | Multiple spaces inside hashes | `no-multiple-space-closed-atx` | Yes | Use only one space inside closed atx hashes. |
| **MD022** | Blanks around headings | `blanks-around-headings` | Yes | Ensure headings are surrounded by blank lines. |
| **MD023** | Heading start left | `heading-start-left` | Yes | Ensure headings start at the beginning of the line (no indentation). |
| **MD024** | Duplicate headings | `no-duplicate-heading` | No | Ensure heading content is unique within the document. |
| **MD025** | Single title / H1 | `single-h1`, `single-title` | No | Ensure only one top-level heading (H1) exists. |
| **MD026** | Trailing punctuation | `no-trailing-punctuation` | Yes | Remove `. , ; : !` from the end of headings. |
| **MD027** | Multiple spaces (blockquote) | `no-multiple-space-blockquote` | Yes | Use only one space after `>` in blockquotes. |
| **MD028** | Blank line in blockquote | `no-blanks-blockquote` | No | Use `>` on blank lines within a blockquote to keep it continuous. |
| **MD029** | Ordered list prefix | `ol-prefix` | Yes | Use consistent prefixing (e.g., `1. 2. 3.` or `1. 1. 1.`). |
| **MD030** | Spaces after list markers | `list-marker-space` | Yes | Use exactly one space after list markers. |
| **MD031** | Blanks around fences | `blanks-around-fences` | Yes | Surrounding fenced code blocks with blank lines. |
| **MD032** | Blanks around lists | `blanks-around-lists` | Yes | Ensure lists are surrounded by blank lines (no text immediately above/below). |
| **MD033** | Inline HTML | `no-inline-html` | No | Avoid raw HTML; use Markdown equivalents. |
| **MD034** | Bare URL | `no-bare-urls` | Yes | Wrap bare URLs in angle brackets `<http://...>` or code spans. |
| **MD035** | HR style | `hr-style` | No | Use a consistent style for horizontal rules (`---`, `***`, etc.). |
| **MD036** | Emphasis as heading | `no-emphasis-as-heading` | No | Use actual headings instead of bold/italic lines. |
| **MD037** | Spaces in emphasis | `no-space-in-emphasis` | Yes | Remove spaces inside emphasis markers (e.g., `** text **` -> `**text**`). |
| **MD038** | Spaces in code spans | `no-space-in-code` | Yes | Remove spaces inside backticks (e.g., `` ` code ` `` -> `` `code` ``). |
| **MD039** | Spaces in link text | `no-space-in-links` | Yes | Remove spaces inside link brackets (e.g., `[ link ]`). |
| **MD040** | Fenced code language | `fenced-code-language` | No | Specify a language for every fenced code block. |
| **MD041** | First line H1 | `first-line-h1` | No | The first line of the file should be an H1 heading. |
| **MD042** | Empty links | `no-empty-links` | No | Ensure all links have a destination. |
| **MD043** | Required structure | `required-headings` | No | Follow a specific heading structure (if configured). |
| **MD044** | Proper names | `proper-names` | Yes | Use correct capitalization for specified names (e.g., JavaScript). |
| **MD045** | Missing alt text | `no-alt-text` | No | Provide `alt` text for all images. |
| **MD046** | Code block style | `code-block-style` | No | Use consistent code block style (`fenced` or `indented`). |
| **MD047** | Single trailing newline | `single-trailing-newline` | Yes | Ensure the file ends with a single newline character. |
| **MD048** | Code fence style | `code-fence-style` | No | Use consistent symbols (backticks vs tildes) for fences. |
| **MD049** | Emphasis style | `emphasis-style` | Yes | Use consistent symbols (`*` vs `_`) for emphasis. |
| **MD050** | Strong style | `strong-style` | Yes | Use consistent symbols (`**` vs `__`) for strong text. |
| **MD051** | Link fragments | `link-fragments` | Yes | Ensure internal links point to valid headings. |
| **MD052** | Reference definition | `reference-links-images` | No | Ensure labels used in reference links are defined. |
| **MD053** | Unused definition | `link-image-reference-definitions` | Yes | Remove unused link/image reference definitions. |
| **MD054** | Link/image style | `link-image-style` | Yes | Use consistent link/image styles (inline, ref, etc.). |
| **MD055** | Table pipe style | `table-pipe-style` | No | Use consistent leading/trailing pipes in tables. |
| **MD056** | Table column count | `table-column-count` | No | Ensure every row in a table has the same number of cells. |
| **MD058** | Blanks around tables | `blanks-around-tables` | Yes | Surround tables with blank lines. |
| **MD059** | Descriptive link text | `descriptive-link-text` | No | Avoid generic text like "click here" or "link". |
| **MD060** | Table column style | `table-column-style` | No | Ensure consistent spacing around table pipes (especially for 'compact' style). |

## Rationale & Guidance

- **Accessibility**: Rules like MD001, MD045, and MD059 are critical for screen readers and document structure.
- **Consistency**: Most rules (MD003, MD004, MD035, etc.) enforce a single style to improve readability and maintainability.
- **Parser Compatibility**: Rules like MD022, MD031, MD032, and MD058 ensure that the Markdown is correctly parsed by various engines (e.g., kramdown).

## Applying Fixes

When encountering a violation:

1. Identify the Rule ID.
2. Refer to the "Fix Strategy" column.
3. Apply the fix manually or use the `replace_file_content` tool to align with the standard.
4. For multi-line fixes, ensure blank lines are properly inserted where required.

---
*Derived from the official [DavidAnson/markdownlint](https://github.com/DavidAnson/markdownlint) rules specification.*
