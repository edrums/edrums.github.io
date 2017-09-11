---
title: Parts List
---
This list of hardware parts focuses on Mouser part numbers, as the most commonly
used online electronics store. You can of course get the manufacturer's part
number from there and buy elsewhere! Alternatives are included where possible
in case there are stock or availability issues for the main parts.

## Mainboard V0.7 Parts

| Part              | Qty | Description                                                                     | Mouser Part No                    | Possible Alternatives |
| ----------------- | --- | ------------------------------------------------------------------------------- | --------------------------------- | --------------------- |
|                   |     |                                                                                 | **Circuit Board**
| PCB               | 1   | Mainboard V0.7                                                                  | microDRUM Store
|                   |     |                                                                                 | **Arduino**
| Uno               | 1   | Will need Mainboard set to 5V version                                           | 782-A000066                       | EBay
| Due               | 1   | Will need Mainboard set to 3.3V version                                         | 782-A000062                       | EBay
|                   |     |                                                                                 | **Resistors**
| R1-R6             | 6   | 1 MOhm, 1%, 0.25W                                                               | 271-1.0M-RC (Xicon)               | 660-MF1/4DCT52A1004F (Koa Speer), 71-CMF551M0000FKR6 (Vishay Dale)
| R7, R9, R11-R13   | 5   | 220 Ohm, 1%, 0.25W                                                              | 271-220-RC (Xicon)                | 660-MF1/4DCT52R2200F (Koa Speer), 71-CMF55220R00FHEK (Vishay Dale)
| R8oC1             | 1   | 120 Ohm, 1%, 0.25W (or capacitor, see below)                                    | 271-120-RC (Xicon)                | 660-MF1/4DCT52R1200F (Koa Speer), 71-CMF55120R00FKR6 (Vishay Dale)
| R10               | 1   | 3.3 KOhm, 1%, 0.25W                                                             | 271-3.3K-RC (Xicon)               | 660-MF1/4DCT52R3301F (Koa Speer), 71-CMF553.3K1%T1 (Vishay Dale)
|                   |     |                                                                                 | **Capacitors**
| R8oC1             | 1   | 10 uF (or resistor, see above. C1 best option if using Uno)                     | 667-ECE-A1HKA100B (Panasonic)     | 647-UST1H100MDD1TE (Nichicon)
|                   |     |                                                                                 | **Switches**
| S1-S2             | 2   | SPDT (See build details for purpose of these switches)                          |                                   | 633-MS12AFG01 (NKK)
| S1-S2 (Alt)       | 2*  | 1 x 3 header (Could just use wire if will never change)                         | See ALT_HEADER                    | 649-69190-403 (FCI), 517-929834-02-03 (3M), 798-A23PA254DSA71 (Hirose)
|                   | 2   | 1 x 2 shorting jumper (Could just use wire if will never change)                | 649-63429-202LF (FCI)             | 517-951-00 (3M), 855-M7582-46 (Harwin)
|                   |     |                                                                                 | **Multiplexers**
| U1-U6             | 6   | SN74HC4851 (each 1 = 8 ports)                                                   | microDRUM store                   | 595-SN74HC4851N (Texas Instruments)
|                   |     |                                                                                 | **Diodes**
| D1                | 1   | 1N4148                                                                          | 78-1N4148 (Vishay)                | 512-1N4148TR (Fairchild), 771-1N4148,133 (NXP)
|                   |     |                                                                                 | **ICs**
| U7                | 1   | 6N138                                                                           | 782-6N138 (Vishay)                | 512-6N139M (Fairchild)
| U8                | 1   | 74LS04 (Midi thru only)                                                         | 595-SN74LS04N (Texas Instruments) | 
|                   |     |                                                                                 | **Sockets**
| U1skt-U6skt       | 6   | 16 pin DIP (2x8)                                                                | 649-DILB16P-223TLF (FCI)          | 517-4816-3004-CP (3M), 571-1825093-4 (TE Connectivity)
| U7skt             | 1   | 8 pin DIP (2x4)                                                                 | 571-1825373-2 (TE Connectivity)   | 649-DILB8P223TLF (FCI), 517-4808-3004-CP (3M)
| U8skt             | 1   | 14 pin DIP (2x7) (Midi thru only)                                               | 649-DILB14P-223TLF (FCI)          | 517-4814-3000-CP (3M), 571-1825093-3 (TE Connectivity)
|                   |     |                                                                                 | **Connectors**
| CONN1-CONN6       | 6   | 2 x 5 header                                                                    | 649-67997-410HLF (FCI)            | 653-XG8W-1041 (Omron), 855-M20-9760546 (Harwin)
|                   | 6   | 2 X 5 socket                                                                    | 649-65239-005LF (FCI)             | 653-XG4M-1030 (Omron), 855-M20-1070500 (Harwin)
| JP1-JP3, JP5, JP6 | 5*  | 1 x 3 header (JP3 - LCD)                                                        | See ALT_HEADER                    | 649-69190-403 (FCI), 517-929834-02-03 (3M), 798-A23PA254DSA71 (Hirose)
|                   | 5   | 1 x 3 socket (JP3 – LCD)                                                        | 649-65240-003LF (FCI)             | 571-770602-3 (TE), 538-10-11-2034 (Molex)
| JP4               | 1*  | 1 x 6 header (LCD)                                                              | See ALT_HEADER                    | 649-68000-406HLF (FCI), 855-M20-9770646 (Harwin), 517-929834-02-06-RK (3M)
|                   | 1   | 1 x 6 socket (LCD)                                                              | 649-65240-006LF (FCI)             | 855-M20-1060600 (Harwin), 538-10-11-2063 (Molex)
| JX                | 1*  | 1 x 2 header (V5 version only - could replace with wire if not going to change) | See ALT_HEADER                    | 517-929800-01-02 (3M), 649-68000-402 (FCI), 855-M20-9730246 (Harwin)
|                   | 1   | 1 x 2 shorting jumper (V5 version only)                                         | 649-63429-202LF (FCI)             | 517-951-00 (3M), 855-M7582-46 (Harwin)
| MIDI1-MIDI2       | 2   | 5 pin DIN socket                                                                | 568-NYS325 (REAN)                 | 523-T3359150 (Amphenol)
| ARDUINO_CONN      | 2*  | 1 x 8 header                                                                    | See ALT_HEADER                    | 517-929834-04-01 (3M), 653-XG8V-0831 (Omron), 855-M20-9730846 (Harwin)
|                   | 2*  | 1 x 6 header                                                                    | See ALT_HEADER                    | 649-68000-406HLF (FCI), 855-M20-9770646 (Harwin), 517-929834-02-06-RK (3M)
| ALT_HEADER        | 2   | 1 x 32 header - split (will cover all headers with qty marked with *)           | 517-929834-02-36-RK (3M)
| Wire              |     | Ribbon cable, rainbow version optional…                                         | Ebay is best option as Mouser only does long lengths
| Contacts          |     | To fit 22-30 AWG wire (assuming that matches ribbon wire above)                 | 649-76347-401LF (FCI)             | 538-08-50-0114 (Molex) - Need to make sure compatible with sockets chosen

