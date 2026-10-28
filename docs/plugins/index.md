---
title: Plugins
tags:
  - plugins
---

Plugins are small companion apps that add features to Zettel Notes. They are installed separately from the Play Store or the [F-Droid repository](../download.md#f-droid-repository). Most add a button to the editor toolbar.

The main app is, and will remain, free. Some plugins are paid; buying them funds ongoing development.

| Plugin | What it does |
|---|---|
| [AI Actions](ai-actions-plugin.md) | Summarise, rewrite or expand text with an on-device model |
| [AI Chat](chat-ai-plugin.md) | Chat with an OpenAI-compatible model alongside your notes |
| [Alarm](alarm-plugin.md) | Set reminders on text and tasks |
| [Anki](anki-plugin.md) | Create Anki flashcards from notes |
| [Barcode](barcode-plugin.md) | Scan barcodes into notes or turn text into a barcode |
| [Document Scanner](doc-scanner-plugin.md) | Scan documents and attach them as PDFs |
| [Donation](donation-plugin.md) | Support development (adds no features) |
| [LaTeX](latex-plugin.md) | Search and insert LaTeX symbols |
| [Location](location-plugin.md) | Insert your current location |
| [OCR](ocr-plugin.md) | Extract text from images |
| [Speech to Text](speech-to-text-plugin.md) | Dictate into a note |
| [Speed Read](speed-read-plugin.md) | Read text one word at a time |
| [Telegraph](telegraph.md) | Publish a note as a public Telegraph page |
| [Text Utils](text-utils.md) | Change case, split lines, build task lists and tables |
| [Todo.txt](todo-txt-plugin.md) | Manage todo.txt tasks |
| [Translate](translate-plugin.md) | Translate selected text on-device |

## Manage plugins

Installed plugins appear in the left drawer and as editor buttons. Each plugin can be enabled or disabled, and plugins that are not signed by the developer can also be loaded [v2.4.8](../changelog.md#248){ .zn-version }.

!!! warning

    Plugins use the plugin API version of the app. After a major app update, update your plugins too.

## Build your own plugin

The plugin API and the source code of the existing plugins are on GitHub:

- [Zettel-Notes-Plugin-Api](https://github.com/damionx7/Zettel-Notes-Plugin-Api): the library for building plugins
- [Zettel-Notes-Plugin-Buttons](https://github.com/damionx7/Zettel-Notes-Plugin-Buttons/): source code of the existing plugins
