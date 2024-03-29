---
title: Editor
sidebar_position: 1
---

You can enter edit mode by clicking on edit button in View Mode. 

!!! tip

    You can directly open note in edit mode. Just change `Settings > Editor > Default Mode > Edit`


Editor has text editing area in center and editor buttons at bottom of the screen.

<figure>
<img src="/assets/img/editor.png" alt="Editor"/>
 <figcaption>Editor</figcaption>
</figure>

When you first open the editor then last edited position is focused. To change the initial selection position for a note file, go to `Settings > Editor and Viewer > Initial Cursor Position`. 4 options are provided 

1. Start of note
2. End of note
3. Last edit position
4. None (Don't set initial cursor)

## Editor Buttons

### Markdown Buttons

- This is the first editor button.
- Eleven Markdown buttons are provided by default.
- Clicking on the button will enter specific markdown format (eg. `*` for bold) in editor.
- If you select some text and then click on markdown button, then that text will be surrounded with markdown format defined in the button.
- To add new markdown button, just select edit button (floating pencil button).

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

!!! information

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

### Revision (Note History) Button

Zettel Notes stores patch or diff of changes made in a note. You can browse and restore previous revisions of a note with this button.

<figure>
<img src="/assets/img/editor-buttons-revision.png" alt="Revision Button"/>
 <figcaption>Previous Revisions of a Note</figcaption>
</figure>

### Coffee Button

This button keeps screen awake for the pre-defined time. Single press will trigger the button while long press will stop it.

Coffee duration of 5 min, 10 mins and 30 mins are provided.

### Text Snippets Button

Text snippet has 2 parts. Expander and Expansion. When user clicks on expander then its expansion will be entered in editor at the selected position.

To add a new snippet just click on the floating edit button.

Eg. if Expander is `omg`, Expansion is `Oh My God` then clicking on Expander `omg` in Text Snippets will enter `Oh My God` in editor

### Citations Button

This button is integrated with [BibTex](../../bibtex.md) manager

Click to enter citation and long press button to generate bibliography.

### Emoji Button

Application has support for converting Emoji alias (in edit mode) to emojis (in view mode). Eg. `:smile:` is converted to 😄 in view mode. Clicking on an emoji will insert its alias in editor.

!!! information

    For full list of supported emojis and aliases, [follow this link](https://github.com/vdurmont/emoji-java/blob/master/EMOJIS.md)


<figure>
<img src="/assets/img/editor-buttons-emoji.png" alt="Emoji Button"/>
 <figcaption>Emoji Button</figcaption>
</figure>

### Settings Button

You can configure the order of editor buttons or enable / disable editor buttons with this button. Click on add button in setting screen to add groups. All the buttons below a group will be added in the group.

!!! tip

        Click on a group to change its icon.