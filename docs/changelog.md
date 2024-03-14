---
title: Changelog
---

### 2.5.0

⭐ Show all note images in inbuilt image viewer  
⭐ Option to share note file directly via telegram or mail  
🐛 Fix opening markdown files from file manager  
🐛 Fix crash while opening invalid links  

### 2.4.9

⭐ Inbuilt image viewer  
⭐ Allow user to change default attachment prefixes (Settings > Editor and Viewer)  
⭐ New Tasker plugin action to get note content  
🐛 Fix non specific backlinks  

### 2.4.8

⭐ Allow user to enable / disable plugins  
⭐ Load unsigned plugins also  
⭐ Option to download from 2,594 CSL styles in bibtex manager  
⭐ Search and Replace button in editor  
🐛 Fix repeating headline in viewer  

### 2.4.7

⭐ Allow @[] in filenames  
🐛 Fix crash on android 6  

### 2.4.6

⭐ 7 new markdown styles!  
⭐ Show associated notes option for media files  
🐛 Fix backlinks search causing slow loading  
🐛 Fix google drive client for testers  
🐛 Fix heading formatting in note title  
🐛 Make heading links confirm to specifications  

### 2.4.5

⭐ Press on markdown styles to show it  
🐛 Fix changing filename extension on note save  
🐛 Fix gallery markdown links  
🐛 Fix disabling undo redo editor buttons  

### 2.4.4

⭐ 2 new launcher shortcuts (Synchronize in download or upload only mode)  
⭐ Allow user to set editor button groups in between buttons  
⭐ Disable undo redo buttons if nothing to change  
⭐ Increase scrollbar thumb width  
⭐ New editor button (download online images to local storage)  
🐛 Fix showing incorrect markdown style

### 2.4.3

WARN! Editor buttons will be reset with this update. Please setup them again.  

⭐ 3 new editor buttons (Go to line, Scroll to top, Scroll to bottom)  
⭐ Allow user to change icon for all editor buttons (except plugins)  
🐛 Fix scroll bug  

### 2.4.2

⭐ Settings option for initial cursor position in editor  
⭐ Show link url on long press  
⭐ Support `$id$ $title$ $filename$` variables for attachment suffix  
⭐ Rename Editor order buttons to Editor toolbar  
🐛 Fix crash on search in editor  
🐛 Fix overwriting encrypted note extension on save  

### 2.4.1

⭐ Show confirmation dialog when deleting fonts  
⭐ Settings option to change initial editor cursor position (`Settings > Editor and Viewer`)
🐛 Fix cursor jump on loading note  

### 2.4.0

⭐ Icons! for editor toolbar groups (1000+)  
⭐ Allow user to create style buttons in editor toolbar  
⭐ Swipe to delete editor buttons in button order screen  
⭐ Settings option for Table of contents first heading level  
⭐ New YAML variables related to note file `${id}$ ${title}$ ${filename}$ ${mdate}$ ${accessed}$ ${wordcount}$`  
🐛 Fix bottom sheets collapsing in landscape mode  

### 2.3.9

⭐ User defined groups for Editor buttons (Editor buttons order > New group)  
⭐ Indent Table of Contents  
⭐ Settings options for viewer and editor line wrap (Settings > Editor and Viewer)  
⭐ Trigger search on pressing enter only  
🐛 Fix Google Drive synchronization  
🐛 Fix punctuations in italics regex  
🐛 Fix selection clearing on scroll in viewer  

### 2.3.8

⭐ New! Editor button to toggle keyboard  
⭐ Launcher shortcuts for most accessed notes  
⭐ Swipe button to rename task (Task Note)  
⭐ Support arrays in [YAML variable](./note/yaml-frontmatter.md)  
⭐ Minimum android version is now 6 (from 5.1)  
🐛 Fix crash while restoring large note  

### 2.3.7

⭐ Support multiple sources in YAML front-matter  
⭐ Change YAML variables format to (`${property}$`)  
⭐ Separate Copy / Move notes from Share section  

### 2.3.6

🐛 Fix search launcher shortcut  

### 2.3.5

⭐ New! Fleeting note launcher shortcut with specific template  
⭐ Calendar highlight color is set according to number of notes  
⭐ Settings option to parse hidden media folders  
⭐ Settings option to change LaTeX text size (Editor and Viewer)  

### 2.3.4

