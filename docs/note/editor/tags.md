---
title: Tags
---

Tags are labels that facilitate efficient organization and retrieval of your notes.

## Creating Tags

Type hash (`#`) followed by keyword. Eg. `#tag`.

To add tags in [YAML frontmatter](../yaml-frontmatter.md), use `tags:` (`tag:` also works):

```yaml
---
tags:
    - tag
    - tag with space
---
```  

!!! note

    For tags with space, special formatting (e.g., `#tag with space#`) is required when creating tag in content.

## Nested / Hierarchical Tags

These tags are used to create convenient taxonomies.

Use forward slashes (`/`) to create hierarchies. Eg. `#sports/football` and `#sports/cricket`.

## Tag Format Rules

Letters, numbers, underscore (`_`), hyphen (`-`), and forward slash (`/`) are allowed.

Tags are case-insensitive and will display casing of first occurrence. For instance, if you create `#Tag` and later add `#TAG`, both will be displayed as `#Tag`.

## Searching Tags

Use `#tag` in your search or click on a tag in a note.
