---
title: Installing the Software side of things
---
## Software Required

There are a number of different software applications that need to be installed
to be able to set up microDRUM. The microDRUM main page has a download section
that contains releases of these, but there is also a GitHub repository that
contains the most up-to-date versions that is worth checking.

[Downloads page](../downloads)

[GitHub repostory](https://github.com/massimobernava?tab=repositories)

### Using GitHub

GitHub is an online, free, hosting service based around the Git version control system.
As well as ensuring code changes are merged to the core code correctly, it allows
easy sharing of that code.
You **do not** need to have an account to be able to download code from repositories.

1. Navigate to the [repository location](https://github.com/massimobernava?tab=repositories)

2. Select the repository tab

3. Select the relevant application

4. Select the **Download ZIP** button on the right hand side of the page 

### Software

* microDRUM_ConfigTool_Vx.x => This application sits on your pc and is used to
configure your edrum set etc

* Arduino IDE => This is required to push the firmware onto the Arduino board
via the USB cable that should have come with your board...

* microDRUM_Firmware_Vx.x => This is the code that sits on the Arduino board

* DrumScope Vx.x => This is an application to help analyse homemade drum pads,
to allow effective configuration of microDRUM

* ASIO4ALL => This is a universal driver for 'Audio Stream Input/Output'

* VST Plugin => Virtual Studio Technology Plugin, such as Addictive Drums,
including the free demo (with limited functionality)

* Drum samples (.wav) plus sfz format mapping => The ConfigTool can be used with
.wav sample files using definitions provided in sfz format as an alternative to
a VST plugin 

### microDRUM_ConfigTool

**NB: In order for this application to run you need to have .NET Framework V3.5
or higher installed on your computer.**

1. Take the latest version of this from the microDRUM download page or GitHub repository (this will need compiling, see the separate section at the end of this page on how to complete that)

2. Unzip to your chosen location

3. No installation is required, it runs directly from the microDRUM.exe. Create a shortcut to your desktop to make it easier to launch (rightclick on the icon, select 'Send to >> Desktop (create shortcut)'

### Arduino IDE

1. Download the latest version of the Windows Installer from the arduino.cc
[download page](http://arduino.cc/en/Main/Software)

2. Launch the .exe installer and install, leaving the default options selected.
Install the Arduino USB Driver when given the option

3. Launch the IDE

4. Plug the Arduino board into your computer with the USB cable.
If using Windows it will install the required drivers.

5. Select the correct board within the IDE - Tools => Boards => Arduino Uno
(or your chosen board)

6. Select the serial port - Tools => Serial Port => COMx, and note the number

**NB**: If you are using Linux and the Serial Port menu entry is greyed out you may
need to add your account to a number of user groups.
Access Settings => Users & Groups => Manage Groups.
Add yourself to the **dialout** & **uucp groups**. Log out and in again, and relaunch the IDE.
An alternative route is to launch the IDE via `sudo` access.

7. To check the connection to your board select
Serial Monitor - Tools => Serial Monitor.
A new window should open with the title showing the COM port selected above,
with no error messages being displayed in the main IDE window. Close the new window

### microDRUM Firmware

1. Take the latest version of this from the microDRUM download page or GitHub repository.
If using the .mdh file from the Downloads page follow steps 2 - 11.
If using the latest code from GitHub (.ino format) follow steps 12 onwards

2. Plug your Arduino board in via USB

3. Launch the microDRUM ConfigTool

4. Select Setup => **Select COM...**

5. The menu will close - reopen it and now there will be a tick next to
'Select COM...' and the dropdown box below will contain the COM port identified
when setting up the Arduino IDE above. Select it

6. Select **Update Firmware...** near the bottom of that menu

7. Select the '...' button next to the Arduino text box at the top, and navigate
to the location of the arduino.exe installed when you installed the IDE
(default location: **C:\Program Files (x86)\Arduino\**

8. Select the '...' button next to the Firmware text box below this, and navigate
to the location of the 'microDRUM_Firmware_Vx.x.mhd'

9. Select the radio button next to the board that you have in the Arduino box and
make sure the correct COM port is shown

10. Select the **Update** button

11. A small popup window will appear with the title 'AVR Update' and the message
'Click OK to Start' - accept this and it will push the firmware to your board

**IF USING THE .INO FILES FROM GITHUB:**

12. Extract the files from the zip file downloaded from GitHub

13. Plug your Arduino board in via USB

14. Launch the Arduino IDE and check the correct board and port are selected
(as per the installation instructions above)

15. Select File >> Open... and navigate to the location you extracted the GitHub
zip file to, and select **sketch_microdrum.ino** from within the sketch_microdrum
folder, click Open

16. This will open that sketch plus all the other linked ones - select
File >> Upload and the IDE will compile it first and then push it down to your board 

### DrumScope

1. Take the latest version of this from the microDRUM download page or GitHub repository

2. Unzip to your chosen location

3. No installation is required, it runs directly from the DrumScope.exe.
Create a shortcut to your desktop to make it easier to launch (rightclick on the
icon, select 'Send to >> Desktop (create shortcut)'

### ASIO4ALL

1. Download the latest version from the [asio4all.com website](http://www.asio4all.com).
There are beta versions there, or you can scroll down until you find the most
current stable release

2. This is a .exe, so doubleclick and install 

### VST Plugin

There are plenty of options here, this guide uses the free demo version of
**Addictive Drums**, mainly because it is free...

1. You will need to register on www.xlnaudio.com to be able to download this tool.
Once registered you will be able to download the 'XLN Online Installer'

2. Unzip this and select the appropriate Windows version installer (32-bit vs 64-bit)
(to check this in Windows 7 see this [FAQ from Microsoft](http://windows.microsoft.com/en-gb/windows/32-bit-and-64-bit-windows#1TC=windows-7))

3. Once you have that you can download the Addictive Drums demo version
(also known as the Standalone version) from within the XLN installer

4. In order to access this VST Plugin from within microDRUM launch the
microDRUM COnfig Tool and select the VST option in the main menu bar

5. Select Load... and navigate to the 'Standalone Support.dll' found within the
Addictive Drums install location
(C:\ProgramData\XLN Audio\Addictive Drums\App) - the Addictive Drums demo will launch 

### Drum Samples & sfz Files

TBC

### Compiling The ConfigTool from GitHub

1. Download and extract config tool from github

2. Open system console: cmd.exe

3. Type: cd C:\Windows\Microsoft.NET\Framework\v3.5\

4. Type: MSBuild full_path_to_project microDrum.sln

5. Close console

6. Go to project folder and open microDrum/bin/Debug

7. Run microDrum.exe 
