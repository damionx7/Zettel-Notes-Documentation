---
title: Templates
---

Templates are snippets of text which can be added while creating a new note.

## Dynamic variables

Zettel Notes supports following dynamic variables in templates. Dynamic variables can be added anywhere in template and its value will be replaced by corresponding text.

- `$id$` :  Note ID
- `$title$` : Note Title
- `$filename$` : Filename
- `$$yyyyMMdd$$` : Date variable
- `$default-text`: Add Repository Default Text
- `$custom$` : Custom variable

!!! tip

    Date variable is surrounded with 2 `$$` on each side. To learn more about its format read [official documentation](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html)


## Custom Variables

Apart from pre-defined variables, Zettel Notes allows you to use custom variables also. These are defined by `$` on each side. eg. `$custom$`. While adding new note, you can set value of custom variable. Its all occurences in template will be replaced by specific value set by user.

<figure>
<img src="/assets/img/templates-custom-variable.png" alt="add note screen"/>
 <figcaption>Usage of custom template variable</figcaption>
</figure>
