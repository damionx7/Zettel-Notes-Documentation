---
title: Frequently Asked Questions
---

## F-droid downloads are slow

- Sometimes, it happens that the server on which f-droid repository is hosted can be slow to respond.
- In that case, try using alternate url for repository.

```
https://gitlab.com/royalhacker/fdroid-live/-/raw/master
```

## How to use Nextcloud synchronization ?

- Obtain the WebDAV URL for your Nextcloud instance. It should be in the following format `http://SERVER/remote.php/dav/files/USERNAME/SUBFOLDER/`
- Replace `SERVER` with the URL of your Nextcloud instance, such
as `thedoc.eu.org/nextcloud/`. Replace `USERNAME` with your Nextcloud username such as `dax`. If you have set up subfolder
synchronization,replace `SUBFOLDER` with the name of your subfolder such as `znotes`.
- Example of a valid url `https://thedoc.eu.org/nextcloud/remote.php/files/dax/znotes/`.
- Enter the WebDAV URL you obtained in webdav synchronization dialog.