---
title: GIT Synchronization
---

Git synchronization works only with files in private storage of Zettel Notes (due to storage access framework restrictions). 

To setup git repository, select `Setup GIT` while setting up new [repository](../index.md)

<figure>
<img src="/assets/img/synchronization-git.jpeg" alt="add repository"/>
 <figcaption>Dialog to Add Repository</figcaption>
</figure>

You will have to set following parameters

- Repository Url
	- Url of the remote repository.
	- Could be `https://..` or in the format `<username>@<server>:/path/to/repo` for SSH.
- Checkout Branch
	- The git branch which contains your note files (should exist on remote server).
	- If no checkout branch is set then the default remote origin branch is choosen.
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

	For Github you will need to use [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) instead of password.

## How the app handles conflicts ?

When a note is changed, the app follows following process to synchronize changes with the Git server:

1. **Commit**: Any local changes made to the notes are first committed.
2. **Rebase**: The app attempts to rebase the local changes with the changes from the server. This method integrates changes without creating unnecessary merge commits.
3. **Merge** (if rebase fails): If conflicts arise during the rebase, the app falls back to a merge operation to combine the changes.
4. **Push**: All the changes are pushed to the git server.

**Merge Conflict Resolution Options:**

You can configure how conflicts are resolved via the Synchronization Settings. The app allows you to choose whether to prioritize changes made on the client (Android device) or the server (Git server) when conflicts occur. By default, OURS conflict resolution strategy is followed.

- Client Preference (OURS): Local changes on the Android device take precedence.
- Server Preference (THEIRS): Remote changes on the Git server take precedence.

## Video showcasing GIT repository setup

<video controls>
	<source src="/assets/videos/git.webm" type="video/webm"/>
Your browser does not support the video tag.
</video>


!!! information

	To reset git repository, select `Reset Repository` option in title bar in git settings.