---
title: Editor
tags:
  - editor
---

To edit a note, tap the **Edit** button in view mode.

!!! tip

    To open notes directly in edit mode, set `Settings > Editor > Default Mode` to **Edit**.


The editor has a text area in the centre and a row of editor buttons at the bottom of the screen.

<figure>
<img src="/assets/img/editor.png" alt="Editor"/>
 <figcaption>Editor</figcaption>
</figure>

By default, the editor places the cursor at the last edited position. To change this, go to `Settings > Editor and Viewer > Initial Cursor Position` and choose one of:

1. Start of note
2. End of note
3. Last edit position
4. None (Don't set initial cursor)

## Editor Buttons

The editor buttons are shown in a row at the bottom of the screen. You can scroll right and left to see them all, press and hold to see the title of a button, and use the Settings button to change the order in which they're shown.

### Markdown Buttons

- This is the first editor button.
- Eleven Markdown buttons are provided by default.
- Clicking on the button will enter specific markdown format (e.g. `**` for bold) in editor.
- If you select some text and then click on markdown button, then that text will be surrounded with markdown format defined in the button.
- To add new markdown button, just select edit button (floating pencil button).
- Each Markdown button can have its own icon [v2.8.3](../../changelog.md#283){ .zn-version }.

<figure>
<img src="/assets/img/editor-buttons-markdown-button.png" alt="Markdown Buttons"/>
 <figcaption>Markdown Buttons</figcaption>
</figure>

### Heading button

- Click to insert [heading format](./markdown.md#heading) in front of line.
- You can remove heading or add heading from Level 1 to Level 6 heading.

### Zettelkasten Buttons

1. Insert Tag
2. Insert Authors
3. Insert Note Link
4. Extract Note

### Attachment button

The folder where attachments are stored is defined by [attachment location in repository](../../repository/index.md#7-default-location-for-attachments).

- Link
- Audio recording
- Drawing
- Camera Image
- File from storage
- Media file from [Gallery](../../gallery.md)

!!! info

    You can also download the link, if it is an image file.

### Text manipulation buttons

- Cut
- Copy
- Paste
- Undo
- Redo
- Lock / Unlock editing
- Wrap / Unwrap
- Text Settings
- Select Paragraph
- Toggle Keyboard
- Fullscreen

### Line manipulation buttons

- Increase Indent
- Decrease Indent
- Select Line(s)
- Delete Line(s)
- Move Line up
- Move Line down
- Goto Previous Line
- Goto Next Line

!!! tip

    If you long press Goto Previous Line or Goto Next Line buttons, selection will be set to start or end of file respectively.

### Formatting and list buttons

- Toggle Blockquote on the selected lines [v2.8.4](../../changelog.md#284){ .zn-version }
- Ordered List and Unordered List [v2.8.3](../../changelog.md#283){ .zn-version }
- Toggle Checkbox, and Check / Uncheck All tasks
- Bold, italics, underline and highlight are also offered in the text selection menu

### Navigation buttons

- Go to Line [v2.4.3](../../changelog.md#243){ .zn-version }
- Scroll to Top and Scroll to Bottom
- Rotate Screen [v2.8.3](../../changelog.md#283){ .zn-version }

### Search and replace

The search and replace button finds text in the note and replaces it. Regular expressions are supported [v2.9.3](../../changelog.md#293){ .zn-version }, and the replacement can be empty to delete matches.

### Other buttons

- **Download online images:** downloads online images in the note to local storage [v2.4.4](../../changelog.md#244){ .zn-version }.
- **Meta keys toolbar:** shows a row of keys such as Ctrl and arrows, for keyboard shortcuts on touch screens [v2.9.1](../../changelog.md#291){ .zn-version }.
- **Clean sync tags:** cleans up sync tags in the note [v2.7.6](../../changelog.md#276){ .zn-version }.
- **Memo:** opens the [Memo](../memo.md); long-press to add text to it.
- **Add Icon:** inserts an icon [v2.8.3](../../changelog.md#283){ .zn-version }

### Revision (Note History) Button

Zettel Notes stores patch or diff of changes made in a note. You can browse and restore previous revisions of a note with this button.

<figure>
<img src="/assets/img/editor-buttons-revision.png" alt="Revision Button"/>
 <figcaption>Previous Revisions of a Note</figcaption>
</figure>

### Coffee Button

Keeps the screen awake for a set time (5, 10 or 30 minutes). Tap to start; long-press to stop.

### Text Snippets Button

A text snippet has 2 parts: *Expander* and *Expansion*. When a user taps on an expander, its expansion will be entered in the editor at the selected position.

For example, if the expander is `otoh` and the expansion is `on the other hand`, clicking on the expander `otoh` in Text Snippets will enter `on the other hand` in the editor. See the built-in "Heading with Subtasks" snippet for example.

The expander may also contain date and/or time placeholders in [SimpleDateFormat](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html); surrounding these with `$$` will cause the expansion to expand them using the current date and time. For example, `$$yyyy-MM-dd (EE)$$` will be expanded to the current date, formatted like `2024-07-26 (Fri)`.

> To add a new text snippet or edit an existing one, just tap on the floating edit button.

!!! tip

    You can quickly search for and insert text snippets by typing `:?` or `::` while editing. Text snippets can also use the `$uuid$` variable.

### Citations Button

This button is integrated with [BibTex](../../bibtex.md) manager

Click to enter citation and long press button to generate bibliography.

### Emoji Button

Application has support for converting Emoji alias (in edit mode) to emojis (in view mode). Eg. `:smile:` is converted to 😄 in view mode. Clicking on an emoji will insert its alias in editor.

!!! info

    For full list of supported emojis and aliases, [follow this link](https://raw.githubusercontent.com/felldo/JEmoji/refs/heads/master/public/emojis.json)


<figure>
<img src="/assets/img/editor-buttons-emoji.png" alt="Emoji Button"/>
 <figcaption>Emoji Button</figcaption>
</figure>

### Focus Mode Button

Click to enable / disable focus mode while editing. 

<figure>
<img src="/assets/img/editor-button-focus-mode.webp" alt="Focus Mode"/>
 <figcaption>Focus Mode</figcaption>
</figure>

!!! tip

    You can enable Focus Mode for all notes from Settings > Editor and Viewer > Focus Mode.

### Insert Table Button

<figure>
<img src="/assets/img/editor-button-insert-table.png" alt="Insert Table"/>
 <figcaption>Insert Table</figcaption>
</figure>

### Settings Button

You can configure the order of editor buttons or enable / disable editor buttons with this button. Click on add button in setting screen to add groups. All the buttons below a group will be added in the group. Swipe a button to remove it from the toolbar.

!!! tip

    Tap a group to change its icon and the number of columns it shows [v2.8.4](../../changelog.md#284){ .zn-version }. The icon of every built-in button can be changed too.

The toolbar layout can be included in [backups](../../auto-backup.md#other-data-you-can-back-up).

## Typing shortcuts

Type these while editing to open a picker:

| Type | To insert |
|---|---|
| `[[` | a link to a note |
| `#?` | a tag |
| `@?` | an author |
| `:?` or `::` | a text snippet |

The trigger text can be changed, and given several aliases separated by spaces, in `Settings > Editor and Viewer > Text Shortcuts` [v3.0.0](../../changelog.md#300){ .zn-version }. They can also be turned off.

## Links in the editor

Long-press a link in the editor to open it [v2.9.6](../../changelog.md#296){ .zn-version }. In view mode, long-press a link to see its URL.

## Editor settings

These options are in `Settings > Editor and Viewer`:

| Setting | Effect |
|---|---|
| Auto-Save when Idle | Saves the note automatically after a pause; the timeout can be changed |
| Large headings | Shows headings in proportionate sizes while editing |
| Line numbers | Shows line numbers in the editor |
| Line wrap | Wraps long lines in the editor and viewer |
| Margins | Changes the note margins |
| Spellcheck | Turns the keyboard spellchecker on or off |
| Automatic list numbering | Continues ordered lists automatically |
| Highlight double-space endings | Marks lines ending with two spaces (a Markdown line break) [v3.0.8](../../changelog.md#308){ .zn-version } |
| Focus Mode | Enables focus mode for all notes |

A YAML checker in the editor flags invalid [frontmatter](../yaml-frontmatter.md) [v2.7.8](../../changelog.md#278){ .zn-version }.
