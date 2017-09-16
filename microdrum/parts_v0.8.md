---
title: Parts List v0.8
---
This list of hardware parts focuses on Mouser part numbers, as the most commonly
used online electronics store. You can of course get the manufacturer's part
number from there and buy elsewhere! Alternatives are included where possible
in case there are stock or availability issues for the main parts.

## Mainboard v0.8 Parts

| Part              | Qty | Description                                                                     | Mouser Part No                    | Possible Alternatives |
| ----------------- | --- | ------------------------------------------------------------------------------- | --------------------------------- | --------------------- |
|                   |     |                                                                                 | **Circuit Board**
| PCB               | 1   | Mainboard v0.8                                                                  | microDRUM Store
|                   |     |                                                                                 | **Arduino**
| Uno               | 1   | Will need Mainboard set to 5V version                                           | 782-A000066                       | EBay
| Due               | 1   | Will need Mainboard set to 3.3V version                                         | 782-A000062                       | EBay
|                   |     |                                                                                 | **Teensy**
| Teensy 3.2        | 1   | **Not tested**                                                                  | 474-DEV-13736                     | 485-2756
|                   |     |                                                                                 | **Resistors**
| R1-R6             | 6   | 1 MOhm, 1%, 0.25W                                                               | 271-1.0M-RC (Xicon)               | 660-MF1/4DCT52A1004F (Koa Speer), 71-CMF551M0000FKR6 (Vishay Dale)
| R7-R8-R18         | 3   | 10 KOhm, 1%, 0.25W                                                              | 271-10K-RC (Xicon)
| R9-R10            | 2   | 68 Ohm, 1%, 0.25W                                                               | 271-68-RC (Xicon)
| R11               | 1   | 100 KOhm, 10%, 0.5W Trimmer                                                     | 652-3362F-1-104LF
| R12               | 1   | 1.5 KOhm, 1%, 0.25W                                                             | 271-1.5K-RC (Xicon)
| R13-R14           | 2   | 220 Ohm, 1%, 0.25W                                                              | 271-220-RC (Xicon)                | 660-MF1/4DCT52R2200F (Koa Speer), 71-CMF55220R00FHEK (Vishay Dale)
| R15               | 1   | 3.3 KOhm, 1%, 0.25W                                                             | 271-3.3K-RC (Xicon)
| R16-R17           | 2   | 1 KOhm, 1%, 0.25W                                                               | 271-1K-RC (Xicon)
| RLED              | 1   | ?                                                                               | ?
|                   |     |                                                                                 | **Capacitors**
| C1-C2             | 2   | 22 pF                                                                           | 75-1C10C0G220J050B
| C3-C4-C5          | 3   | 10 uF                                                                           | 667-ECE-A1HKA100B (Panasonic)     | 647-UST1H100MDD1TE (Nichicon)
|                   |     |                                                                                 | **Switches**
| S1-S2             | 2   | SPDT (See build details for purpose of these switches)                          |                                   | 633-MS12AFG01 (NKK)
| S1-S2 (Alt)       | 2*  | 1 x 3 header (Could just use wire if will never change)                         | See ALT_HEADER                    | 649-69190-403 (FCI), 517-929834-02-03 (3M), 798-A23PA254DSA71 (Hirose)
|                   | 2   | 1 x 2 shorting jumper (Could just use wire if will never change)                | 649-63429-202LF (FCI)             | 517-951-00 (3M), 855-M7582-46 (Harwin)
|                   |     |                                                                                 | **Crystal**
| XTAL              | 1   | 16 MHz                                                                          | 449-LFXTAL058383BULK
|                   |     |                                                                                 | **Diodes**
| D1-D2             | 2   | 1N5227 Zener 3.6V                                                               | 512-1N5227BTR
| D3                | 1   | 1N4148                                                                          | 78-1N4148 (Vishay)                | 512-1N4148TR (Fairchild), 771-1N4148,133 (NXP)
| LED               | 1   | Green Led                                                                       | 619-350-00001
|                   |     |                                                                                 | **ICs**
| IC1-IC6           | 6   | SN74HC4851 (each 1 = 8 ports)                                                   | microDRUM store                   | 595-SN74HC4851N (Texas Instruments)
| IC7               | 1   | 74HC595                                                                         | 595-SN74HC595NE4
| IC8               | 1   | 78005                                                                           | 595-TL780-05KCS (Texas Instruments)
| 6N138             | 1   | 6N138                                                                           | 782-6N138 (Vishay)                | 512-6N139M (Fairchild)
| ATtiny4313        | 1   | ATtiny4313                                                                      | 556-ATTINY4313-PU (Microchip)
|                   |     |                                                                                 | **Sockets**
| IC1/IC6/IC7skt    | 7   | 16 pin DIP (2x8)                                                                | 649-DILB16P-223TLF (FCI)          | 517-4816-3004-CP (3M), 571-1825093-4 (TE Connectivity)
| 6N138skt          | 1   |  8 pin DIP (2x4)                                                                | 649-DILB8P223TLF (FCI)            | 649-DILB8P223TLF (FCI), 517-4808-3004-CP (3M)
| ATtiny4313skt     | 1   | 20 pin DIP (2x10)                                                               | 649-DILB20P-223TLF (FCI)
|                   |     |                                                                                 | **Connectors**
| J1-J6             | 6   | 2 x 5 header                                                                    | 649-67997-410HLF (FCI)            | 653-XG8W-1041 (Omron), 855-M20-9760546 (Harwin)
|                   | 6   | 2 X 5 socket                                                                    | 649-65239-005LF (FCI)             | 653-XG4M-1030 (Omron), 855-M20-1070500 (Harwin)
| Contacts          |     | To fit 22-30 AWG wire (assuming that matches ribbon wire above)                 | 649-76347-401LF (FCI)             | 538-08-50-0114 (Molex) - Need to make sure compatible with sockets chosen
| MIDI In/Out/Aux   | 3   | 5 pin DIN socket                                                                | 568-NYS325 (REAN)                 | 523-T3359150 (Amphenol)
| HEADER            | 2   | 1 x 32 header - split (will cover all headers)                                  | 517-929834-02-36-RK (3M)
| Wire              |     | Ribbon cable, rainbow version optional…                                         | Ebay is best option as Mouser only does long lengths

