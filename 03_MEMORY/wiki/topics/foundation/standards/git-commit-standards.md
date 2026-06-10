# Git Guidelines

**Summary**: Standards for commit messages using imperative mood and JSDoc-style changelogs.

**Sources**: (source: git.md)

**Last updated**: 2026-05-19.

---

## Commit Structure

A commit message should contain a Subject, a Blank Line, and a Body.

```text
Type(scope): Subject

Body with detailed explanations.

@changelog YYYYMMDD {@link MAGPIE.meta.version}
 * @version X.Y.Z YYYY MM DD
 * - TYPE: Description
```

## Best Practices

### Subject Line
- **Imperative Mood**: Use active verbs (e.g., "Fix", "Add", not "Fixed" or "Fixing").
- **Capitalization**: Capitalize the first letter.
- **Punctuation**: Do not end with a period.
- **Length**: Keep under 50 characters.

### Body
- **Spacing**: Leave a blank line after the subject.
- **Wrapping**: Wrap lines at 72 characters to ensure readability in terminal.
- **JSDoc**: Use the changelog format provided in source for automated tracking.

### Conventional Commits
Use prefixes to categorize commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `perf:` Performance improvements
- `chore:` Maintenance tasks (e.g., version bumps)

## Related pages

- [[topics/operations/cli-commands|CLI Commands]]
