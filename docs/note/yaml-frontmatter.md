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

Following YAML properties are supported

1. **Title**
2. **Tag(s)**
3. **Author(s)**
4. **Source or Url**
5. **Bookmark or Pin or Star**
6. **Id or uid** : should be a number with minimum length of 6

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

These are static variables, defined by `${yaml-property}$` in content of the note. For eg. 
```YAML
---
account: savings
---

We should have atleast ${account} type of account. 
```

This will render as `We should have atleast savings type of account` in view mode.

!!! information

      To disable YAML variables, toggle `Settings > Editor and Viewer > YAML variables`.