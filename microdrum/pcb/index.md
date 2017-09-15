---
title: Building MicroDrum PCB
---
## Tools Required

Basic soldering skills are needed for building the microDrum using the official
pcbs, but these are quickly learnt with a bit of practice.
There are plenty of guides and videos out there to show you how to do it.
The tools you will need are listed below: 

| Tool                   | Description |
| ---------------------- | --- |
| Soldering Iron         | This should be between 25w and 40w. If this is the only bit of soldering you ever plan to do then something cheap and cheerful is likely to be ok. A chisel tip (2-3mm) is good for this build. |
| Soldering Iron Stand   | Very useful, stops your workbench becoming a mess of burnmarks and you grabbing the wrong end... The coil type with a sponge to clean your tip is a common one |
| Soldering Tip Cleaner  | This is pot of low abrasive brass shavings, used to clean the tip of your soldering iron. This isn't necessarily required, a sponge on the coil holder above is enough unless you plan to do a lot of soldering. |
| Solder                 | If you buy a kit it may come with some leadfree solder. This flows a little less easily than lead solder, but is still okay for this build. Otherwise get some with a rosin core, also known as flux-core. 0.7mm diameter is a good size for this project, and soldering electronics in general. |
| Third Hand             | These are very useful! Basically a bar with a crocodile clip at each end and a magnifying glass in the middle, either you can use it to hold your board still and have solder in one of your hands and the iron in the other, or you can hold the solder with one clip, and bring the board to it whilst holding a part in place. A very cheap investment, not essential but worth it. The magnifying glass helps too. |
| Wire Cutters/Strippers | Useful for obvious reasons. You can get away with using cutters as strippers, if you are careful not to cut into the wire as well as the plastic sheath, or you can buy fancy strippers that make life easier |
| Needle Nose Pliers     | Not essential, but useful for bending wires, component leads, holding things in place etc... |
| Multimeter             | These range from cheap to very expensive, and although not essential they are good for checking for short circuits and diagnosing issues. You can probably get away with being an optimist and not buying one until you finish building it. Then if you have problems get one and start checking those joints... |
| Masking Tape           | Definitely not essential, but stops the crocodile clips on a Helping Hand marking the edges of the pcb when holding it. |

## Motherboard V0.7

There are a few build options available when populating this board, as shown in
the table on the board itself, and below.
The board in the photos for this guide has been stuffed with all components for
reference, feel free to leave out those parts that are not required.

| Part | V5 - Thru | V3.3 - Thru | V5 - No Thru | V3.3 - No Thru | 
| ---- | --------- | ----------- | ------------ | -------------- |
| S2   | Left      | Right       | Left         | Right          |
| JX   | Close     | Open        | Close        | Open           |
| R11  | Yes       | Yes         | No           | No             |
| R12  | Yes       | Yes         | No           | No             |
| R13  | No        | Yes         | No           | Yes            |
| U8   | Yes       | Yes         | No           | Yes            |

<br>

Regarding jumpers and switches - These can either be populated as per the
photographs, with headers and jumpers in place to select the required option,
or if you never expect to change the positions you can simply solder a piece of
wire across the position you need.

It is generally easier when stuffing a pcb to start with the lowest profile
pieces so things don't get in your way as you progress. 

### Bare Board

Here are photos of the top and bottom of the bare Mainboard V0.7 PCB for reference:

![](mainboard-v0-7-top.jpg)
![](mainboard-v0-7-bottom.jpg)

### Example Kit

Here is a shot of the equipment used when building the board in this guide.
The glass jar is just there to collect cutoffs, it is sometimes useful to have a
short piece of wire available for shorting jumpers, and it stops them lying on
the floor ready to bite you...

![](microdrum-equipment.jpg)

### Step 1 - Wire Links

The pcb has a number of simple wire connections that need soldering in place on
the top, marked with white lines. This approach prevents the need to go with a
more expensive, 2-layer pcb that would bridge these joins on the top side.
Simply cut a piece of wire to length, push it through and solder.
Bending the legs outwards will help hold it in place whilst you solder.
Alternatively it is possible to hold the part in place on the top of the board,
and then bring the board to the solder, which could be held in a third hand.
Be warned, the component will potentially get hot as you hold it...

It is often helpful to check the position of the component after soldering the
first leg, in case it has slipped when you push the iron onto it.
If it has it is MUCH easier to readjust when only 1 joint needs reheating to
move it around.

You can check your soldering with a multimeter set to read resistance.
Put it in Ohms range, place one probe on the component lead to check, and the
other on a connection it should be connected to.
You should get a very low Ohm reading.
You can also ensure that you haven't accidentally connected it to surrounding
traces, or to ground, by the same method, but this time you should get a reading
that indicates infinite resistance (for example 0L).

When building the board in the photo I have used some red wire just so it blends
in nicely with the board, bare wire would be just as good. 

![](mainboard-v0-7-step1.jpg)

### Step 2 - Resistors

There are 13 resistors in total, but not all are necessarily required.

