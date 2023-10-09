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
  - Url of the remote repository
  - Could be `https://..` or `ssh://`
- Checkout Branch
  - The git branch which contains your note files (should exist on remote server).
  - If no checkout branch is set then the default remote origin branch is choosen.
- Commit profile 
  - Enter name and email of committer
- Commit message
  - You can modify the commit message. It can contain date format variable (same as in templates).
- Username
  - Used for login
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

:::tip
For Github you will need to use [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) instead of password.
:::

## Video showcasing GIT repository setup

<video controls>
  <source src="/assets/videos/git.webm" type="video/webm"/>
Your browser does not support the video tag.
</video>


:::info
To reset git repository, select `Reset Repository` option in title bar in git settings.
:::
