---
title: Git Subtrees vs Submodules
description: Integrating external repositories, understanding subtrees, and recovering from prefix conflicts.
tags: [Git, Version Control, Subtree, Submodule]
---

# Git Subtrees vs Submodules

When integrating external repositories into a host workspace (such as injecting `MAGPIE_Server` into a mono-repo), there are two primary Git mechanisms: **Submodules** and **Subtrees**.

## Submodules
A submodule is essentially a "pointer" (`.gitmodules`) to a specific commit in an external repository. 
- **Pros**: Keeps repositories strictly separated; lightweight on the host.
- **Cons**: Difficult for collaborators (requires `--recursive` clone commands); easy to detach HEAD; leaves behind hidden metadata (`.git/modules/`) that requires manual cleaning if removed.

## Subtrees
A subtree uses a "copy-based" approach, merging the actual code and history of the external project directly into the host repository.
- **Pros**: No extra metadata; files act natively within the host repo; collaborators don't need special commands.
- **Cons**: Increases the host repository size by storing the full imported history.

---

## Subtree Workflow & Conflict Recovery

### 1. Adding a Subtree
To add an external repository as a subtree, use the following command (with `--squash` to collapse the imported history and keep the main log clean):
```bash
git subtree add --prefix folder/path <remote-url> <branch> --squash
```

### 2. The "Prefix Already Exists" Conflict
If you attempt to add a subtree to a folder path that already exists and is tracked by Git, you will encounter a `prefix already exists` fatal error. `git subtree add` requires a completely clean, untracked path to graft the external files into.

**To resolve this:**
1. Back up or commit any uncommitted changes in the existing folder (`git commit -m "Save current work"`).
2. Remove the folder from Git's tracking index:
   ```bash
   git rm -r folder/path
   git commit -m "Clear prefix path for subtree integration"
   ```
3. Re-run the `git subtree add` command.

### 3. Recovering Accidentally Deleted Files
If the `git rm -r` step deleted local-only files that were never pushed to the remote repository, they are not permanently lost as long as they were previously committed.

You can recover them by checking out the specific commit from before the deletion:
1. Find the commit ID where the files last existed (`git log --oneline -n 10`).
2. Restore the folder from that specific commit:
   ```bash
   git checkout <COMMIT_ID> -- folder/path
   ```