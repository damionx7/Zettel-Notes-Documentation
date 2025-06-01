---
title: Tasker Integration
---

[Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm) is a popular automation application for Android.

Zettel Notes supports integration with Tasker through its **New Note Action Plugin**. This allows you to create notes using **dynamic variables** for the title and content in a pre-selected location.

## How to Create a Tasker Action

1. Install [**Tasker**](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm).  
2. Open Tasker and create a **new task**.  
3. From the **Plugin > Action** category, select **Zettel Notes**.  
4. Configure the plugin by entering **Tasker variables** for the note’s **content** and **filename**.

## Available Actions

1. Create Note  
2. Get Note Content  
3. List Notes

<figure>
<img src="/assets/img/tasker_action.png" alt="Tasker plugin"/>
 <figcaption>Zettel Notes in Tasker plugins</figcaption>
</figure>

<figure>
<img src="/assets/img/tasker_create_note_edit.png" alt="Action edit"/>
 <figcaption>Create note tasker action settings</figcaption>
</figure>

<figure>
<img src="/assets/img/tasker_create_note_info.png" alt="Action info"/>
 <figcaption>Tasker action</figcaption>
</figure>


## Trigger Notes Scanner via Intent

- Use the **Send Intent** action in Tasker.  
- Use the following details:  
  - **Action:** `org.eu.thedoc.zettelnotes.action.SCAN_NOTES`  
  - **Extra:** `EXTRAS_REPOSITORY:<REPOSITORY_NAME>`  
  - **Package:** `org.eu.thedoc.zettelnotes`  
  - **Target:** `Service`
- Replace `REPOSITORY_NAME` with the name of the repository for which you want to trigger the notes scanner.