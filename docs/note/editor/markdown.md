---
title: Formatting
tags:
  - editor
  - formatting
  - markdown
---

Zettel Notes follows the [CommonMark](https://spec.commonmark.org/0.30/) Markdown specification, with the extensions listed below.

### Bold

- Enclose text with `**` or `__` eg. `**text**` or `__text__`
- Rendered as **text**

### Italics

- Enclose text with `*` or `_` eg. `*text*` or `_text_`
- Rendered as *text*

### Spoiler 

- Enclose text with `>!` and `!<`, e.g. `>!hidden text!<`
- Click to reveal text in viewer mode
- You can also long press to copy text in spoiler

### Strike-through 

- Enclose text with `~~` eg. `~~strike~~`
- Rendered as ~~strike~~

### Superscript 

- Enclose text with `^` eg. `^superscript^` 
- Rendered as <sup>superscript</sup>

### Subscript 

- Enclose text with `~` eg `~subscript~`
- Rendered as <sub>subscript</sub>

### Text Highlight

- Enclose text with `==` eg `==highlight==`
- Rendered as <mark>highlight</mark>

### Heading

- Heading is defined as `#` in front of text
- 6 Heading levels are supported
- eg. `# Heading` is interpreted as Heading level 1 and `## Heading` as level 2

### Code Highlighting

- Two types of code formatting are supported:
- Inline code `code`
  - Enclose text with single backtick (`)
- Code blocks
  - Enclose text with three backticks (```) and a new line.

```
Code blocks
```

Code blocks are syntax-highlighted when you name the language after the opening backticks, e.g. ` ```bash `. Tap a code block in view mode to copy its contents.

- For a dark code theme, tick **Dark Theme** in the [Markdown style](../../themes/markdown-theme.md).
- Syntax highlighting can be turned off in `Settings > Editor and Viewer`.

### Link

- To create a link enclose the description in brackets and link in parentheses.
- Eg. `[Official Website](https://thedoc.eu.org)`
- Rendered as [Official Website](https://thedoc.eu.org)
- You can also directly create link without description `<https://thedoc.eu.org>`.

### Lists

- Unordered (`- Unordered`)
- Unordered (`- Unordered`)
  
1. Ordered (`1. Ordered`)
2. Ordered (`2. Ordered`)

### Blockquote 

- Add `>` at the start of a line, e.g. `> this is a blockquote`

> this is a blockquote 

### Task lists

Defined via `- [ ] ` in front of text. It is rendered only when bracket is the first thing in line.

Tasks can be ticked from View Mode

- [ ] Pending with empty bracket
- [x] Completed with `x` or `X` in bracket


### Custom checkboxes

The character in task bracket can be modified to show different statuses. The following custom checkboxes are supported:

- `- [-] Cancelled`
- `- [!] Important`
- `- [?] More Info`
- `- [>] Scheduled`.

### Thematic break 

- Use `---`, `***`, `___` in a new line
- rendered as

---

### Comments

- Following formats are supported
  - `[comment]: This is a comment`
  - `%%comment%%`
- Comments are not shown in View Mode

### Tables

- Defined as

```
|Column 1 | Column 2 |
|---------|----------|
| Row 1   | Row 1    |
| Row 2   | Row 2    |
```

- It will be rendered as 

|Column 1 | Column 2 |
|---------|----------|
| Row 1   | Row 1    |
| Row 2   | Row 2    |


### Images

- Defined as `![Description](image-location.png)`
- Image location has to be relative to the note file or use `/` in start if absolute location is used.
- Obsidian-style embeds such as `![[image.png]]` are also supported. The format used when inserting images can be changed in `Settings > Editor and Viewer`.
- `![](file.pdf)` shows a preview of a PDF. See [Gallery and Media](../../gallery.md) for viewing, editing and pasting images.
- To centre an image, wrap it in `<center>` tags.

!!! tip

    To use specific width for images use HTML format. For eg. to set image width as 50%, use `<img src="https://picsum.photos/id/237/1024/800" width="50%"/>`
 
### Footnotes

Footnotes allow you to add references for specific text in a note. 

To create a footnote, add `[^1]` after the text, e.g. `Text[^1]`. The identifier (`1`) can be any number or word without spaces. Then define the footnote at the end of the note, e.g. `[^1]: This is the reference.`

## LaTeX

**Inline LaTeX**

Enclose the formula in single `$`, e.g. `$E = mc^2$`.

**Block LaTeX**

Enclose the formula in `$$` on separate lines:

```
$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$
```

!!! tip

    The single-`$` inline syntax can be turned off in settings if it conflicts with prices or other uses of `$`. LaTeX also renders in notes [shared as PDF](../share-note/pdf.md).

### Maps

`![map](latlong:LATITUDE,LONGITUDE)` shows a map image for that location. The [Location plugin](../../plugins/location-plugin.md) can insert the current location.

### Colours

Hex colour values such as `#FF5722` are displayed as colours in view mode [v2.9.6](../../changelog.md#296){ .zn-version }.

## Supported HTML tags

* Blockquote (`blockquote`)
* Center (`center`)
* Code (`code`, `pre`)
* Collapsible section (`details`, `summary`) [v2.9.7](../../changelog.md#297){ .zn-version }
* Emphasis (`<i>`, `<em>`, `<cite>`, `<dfn>`)
* Heading (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`)
* Highlight (`mark`)
* Keyboard input (`kbd`)
* Link (`a`)
* Lists (`ul`, `ol`)
* Strong Emphasis (`<b>`, `<strong>`)
* Superscript (`<sup>`)
* Subscript (`<sub>`)
* Strike-through (`<s>`, `<strike>`, `<del>`)
* Spoiler (`spoiler`)
* Underline (`<u>`, `ins`)
