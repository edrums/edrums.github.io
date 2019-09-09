---
title: How to Use Windows VSTs in REAPER Linux-Native builds (Archlinux)
---
## [Mingw-w64 - GCC for Windows 64 & 32 bits]

Required by Carla bridges, you can choose to install
[compiler and runtimes from AUR] or from [unofficial user repositories].
I choosed the latter option.

## [Wine Staging]

To run Windows applications I choosed [wine-staging] package.

## [WineASIO - ASIO to JACK driver for Wine]

Install [wineasio] package from AUR.
At the moment there could be a [wineasio build problem] because a missing
`unicode.h` header in Wine, check in the link above to how to fix the issue.

See also [WineASIO and REAPER] page at KXStudio website.

## [Carla]

1. Install [carla-git] (or [carla] from official repositories, not tested).
2. Install [carla-bridges-win32-git] and [carla-bridges-win64-git].
3. Launch Carla and click the plus button to add plug-ins.
4. Using the search button, make sure that the `Windows 32` and `Windows 64`
   boxes are ticked, then scan for plug-ins.
   You may need to adjust the search path in Carla’s settings.

## [REAPER]

Install REAPER for Linux, I just made a local copy and integrated with the
desktop environment using its install script.
Add Carla as a plug-in and the Carla plug-in to load Windows VSTs:

1. Select menu `Options` -> `Preferences` -> `Plug-ins` -> `VST`.
2. Press `Edit` button and add `/usr/lib/vst`.
3. Press `Re-scan`, `Apply` and `OK` buttons.

You can now load Carla plugins from menu
`Insert` -> `Virtual instrument on new track...` --> `All Plugins` --> `VSTi`

Sources:

- <https://appuals.com/how-to-use-windows-vsts-in-latest-reaper-5-93-linux-native-builds/>
- <https://www.youtube.com/watch?v=PiaWozQ69eE>

[Mingw-w64 - GCC for Windows 64 & 32 bits]: http://mingw-w64.org
[compiler and runtimes from from AUR]: https://aur.archlinux.org/packages/mingw-w64-gcc/
[unofficial user repositories]: https://wiki.archlinux.org/index.php/unofficial_user_repositories#ownstuff
[Wine Staging]: https://wiki.winehq.org/Wine-Staging
[wine-staging]: https://www.archlinux.org/packages/multilib/x86_64/wine-staging/
[WineASIO - ASIO to JACK driver for Wine]: https://sourceforge.net/projects/wineasio/
[wineasio]: https://aur.archlinux.org/packages/wineasio/
[wineasio build problem]: https://aur.archlinux.org/packages/wineasio/#comment-693696
[WineASIO and REAPER]: https://kx.studio/Documentation:Manual:wineasio_and_reaper
[Carla]: https://kx.studio/Applications:Carla
[carla]: https://www.archlinux.org/packages/community/x86_64/carla/
[carla-git]: https://aur.archlinux.org/packages/carla-git/
[carla-bridges-win32-git]: https://aur.archlinux.org/packages/carla-bridges-win32-git/
[carla-bridges-win64-git]: https://aur.archlinux.org/packages/carla-bridges-win64-git/
[REAPER]: http://reaper.fm/
