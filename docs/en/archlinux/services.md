---
title: Jack2, A2jmidid and Linuxsampler systemd services on Archlinux
refdir: archlinux/
lang: en
---
### Packages required:

##### Official Archlinux Repository

* [a2jmidid](https://www.archlinux.org/packages/community/x86_64/a2jmidid/)
  A daemon for exposing legacy ALSA sequencer applications in JACK MIDI system.
* [opus](https://www.archlinux.org/packages/extra/x86_64/opus/)
  Totally open, royalty-free, highly versatile audio codec (optional jack2 dependancy before build).
* [netcat](https://www.archlinux.org/packages/extra/x86_64/gnu-netcat/)
  GNU rewrite of netcat, the network piping application (required to run LSCP presets from command line).
* [jsampler](https://www.archlinux.org/packages/community/any/jsampler/)
  LinuxSampler Java GUI (to create LSCP presets).

##### AUR

* [jack2-no-dbus-git](https://aur.archlinux.org/packages/jack2-no-dbus-git)
  Classic jack2 without dbus enabled. For starting as daemon with systemd.
* [linuxsampler-svn](https://aur.archlinux.org/packages/linuxsampler-svn/)
  Professional-grade audio sampler alternative to Gigasampler

### Template Services (in /usr/lib/systemd/system):

* [a2jmidid@.service](a2jmidid@.service)
* [jack2-no-dbus@.service](jack2-no-dbus@.service)
* [linuxsampler@.service](linuxsampler@.service)

### Shell scripts and configuration files

* [service.conf](service.conf) in /home/$USER/.config/jack/
* [service.sh](service.sh) in /home/$USER/.config/linuxsampler.org/
* [drums.lscp](drums.lscp) in /home/$USER/.config/linuxsampler.org/
