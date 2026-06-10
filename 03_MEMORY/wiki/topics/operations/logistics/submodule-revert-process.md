---
keyID: 1716300000000
type: procedural
version: 0.1.0
status: draft
tags: [operations, git, submodule, recovery]
taxonomy: topics/operations/logistics
---

# Git Submodule Revert Process

**Summary**: Procedure for force-reverting a Git submodule branch to a known-good state.

**Sources**: Manual incident resolution (2026-05-21).

**Last updated**: 2026-05-21.

---

When a submodule branch (e.g., `runtime-retrofit`) has been corrupted by faulty commits (e.g., erroneous reverts or failed hotfixes), follow this procedure to restore a known-good commit.

### Procedure

1. **Verify Context**: Ensure you are in the submodule directory.
   ```bash
   cd projects/MAGPIE_Server
   git status
   ```

2. **Reset Pointer**: Force-move the branch pointer to the target commit hash.
   ```bash
   git reset --hard <target-commit-hash>
   ```

3. **Verify State**: Check that the branch is now pointing to the correct commit.
   ```bash
   git log -n 1
   ```

4. **Synchronize Remote**: Since this action rewrites history on the branch, a forced push is required to align the remote tracking branch.
   ```bash
   git push --force
   ```

*Note: Use `git push --force` with extreme caution. Ensure no other collaborators are actively working on this branch.*

## Related pages

- [[wiki-log]]
