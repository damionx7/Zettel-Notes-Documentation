---
title: Note Creation Date
tags:
  - notes
  - yaml
  - dates
---

Android does not record when a file was created, and synced files lose that information anyway (see [issue #392](https://github.com/damionx7/Zettel-Notes-Documentation/issues/392#issuecomment-2844946465)). To show a reliable creation date in the **Notes List**, store it in the filename or in the frontmatter.

If neither is present, the Notes List shows the file's **Last Modified** time.

!!! warning

    After changing repository or template settings, tap **Save** in the lower-right corner or the change is lost.

## Method 1: Date in the filename

Go to `Repositories > Edit Repository` and set **Date Format** to `yyyyMMddHHmmss`.

New notes are then named like `20261028143000.md`, and the Notes List shows that date and time.

## Method 2: Date in the frontmatter

Add `date: $$yyyyMMddHHmmss$$` to the frontmatter of new notes. When the note is created, the variable is replaced with the current date and time. You can do this in either of two places.

### In repository default text

Go to `Repositories > Edit Repository` and add this to **Default Text** (or add the `date` line to frontmatter that is already there):

```yaml
---
date: $$yyyyMMddHHmmss$$
---
```

### In a template

Go to `Templates > Edit Template` and include the `date` line in the template's frontmatter:

```yaml
---
title: "$title$"
date: $$yyyyMMddHHmmss$$
tags:
---

# $title$
```

!!! note

    If the template also includes `$default-text$` and the repository default text already sets `date`, remove one of them to avoid a duplicate key.

## Display format

To change how dates are shown in the Notes List, Gallery and Recycle Bin, go to `Settings > Theme > Misc > App-Wide Date Format`.
