---
title: Zettelkasten Method
---

Zettel Notes has first class support for Zettelkasten note taking method.

## Features

### Backlinks

Backlinks are the notes which contain link for the existing note. In [note information dialog](../index.md#note-information), all note backlinks are listed. You can click on any backlink note to open it.

### Wiki style links

Type `[[` in editor to show note list and select any note to insert markdown link for the note. eg `[[note.md]]`

!!! tip

    To configure note links, go to `Settings > Editor > Link Style`. You can select among `[[filename]]`, `[[filename.md]]`, `[[filename|title]]`, `[[filename.md|title]]`, `[[date]]`, `[[date]] title`, `[title](filename)` and `[title](filename.md)`.

To create folder links, enter the absolute or relative folder path and add '/' at the end of link eg. `[sub-folder](/sub-folder/)`. Clicking on this link will open the `sub-folder` folder.

### Tags

- Tags are denoted by `#tag` or specifying tag in yaml
- Type `#?` to show tag search dialog

## Authors

- Authors are denoted by `@author` or specifying author in yaml
- Type `@?` to show author search dialog

## New Note from selection

You can create new note from selected text in editor. Just select some text in editor and click on `Extract Note` editor button in [Editor](../editor/index.md)

<figure>
<img src="/assets/img/editor-buttons-extract-note.jpeg" alt="Extract Note"/>
 <figcaption>Extract note editor button</figcaption>
</figure>

### Table of contents

To display table of contents, add `[TOC]` tag anywhere in note in a new line.

To enable table of contents for all notes, tick `Table of Contents (TOC)` settings option in `Settings > Editor and Viewer`.

!!! tip

    Table of contents can be customized per note using the following `[TOC:min=1,max=2,symbol=round]` syntax. Following symbols are supported `dash`, `diamond`,`dot`, `dot_large`,and `square`. Here `min` and `max` are the minimum and maximum heading levels to use.

### Inline Heading links

To create inline heading links add # in front of link eg. `[Heading](#heading)`. Clicking on inline heading link will scroll to the specific heading. You will need to replace spaces and non-alphanumeric characters in heading with hypen in the link. 

!!! example

    Inline link for `# This is a heading` will be `[link](#this-is-a-heading)`.

## Lean more about Zettelkasten method 📖

This note taking method is based on zettel or short notes based on a single idea. Main strength of this method lies in interlinking notes and backlinks.

Sascha has described this method is more detail. Please checkout his blog post at https://zettelkasten.de/introduction/.