⭐ HTML center tag to align images  
⭐ Click code blocks to code text to clipboard  
⭐ Reimplement Table of Contents heading levels  
⭐ Settings option for [Web clipper](./web-clipper.md) (Note Formats)  
🐛 Fix Latex Omega sign  
🐛 Fix large tooltip size in toolbar  

### 2.3.3

⭐ Trigger Git synchronization on saving file  
⭐ Improve! Table of contents  
⭐ Set image size using HTML width for img tag  
🐛 Fix not rendering latex matrix  

### 2.3.2

⭐ New! [Todo.txt plugin](https://play.google.com/store/apps/details?id=org.eu.thedoc.zettelnotes.buttons.todotxt)  
🐛 Fix note date not updating  
🐛 Fix task adapter for RTL languages  

### 2.3.1

⭐ Settings option to disable mounting internal repositories (Settings > Security)  
⭐ Improve [HTML to markdown conversion](./web-clipper.md)  
🐛 Fix webdav not syncing files inside folder  

### 2.3.0

⭐ Manual synchronization button in left drawer  
⭐ [Mount](./repository/index.md/#mounting-internal-repositories) internal repositories using documents provider (open in native Files app)  
🐛 Fix saved searches counter  

### 2.2.9 

⭐ New! [Storage Manager](./storage-manager.md) (Android Settings > Zettel Notes > Storage and Cache > Manage Space)  
🐛 Fix webdav synchronization  
🐛 Fix links not working after rotation  

### 2.2.8

⭐ New! Toolbar Color setting  
⭐ Dividers in compact notes list  
⭐ Support `#` in file names  
🐛 Fix launching from recents screen  

### 2.2.7

⭐ New [Log note](note/note-types.md#log-note)  
⭐ New Launcher shortcut : Search shortcut (Directly open app with search focused)  
⭐ Inline Heading links (`[Heading](#heading)`)  
⭐ Open first searched item on pressing enter  
⭐ Long press to delete font file in font selection dialog  
🐛 Fix Dropbox synchronization  
🐛 Fix saving encrypted file  

### 2.2.6

⭐ Trigger synchronization on note save (Settings > Synchronization > Trigger sync on saving note)  
⭐ Settings option for note list corner, padding and text size (Settings > Notes List > Display)  
🐛 Fix audio note attachments  
🐛 Fix salt detection method  

### 2.2.5

⭐ Fleeting Note launcher shortcut (Widgets > Create launcher shortcut)  
⭐ Folders and repository launcher shortcuts  
⭐ New drawing note quick tile  

### 2.2.4

⭐ New initial editor screen  
⭐ Settings option for add note button (Notes List > Customize Add Note Button)  
🐛 Fix flickering notes list  
🐛 Fix delete editor button  

### 2.2.3

🐛 Bug fixes  

### 2.2.2

⭐ Crash reporting library  
⭐ Dutch language  
⭐ New End to end encryption (Enable in Repository > Encryption > E2E)  
🐛 Fix slow launch  
🐛 Fix widget update  

### 2.2.1

⭐ Use strong hash (argon2) for password encryption (existing users using password encryption should upgrade in repository settings)  
⭐ Rounded corners for toast messages  
🐛 Fix launcher shortcuts for encrypted files  

### 2.2.0

⭐ Emoji editor button  
⭐ Note Layouts (Compact, Normal, Grid)  
⭐ Hide / Show completed tasks button in Task Note  
⭐ Support `code`,`pre`,`strike` and `spoiler` HTML tags  
⭐ Settings option to strike completed tasks (`Settings > Note Formats > Strike completed tasks`)  
⭐ Settings option for attachment (eg. drawing) suffix (`Settings > Editor and Viewer > Attachment Suffix`)  
⭐ Settings option disable Soft break adding new line in viewer (`Settings > Editor and Viewer > Soft break adds new line`)  
⭐ 4 new markdown style settings (Code Font, Heading Font, Editor and Viewer Font)  
🐛 Fix password encryption  

### 2.1.9

⭐ Integration of Task Note with Alarm Plugin  
🐛 Fix cursor position in editor  
🐛 Fix WebDav connection timeouts  

### 2.1.8

🐛 Fix slow image loading  
🐛 Fix plugin not being detected  

### 2.1.7

⭐ New Alarm Plugin!  
⭐ Editor highlighter for comments  
⭐ Undo and Redo while drawing  
🐛 Webdav Synchronization  
🐛 Fix launcher shortcuts  

### 2.1.6

⭐ 4 new languages (Catalan, French, Tagalog, Vietnamese)  
⭐ New UI for Note History (Patch) dialog  
⭐ Repository option to import notes from StyleNote HTML  
⭐ Support `&!` in filename  
⭐ Editor settings option to disable editor formatting and note cursor restore  
⭐ New Cut text editor button  
🐛 Fix deep links  
🐛 Fix search highlight clashing with note highlight ==highlight==  

### 2.1.5

⭐ Note Widget  
⭐ Button to close pinned notification  
⭐ 5 new markdown theme options (Highlight Text Foreground and others)  
⭐ Support obsidian comments (`%% comment %%`)  
⭐ Click on color picker to enter hex color  
⭐ Website link as zettel link (Deep links) eg. `https://thedoc.eu.org/../repository/note.md`  

### 2.1.4

⭐ Added multi-selection (Long press notes to activate)  
⭐ New CheckUncheck All tasks editor button  
⭐ New YAML id(uid) property  
⭐ New Zettel link format (znotes://repository/?id=123456)  
⭐ Use default remote origin branch for git synchronization (if not set by user)  
⭐ Show all branches in VCS Screen (-> Renamed to List Commits)  
⭐ Use system and user imported CA in git synchronization (includes self-signed CAs)  
⭐ Save cursor position in editor  
⭐ Save filters with saved searches  
🐛 Git synchronization merging branches  
🐛 Fix crash while opening external files  

### 2.1.3

🚀 BibTex parser now supports JSON files
✨ 7 new editor buttons added (Lock editing, Move lines, Next/Prev line, Toggle checkbox, Delete line)
🐛 Bug fixes for slow search, invalid note links for obsidian:// and evernote://, task note, and link clashes with identical filenames  

### 2.1.2

⭐ Long press to copy spoiler text  
🐛 Fix note parser crash if yaml tag empty  

### 2.1.1

⭐ Repository option to select attachment folder in note folder  
⭐ Add Text Color in Markdown Theme  
⭐ Support `,~` in file names  
🐛 Note sorting reset after changing language  

### 2.1.0

⭐ Use shortest link path for attachments  
🐛 Fix Undo / Redo reset on rotation  
🐛 Fix task note not showing tasks when launched from launcher shortcut  
🐛 Git synchronization  

### 2.0.9

⭐ Support () in file name  
🐛 Fix Task note not working from launcher shortcut  
🐛 Use shortest link path for attachments  

### 2.0.8

⭐ Support RTL layout  
⭐ Support Space and dots in repository title  
🐛 Fix Note title being changed to safe filename while adding note  
🐛 Fix language change not working on lower android devices (Api 21-25)  
🐛 Fix note info dialog not working on lower android devices (Api 21-23)  

### 2.0.7

⭐ Repository option to select attachment folder  
🐛 Fix showing images from subfolder (subfolder/image.png) or main folder (/image.png)  
🐛 Fix multi lingual file names  

### 2.0.6

⭐ Show HEX color in color picker  
⭐ New Terminal theme  
🐛 Fix creating duplicate files while sharing to add note  
🐛 Fix subfolder reset on changing order  

### 2.0.5

⭐ Arabic translation  
⭐ Use `@{citekey}` instead of `{cite:id}` in citations  
🐛 Bibliography duplication  
🐛 Searching in subfolder when changing order  

### 2.0.4

🐛 Fix note encryption and share as pdf  

### 2.0.3

🐛 Fix sharing incomplete pdf and html files  
🐛 Fix Note list tags view  
🐛 Fix SSL error for share to add note  
🐛 Fix errors in webdav authentication  

### 2.0.2

⭐ Recycle bin restore to original location (like Windows and Linux)  
🐛 Fix calendar dates  
🐛 Fix table of contents  

### 2.0.1

🐛 Fix search  

### 2.0.0

⭐ Support large text files  
🐛 Fix scanning notes only when user is online  
🐛 Fix biometrics while appending note  
🐛 Fix recycle bin crash  
🐛 Fix error while generating bibliography  

### 1.0.98

⭐ Ask for decryption only on opening encrypted note (not on repository start)  
⭐ User can select subfolder when adding new note from share  

### 1.0.97

⭐ Tasker Plugin to add note  
⭐ Settings option to change Git commit message  
⭐ Request Post Notifications permission (Android 14)  
🐛 Fix Location Image  
🐛 Fix Bottom sheet hiding last item in recycler view  
🐛 Fix Font reset if none selected  

### 1.0.96

🐛 Fix synchronization  
🐛 Fix Git lock file issue  
🐛 Don't restart application when clicking on launcher icon  

### 1.0.95

⭐ Swipe buttons for Audio Note and Task Note  
⭐ Add YAML property `bookmark` ("bookmark: true" will bookmark the note)  
⭐ Update note after sharing text or adding from launcher shortcut  
⭐ Support Subscript (^word^) and Superscript (~word~) in markdown  
⭐ Settings option to restrict search to subfolder  
⭐ Share to Pin Note as notification  
🐛 BibTex parser  
🐛 Google drive synchronization  

Git synchronization
⭐ Support for lower android versions  
⭐ User can select git branch  
🐛 Fix author name in commits  

### 1.0.93

⭐ Swipe buttons for Audio Note and Task Note  
⭐ Add YAML property `bookmark` ("bookmark: true" will bookmark the note)  
⭐ Update note after sharing text or adding from launcher shortcut  
⭐ Support Subscript (^word^) and Superscript (~word~) in markdown  
⭐ Settings option to restrict search to subfolder  
⭐ Share to Pin Note as notification  
🐛 BibTex parser  

#### Git synchronization

⭐ Support for lower android versions  
⭐ User can select git branch  
🐛 Fix author name in commits  

### 1.0.90

⭐ Keys Manager (SSH)  
⭐ Follow System Theme Option  
⭐ Insert Link From Gallery in Editor  
🐛 Task and Spoiler click in View mode  

### 1.0.89

⭐ New Theme Options  
⭐ User can modify print css  
⭐ Support `[[Link|Label]]` wiki links  
⭐ Option to remove backup older than days  
⭐ Fade Task on Click  
⭐ Rename and Delete Folders  
⭐ Separate theme colors for Bold and Italics  
🐛 Email intent  

### 1.0.88

🐛 Crash in Note Move / Copy Dialog  

### 1.0.87

🐛 Not showing notes in some devices (HUAWEI)  
⭐ Changelog in About section  

### 1.0.86

⭐ Keywords as chips in BibTex Manager  
⭐ URL and File buttons in BibTex Manager  
⭐ Option to show markdown theme in theme section  

### 1.0.85

⭐ Clickable links in Tasks and Tables  
⭐ Contribute Translators in About Section (Thank you 🥳)  
⭐ Folder navigation toolbar / Breadcrumbs navigation  
⭐ New Editor Button : FullScreen  
⭐ Update SQLite parser to search fuzzy (Its awesome. Just try it.)  
⭐ Read time in Note Info Dialog  
⭐ Settings option to show filename in notes list  
⭐ Sort via filename  

### 1.0.84

⭐ Translation in 13 languages (in progress)  
⭐ Custom scheme for notes (`znotes://repository/note.md`). `Long press Note > Share > Share as Zettel Link`  
⭐ Long press media file / bibtex file to create launcher shortcut  
🐛 Fix Crash due to Service  
Change default repository text to title only

### 1.0.82

⭐ Translation in 13 languages (still a wip)  
⭐ Long press media file to add launcher shortcut  
Change default repository text to title only

### 1.0.81

⭐ Fix backlinks  
⭐ Support asterisk for task note  
⭐ Double tap to edit note  
⭐ Use custom view for fonts select screen  

### 1.0.80

⭐ Auto Backup (disable battery optimization for exact time)  
⭐ Youtube Note (Share youtube video)  
⭐ Bookmark Note (Share and select bookmark note)  
⭐ Support bibtex files (per repo)  
⭐ Icons for each note type (Settings > Notes List > Modify Info Shown > Icons)  
⭐ Allow changing repository name  
⭐ Support url as alias for source in yaml  
⭐ Show supported variables in template dialog  
⭐ Settings option to disable zoom in view mode  
⭐ Record audio in background also  

### 1.0.79

⭐ Backup / Restore app data  
⭐ Hide repositories you rarely use  
⭐ Add Preferences for Audio Recorder  

### 1.0.78

⭐ Add Undo Redo buttons in text editor  
⭐ Add support for `text,mkd,mdwn,mdown,mdtxt,mdtext,markdown` file extensions  
⭐ Create note from note search dialog if note doesn't exist  

### 1.0.76

🐛 Crashes and ANRs  

### 1.0.75

🐛 Fix not opening notes when password set on openpgp keys  

### 1.0.70

⭐ Full Text Search ("tag OR tag1", "tag -tag1", "tag tag1" "tag*")  
⭐ New Saved Searches based on FTS search (Existing users will have to reset saved searches)  
⭐ Support disabling buttons in editor bar  
⭐ Search in View Mode  
⭐ Keyboard shortcuts for Headings (Existing users will have to click reset button in Shortcuts screen)  
⭐ Add Source URL in yaml while adding markdown note from webpage  
⭐ Prefs option to disable foreground sync  
🐛 Latex Support  
🐛 Restoring files in Recycle bin  
🐛 Showing partial notes in Note Search Dialog  

### 1.0.69

⭐ More Dynamic templates (define variables in templates as $variable$ and set value in add note dialog)  
⭐ YAML header variables (add yaml header and use $header$ in text to replace its value in view mode)  
⭐ Bottom Sheet for Media Files (Long Press to open)  
⭐ Rename Media File  
⭐ Open Media File in System Folder  
⭐ Support opening xml, json, yml, yaml extension from your file manager  
🐛 + being interpreted as tag  

### 1.0.67

⭐ `Text To Speech` option on long press on text anywhere  
⭐ Support Nested tags `#tag/subtag` and `#tag with space#`  
⭐ Download option in Link Dialog  
🐛 Not parsing yaml when \r\n line endings  
🐛 Git Sync failing when more than one branch  
🐛 Append in encrypted note  
🐛 Notification channels for sync and TTS notifications  

### 1.0.66

⭐ New Editor Buttons > Select Paragraph, Cut / Copy selection  
⭐ Long Press Calendar to Add Note (using default date format for repository)  
⭐ Markdown Link option in Settings > Note Edit / View > Link Style  
🐛 Plugins not added in Quick Note  

### 1.0.65

⭐ Full Dropbox access instead of App Folder (You will have to setup dropbox sync again)  
⭐ Show Note Count in Saved Searches in Navigation menu  
⭐ Custom Sort order for Editor Buttons (Settings > Note Preference > Custom Button Order )  
⭐ Pinch Zoom in Markdown Viewer  
⭐ Share note to add launcher shortcut (Note Long Press > Share > Create Launcher Shortcut)  
⭐ New Custom Button > TextSettings  

### 1.0.64

⭐ GIT support (Android version more than Oreo / 8)  
⭐ Calendar View  
⭐ Paste clipboard button  
🐛 Fix user offline due to 1.1.1.1 being blocked by isp  
🐛 Case insensitive support for image extension  

### 1.0.62

⭐ Support sharing and moving files in folders  
⭐ Show map image for location tag: `![map](latlong:%lat%,%long%)`  
⭐ Custom font (Settings > Display > Font > Custom)  
⭐ Attachment button in custom buttons bar (Supports camera image, drawing (doodle), audio record)  

### 1.0.61

⭐ Drawing Notes (Add Note Button > Drawing Note)  
⭐ Heading button inserts heading at start of line  
⭐ Show installed plugins in Navigation Drawer  
🐛 Task Toggle  

### 1.0.60

⭐ Drag and Drop support for Audio Note and Task Note  
⭐ Settings option to disable saving encrypted note content for search (Settings > Security)  
🐛 Remove ## shortcut for tag search dialog (#?, ++, +? are supported)  
🐛 Fix SFTP sync  

### 1.0.55

⭐ SFTP sync  
⭐ Recycler Bin with auto clean interval  
⭐ Subfolder support  
⭐ Audio Notes  
⭐ Open any file type with markdown link `[desc](file.ext)`  
⭐ New Plugin System / Location Button Plugin (separate app)  

### 1.0.54

⭐ Subfolder sync  
⭐ Auto Save note  
⭐ Open file links with respective android apps (`pdf,docx,doc,xlxs,xls,pptx,ppt,odt,ods,odp,odg,mp3,mp4,apk`)  
⭐ Encryption for patch / note history  
⭐ Sort repositories  
⭐ Option to disable patch (Settings > Note Preference)  
⭐ Option to disable spellcheck (Settings > Note Preference)  
⭐ Option to load last note on opening repo (Settings > Load last opened note)  
⭐ Option to load custom repo on app start (Settings > Load Custom Repo on Start)  
