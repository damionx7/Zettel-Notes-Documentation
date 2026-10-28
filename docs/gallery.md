---
title: Gallery and Media
tags:
  - media
  - attachments
---

The Gallery shows all media files in a repository, including images, PDFs and other attachments.

To open it, open the left navigation drawer and tap **Gallery**. Use the filter chips at the top to show only certain types of file [v2.9.1](changelog.md#291){ .zn-version }.

<figure>
<img src="/assets/img/gallery-items.png" alt="Gallery"/>
 <figcaption>Gallery showing Media Files</figcaption>
</figure>

Long-press a media file to:

1. Rename it
2. Copy its link to paste into a note
3. Show the notes that use it
4. Open it in the system file manager
5. Create a launcher shortcut that opens it directly
6. Delete it

!!! tip

    To find media files no note links to, tap **Toggle Unused Media** in the top-right menu.

## Images

- **Image viewer:** images open in the built-in viewer, which shows all the images in the note.
- **Image editor:** edit images from the Gallery [v2.6.1](changelog.md#261){ .zn-version }.
- **Open with another app:** open an image in another installed app [v3.1.0](changelog.md#310){ .zn-version }. Images hosted online open in an in-app web view [v3.1.1](changelog.md#311){ .zn-version }.
- **Paste from clipboard:** paste images from the clipboard into the editor [v2.6.5](changelog.md#265){ .zn-version }.
- **Animated GIFs** play in view mode.

For image syntax, size and alignment, see [Formatting](note/editor/markdown.md#images).

## Audio

Audio attachments, including recordings in [audio notes](note/note-types.md#audio-note), play in the built-in audio player [v2.6.4](changelog.md#264){ .zn-version }.

## PDFs and other files

- `![](file.pdf)` shows a preview of the PDF in view mode [v2.8.8](changelog.md#288){ .zn-version }.
- A link to any other file, e.g. `[Report](report.docx)`, opens it in the matching Android app (documents, spreadsheets, presentations, audio, video and more).

## Where attachments are saved

New attachments go to the folder set in the repository's [default location for attachments](repository/index.md#7-default-location-for-attachments). Their filenames follow the attachment suffix set in `Settings > Editor and Viewer > Attachment Suffix` (see [Drawing Note](note/note-types.md#drawing-note)).
