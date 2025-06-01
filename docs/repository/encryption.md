---
title: Note Encryption
---

You can encrypt notes on a per-repository basis. To enable encryption for a specific repository:

Go to: `Repositories → Long press on a repository → Encryption`

## Encryption Methods

### 1. End-to-End Encryption

- All **newly created notes** in this repository will be encrypted.  
- Your **password** is securely stored in the **Android Keystore**.  
- The **salt** and other decryption details are embedded within each encrypted note file.  
- You can **share encrypted notes** with others (e.g., via email); the recipient only needs the **password** to decrypt them.

### 2. Password-Based Encryption

- Notes are encrypted using a **user-defined password**.  
- If you **uninstall Zettel Notes** (which clears the SALT) or **forget the password**, the notes **cannot be decrypted**.  
- Decryption is possible **between Android devices** if the same `salt` is used.  
  - To do this, copy the salt from `Settings` → `Encryption Salt`  
- If two devices have the **same salt** and the user knows the password, encrypted notes can be **shared and decrypted** across devices.  
- Only an **asymmetric password hash** (using Argon2) is stored **locally**. This hash is used to verify the password during decryption.  
- The **user password is never stored** in Zettel Notes.  
- If the password is reasonably strong, it is **not possible** to recover it from the stored hash.

### 3. OpenPGP Encryption

- Notes are encrypted using a **PGP key provided by an external OpenPGP application**.  
- This is enabled through integration with [**OpenKeychain: Easy PGP**](https://play.google.com/store/apps/details?hl=en&id=org.sufficientlysecure.keychain).  

### 4. PGP Key Encryption

- An **in-app PGP key** is used for encryption.  
- You can **generate the key** via `Settings` → `Keys Manager`  
- Note encryption and decryption are **seamless**, similar to **End-to-End Encryption**.
