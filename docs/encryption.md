---
title: Encryption
sidebar_position: 4
---

## Password

- AES-256 Encryption key generation takes two inputs
    - User provided Password 
    - SALT (unique for each installation)
- Decryption can only be done by zettel notes app on user device. If you uninstall zettel notes app ( which clears SALT ) or forget password, notes can't be decrypted.
- Only asymmetric password hash is stored, which is compared with the user entered password on app start. Plain password is not stored in zettel notes.

## OpenPGP

- PGP Key encryption is provided via intergration with [Openkeychain](https://play.google.com/store/apps/details?hl=en&id=org.sufficientlysecure.keychain) app.