<br>

There are a number of optional parts in the above list, depending on the build
configuration you require. The following table shows the options outlined on the
Motherboard V0.7 board:

| Part | V5 - Thru | V3.3 - Thru | V5 - No Thru | V3.3 - No Thru | 
| ---- | --------- | ----------- | ------------ | -------------- |
| S2   | Left      | Right       | Left         | Right          |
| JX   | Close     | Open        | Close        | Open           |
| R11  | Yes       | Yes         | No           | No             |
| R12  | Yes       | Yes         | No           | No             |
| R13  | No        | Yes         | No           | Yes            |
| U8   | Yes       | Yes         | No           | Yes            |

<br>

**NB**: S1 is used to determine if the Arduino resets automatically when it is
connected to the computer via USB.
If you do not wish it to reset every time you connect it set this to closed.

## Socket Board V0.4 Parts

| Part        | Qty | Description                                                           | Mouser Part No           | Possible Alternatives |
| ----------- | --- | --------------------------------------------------------------------- | ------------------------ | --------------------- |
|             |     |                                                                       | **Circuit Board**
| PCB         | 1   | Socket Board V0.4 | microDRUM Store
| Jacks
| U1-U4       | 4   | Mono sockets for single piezo trigger, stereo for two                 | 550-20301 (Stereo)       | 568-NMJ4HHD2 (Mono), 550-20384 (Stereo)
|             |     |                                                                       | **Resistors**
| R1-R4       | 4   | 100 Ohm - 1 MOhm (Depends on HHC pedal resistor), 1%, 0.25W           | Xicon 271 range
|             |     |                                                                       | **Switches**
| S1-S4       | 4   | SPDT ( To chose between pad or HHC)                                   | | 633-MS12AFG01 (NKK)
| S1-S4 (Alt) | 4*  | 1 x 3 header (Could just use wire if will never change)               | See ALT_HEADER           | 649-69190-403 (FCI), 517-929834-02-03 (3M), 798-A23PA254DSA71 (Hirose)
|             | 4   | 1 x 2 shorting jumper (Could just use wire if will never change)      | 649-63429-202LF (FCI)    | 517-951-00 (3M), 855-M7582-46 (Harwin)
| ALT_HEADER  | 1   | 1 x 32 header - split (will cover all headers with qty marked with *) | 517-929834-02-36-RK (3M)
|             |     |                                                                       | **Connectors**
| CONN1       | 1   | 2 x 5 header                                                          | 649-67997-410HLF (FCI)   | 653-XG8W-1041 (Omron), 855-M20-9760546 (Harwin)
|             | 1   | 2 x 5 socket                                                          | 649-65239-005LF (FCI)    | 653-XG4M-1030 (Omron), 855-M20-1070500 (Harwin)
| Contacts    |     | To fit 22-30 AWG wire (assuming that matches ribbon wire above)       | 649-76347-401LF (FCI)    | 538-08-50-0114 (Molex) - Need to make sure compatible with sockets chosen

