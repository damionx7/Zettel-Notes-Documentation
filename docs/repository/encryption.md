---
title: Note Encryption
---

You can encrypt notes per repository. To enable note encryption, go to `Repositories > Long press specific repositoy > Encryption`

## Methods of encryption

1. Password

    - You can use plain text password for encryption 
    - Decryption is exclusively possible through the Zettel Notes app on the user's device. If you uninstall the Zettel Notes app (which clears the SALT) or forget the password, the notes cannot be decrypted.
    - Only an asymmetric password hash is stored, which is then compared with the user-entered password upon app startup. The plain password is not stored in Zettel Notes.

:::info
Password encryption uses AES-256 Encryption. Secret key is generated using two inputs 
- User provided Password
- Specific text known as SALT (unique for each installation)
:::

2. OpenPGP

   - PGP Key encryption is provided via intergration with [Openkeychain](https://play.google.com/store/apps/details?hl=en&id=org.sufficientlysecure.keychain) app.
