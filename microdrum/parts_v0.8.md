---
title: Parts List v0.8
---
This list of hardware parts focuses on Mouser part numbers, as the most commonly
used online electronics store. You can of course get the manufacturer's part
number from there and buy elsewhere! Alternatives are included where possible
in case there are stock or availability issues for the main parts.

## Mainboard v0.8 Parts

| Part            | Qty | Description                                                      | Mouser Part No
| --------------- | --- | ---------------------------------------------------------------- | --------------
|                 |     |                                                                  | **Circuit Board**
| PCB             | 1   | Mainboard v0.8                                                   | [microDRUM Store](http://microdrum.altervista.org/blog/products-page-2/pcb/microdrum-pcb-v0-8-fundraising-duplicate/)
|                 |     |                                                                  | **Arduino**
| Uno             | 1   | Will need Mainboard set to 5V version                            | [782-A000066](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkeyA000066)
| Due             | 1   | Will need Mainboard set to 3.3V version                          | [782-A000062](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkeyA000062)
|                 |     |                                                                  | **Teensy**
| Teensy 3.2      | 1   | **Not tested**                                                   | [474-DEV-13736](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey474-DEV-13736) SparkFun
|                 |     |                                                                  | **Resistors**
| R1-R6           | 6   | 1 MOhm, 1%, 0.25W                                                | [271-1.0M-RC](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey271-1.0M-RC) Xicon
| R7-R8-R18       | 3   | 10 KOhm, 1%, 0.25W                                               | [271-10K-RC](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey271-10K-RC) Xicon
| R9-R10          | 2   | 68 Ohm, 1%, 0.25W                                                | [271-68-RC](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey271-68-RC) Xicon
| R11             | 1   | 100 KOhm, 10%, 0.5W Trimmer                                      | [652-3362F-1-104LF](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey3362F-1-104LF) Bourns
| R12             | 1   | 1.5 KOhm, 1%, 0.25W                                              | [271-1.5K-RC](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey271-1.5K-RC) Xicon
| R13-R14         | 2   | 220 Ohm, 1%, 0.25W                                               | [271-220-RC](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey271-220-RC]) Xicon
| R15             | 1   | 3.3 KOhm, 1%, 0.25W                                              | [271-3.3K-RC](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey271-3.3K-RC) Xicon
| R16-R17         | 2   | 1 KOhm, 1%, 0.25W                                                | [271-1K-RC](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey271-1K-RC) Xicon
| RLED            | 1   | ?                                                                | ?
|                 |     |                                                                  | **Capacitors**
| C1-C2           | 2   | 22 pF                                                            | [75-1C10C0G220J050B](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey75-1C10C0G220J050B) Vishay
| C3-C4-C5        | 3   | 10 uF                                                            | [667-ECE-A1HKA100B](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey667-ECE-A1HKA100B) Panasonic
|                 |     |                                                                  | **Switches**
| 5V/3.3V         | 1   | SPDT (See build details for purpose of these switches)           | [633-MS12AFG01](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey633-MS12AFG01) NKK
| Jumper          | 1   | 1 x 2 shorting jumper (Could just use wire if will never change) | [649-63429-202LF](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey649-63429-202LF) FCI, [517-951-00](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey517-951-00) 3M or [855-M7582-46](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey855-M7582-46) Harwin
|                 |     |                                                                  | **Crystal**
| XTAL            | 1   | 16 MHz                                                           | [449-LFXTAL058383BULK](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey449-LFXTAL058383BULK) IQD
|                 |     |                                                                  | **Diodes**
| D1-D2           | 2   | 1N5227 Zener 3.6V                                                | [512-1N5227BTR](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey1N5227BTR)
| D3              | 1   | 1N4148                                                           | [78-1N4148](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey78-1N4148) Vishay or [512-1N4148TR](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey512-1N4148TR) Fairchild
| LED             | 1   | Green Led                                                        | [619-350-00001](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey350-00001) (Parallax)
|                 |     |                                                                  | **ICs**
| IC1-IC6         | 6   | SN74HC4851 (each 1 = 8 ports)                                    | [595-SN74HC4851N](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey595-SN74HC4851N) Texas Instruments
| IC7             | 1   | 74HC595 Shift Register                                           | [595-SN74HC595NE4](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey595-SN74HC595NE4) Texas Instruments
| IC8             | 1   | 7805                                                             | [595-TL780-05KCS](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey595-TL780-05KCS) Texas Instruments
| 6N138           | 1   | 6N138                                                            | [782-6N138](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey782-6N138) Vishay or [512-6N139M](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey512-6N139M) Fairchild
| ATtiny4313      | 1   | ATtiny4313                                                       | [556-ATTINY4313-PU](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey556-ATTINY4313-PU) Microchip
|                 |     |                                                                  | **Sockets**
| IC1/IC6/IC7skt  | 7   | 16 pin DIP (2x8)                                                 | [649-DILB16P-223TLF](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey649-DILB16P-223TLF) FCI or [517-4816-3004-CP](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey517-4816-3004-CP) 3M
| 6N138skt        | 1   |  8 pin DIP (2x4)                                                 | [649-DILB8P-223TLF](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey649-DILB8P-223TLF) FCI or [517-4808-3004-CP](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey517-4808-3004-CP) 3M
| ATtiny4313skt   | 1   | 20 pin DIP (2x10)                                                | [649-DILB20P-223TLF](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey649-DILB20P-223TLF) FCI
|                 |     |                                                                  | **Connectors**
| J1-J6           | 6   | 2 x 5 header                                                     | [649-67997-410HLF](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey649-67997-410HLF) FCI, [653-XG8W-1041](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey653-XG8W-1041) Omron or [855-M20-9760546](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey855-M20-9760546) Harwin
|                 | 6   | 2 X 5 socket                                                     | [649-65239-005LF](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey649-65239-005LF) FCI, [653-XG4M-1030](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey653-XG4M-1030) Omron or [855-M20-1070500](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey855-M20-1070500) Harwin
| Contacts        |     | To fit 22-30 AWG wire (assuming that matches ribbon wire above)  | [649-76347-401LF](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey649-76347-401LF) FCI or [538-08-50-0114](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey538-08-50-0114) Molex - Need to make sure compatible with sockets chosen
| MIDI In/Out/Aux | 3   | 5 pin DIN socket                                                 | [568-NYS325](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey568-NYS325) REAN or [523-T3359150](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey523-T3359150) Amphenol
| Header          | 2   | 1 x 32 header - split (will cover all headers)                   | [517-929834-02-36-RK](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey517-929834-02-36-RK) 3M
| Wire            |     | Ribbon cable, rainbow version optional…                          | Ebay is best option as Mouser only does long lengths

