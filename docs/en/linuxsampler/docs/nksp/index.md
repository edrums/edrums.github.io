---
title: Real-Time Instrument Scripts
refdir: linuxsampler/docs/nksp/
lang: en
---
The sampler technology is constantly evolving to satisfy new feature requirements
of sound designer in order to allow them creating more and more realistic sounds.
As an example you might look at state of the art orchestra libraries. They not
only allow you pick one of the individual instrument sounds of an orchestra,
they also allow you to control the articulation of the respective orchestra
instrument while playing them live with your keyboard. So you might start playing
an interesting intro with a string ensemble in *spiccato* playing style, then you
might go over into a slow bridge part where the string ensemble is resembling a
*legato* articulation or even portamento in between, which makes that part of the
song very calm and relaxed, and then you shock your audience all of a sudden with
a loud *staccato*, automatically supported by kettledrum and brass sounds, that
wakes up even the last one in the back row. And the best thing: you did not
switch to another instrument during that entire song.

### Technical Challenge

Adding these kinds of features to a sampler had long been a challenge for
software developers. On one hand you need to provide the musician additional
controls to let him switch between such kind of orchestra articulations. Sound
designers came up with various ideas to let the keyboard player do this. For
example by

* using continous controllers like the keyboard's modulation wheel
* using a dedicated keys section on the keyboard where each key selects another playing style
* utilizing aftertouch support of keyboards

and some more. And on the other hand developers needed to extend the sampler
software and the instrument file format to deal with all those extensions.
Thinking about portamento for example, the sampler not only has to pick the right
sample for the first key the keyboard player hits, the sampler also has to detect
the next note and needs to pick a special dedicated *portamento* sample that goes
specifically from that one note to that other note. If the sampler would do that
synthetically instead, then it would sound synthetically.

And if that was not enough, sound designers started even to ask for very exotic
features, specifically for just a bunch of sounds or even for just one single
sound of theirs, for example a specific note pattern that shall automatically be
added by the sampler to each note being played by the keyboard player. The
requested feature set became such large, that sampler developers failed to put
all this into their stock sampler software package. A completely new solution
was required.

### Scripts as Solution

Instead of bloating the sampler engine with more and more suboptimal features
that not really suited anybody, the sampler developers turned the way around and
opened the sampler engine for sound designers, so that they could add their own
custom software components and bundle them with their sounds. These kinds of
software plugins that are directly glued and shipped with sounds are called
*Instrument Scripts*, they extend the sampler software with new software features
required by the respective sound.

Sound designers were finally free to add their own features to the sampler and
used *Instrument Scripts* extensively to create stunning new sounds. For example
they came up with a feature called *symphatetic resonance* for their piano sound
libraries, which brought piano sounds another great leap forward to match their
real, physical counter parts.

## Using Scripts with LinuxSampler

LinuxSampler allows you to write and use such *Instrument Scripts* as well. At
the moment support for instrument scripts is provided by the GigaStudio format
engine, as well as now also by the SFZ format engine of LinuxSampler. The script
engine was developed in a very modular design, where most of the script engine's
software is independent from the actual sampler format and the respective sampler
format engine is just adding its format specific extensions to the script language.
For example the GigaStudio format engine adds scripting functions to allow the
sound designer to control the dimension region by scripts.

### Bundling Scripts with GigaStudio (.gig) Files

Our graphical instrument editor for the GigaStudio format - *gigedit* - includes
an instrument script editor and allows you to attach instrument scripts to
individual GigaStudio format sounds. Refer to the gigedit manual for
[how to manage instrument scripts with gigedit](../gigedit/scripts).

### Bundling Scripts with SFZ (.sfz) Files

LinuxSampler adds a new opcode [script](opcode/script) as an extension to the
offical SFZ format. Similar to the [sample](opcode/sample) opcode, a file system
path needs to be assigned to the actual script file that should be loaded by the
sampler. The [script](opcode/script) opcode should be placed in the SFZ file's
<`global`> section. However at the moment the precise location of the opcode will
simply be ignored by LinuxSampler. A simple example SFZ file may look like this:

---
// real-time instrument scripts should be loaded in global section<br>
<`global`><br>
[script](opcode/script)=path/to/my_nksp_script.txt<br>
// just load one audio file and assign in to entire key range<br>
<`group`><br>
[sample](opcode/sample)=some_sound.wav<br>

---
At the moment LinuxSampler supports only one script file per instrument.
Accordingly there should only be one [script](opcode/script) opcode occurrence
in your SFZ file. If you place more than one [script](opcode/script) opcode to a
SFZ file, then only the first script will be loaded and the sampler will print a
warning. In future this will change, and the sampler will support running
multiple scripts, and will run the scripts subsequently on events according to
the order the scripts appeared in the SFZ file.

### Learning the Script Language

You certainly find some instrument scripts ready to be used on the Internet. So
you can simply download and attach them to your sounds with *gigedit*. In order
to write your own custom instrument scripts though, you need to get in touch with
the scripting language. Refer to the [NKSP Language Tour](../nksp) for
learning how to write your own scripts.

### Script Language Reference

If you are already familiar with the instrument script language basics, and just
need details and examples to the individual built-in functions and built-in
variables, then refer to the [NKSP Reference Manual](../nksp/reference).

<br>
<link rel="stylesheet" href="/linuxsampler/style.css">
<div>
    <div id="r" class="child-div"><p></p></div>
    <div id="c" class="child-div"><p><a href="..">↑ LinuxSampler Documents</a></p></div>
    <div id="l" class="child-div"><p><a href="language">→ NKSP Language</a></p></div>
</div>
