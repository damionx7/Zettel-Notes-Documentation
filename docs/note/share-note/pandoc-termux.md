---
title: Share via Pandoc
---

To share notes via Pandoc, click on menu button to right of note. Choose `Share > via Pandoc > as DOCX / EPUB / HTML / ODT`

!!! info    
    
    [Termux](https://f-droid.org/packages/com.termux/) needs to be installed for this.

Step by step guide to setup share via pandoc:

1. Install Termux
      - Installing Termux application allows us to execute command line instructions (you will only have to setup it once, then Zettel Notes will use it as an intermediary for format conversions).
      - Download via [Play Store](https://play.google.com/store/apps/details?id=com.termux) or [F-droid](https://f-droid.org/packages/com.termux/) (Recommended).
  
2. Grant Zettel Notes permission to access Termux by clicking on first button in dialog
3. Select the output file format
4. Configure storage access in Termux. 
    - To do this you need to open Termux and type the command `termux-setup-storage`.
    - In Android 14 it is possible that Termux shows, an aborted operation message. To fix it you have to tell Termux to install Termux-am with the following instruction `pkg install termux-am` and setup storage access using `termux-setup-storage`.
  
5. Enable external application access in Termux.
     - To enable it you have to edit from Termux itself its properties file `~/.termux/termux.properties`. [Read more on Github](https://github.com/termux/termux-tasker#allow-external-apps-property-optional)
     - Or you can paste the following command in termux `echo allow-external-apps=true >> /data/data/com.termux/files/home/.termux/termux.properties"'`

6. Install Pandoc
     - To do this paste `pkg install pandoc` in termux.

7. Enter absolute path for repository
    - Tell Termux the absolute address in Android of the repository of our notes. Something similar to `/storage/emulated/0/<repository>`.

8. Click on export button