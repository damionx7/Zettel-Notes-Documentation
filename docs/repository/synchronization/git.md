---
title: Git Synchronization
---

Git synchronization works only with repositories in the app's private storage, because of Android storage restrictions.

To set it up, select **Setup Git** when creating a [repository](../index.md).

<figure>
<img src="/assets/img/synchronization-git.jpeg" alt="add repository"/>
 <figcaption>Dialog to Add Repository</figcaption>
</figure>

Configure the following:

- Repository Url
	- Url of the remote repository.
	- Could be `https://..` or in the format `<username>@<server>:/path/to/repo` for SSH.
- Checkout Branch
	- The git branch which contains your note files (should exist on remote server).
	- If no checkout branch is set then the default remote origin branch is chosen.
- Commit profile 
	- Enter name and email of committer
- Commit message
	- You can modify the commit message. It can contain date format variable (same as in templates).
- Username
	- Used for login. For SSH, this should match the username specified in the Repository URL.
- Password or Token
	- Enter password or your personal access token
- Key authentication
	- Tick if using `ssh` url and private keys
	- You can select `private key` from [Keys Manager](./keys-manager.md) or enter your own key in `private key`
	- If your private key uses password, then enter it also.


<figure>
<img src="/assets/img/synchronization-git-settings.png" alt="git settings"/>
 <figcaption>GIT Settings</figcaption>
</figure>

!!! tip

	For GitHub, use a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) instead of your password.

## How sync handles conflicts

When a note changes, the app syncs with the Git server as follows:

1. **Commit**: Any local changes made to the notes are first committed.
2. **Rebase**: The app attempts to rebase the local changes with the changes from the server. This method integrates changes without creating unnecessary merge commits.
3. **Merge** (if rebase fails): If conflicts arise during the rebase, the app falls back to a merge operation to combine the changes.
4. **Push**: All the changes are pushed to the git server.

By default, local changes win when a conflict cannot be merged (Git's "ours" strategy). To change this, see [Configure Conflict Resolution](index.md#configure-conflict-resolution).

## Demo video

<video controls>
	<source src="/assets/videos/git.webm" type="video/webm"/>
</video>


!!! info

	To reset the Git repository, select **Reset Repository** in the Git settings toolbar.