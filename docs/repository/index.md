---
title: Repository
sidebar_position: 2
---

Repository in Zettel Notes is root folder for your collection of notes. It is comparable to Vault in Obsidian. 

To create a repository, click on menu button on main screen, select `Repositories` option. And click on floating create repository button.

!!! tip

    Long pressing create repository button, creates a new repository in private storage of application.


## Properties of a Repository

A repository can have following properties

### 1. Title

It should be unique for each repository. Title can be edited after creating a repository

### 2. Default text

This text will be added to new note files. You can use any of these variables `$title$`, `$id$`, `$filename$`, `$$yyyMMdd$$`.

<img src="/assets/img/repository-property-default-text.webp" alt="Default Text" width="250"/>

<img src="/assets/img/repository-property-default-text-1.webp" alt="Default Text" width="250"/>

!!! tip

    When using templates, you will have to add `$default-text$` variable at start of template to add repository default text in the note file.

### 3. Date Format 

It contains [date time format](https://docs.oracle.com/javase/7/docs/api/java/util/Formatter.html) which will be replaced with the present date and time when creating new note.

<img src="/assets/img/repository-property-date-format.webp" alt="Date Format" width="250"/>

<img src="/assets/img/repository-property-date-format-1.webp" alt="Date Format" width="250"/>

### 4. BibTex file

Click to select BibTex file for citations from internal storage. [Read More](../bibtex.md)

### 5. File Extension

Following file extensions are supported `md`, `org`,`txt`,`text`, `mkd`, `mdwn`, `mdown`, `mdtxt`, `mdtext`,`markdown`.

### 6. Prefer Title From

- Default
  - Repository will use following order of preference for parsing title.
  -  `YAML Metadata` > `First Heading` > `File name`
- YAML Metadata
  - YAML Property `title: Note Title` is used to set title as `Note Title`.
- First Heading
  - First Heading `# Note Title` is used to set title as `Note Title`.
- Filename
  - Filename `Note Title.md` is used to set title as `Note Title`.

### 7. Default location for attachments

- Main Folder
  - The root folder will be used for storing attachments
- Same folder as note
- Specific subfolder
  - Specific subfoler set by user will be used for storing attachments.
  - It should start with `/`
- Subfolder in same folder as note

## Encryption

- Enryption can be set per-repository. [Read more](./encryption.md).

## Synchronization

- To setup synchronization, [follow this guide](synchronization/index.md).


## Mounting internal repositories

Repositories can be assessed via the android [Documents](https://source.android.com/docs/core/ota/modular-system/documentsui) application.

To disable mounting internal repositories, go to `Settings > Security` and disable `Mount internal repositories`.

![mounted repository](../assets/img/repository-mount.png)

!!! tip

    To unmount specific repository, hide the repository in Repository settings.