* **R1 - R6** - These are for the multiplex switches, and as such are only required
              if you intend to use that specific jack socket, i.e. if you only
              need 16 inputs (presuming 2 jack boards populated with stereo sockets),
              for instance, you only need to populate R1 & R2
              (and obviously U1 & U2, & CONN1 & CONN2...).

* **R8oC1** - If using a resistor rather than a capacitor here then you will need
            to install it! It is recommended that a capacitor (10 uF) is used
            if you are using an Arduino Uno.

* **R11 & R12** - If you intend to build your microDrum as a [MIDI-Thru](https://en.wikipedia.org/wiki/MIDI#Devices)
                version then you need to install R11 & R12, regardless of the
                type of Arduino board you intend to use.

* **R13** - This is only required if you are using a 3.3v Arduino Due.
          You can leave this out if you are using the Uno,
          a 5v (operating voltage) board.
          More info on the boards can be found [here](http://arduino.cc/en/Products.Compare).

![](mainboard-v0-7-step2.jpg)

### Step 3 - Capacitor

There is only 1 capacitor, which is an alternative for a resistor in the R8oC1
position, and is recommended if using the Uno.

The main thing to bear in mind is that this is an electrolytic capacitor, which
means it is polarised, which means you need to ensure you install it the right
way round, or it will not like it! The longest lead is the positive one, and
there is also normally a strip down the side of the cap by the negative lead,
with minus signs (looking like ovals) down it.

The +ve side is indicated on the mainboard, it is the left hole as you look at
the board with the bottom towards you. 

![](mainboard-v0-7-step3.jpg)

### Step 4 - Headers

There are a number of headers that need installing, and the parts list includes
the option of buying longer strips for splitting, which is generally a cheaper option...

![Headers before splitting](pins-before-split.jpg)

![Headers split into the correct section lengths](pins-after-split.jpg)

Some of these headers are only needed if you plan on using certain options in
your build. Any you don't need can be left unpopulated.

* **JP1** - Required if you plan to use a MIDI Out connector on this board.
          The alternative is to use the USB connection on the Arduino board.

* **JP2** - Required for MIDI In connector.

* **JP3 & JP4** - Required if you are going to build the accompanying LCD screen.

* **JP5** - Required for the MIDI Thru build option.

* **JP6** - Required if you are going to build the accompanying LCD screen
          (used to supply power and ground connectivity).

* **JX** - Required if you are using a 5V Arduino board (Uno).

* **Arduino Connectors** - These need to go into the holes with the white circles around them.

* **S1** - A header can be used here instead of a switch, with a 2 pin jumper
         to select pins 1 & 2 (1 being the left most pin, nearest the R8oC1 postion)
         to close it, or 2 & 3 to connect the reset pin to ground.
         The reset pin should not be left floating (unconnected) as this may
         trigger random processor resets). A third (permanent) alternative would
         be to simply solder a clipped-off resistor lead between the required pin holes.

* **S2** - A header can be used here instead of a switch, with a 2 pin jumper to
         select pins 1 & 2 (1 being the left most pin, next to the 5V marking)
         if using a 5V Arduino board, or pins 2 & 3 if using a 3.3V board.

![](mainboard-v0-7-step4.jpg)

### Step 5 - Sockets

It is generally recommended that you use sockets for the IC chips, rather than
soldering them directly to the board. It makes it much easier to swap them out
if something should fail, for one thing...

Some of the sockets are optional depending on the build options you have chosen.

**U1 - U6** - The number of these used will depend on how many inputs you need for your triggers.

**U8** - Not required if you are not planning on using MIDI Thru and have a 5V Arduino board. 

![](mainboard-v0-7-step5.jpg)

### Step 6 - Connectors, ICs and Diode

Next install the connectors for the jack boards (CONN1 - CONN6).
Again, the number you install depends on how many jack boards you need to attach for your triggers.

It is advisable to only install one of the SN74HC4851 chips initially,
it helps with setup and any debugging.

IC chips often come with their legs splayed outwards.
Gently bend them to vertical on both sides against a flat surface, and be careful
to get all legs aligned before pushing them into place.

The Diode (D1) is polarised, so must be installed the correct way round.
The black band on the diode must line up with the white vertical stripe marking
in the component outline on the board, to the right. 

![](mainboard-v0-7-step6.jpg)

### Step 7 - Jumpers (5V Board)

Next install any jumpers required.
**Note - the photo does not show S1 jumper installed, it should be!**

![](mainboard-v0-7-step7.jpg)

### Step 8 - Arduino (or equivalent...)

The last stage is to carefully install your Arduino board, making sure the pins
all align before pushing it gently into place.

![](mainboard-v0-7-step8.jpg)

## Jackboard v0.4

There are a number of options when building the jackboard, depending on the type
of trigger to be connected. These are shown on the jackboard V0.4 schematic
available on the [download page](../downloads/)

### Bare Board

Here are photos of the top and bottom of the bare Jackboard V0.4 PCB for
reference (showing 4 together with the Mainboard):

![](jackboard-v0-4-top.jpg)
![](jackboard-v0-4-bottom.jpg)
