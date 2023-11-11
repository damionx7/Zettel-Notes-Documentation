---
title: Backups
---

Zettel Notes can auto backup your notes at specific intervals. 

!!! info    
    
    Zettel Notes only creates backup of files in App Folder.


To enable auto backups 

1. Go to `Menu > Settings > Backup and Restore`
2. Toggle `enabled` option below Automatic backups
3. Select backup folder and backup interval
4. Click on `Backup Now` to backup in selected folder

!!! tip

    To create a local backup inside application data (not accessible via file explorer), click on first option `Backup (excluding external notes)`. Share the backup file with your favourite application.


<figure>
<img src="/assets/img/auto-backups.png" alt="auto backups settings screen"/>
 <figcaption>Auto Backup Settings</figcaption>
</figure>

Following backup intervals are provided

- 30 mins
- 1 hour
- 6 hours
- 12 hours
- Daily
- Weekly

!!! tip
    
    You can also auto remove backups older than specific days in backup settings.


## How to restore backup ?

Click on `Restore backup` in Backup and Restore. It will list all the backup files in application data. Select any file to restore. To select file from external storage or `Backup Folder`, click on `select from storage` option in restore dialog.

<figure>
<img src="/assets/img/auto-backup-restore-dialog.png" alt="restore dialog screen"/>
 <figcaption>File Selection for Restoring backup</figcaption>
</figure>


You can select if you want to restore **Databases**, **Settings** or **Templates** in restore dialog.

<figure>
<img src="/assets/img/auto-backup-restore.png" alt="restore dialog"/>
 <figcaption>Restore Dialog</figcaption>
</figure>

!!! warning

    Be careful when selecting `Reset to default`. It will reset all application data.
