---
title: Frequently Asked Questions
---

## What is the location of notes in App Folder?

- In the app's private storage, which other apps and file managers cannot access: `/data/data/org.eu.thedoc.zettelnotes/notes`

## How can I access my existing notes?

- Create a new repository and select the folder in your device's internal storage that contains your note files.

## F-Droid downloads are slow

- The F-Droid repository server can occasionally be slow.
- If so, use this mirror instead:

```
https://gitlab.com/royalhacker/fdroid-live/-/raw/master
```

## How to use Nextcloud synchronization?

- Obtain the WebDAV URL for your Nextcloud instance. It has the format `https://SERVER/remote.php/dav/files/USERNAME/SUBFOLDER/`
- Replace `SERVER` with the URL of your Nextcloud instance, such
as `thedoc.eu.org/nextcloud/`. Replace `USERNAME` with your Nextcloud username such as `dax`. If you have set up subfolder
synchronization,replace `SUBFOLDER` with the name of your subfolder such as `znotes`.
- Example of a valid url `https://thedoc.eu.org/nextcloud/remote.php/dav/files/dax/znotes/`.
- Enter the WebDAV URL you obtained in webdav synchronization dialog.

## How to update app if I don't use play store?

- Add the [Zettel Notes F-Droid repository](download.md#f-droid-repository) to an F-Droid client to receive updates.

## How to be a beta tester?

1. Join the Google Group <https://groups.google.com/g/znotes>
2. Sign up for beta testing on the Play Store <https://play.google.com/apps/testing/org.eu.thedoc.zettelnotes>

## How does encryption work?

Zettel Notes offers four encryption methods: end-to-end, password-based, OpenPGP and in-app PGP key. Your password is never stored. If you lose it, encrypted notes cannot be recovered.

See [Note Encryption](repository/encryption.md) for how each method works.

## Why can't I attach other files on storage in Zettel Notes?

- This is due to Android storage access restrictions and the introduction of Scoped Storage in recent Android versions
- Apps are no longer allowed unrestricted access to all files on the device
- Zettel Notes can only access files within its own app-specific storage or files that you explicitly select through the system file picker
- This limitation is necessary to protect user privacy and security.