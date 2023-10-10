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

1. Title
2. Tag(s)
3. Author(s)
4. Source or Url
5. Bookmark or Pin or Star
6. Id or uid
   - should be number with minimum length of 6

:::tip
YAML frontmatter can also be specified as default text for notes that will be added to new notes in [repository settings](../repository/#2-default-text)
:::