---
title: SFTP (SSH) Synchronization
---

To setup SFTP synchronization, go to `Repositories > Setup Sync > SFTP (SSH)`. Enter following details.

- Host / IP Address
- Port
- User
- Password
- Private Key
  - To use private ssh key, tick `Public Key Authentication`
  - You can either select your private key from [Keys Manager](./keys-manager.md) or enter your own key.
  - If your private key has password, then enter it in `Private key Password` field.
- Remote path
  - Set complete path of folder containing your notes

<figure>
<img src="/assets/img/synchronization-sftp-password.png" alt="sftp password dialog"/>
 <figcaption>Password login</figcaption>
</figure>

<figure>
<img src="/assets/img/synchronization-sftp-private-key.png" alt="sftp private key dialog"/>
 <figcaption>Private key login</figcaption>
</figure>


## Demo Video
<video controls>
  <source src="/assets/videos/sftp.mp4" type="video/mp4"/>
Your browser does not support the video tag.
</video>