<br>

## Jack Board v0.4 Parts

| Part        | Qty | Description                                                           | Mouser Part No           | Possible Alternatives |
| ----------- | --- | --------------------------------------------------------------------- | ------------------------ | --------------------- |
|             |     |                                                                       | **Circuit Board**
| PCB         | 1   | Jack Board v0.4                                                       | microDrum Store
|             |     |                                                                       | **Jacks**
| U1-U4       | 4   | Mono sockets for single piezo trigger, stereo for two                 | 550-20301 (Stereo)       | 568-NMJ4HHD2 (Mono), 550-20384 (Stereo)
|             |     |                                                                       | **Resistors**
| R1-R4       | 4   | 100 Ohm - 1 MOhm (Depends on HHC pedal resistor), 1%, 0.25W           | Xicon 271 range
|             |     |                                                                       | **Switches**
| S1-S4       | 4   | SPDT ( To chose between pad or HHC)                                   | 633-MS12AFG01 (NKK)
| S1-S4 (Alt) | 4*  | 1 x 3 header (Could just use wire if will never change)               | See ALT_HEADER           | 649-69190-403 (FCI), 517-929834-02-03 (3M), 798-A23PA254DSA71 (Hirose)
|             | 4   | 1 x 2 shorting jumper (Could just use wire if will never change)      | 649-63429-202LF (FCI)    | 517-951-00 (3M), 855-M7582-46 (Harwin)
| ALT_HEADER  | 1   | 1 x 32 header - split (will cover all headers with qty marked with *) | 517-929834-02-36-RK (3M)
|             |     |                                                                       | **Connectors**
| CONN1       | 1   | 2 x 5 header                                                          | 649-67997-410HLF (FCI)   | 653-XG8W-1041 (Omron), 855-M20-9760546 (Harwin)
|             | 1   | 2 x 5 socket                                                          | 649-65239-005LF (FCI)    | 653-XG4M-1030 (Omron), 855-M20-1070500 (Harwin)
| Contacts    |     | To fit 22-30 AWG wire (assuming that matches ribbon wire above)       | 649-76347-401LF (FCI)    | 538-08-50-0114 (Molex) - Need to make sure compatible with sockets chosen

<br>

**NB**: These quantities are for a single board, giving you 4 sockets.
