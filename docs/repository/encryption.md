---
title: Note Encryption
---

You can encrypt notes per repository. To enable note encryption, go to `Repositories > Long press specific repositoy > Encryption`

## Methods of encryption

1. End to end encryption

      - In this mode all newly created notes will be encrypted.
      - User password is stored in Android Keystore.
      - Salt and other details required for decrypting notes are stored in note files.
      - This means you can share encrypted notes with other users via e-mail and the other user just needs password to decrypt them.


2. Password

      - Use password for encrypting notes.
      - If you uninstall the Zettel Notes app (which clears the SALT) or forget the password, notes cannot be decrypted.
      - Decryption is possible between android devices. For that you will have to use same `salt` for both devices. Copy from `Settings > Encryption Salt`. 
      - If encryption salt is similar on two devices using Zettel Notes, then user can share the encrypted note and decrypt on other device with user password.
      - Only an asymmetric password hash (argon2) is stored (on device), which is then compared with the user-entered password. 
      - User password is not stored in Zettel Notes. It is impossible as of now to recover user password from the stored hash if strength of user password is reasonable.

3. OpenPGP
      - PGP Key is used for encrypted notes.
      - It is provided via intergration with [OpenKeychain: Easy PGP](https://play.google.com/store/apps/details?hl=en&id=org.sufficientlysecure.keychain) application.