<br>

## Jack Board v0.4 Parts

| Part     | Qty | Description                                                      | Mouser Part No
| -------- | --- | ---------------------------------------------------------------- | --------------
|          |     |                                                                  | **Circuit Board**
| PCB      | 1   | Jack Board v0.4                                                  | [DIY](/microdrum/downloads/microDRUM_Jack_v0.4-PCB.pdf)
|          |     |                                                                  | **Jacks**
| U1-U4    | 4   | Mono sockets for single piezo trigger, stereo for two            | [550-2030](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey550-20301), [550-20384](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey550-20384) Stereo or [568-NMJ4HHD2](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey568-NMJ4HHD2) Mono
|          |     |                                                                  | **Resistors**
| R1-R4    | 4   | 100 Ohm - 1 MOhm (Depends on HHC pedal resistor), 1%, 0.25W      | Xicon 271 range
|          |     |                                                                  | **Switches**
| S1-S4    | 4   | SPDT ( To chose between pad or HHC)                              | [633-MS12AFG01](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey633-MS12AFG01) NKK
| Jumper   | 4   | 1 x 2 shorting jumper (Could just use wire if will never change) | [649-63429-202LF](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey649-63429-202LF) FCI, [517-951-00](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey517-951-00) 3M or [855-M7582-46](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey855-M7582-46) Harwin
| Header   | 1   | 1 x 32 header - split (will cover all headers)                   | [517-929834-02-36-RK](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey517-929834-02-36-RK) 3M
|          |     |                                                                  | **Connectors**
| Conn1    | 1   | 2 x 5 header                                                     | [649-67997-410HLF](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey649-67997-410HLF) FCI, [653-XG8W-1041](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey653-XG8W-1041) Omron or [855-M20-9760546](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey855-M20-9760546) Harwin
|          | 1   | 2 x 5 socket                                                     | [649-65239-005LF](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey649-65239-005LF) FCI, [653-XG4M-1030](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey653-XG4M-1030) Omron or [855-M20-1070500](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey855-M20-1070500) Harwin
| Contacts |     | To fit 22-30 AWG wire (assuming that matches ribbon wire above)  | [649-76347-401LF](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey649-76347-401LF) FCI or [538-08-50-0114](http://www2.mouser.com/Search/ProductDetail.aspx?R=0virtualkey0virtualkey538-08-50-0114) Molex - Need to make sure compatible with sockets chosen

<br>

**NB**: These quantities are for a single board, giving you 4 sockets.
