---
title: Formatting
---

You can format text using these additional symbols. Zettel Notes follows Commonmark Markdown specification. [Learn more about Commonmark](https://spec.commonmark.org/0.30/).

### Bold

- Enclose text with `**` or `__` eg. `**text**` or `__text__`
- Rendered as **text**

### Italics

- Enclose text with `*` or `_` eg. `*text*` or `_text_`
- Rendered as *text*

### Spoiler 

- Enclose text with `>!!<`
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

### Text Higlight

- Enclose text with `==` eg `==highlight==`
- Rendered as <mark>highlight</mark>

### Heading

- Heading is defined as `#` in front of text
- 6 Heading levels are supported
- eg. `# Heading` is interpreted as Heading level 1 and `## Heading` as level 2

### Code Higlighting

- 2 types of code highlighting is supported
- Inline code `code`
  - Enclose text with single backtick (`)
- Code blocks
  - Enclose text with three backticks (```) and a new line.

```
Code blocks
```

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

- Defined via `>` in front of text eg. `> this is a blockquote 
`

> this is a blockquote 

### Task lists

Defined via `- [ ] ` in front of text. It is rendered only when bracket is the first thing in line

- [ ] Pending with empty bracket
- [x] Completed with `x` or `X` in bracket

!!! tip

    Tasks can be ticked from View Mode


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

!!! tip

    To use specific width for images use HTML format. For eg. to set image width as 50%, use `<img src="https://picsum.photos/id/237/1024/800" width="50%"/>`
 
### Footnotes

Footnotes allow you to add references for specific text in a note. 

To create a footnote add `[1]` after the text. eg `Text[^1]`. Here `1` is identifier and can be any number or word but cannot contain space. Add the footnote reference at the end of the document eg. `[1]: this is the reference`.

## Latex

**Inline Latex**

To use inline latex, enclose the latex formula in `$$`. eg. `$$\text{A long division \longdiv{12345}{13}$$`

**Block Latex**

To use block latex enclose the latex formula with `$$` and new line

```
$$
\text{A long division \longdiv{12345}{13}
$$
```

## Supported HTML tags

* Blockquote (`blockquote`)
* Center (`center`)
* Code (`code`, `pre`)
* Emphasis (`<i>`, `<em>`, `<cite>`, `<dfn>`)
* Heading (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`)
* Highlight (`mark`)
* Link (`a`)
* Lists (`ul`, `ol`)
* Strong Emphasis (`<b>`, `<strong>`)
* Superscript (`<sup>`)
* Subscript (`<sub>`)
* Strike-through (`<s>`, `<strike>`, `<del>`)
* Spoiler (`spoiler`)
* Underline (`<u>`, `ins`)
