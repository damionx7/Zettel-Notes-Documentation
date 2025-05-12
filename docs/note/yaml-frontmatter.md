---
title: YAML Frontmatter
---

Zettel Notes support YAML frontmatter to define various note properties. It should be the first text in a note and defined by surrounding yaml with `---` and new line. For example following YAML sets note title as `Note Title`.

```
---
title: Note Title
---

This is body of the note.
```

Following YAML Properties are supported

1. **title** – The title of the note.  
2. **tag(s)** – One or more tags associated with the note.  
3. **author(s)** – The author(s) of the note.  
4. **source** or **url** – The original source or URL reference.  
5. **bookmark**, **pin**, or **star** – Used to mark important notes.  
6. **id** or **uid** – Must match the repository's Id regex pattern.  
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

## YAML Variables


These are static variables, defined by `${yaml-property}$` in content of the note.

```YAML
---
account: savings
---

We should have atleast ${account} type of account. 
```

This will render as `We should have atleast savings type of account` in view mode.

Apart from this following static YAML variables are supported. These variables are populated from the note.

- `${id}$`
- `${title}$`
- `${filename}$`
- `${mdate}$` (Last modified date)
- `${accessed}$` (Number of times note is opened)
- `${wordcount}$` 
- `${$yyyyMM$}$`
  - In this variable `yyyyMM` will be replaced by the corresponding date time. To learn more about this format read [official documentation](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html).

!!! information

      To disable YAML variables, toggle `Settings > Editor and Viewer > YAML variables`.
