---
title: MicroDrum - FAQ
---
### What is the PCB v0.7 / v0.8 ?
The PCB is a finished product on which you need to solder the remaining components.
This is just a convenience product that you can use instead of making your own
PCB based on the schematics.
This is possibly the best for people who are too scared to make their own, or
absolutely have no clue how to do so.
The different versions have small different layouts, but should provide all what
you need.

### What do I need besides the PCB (selfmade or bought from the shop)?
As a minimalistic setup you would require:

* The PCB (selfmade or bought)
* The N74HC4851
* The MicroDrum Jack v04
* The 'MicroDrum MainComponents' in the shop as one item or here as full list.
* An Arduino (of course ;D)

With this setup you would have 8 Inputs. For additional Inputs, you would require
more HC4851 multiplexer and jack v04.

* 1 * HC4851 / Jackv04 = 8 Inputs
* 2 * HC4851 / Jackv04 = 16 Inputs
* 3 * HC4851 / Jackv04 = 24 Inputs
* 4 * HC4851 / Jackv04 = 32 Inputs
* 5 * HC4851 / Jackv04 = 40 Inputs
* 6 * HC4851 / Jackv04 = 48 Inputs

### What is nanoDrum?
The nanoDrum is a 'mini' (as nano suggests)-version of the microdrum.
An Arduino is not necessary with the nanoDrum.
However, this only supports up to 24 inputs, instead of the microdrum which
support 48.
It is currently in development state, which means, there is a fundraising program
and the firmware is not finished yet.

### How many Inputs does nano-/microdrumDrum support?
The microDrum supports up to 48 inputs, however, please note that for this to
function you need the configTool version written in python.
The old configTool had a blockade that only allowed to use 24 inputs.
The nanoDrum supports up to 24 inputs.

### Does the nano-/microDrum support 3-zone triggers?
The module does support 3-zone triggers like Roland cymbals or Yamaha cymbals,
however, this feature does not work perfectly yet.

### Is there positional sensing?
No, there is no positional sensing support (yet).

### Does the nano-/microDrum support dynamic velocity (depending on the hit-strength)?
Yes it does.

### Will there be USB-Support for the nano-/microDrum?
USB-Support is only planned for the nanoDrum and will be supported when the first
public version of the firmware is finished.
Both, the nano- and the microDrum support MIDI ports natively.

### I've read that there is a rustle or some kind of disturbing sound when you have the module on but don't play anything, sometimes even when playing. What does that mean?
This effect should only occure if you have either parts of bad quality,
or a false configuration. Otherwise this should not be the case.

### How much latency occurs from hitting the pad until it comes out of the box/reaches the actual DAW/VST Software?
According to this post (italian) the latency from hitting to midi note was 1ms
(and therefore ignorable).
However, how fast the midi nodes will be processed is mainly dependant on your
system specs.
For example, processor, sound card, midi controller, and so on...

### What costs do I have to expect for shipping, and where do you ship?
MicroDrum and Nanodrum are being shipped globally to a fair price of 10€.
