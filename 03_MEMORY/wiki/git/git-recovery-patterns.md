---
keyID: 1716300500000
type: procedural
version: 0.1.0
status: draft
tags: [git, recovery, patterns]
taxonomy: topics/foundation/git
---

# Git Recovery Patterns

**Summary**: Procedures and conceptual insights for recovering Git state after faulty commit history.

**Sources**: Incident resolution (2026-05-21).

**Last updated**: 2026-05-21.

---

### Reverting vs. Resetting History

When undoing changes, choosing the right tool is critical:

*   **`git revert <commit>`**:
    *   **Nature**: Safe, non-destructive.
    *   **Function**: Creates a *new* commit that is the inverse of the target commit.
    *   **Use case**: Best for public branches where rewriting history should be avoided.
*   **`git reset --hard <commit>`**:
    *   **Nature**: Destructive.
    *   **Function**: Force-moves the current branch pointer (or HEAD) to the specified commit and resets the working directory to match.
    *   **Use case**: Best for discarding local "trash" or rewriting the history of a private branch. **Danger**: All commits after the target commit are lost.

### Detached HEAD State

When `HEAD` points directly to a commit rather than a branch name, you are in a **detached HEAD** state.

*   **Risk**: Commits made here are not associated with a branch. If you switch branches, these commits can become "orphaned" (hard to find and recover).
*   **Fix**: Always assign a name to the commit if you intend to keep working: `git checkout -b <new-branch-name>`.

### Synchronizing Remote After History Rewrite

When you use `git reset` to rewrite history on a branch that already exists on a remote, a standard `git push` will fail.

*   **Command**: `git push --force`
*   **Danger**: This overwrites the remote branch history. Ensure no collaborators are working on this branch before forcing.

## Related pages

- [[git-subtrees]]
- [[submodule-revert-process]]
