---
title: Navigation
tags:
  - navigation
  - organisation
---

Zettel Notes has two side drawers: the **left drawer** for moving between repositories and collections of notes, and the **right drawer** for working within the open note.

## Left drawer

Open it with the menu button or by swiping right on the notes list [v2.9.2](changelog.md#292){ .zn-version }.

It contains:

- **Repositories:** switch between [repositories](repository/index.md). You can also long-press the home button to change repository quickly.
- **Recent notes:** the notes you opened most recently.
- **[Saved searches](saved-searches.md#saved-searches)**, with the number of matching notes.
- **Attributes:** tags, authors and any [YAML property](note/yaml-frontmatter.md) you add with **Add Attribute**. Tap a value to [search](saved-searches.md#search-by-attribute) for it.
- **[Calendar](calendar.md)**, **[Gallery](gallery.md)** and **[BibTeX](bibtex.md)**.
- **Installed [plugins](plugins/index.md)**.
- The **sync button**, for [manual synchronization](repository/synchronization/index.md#manual-synchronization).

To choose which sections appear, go to `Settings > Notes List`.

## Right drawer

[v2.9.5](changelog.md#295){ .zn-version }

The right drawer has four tabs:

| Tab | Shows |
|---|---|
| **Outline** | The headings of the open note; tap one to jump to it |
| **Navigation** | Navigation history; long-press an entry to pin or unpin it |
| **Backlinks** | Notes that link to the open note |
| **Tags** | Tags |

The [Memo](note/memo.md) can also be opened from the right drawer.

## Folders

Repositories can contain subfolders. A breadcrumb (folder navigation) bar at the top of the notes list shows the current folder path.

Folders can be renamed and deleted from the notes list. To open a folder from inside a note, use a [folder link](note/editor/zettelkasten.md#wiki-style-links) such as `[sub-folder](/sub-folder/)`.
