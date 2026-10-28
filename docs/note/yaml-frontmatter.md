---
title: YAML Frontmatter
tags:
  - notes
  - yaml
  - metadata
---

Zettel Notes supports YAML frontmatter for note properties. The frontmatter must be the first thing in the note, enclosed by `---` lines. For example, this sets the title to `Note Title`:

```
---
title: Note Title
---

This is body of the note.
```

The following properties are supported:

1. **title** – The title of the note.  
2. **tag(s)** or **keywords** – One or more tags associated with the note. `keywords` is read for compatibility with Zettlr [v3.0.2](../changelog.md#302){ .zn-version }.  
3. **author(s)** – The author(s) of the note.  
4. **source** or **url** – The original source or URL reference.  
5. **bookmark**, **pin**, or **star** – Used to mark important notes.  
6. **id** or **uid** – Must match the repository's [UID regex](../repository/index.md#1-uid-regex-uid_regex).  
7. **date** – At least 6 digits, typically in the format `yyyyMMddHHmmss`.

To specify multiple sources for a note, use array format. eg.

```yaml
---
source:
      - https://google.com
      - https://gmail.com
---
```

!!! tip

      YAML frontmatter can also be specified as default text for notes that will be added to new notes in [repository settings](../repository/index.md#2-default-text)

## Org-mode notes

In `.org` notes, the note ID can be set with an Org properties drawer [v3.0.0](../changelog.md#300){ .zn-version }:

```
:PROPERTIES:
:ID: fedcba98-7654-3210-fedc-ba9876543210
:END:
```

Org-roam style links are recognised too [v2.9.9](../changelog.md#299){ .zn-version }:

```
[[id:fedcba98-7654-3210-fedc-ba9876543210][Linked Note Title]]
```

## YAML Variables


Reference any frontmatter property in the note body with `${property}$`.

```YAML
---
account: savings
---

We should have at least ${account}$ type of account.
```

This will render as `We should have at least savings type of account` in view mode.

The following built-in variables are also available; their values come from the note itself.

- `${id}$`
- `${title}$`
- `${filename}$`
- `${mdate}$` (Last modified date)
- `${accessed}$` (Number of times note is opened)
- `${wordcount}$` 
- `${$yyyyMM$}$`
  - In this variable `yyyyMM` will be replaced by the corresponding date time. To learn more about this format read [official documentation](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html).

!!! info

      To disable YAML variables, toggle `Settings > Editor and Viewer > YAML variables`.