<br>

**NB**: These quantities are for a single board, giving you 4 sockets.

## LCD V0.1 Parts

There is currently no PCB available for this module, use stripboard or perfboard
to build this.

| Part       | Qty | Description                                                           | Mouser Part No           | Possible Alternatives |
| ---------- | --- | --------------------------------------------------------------------- | ------------------------ | --------------------- |
|            |     |                                                                       | **Circuit Board**
| PCB        | 1   | Stripboard                                                            | 854-ST2
|            |     |                                                                       | **Resistors**
| R1         |     | 10 KOhm variable resistor                                             | 72-T93XA-10K
| R2-R4      | 3   | 10 KOhm, 1%, 0.25W                                                    | 271-10K-RC               | 660-MF1/4DCT52R1002F (Koa Speer), CMF5510K000FKEK (Vishay Dale)
|            |     |                                                                       | **Switches**
| S1-S3      | 3   | SPST, Momentary                                                       | 693-1301.9302
|            |     |                                                                       | **Screen**
|            | 1   | 16 x 2 screen                                                         | NMTC-S16205DRGHS         | EBay is a good source, with a wide range of colours available
|            |     |                                                                       | **Connectors**
| JP3        | 1*  | 1 x 3 header                                                          | See ALT_HEADER           | 649-69190-403 (FCI), 517-929834-02-03 (3M), 798-A23PA254DSA71 (Hirose)
|            | 1   | 1 x 3 socket                                                          | 649-65240-003LF (FCI)    | 571-770602-3 (TE), 538-10-11-2034 (Molex)
| JP4        | 1*  | 1 x 6 header                                                          | See ALT_HEADER           | 649-68000-406HLF (FCI), 855-M20-9770646 (Harwin), 517-929834-02-06-RK (3M)
|            | 1   | 1 x 6 socket                                                          | 649-65240-006LF (FCI)    | 855-M20-1060600 (Harwin), 538-10-11-2063 (Molex)
| ALT_HEADER | 1   | 1 x 32 header - split (will cover all headers with qty marked with *) | 517-929834-02-36-RK (3M) | 
| Contacts   |     | To fit 22-30 AWG wire                                                 | 649-76347-401LF (FCI)    | 538-08-50-0114 (Molex) - Need to make sure compatible with sockets chosen

