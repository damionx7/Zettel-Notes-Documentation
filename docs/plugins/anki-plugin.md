---
title: Anki Plugin
tags:
  - plugins
  - study
  - integration
---

!!! info

    Download from [Play Store](https://play.google.com/store/apps/details?id=org.eu.thedoc.zettelnotes.buttons.anki) or F-Droid

Creates Anki flashcards from your notes.

## Requirements

- [AnkiDroid](https://play.google.com/store/apps/details?id=com.ichi2.anki)
- In AnkiDroid, go to `Settings > Advanced` and enable **Enable AnkiDroid API**

## Usage

Given this note:

```
---
title: Anki Notes
---

# What is Solis Lacus?

Eye of Mars
```

tapping the Anki button in the editor toolbar adds a card with `What is Solis Lacus?` on the front and `Eye of Mars` on the back.

## Supported card formats

**Heading**

```
# Question

Answer
```

**Ruled**

```
Question
---
Answer
```

**Q/A**

```
Q: Question
A: Answer
```
