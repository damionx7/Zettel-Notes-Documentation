---
title: Notes List
tags:
  - notes
  - organisation
---

The notes list is the main screen of Zettel Notes. It shows the notes and folders of the current repository.

## Layouts

Choose between three layouts [v2.2.0](changelog.md#220){ .zn-version }:

- Compact
- Normal
- Grid

In `Settings > Notes List` you can also:

- show or hide note content, and set how many lines and what text size it uses (the preview is built from the first 50 words of the note, so it can be shorter than the line limit)
- show the filename instead of, or with, the title
- show an icon for each [note type](note/note-types.md) (`Modify Info Shown > Icons`)
- turn the divider between notes on or off [v3.0.2](changelog.md#302){ .zn-version }
- adjust corner radius, padding and text size (`Display`)
- customise the add note button

## Sorting

Notes can be sorted alphabetically, by edit time, by creation time, by word count, by filename, or by how often they are opened. For reliable creation dates, see [Note Creation Date](note/created-date.md).

## Selecting several notes

Long-press a note to start multi-selection, then tap other notes to add them [v2.1.4](changelog.md#214){ .zn-version }. With several notes selected you can:

- **Copy** or **move** them to another folder or repository
- **Share** them
- **Delete** them (they go to the [recycle bin](recycle-bin.md))

## Bookmark and pin

Notes can be bookmarked or pinned from the notes list. You can also bookmark a note from its frontmatter with `bookmark: true` (see [YAML Frontmatter](note/yaml-frontmatter.md)).

## Folders

Tap a folder to open it; the breadcrumb bar at the top shows the current path. Folders can be renamed or deleted. See [Navigation](navigation.md#folders).
