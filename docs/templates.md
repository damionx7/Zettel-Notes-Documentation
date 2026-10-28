---
title: Templates
---

Templates are reusable starting text for new notes.

## Dynamic variables

These variables can appear anywhere in a template and are replaced when the note is created:

- `$id$` :  Note ID
- `$title$` : Note Title
- `$filename$` : Filename
- `$$yyyyMMdd$$` : Date variable
- `$default-text$`: Add Repository Default Text
- `$custom$` : Custom variable

!!! tip

    Date variables use two `$` on each side. See [SimpleDateFormat](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html) for the pattern syntax.


## Custom Variables

Any other name between single `$` signs, e.g. `$custom$`, is a custom variable. When you create a note from the template, you are asked for its value, and every occurrence is replaced.

<figure>
<img src="/assets/img/templates-custom-variable.png" alt="add note screen"/>
 <figcaption>Usage of custom template variable</figcaption>
</figure>

## Default template

To make a template the default, long-press it and select **Set as Default**. It is then applied to every fleeting note created with the add button in the notes list.
