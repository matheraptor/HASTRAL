# Git Issues

**Summary**: Explains the difference between project management "issues" on platforms like GitHub and technical code errors within Git itself.

**Sources**: explain git issues.md

**Last updated**: 2026-05-18

---

The phrase "Git issues" generally refers to either **project management tickets** on remote hosting platforms or **technical mistakes** made while using the Git command-line tool.

## Platform "Issues" (Project Management)

When people talk about issues on sites like **GitHub**, **GitLab**, or **Bitbucket**, they mean a built-in tracking tool. These function like digital sticky notes or a shared to-do list for a code repository.

- **Bug Tracking:** Users and developers log unexpected software behavior or crashes.
- **Feature Requests:** A place to propose and discuss new ideas or improvements.
- **Task Delegation:** Project maintainers assign issues to specific developers and organize them with colored labels (e.g., `bug`, `documentation`, `help wanted`).
- **Automation:** Developers can link a code change (Pull Request) to a specific issue using keywords like "fixes #12" so that the issue automatically closes when the code is merged.

These issues are not exclusive to GitHub; alternatives like Jira, Trello, and Asana operate similarly. See also [[github-projects]].

## Technical Git Errors (Command-Line Mistakes)

If you are struggling with the Git software itself, "issues" refers to common human errors and conflicts that occur during version control management. Git is a strict mathematical system designed to guard your source code, and these errors protect your project from accidental code destruction.

### Common Technical Issues

- **Merge Conflict**: Two people changed the exact same line of code in different ways, and Git doesn't know which version to keep. To fix, open the file, manually choose the correct code blocks, remove Git's marker lines, and commit the file.
- **Committed to the Wrong Branch**: Accidental save directly to the main production branch instead of your feature branch. Fix with `git reset HEAD~1 --soft`, switch to the correct branch, and commit.
- **Accidental Code Deletion**: Destructive command (like a hard reset) lost uncommitted progress. Run `git reflog` to locate the position right before the error, and use `git reset HEAD@{index}`.
- **Forgot to Add Changes to a Commit**: Stage missed files with `git add .` and run `git commit --amend --no-edit`.
- **Detached HEAD State**: Checked out a specific old commit to look at it, disconnecting from active branches. Simply type `git checkout main` to return safely.

These technical errors are universal to Git and will happen across all platforms and editors (Command Line, VS Code, GitKraken, etc.).

## Related pages

- [[github-projects]]
- [[mmorpg-project-blueprint]]
