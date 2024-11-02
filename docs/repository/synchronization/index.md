---
title: Synchronization
---

## Supported protocols

- [Git](git.md)
- [Dropbox](dropbox.md)
- [Google Drive](google-drive.md)
- [Webdav](webdav.md)
- [SSH / SFTP](sftp.md)

## Features

You can choose to synchronize with subfolder while setting up synchronization. For eg. if you have `root` folder then you can synchronize only with `root/notes`.

You can generate private and public ssh keys within Zettel Notes. [Git](./git.md) and [SSH](./sftp.md) synchronization support keys generated via Keys Manager. See [Keys Manager](./keys-manager.md)

To trigger synchronization after saving note, toggle settings option in `Settings > Synchronization > Trigger sync on saving note`.

## Background synchronization

To enable background synchronization go to, `Settings > Synchronization > Enable background synchronization`

You can choose among following Synchronization Constraints

- Only sync while device is charging
- Only sync while on WiFi
- Only sync when battery level is above defined level

Following synchronization intervals are supported

- 15 mins
- 30 mins
- 1 hour
- 3 hours
- 6 hours
- 12 hours
- 24 hours

If synchronization takes time, you can also toggle the option to synchronize only while the application is in background.

!!! tip

    You can override synchronization settings, per repository. That means that for one repository you can set synchronization only on wifi while for other only during charging. To override go to, `Repositories > <Repository> Setting > Edit Synchronization > Configure synchronization`.

### Manual synchronization

To enable manual synchronization only, disable following options in `Settings > Synchronization`

- Enable background synchronization
- Trigger synchronization on
    - Application start
    - Saving note 
    - Swipe refresh

After this you can trigger synchronization by clicking on synchronize button in left navigation drawer in main screen.

![manual synchronization](../../assets/img/nav-drawer-manual-synchronization.jpeg)

## Configure Conflict Resolution 

You can configure how conflicts are resolved via options in Settings > Synchronization > Conflict Resolution and Merge Strategy options

- **Conflict Resolution**
    - Auto
        - The default strategy
    - Prefer Local Changes
        - Changes made on zettel notes will overwrite changes made on server
    - Prefer Remote Changes
        - Changes made on server will overwrite changes made on zettel notes
- **Merge Strategy**
    - These options are enabled only for Auto Conflict Resolution strategy
    - 3 options are provided
        - Default
            - Merge changes made on zettel notes and server
        - Prefer Old Changes
            - Latest changes will be overwritten with old changes made on either zettel notes or server
        - Prefer New Changes (Preferred Option)
            - Old changes will be overwritten with latest changes made on either zettel notes or server