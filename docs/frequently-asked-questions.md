---
title: Frequently Asked Questions
---

## What is the location of notes in App Folder?

- They are located in private storage of application, which is not accessible to normal users - `/data/data/org.eu.thedoc.zettelnotes/notes`

## How can I access my existing notes?

- Create a new repository and select the folder in your device's internal storage that contains your note files.

## F-droid downloads are slow

- Sometimes, it happens that the server on which f-droid repository is hosted can be slow to respond.
- In that case, try using alternate url for repository.

```
https://gitlab.com/royalhacker/fdroid-live/-/raw/master
```

## How to use Nextcloud synchronization?

- Obtain the WebDAV URL for your Nextcloud instance. It should be in the following format `http://SERVER/remote.php/dav/files/USERNAME/SUBFOLDER/`
- Replace `SERVER` with the URL of your Nextcloud instance, such
as `thedoc.eu.org/nextcloud/`. Replace `USERNAME` with your Nextcloud username such as `dax`. If you have set up subfolder
synchronization,replace `SUBFOLDER` with the name of your subfolder such as `znotes`.
- Example of a valid url `https://thedoc.eu.org/nextcloud/remote.php/files/dax/znotes/`.
- Enter the WebDAV URL you obtained in webdav synchronization dialog.

## How to update app if I don't use play store?

- Download from alternate app store; f-droid and add my [f-droid repository](https://thedoc.eu.org/fdroid/).

## How to be a beta tester?

1. Join google groups first <https://groups.google.com/g/znotes>
2. Now Join beta testing on  play store <https://play.google.com/apps/testing/org.eu.thedoc.zettelnotes>

## How does encryption work?

- AES Encryption key generation takes two inputs a) User provided Password b) Unique Salt.
- Salt is generated unique for every app installation.
- Decryption can only be done by zettel notes app on user device
- If you uninstall zettel notes app or forget password, notes can\'t be decrypted.
- Password is not stored in zettel notes. Only asymmetric password hash is stored, which is compared with the user entered password on app start. So, you should be extra careful when setting password.

## Why can't I attach other files on storage in Zettel Notes?

- This is due to Android storage access restrictions and the introduction of Scoped Storage in recent Android versions
- Apps are no longer allowed unrestricted access to all files on the device
- Zettel Notes can only access files within its own app-specific storage or files that you explicitly select through the system file picker
- This limitation is necessary to protect user privacy and security.