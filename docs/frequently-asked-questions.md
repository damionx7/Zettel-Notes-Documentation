---
title: Frequently Asked Questions
tags:
  - getting started
  - troubleshooting
---

Answers to the questions asked most often in [GitHub issues](https://github.com/damionx7/Zettel-Notes-Documentation/issues) and [Discussions](https://github.com/damionx7/Zettel-Notes-Documentation/discussions).

## Getting started

### How can I open my existing notes?

Add the folder that contains them as a [repository](repository/index.md): open the main menu, select **Repositories** and tap **+**. Zettel Notes reads every supported file in that folder and its subfolders, and edits are saved straight back to the same files.

To keep using another app (such as Obsidian) on the same notes, add the same folder, or sync both apps to the same [Git, Dropbox, WebDAV or SFTP](repository/synchronization/index.md) location.

### Where are notes in the App Folder stored?

In the app's private storage, which other apps and file managers cannot access:

```
/data/data/org.eu.thedoc.zettelnotes/notes
```

To reach these files from other apps, [mount internal repositories](repository/index.md#2-mount-mount) so they appear in the Android **Files** (Documents) app, or use [Git sync](repository/synchronization/git.md). The [Storage Manager](storage-manager.md) shows how much space they use.

### Why can't I attach any file from my phone's storage?

Android's scoped storage stops apps from reading arbitrary files. Zettel Notes can only open files inside its own storage, inside a repository folder you added, or a file you pick through the system file picker. This protects your privacy and cannot be bypassed by the app.

### Which characters can't I use in filenames?

Zettel Notes follows the same filename rules as Dropbox, so that notes sync everywhere. These characters are not allowed and are replaced when you create or rename a note:

```
/ \ < > : " | ? * .
```

## Notes and dates

### Why does the Notes List show the wrong creation date, or 00:00 as the time?

Android does not record when a file was created, and sync changes the file's dates. Store the date in the filename or in the frontmatter instead. The `date:` value must use the format `yyyyMMddHHmmss`, e.g. `date: 20261028143000`. Other formats such as `2026-10-28 14:30` are not recognised.

See [Note Creation Date](note/created-date.md) for the step-by-step setup.

### Why does the note preview show fewer lines than "Content Max Lines"?

To keep the notes list fast, only the first 50 words of each note are loaded for the preview. If those 50 words fit in fewer lines than your **Content Max Lines** setting, the preview is shorter, and the last word may be cut off.

### Why does a widget or the Notes List show a different title than I expected?

The title comes from your repository's [Prefer Title From](repository/index.md#6-prefer-title-from) setting: YAML `title`, first heading, filename or first line. To always show filenames, enable the filename option in `Settings > Notes List`.

## Search

### Why does searching for `key: value` from YAML find extra notes?

Search uses SQLite full-text search, which matches **words** rather than exact text. `appbar: teal` finds every note containing the word `appbar` followed later by the word `teal`, not only notes with that exact line.

To narrow it down, add more words from the line you want, or open the note from **Attributes** in the left drawer, which lists the values of each [YAML property](saved-searches.md#search-by-attribute).

### Why doesn't a search that starts with `-word` exclude anything?

An excluding term (`-word`) only works after at least one normal term. Search `ideas -draft`, not `-draft` on its own. See [Search syntax](saved-searches.md#search-syntax).

## Sync

### I changed a note on my computer, but the app still shows the old version

After a sync, Zettel Notes rescans downloaded files in the background, which can take a moment for large files or repositories.

1. Wait a few seconds and pull down to refresh the notes list.
2. Check the sync log: a line such as `download /notes/Note.md` means the file arrived.
3. Open the file with your phone's file manager to confirm its content.
4. If the file is up to date but the app is not, report it in an [issue](https://github.com/damionx7/Zettel-Notes-Documentation/issues) with your sync method and the sync log.

### How do I sync safely with Obsidian or another app?

- Let the first Git clone finish completely before editing anything. If the clone shows an error, delete the repository in Zettel Notes and add it again rather than continuing.
- Sync before you start editing on a device, and again when you finish.
- Avoid editing the same note on two devices before they have synced.
- Choose how conflicts are handled in [Conflict Resolution](repository/synchronization/index.md#configure-conflict-resolution).
- Keep [automatic backups](auto-backup.md) turned on.

### How do I use Nextcloud?

Use [WebDAV sync](repository/synchronization/webdav.md) with your Nextcloud WebDAV URL:

```
https://SERVER/remote.php/dav/files/USERNAME/SUBFOLDER/
```

Replace `SERVER` with your Nextcloud address, `USERNAME` with your Nextcloud username and `SUBFOLDER` with the folder to sync, e.g. `https://thedoc.eu.org/nextcloud/remote.php/dav/files/dax/znotes/`.

## Backup and recovery

### How do I get back a deleted or overwritten note?

Try these in order:

1. **Recycle bin:** deleted notes stay in each repository's [recycle bin](recycle-bin.md) for 7 days by default.
2. **Note history:** open the note in the editor and use the [Revision button](note/editor/index.md#revision-note-history-button) to restore an earlier version.
3. **Backups:** restore from an [automatic backup](auto-backup.md#restore-a-backup).
4. **Sync history:** with Git sync, earlier versions are in the repository's commit history (`Git settings > List Commits`).

### Can I edit two notes side by side?

Not reliably yet. Editing two notes at the same time in split screen or Samsung DeX has caused one note to overwrite the other ([issue #451](https://github.com/damionx7/Zettel-Notes-Documentation/issues/451)). Until this is fixed, edit one note at a time.

## Encryption

### How does encryption work?

Zettel Notes offers four methods: end-to-end, password-based, OpenPGP and in-app PGP key. Your password is never stored, so if you lose it, encrypted notes cannot be recovered. See [Note Encryption](repository/encryption.md).

## Installing and updating

### How do I get updates without the Play Store?

Add the [Zettel Notes F-Droid repository](download.md#f-droid-repository) to an F-Droid client.

### F-Droid downloads are slow

The F-Droid repository server can occasionally be slow. If so, use this mirror instead:

```
https://gitlab.com/royalhacker/fdroid-live/-/raw/master
```

### How do I become a beta tester?

1. Join the [Google Group](https://groups.google.com/g/znotes).
2. Sign up at <https://play.google.com/apps/testing/org.eu.thedoc.zettelnotes>.

## Feedback

### Where do I report a bug or request a feature?

- **Bugs:** open an [issue](https://github.com/damionx7/Zettel-Notes-Documentation/issues). Include your app version, Android version, device, the steps to reproduce, and screenshots or a screen recording.
- **Feature requests and questions:** start a [discussion](https://github.com/damionx7/Zettel-Notes-Documentation/discussions). Vote on existing requests instead of opening duplicates.
