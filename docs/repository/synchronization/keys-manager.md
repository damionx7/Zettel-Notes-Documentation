---
title: Keys Manager
tags:
  - sync
  - ssh
  - security
---

Keys Manager generates SSH keys for Git and SFTP sync. Open it from `Settings > Keys Manager`.

Supported algorithms:

1. DSA (Digital Signature Algorithm)
2. RSA
3. ECDSA
4. ED25519

<figure>
<img src="/assets/img/keys-manager.png" alt="Keys Manager"/>
 <figcaption>Keys Manager Dialog</figcaption>
</figure>

To use an existing key instead of generating one, import it into Keys Manager [v2.7.6](../../changelog.md#276){ .zn-version }.

!!! tip

    Tap a key to view and copy its public key. The private key stays in Zettel Notes and is used during sync.

