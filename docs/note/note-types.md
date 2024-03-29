---
title: Note Types
sidebar_position: 1
---

Zettel Notes supports following note types. All are plain text files but with different YAML property `note_type`. Only View Mode is different for these notes while Edit mode is same.

## Task Note

```YAML
---
note_type: task
---
```

This note shows all the [markdown style tasks](./editor/markdown.md#task-lists) as a simple task list. You can toggle task or add new task from the floating add button. To delete task swipe from left on the task and click on delete button. You can also show / hide completed tasks.

!!! tip

    It is possible to set alarm on a task. Just install [Alarm Plugin](../plugins/alarm-plugin.md) and swipe on a task to set alarm.


<figure>
<img src="/assets/img/note-type-task.webp" alt="Task Note"/>
 <figcaption>Task Note</figcaption>
</figure>

## Drawing Note

```
---
note_type: drawing
---
```

This note acts as central place for your drawings. To add a new drawing / doodle click on the floating add button.

<figure>
<img src="/assets/img/note-type-drawing.webp" alt="Drawing Note"/>
 <figcaption>Drawing Note</figcaption>
</figure>


!!! tip

    To change brush size, long press on the color selection button in lower right corner.


The suffix for newly created attachments (including recording, drawing, images) can be modified in settings. Go to `Settings > Editor and Viewer > Attachment Suffix`. It supports these variables (`$$-yyyy-MM-dd$$ $id$ $title$ $filename$`). Using `$$-yyyy-MM-dd$$` variable will create drawing with file name as `Drawing-2023-10-18.png`. Id, Title and Filename will be populated from the note file.

<figure>
<img src="/assets/img/note-type-drawing-draw.webp" alt="Doodle Screen!"/>
 <figcaption>Doodle Screen</figcaption>
</figure>

## Audio Note

```
---
note_type: audio
---
```

This note can be your audio recorder. If you are on a trip and want to take voice notes, just create a new audio note and take all your voice notes in it.

<figure>
<img src="/assets/img/note-type-audio.webp" alt="Audio Note"/>
 <figcaption>Audio Note</figcaption>
</figure>

!!! information

    To configure audio recording, go to `Settings > Audio Recorder`. You can configure Bitrate, Channel Count, Sampling Rate, Recodring format and Filename. 

## Bookmark Note

```
---
note_type: bookmark
url: https://thedoc.eu.org
---
```

This note directly opens the url or source defined in YAML. For eg. in the above YAML, clicking on bookmark note from notes list will directly open <https://thedoc.eu.org> in browser.

To create a bookmark note, share webpage from browser and select `Zettel Notes > New Bookmark Note` from share screen.

## Log Note

```
---
note_type: log
---
```

Based on `.LOG` keyword of windows notepad. This note will add timestamp automatically in a newline, whenever user open note editor.

!!! information

    To configure date format for log notes, go to `Settings > Note Formats > Log Note > Date Format`.
    Eg. To make log entry bold, use this date format `'**'yyyy-MM-dd'**'`
