---
title: LinuxSampler SFZ Reference
---
Last update: 3 June, 2012.

### Table of Contents

**LinuxSampler SFZ Implementation**

  * [Introduction](#Introduction)
    * [Structure](#Structure)
      * [Region](#Region)
      * [Group](#Group)
      * [Global](#Global)
      * [Control](#Control)
      * [Curve](#Curve)
      * [Effects](#Effects)
    * [Comments](#Comments)
    * [Units](#Units)
    * [MIDI Continuous Controller](#MIDI)
      * [Modulation](#Modulation)
      * [Additional Controllers](#Controllers)
  * [Table 1.1 Sample Definition](#Table1.1)
  * [Table 1.2 Control](#Table1.2)
  * [Table 1.3 Loading](#Table1.3)
  * [Table 1.4 Wavetable Oscillator](#Table1.4)
  * [Table 1.5 Input Controls](#Table1.5)
  * [Table 1.6 Sample Player](#Table1.6)
  * [Table 1.7 Amplifier](#Table1.7)
  * [Table 1.8 Pitch](#Table1.8)
  * [Table 1.9 Filter](#Table1.9)
  * [Table 1.10 Envelope Generators](#Table1.10)
  * [Table 1.11 Low-Frequency Oscillators](#Table1.11)
  * [Table 1.12 Equalizer](#Table1.12)
  * [Table 1.13 Effects (SFZ v2)](#Table1.13)
  * [Table 1.14 Effects (SFZ v1)](#Table1.14)
  * [Table 1.15 Amplifier EG (SFZ v1)](#Table1.15)
  * [Table 1.16 Amplifier LFO (SFZ v1)](#Table1.16)
  * [Table 1.17 Filter EG (SFZ v1)](#Table1.17)
  * [Table 1.18 Filter LFO (SFZ v1)](#Table1.18)
  * [Table 1.19 Pitch EG (SFZ v1)](#Table1.19)
  * [Table 1.20 Pitch LFO (SFZ v1)](#Table1.20)
  * [Table 1.21 Curve](#Table1.21)
  * [Table 1.22 Global](#Table1.22)

**This is a work in progress!**

<a name="Introduction">

# Introduction

SFZ is a file format to define how a collection of samples and other type of
oscillators are arranged for performance.
The goal behind the SFZ format is to provide a free, simple, minimalistic and
expandable format to arrange, distribute and use audio samples with the highest
possible quality and the highest possible performance flexibility. Soundware,
software and hardware developers can create, use and distribute the SFZ format
files for free, for either free or commercial applications.
The following is an overview of the implementation of SFZ in LinuxSampler. It
will serve as a chart of the state of our implementation. The numbering of
tables (up to 1.20) correspond to *Cakewalk Synthesizers Appendix A*. Some opcodes
introduced by Garritan/Plogue in their ARIA engine have been included. Missing
and otherwise omitted opcodes have also been added to the tables by us.
**This document represents LinuxSamplers interpretation of the SFZ format and is
not guaranteed to be correct in any way, shape or form.**
~~Stricken~~ opcodes in tables are not implemented by LinuxSampler at this time.
All opcodes are in lower case, capitalized `N`, `X` and `Y` in opcode
names indicate an integer number.

<a name="Structure">

## Structure

An instrument in the SFZ format is a collection of sample files and a SFZ
definition file. A SFZ definition file contain two types of tokens: *headers* and
*opcodes*. Headers starts with a lesser-than character (<) and ends with a
greater-than character (>). Opcodes are key/value pairs separated by an equal to
sign (=). The opcode values can either be integers, floating point numbers or strings.

<a name="Region">

### Region

An instrument is defined as a collection of regions. A region include the
definition for the input controls (when and how the region will be triggered for
playback), the samples to be played and the performance parameters (how to play
those samples). A region starts with the `<region>` header and is followed
by one or more opcodes.

<a name="Group">

### Group

Regions can be arranged into groups. Groups allow entering common parameters for
multiple regions, think of it as a template for regions. A group start with the
`<group>` header and is followed by one or more opcodes.

<a name="Global">

### Global

Global settings applying to the whole SFZ definition file can be defined. Think
of it as a template for all groups and regions. Some opcodes can only be set here.
The global settings start with the `<global>` header and is followed by one
or more opcodes (see [Table 1.22](#Table1.22)).

<a name="Control">

### Control

Control directives are used to specify a default path to the location of samples
or set the default position for any MIDI continuous controller. Those are special
opcodes that can only be set here. The control settings start with the
`<control>` header and is followed by one or more opcodes (see [Table 1.2](#Table1.2)).

<a name="Curve">

### Curve

The player define up to six curves internally but additional custom curves can
also be defined. A custom curve start with the `<curve>` header and is
followed by one or more curve value opcodes (see [Table 1.21](#Table1.21)).

<a name="Effects">

### Effects

Effects that should apply to all voices can be defined. Effects start with the
`<effects>` header and is followed by one or more effect opcodes (see [Table 1.13](#Table1.13)).

<a name="Comments">

## Comments

Comment lines can be inserted anywhere inside the file. A comment line starts
with two slash characters ('//') and it extends until the end of the line.

<a name="Units">

## Units

All units in the SFZ format are in real-world values. Frequencies are expressed
in *Hertz*, pitches in *cents*, amplitudes in *percentage* and volumes in *decibels*.
Notes are expressed in MIDI Note Numbers, or in note names according to the
International Pitch Notation (IPN) convention. According to this rules, middle C
in the keyboard is C4 and the MIDI note number 60.

<a name="MIDI">

## MIDI Continuous Controller

<a name="Modulation">

### Modulation

Everything that can be modulated by a continuous controller has a `_oncc`
opcode suffix. A `_smoothcc` suffix sets the speed of parameter change in
milliseconds. A `_stepcc` sets in what steps the parameter change is
introduced. A `_curvecc` suffix sets the curve defined in the file.

<a name="Controllers">

### Additional Controllers

SFZ support an extended set of MIDI CC messages generated by the various Cakewalk
synthesizers GUIs. Events for the following CC numbers are generated by other
MIDI events or internal generators and therefore *might* be applicable to our
implementation:

* 128: bend
* 129: channel aftertouch
* 130: polyphonic aftertouch
* 131: velocity
* 132: release velocity
* 133: keyboard (noye 0=0, note 127=1)
* 134: key gate (0 if no keys are pressed, 1 otherwise)
* 135: random (0 to 1)
* 136: random (-1 to 1)
* 137: alternate (changes from 0 to 1 and vice versa)

<a name="Table1.1">

# Table 1.1 Sample Definition

| Opcode           | Description | Type | Range
| ---------------- | ----------- | ---- |
| `sample=`        | This opcode defines which sample file the region will play.<br><br>The value of this opcode is the filename of the sample file, including the extension. The filename must be stored in the same folder where the definition file is, or specified relatively to it. If the sample file is not found, the player will ignore the whole region contents.<br><br>Long names and names with blank spaces and other special characters (excepting the = character) are allowed in the sample definition.<br><br>The sample file can either be a WAVE, AIFF or OGG file. | string | n/a |
| ~~`md5=`~~       | ~~Verifies the MD5 hash of a sample on loading.~~ | ~~string~~ | ~~n/a~~
| ~~`waveguide=`~~ | ~~Instructs the player to treat the loaded sample as an impulse which is directed to a waveguide.~~ | ~~string~~ | ~~on off~~

<a name="Table1.2">

# Table 1.2 Control

There can be multiple `<control>` headers in a file. Their effects lasts
until the end of the file or the next `<control>` header.

| Opcode | Description | Type | Range
| ------ | ----------- | ---- | -----
| `default_path=`  | This defines a default path, which will be added to every path in the `sample` opcode. | string | n/a
| `octave_offset=` | This opcode sets an offset which will be applied to all note names and numbers in a definition. | integer | n/a
| `note_offset=`   | Shifts all notes in a given map. | integer | n/a
| `set_ccN=`       | Sets the named MIDI CC initial value. | integer | 0 to 127
| ~~`#define`~~    | ~~Allows for macro/text pre-processing~~ | ~~string~~ | ~~n/a~~

<a name="Table1.3">

# Table 1.3 Loading

| Opcode                            | Description | Type | Range
| --------------------------------- | ----------- | ---- | -----
| ~~`load_mode=`~~                  | ~~Similar to "load mode" in Dimension Pro, but on a per-region basis.<br><br>**0**: load as 32-bit<br>**1**: load as 16-bit~~ | ~~integer~~ | ~~0 to 1~~
| ~~`load_start=`~~ ~~`load_end=`~~ | ~~Allows loading only part of a sample into memory.~~ | ~~integer~~ | ~~0 to 4294967296~~
| ~~`sample_quality=`~~             | ~~Sets the quality for sample-playback.<br><br>**1**: linear<br>**2**: high<br>**3-10**: different sinc interpolated modes~~ | ~~integer~~ | ~~1 to 10~~
| ~~`image=`~~                      | ~~Allows loading a BMP image, with or without alpha-channel for display purposes.~~ | ~~string~~ | ~~n/a~~

<a name="Table1.4">

# Table 1.4 Wavetable Oscillator

| Opcode                        | Description | Type | Range
| ------------------------------- | ----------- | ---- | -----
| ~~`oscillator=`~~                 | ~~If the value is set to on, the region becomes a wavetable oscillator. The sample specified in the region will be used to extract the spectral information and construct the wavetable.~~ | ~~string~~ | ~~on, off~~
| ~~`oscillator_phase=`~~           | ~~Sets the initial phase for the oscillator, from 0 to 360 degrees. A negative value will make the oscillator start at a random phase.~~ | ~~integer~~ | ~~-360 to 360 degrees~~
| ~~`oscillator_quality=`~~         | ~~Sets the quality for wavetable playback.<br><br>**0**: nearest<br>**1**: linear<br>**2**: high<br>**3**: dual-high~~ | ~~integer~~ | ~~0 to 3~~
| ~~`oscillator_table_size=`~~      | ~~Defines the table size of the wavetable used for the oscillator playback.~~ | ~~integer~~ | ~~0 to 4294967296~~
| ~~`oscillator_multi=`~~           | ~~Sets the oscillator to play in multi mode.<br><br>When `oscillator_mode=0`<br><br>**1**: engage a single oscillator<br>**2**: engage ring modulation~~ | ~~integer~~ | ~~3 to 9~~
| ~~`oscillator_mode=`~~            | ~~Defines the playback mode for the oscillator.<br><br>**0**: normal and ring modulation<br>**1**: phase modulation<br>**2**: frequency modulation~~ | ~~integer~~ | ~~0 to 2~~
| ~~`oscillator_detune=`~~          | ~~Sets the detune between the oscillators when in Multi, Ring, PM or FM modes.~~ | ~~integer~~ | ~~-100 to 100 cents~~
| ~~`oscillator_detune_onccN=`~~    | ~~Sets the detune between the oscillators modulated by MIDI continuous controller N.~~ | ~~integer~~ | ~~-100 to 100 cents~~
| ~~`oscillator_mod_depth=`~~       | ~~Sets the depth of modulation in PM/FM modes.~~ | ~~integer~~ | ~~-1200 to 1200 cents~~
| ~~`oscillator_mod_depth_onccN=`~~ | ~~Sets the depth of modulation in PM/FM modes modulated by MIDI continuous controller N.~~ | ~~integer~~ | ~~-1200 to 1200 cents~~
| ~~`oscillator_mod_smoothcc=`~~    | ~~Sets the control smooth for the depth of modulation when in PM/FM modes.~~

<a name="Table1.5">

# Table 1.5 Input Controls

The input controls define the conditions under which a region will get triggered and play back. Some input control states are defined at the instrument level while others (timer, sequence, key switches and groups) are defined at the region level.

A region can be triggered by either a key or controller. The key and velocity will be used if triggered by a key. The controller number and value will be used if triggered by a controller.

| Opcode                                                    | Description | Type | Range
| --------------------------------------------------------- | ----------- | ---- | -----
| `lochan=` `hichan=`                                       | If incoming notes have a MIDI channel between `lochan` and `hichan`, the region will play. | integer | 1 to 16
| `lokey=` `hikey=` `key=`                                  | If a note equal to or higher than `lokey` AND equal to or lower than `hikey` is played, the region will play. | integer | 0 to 127
| `lovel=` `hivel=`                                         | If a note with velocity value equal to or higher than `lovel` AND equal to or lower than `hivel` is played, the region will play. | integer | 0 to 127
| `loccN=` `hiccN=`                                         | Defines the range of the last MIDI controller N required for the region to play. | integer | 0 to 127
| `lobend=` `hibend=`                                       | Defines the range of the last Pitch Bend message required for the region to play. | integer | -8192 to 8192
| `lobpm=` `hibpm=`                                         | Host tempo value. The region will play if the host tempo is equal to or higher than `lobpm`, and lower than `hibpm`. | integer | 0 to 500
| `lochanaft=` `hichanaft=`                                 | Defines the range of last Channel Aftertouch message required for the region to play. | integer | 0 to 127
| `lopolyaft=` `hipolyaft=`                                 | Defines the range of last Polyphonic Aftertouch message required for the region to play. | integer | 0 to 127
| `loprog=` `hiprog=`                                       | Sets a region playback based on the value of the last Program Change message recieved. | integer | 0 to 127
| `lorand=` `hirand=`                                       | Random values. The player will generate a new random number on every note-on event, in the range 0~1.<br><br>The region will play if the random number is equal to or higher than `lorand`, and lower than `hirand`. | float | 0 to 1
| `lotimer=` `hitimer=`                                     | Set the region to play if the specified time has elapsed since a region in the same group has played. | float | n/a
| ~~`reverse_loccN=`~~ ~~`reverse_hiccN=`~~                 | ~~Sets the region into reverse playback based on a CC.~~ | ~~integer~~ | ~~0 to 127~~
| `seq_length=`                                             | Sequence length. The player will keep an internal counter creating a consecutive note-on sequence for each region, starting at 1 and resetting at `seq_length`. | integer | 1 to 100
| `seq_position=`                                           | Sequence position. The region will play if the internal sequence counter is equal to `seq_position`. | integer | 1 to 100
| `start_loccN=` `start_hiccN=` `stop_loccN=` `stop_hiccN=` | Defines a range of values to start a region playback, and another range of values of a control to stop the region playback (as replacements for note-on and note-off messages). | integer | 0 to 127
| `sw_lokey=` `sw_hikey=`                                   | Defines the range of the keyboard to be used as trigger selectors for the `sw_last` opcode. | integer | 0 to 127
| `sw_last=`                                                | Enables the region to play if the last key pressed in the range specified by `sw_lokey` and `sw_hikey` is equal to the `sw_last` value. | integer | 0 to 127
| `sw_down=`                                                | Enables the region to play if the key equal to `sw_down` value is depressed.<br><br>Key has to be in the range specified by `sw_lokey` and `sw_hikey`. | integer | 0 to 127
| `sw_up=`                                                  | Enables the region to play if the key equal to `sw_up` value is not depressed.<br><br>Key has to be in the range specified by `sw_lokey` and `sw_hikey`. | integer | 0 to 127
| `sw_previous=`                                            | Previous note value. The region will play if last note-on message was equal to `sw_previous` value. | integer | 0 to 127
| `sw_vel=`                                                 | This opcode allows overriding the velocity for the region with the velocity of the previous note. Values can be:<br><br>**current**: Region uses the velocity of current note.<br><br>**previous**: Region uses the velocity of the previous note. | string | current, previous
| `trigger=`                                                | Sets the trigger which will be used for the sample to play. Values can be:<br><br>**attack** (default): Region will play on note-on.<br><br>**release**: Region will play on note-off. The velocity used to play the note-off sample is the velocity value of the corresponding (previous) note-on message.<br><br>**first**: Region will play on note-on, but if there's no other note going on (staccato, or first note in a legato phrase).<br><br>**legato**: Region will play on note-on, but only if there's a note going on (notes after first note in a legato phrase). | string | attack, release, first, legato
| `group=`                                                  | Exclusive group number for this region. | integer | 0 to 4294967296
| `off_by=`                                                 | Region off group. When a new region with a group number equal to `off_by` plays, this region will be turned off. | integer | 0 to 4294967296
| `off_mode=`                                               | Region off mode. This opcode will determinate how a region is turned off by an `off_by` opcode. Values can be:<br><br>**fast** (default): The voice will be turned off immediately. Release settings will not have any effect.<br><br>**normal**: The region will be set into release stage. All envelope generators will enter in release stage, and region will expire when the amplifier envelope generator expired. | string | fast, normal
| `on_loccN=` `on_hiccN=`                                   | Sample trigger on MIDI continuous control N. If a MIDI control message with a value between `on_loccN` and `on_hiccN` is received, the region will play. | integer | 0 to 127

<a name="Table1.6">

# Table 1.6 Sample Player

| Opcode                                  | Description | Type | Range
| --------------------------------------- | ----------- | ---- | -----
| `count=`                                | The number of times the sample will be played. If this opcode is specified, the sample will restart as many times as defined. Envelope generators will not be retriggered on sample restart. When this opcode is defined, loopmode is automatically set to `one_shot`.                             | integer | 0 to 4294967296
| `delay=`                                | Region delay time, in seconds. If a `delay` value is specified, the region playback will be postponed for the specified time. If the region receives a note-off message before delay time, the region won't play. All envelope generators delay stage will start counting after region delay time. | float   | 0 to 100 seconds
| `delay_onccN=`                          | Region delay time modulated by MIDI continuous controller N, in seconds. If the region receives a note-off message before delay time, the region won't play. All envelope generators delay stage will start counting after region delay time.                                                      | float   | 0 to 100 seconds
| `delay_random=`                         | Region random delay time, in seconds. If the region receives a note-off message before delay time, the region won't play.                                                                                                                                                                          | float   | 0 to 100 seconds
| `delay_beats=` `stop_beats=`            | Specify a region delay, or time-to-stop in beats, synchronized to host tempo.                                                                                                                                                                                                                      | integer | 0 to 32 beats
| `delay_samples=` `delay_samples_onccN=` | Allows specifying a delay for a given region in samples (independent of sample rate).                                                                                                                                                                                                              | integer | 0 to 4294967296
| `end=`                                  | The endpoint of the sample, in sample units. The player will reproduce the whole sample if end is not specified.<br><br>If end value is -1, the sample will not play. Marking a region end with -1 can be used to use a silent region to turn off other regions by using the group and `off_by` opcodes.  | integer | -1 to 4294967296
| `loop_crossfade=`                       | Set a value for loop crossfading, in seconds.                                                                                                                                                                                                                                                      | float   | 0 to 100 seconds
| `offset=`                               | The offset used to play the sample, in sample units. The player will reproduce samples starting with the very first sample in the file, unless `offset` is specified. It will start playing the file at the `offset` sample in this case.                                                          | integer | 0 to 4294967296
| `offset_random=`                        | Random offset added to the region offset, in sample units.                                                                                                                                                                                                                                         | integer | 0 to 4294967296
| `offset_onccN=`                         | The offset used to play the sample according to last position of MIDI continuous controller N, in sample units. | integer | 0 to 4294967296
| `loop_mode=`                            | If `loop_mode` is not specified, each sample will play according to its predefined loop mode. That is, the player will play the sample looped using the first defined loop, if available. If no loops are defined, the wave will play unlooped.<br><br>The `loop_mode` opcode allows playing samples with loops defined in the unlooped mode. The possible values are:<br><br>**no_loop**: no looping will be performed. Sample will play straight from start to end, or until note off, whatever reaches first. (Default for samples without a loop defined.)<br><br>**one_shot**: sample will play from start to end, ignoring note off. This mode is engaged automatically if the count opcode is defined.<br><br>**loop_continuous**: once the player reaches sample loop point, the loop will play until note expiration.<br><br>**loop_sustain**: the player will play the loop while the note is held, by keeping it depressed or by using the sustain pedal (CC64). The rest of the sample will play after note release. (Default for samples with defined loop(s).) | string | no_loop, one_shot, loop_continuous, loop_sustain
| `loop_start=`                           | The loop start point, in samples.<br><br>If `loop_start` is not specified and the sample has a loop defined, the sample start point will be used.<br><br>If `loop_start` is specified, it will overwrite the loop start point defined in the sample. This opcode will not have any effect if loopmode is set to **no_loop**. | integer | 0 to 4294967296
| `loop_end=`                             | The loop end point, in samples. This opcode will not have any effect if loopmode is set to **no_loop**.<br><br>If `loop_end` is not specified and the sample have a loop defined, the sample loop end point will be used.<br><br>If `loop_end` is specified, it will overwrite the loop end point defined in the sample. | integer | 0 to 4294967296
| `sync_beats=`                           | Region playing synchronization to host position.<br><br>When `sync_beats` is specified and after input controls instruct the region to play, the playback will be postponed until the next multiple of the specified value is crossed. | integer | 0 to 32 beats
| `sync_offset=`                          | Region playing synchronization to host position offset.<br><br>When `sync_beats` is specified and after input controls instruct the region to play, the playback will be postponed until the next multiple of the specified value plus the `sync_offset` value is crossed. | integer | 0 to 32 beats

<a name="Table1.7">

# Table 1.7 Amplifier

| Opcode                                  | Description | Type | Range
| --------------------------------------- | ----------- | ---- | -----

volume=
	

The volume for the region, in dB.
	

float
	

-144 to 6 dB

volume_onccN=

volume_smoothccN=

volume_curveccN=
	

	

	

amplitude=
	

The amplitude for the region, in percent.
	

float
	

0 to 100 %

amplitude_onccN=

amplitude_smoothccN=

amplitude_curveccN=
	

	

	

pan=
	

The panoramic position for the region, in percent.

If a mono sample is used, pan value defines the position in the stereo image where the sample will be placed. When a stereo sample is used, the pan value the relative amplitude of one channel respect the other.

A value of zero means centered, negative values move the panoramic to the left, positive to the right.
	

float
	

-100 to 100 %

pan_onccN=

pan_smoothccN=

pan_curveccN=
	

	

	

pan_law=
	

	

string
	

no_law

width=
	

Only operational for stereo samples, width defines the amount of channel mixing applied to play the sample.

A width value of 0 makes a stereo sample play as if it were mono (adding both channels and compensating for the resulting volume change). A value of 100 will make the stereo sample play as original.

Any value in between will mix left and right channels with a part of the other, resulting in a narrower stereo field image.

Negative width values will reverse left and right channels.
	

float
	

-100 to 100 %

width_onccN=

width_smoothccN=

width_curveccN=
	

	

	

position=
	

Only operational for stereo samples, positionwidth opcode. defines the position in the stereo field of a stereo signal, after channel mixing as defined in the

A value of zero means centered, negative values move the panoramic to the left, positive to the right.
	

float
	

-100 to 100 %

position_onccN=

position_smoothccN=

position_curveccN=
	

	

	

amp_keytrack=
	

Amplifier keyboard tracking (change in amplitude per key) in dB.
	

float
	

-96 to 12 dB

amp_keycenter=
	

Center key for amplifier keyboard tracking. In this key, the amplifier keyboard tracking will have no effect.
	

integer
	

0 to 127

amp_veltrack=
	

Amplifier velocity tracking, represents how much the amplitude changes with incoming note velocity.

Volume changes with incoming velocity in a concave shape according to the following expression:

Amplitude(dB) = 20 log (127^2 / Velocity^2)

The amp_velcurve_N opcodes allow overriding the default velocity curve.
	

float
	

-100 to 100 %

amp_velcurve_N=
	

User-defined amplifier velocity curve. This opcode range allows defining a specific curve for the amplifier velocity. The value of the opcode indicates the normalized amplitude (0 to 1) for the specified velocity.
	

float
	

0 to 1

amp_random=
	

Random volume for the region, in dB.
	

float
	

0 to 24 dB

rt_decay=
	

The volume decay amount when the region is set to play in release trigger mode, in decibels per second since note-on message.
	

float
	

0 to 200 dB

output=
	

The stereo output number for this region. If the player doesn't feature multiple outputs, this opcode is ignored.
	

n/a
	

0 to 1024

gain_onccN=
	

Gain applied on MIDI control N, in dB.
	

float
	

-144 to 48 dB

gain_smoothccN=

gain_curveccN=
	

	

	

xfin_lokey=

xfin_hikey=
	

Fade in control.

xfin_lokey and xfin_hikey define the fade-in keyboard zone for the region.

The volume of the region will be zero for keys lower than or equal to xfin_lokey, and maximum (as defined by the volume opcode) for keys greater than or equal to xfin_hikey.
	

integer
	

0 to 127

xfout_lokey=

xfout_hikey=
	

Fade out control.

xfout_lokey and xfout_hikey define the fade-out keyboard zone for the region.

The volume of the region will be maximum (as defined by the volume opcode) for keys lower than or equal to xfout_lokey, and zero for keys greater than or equal to xfout_hikey.
	

integer
	

0 to 127

xf_keycurve=
	

Keyboard crossfade curve for the region. Values can be:

gain: Linear gain crossfade. This setting is best when crossfading phase-aligned material. Linear gain crossfades keep constant amplitude during the crossfade, preventing clipping.

power: Equal-power RMS crossfade. This setting works better to mix very different material, as a constant power level is kept during the crossfade.
	

string
	

gain, power

xfin_lovel=

xfin_hivel=
	

Fade in control.

xfin_lovel and xfin_hivel define the fade-in velocity range for the region.

The volume of the region will be zero for velocities lower than or equal to xfin_lovel, and maximum (as defined by the volume opcode) for velocities greater than or equal to xfin_hivel.
	

integer
	

0 to 127

xfout_lovel=

xfout_hivel=
	

Fade out control.

xfout_lokey and xfout_hikey define the fade-out velocity range for the region.

The volume of the region will be maximum (as defined by the volume opcode) for velocities lower than or equal to xfout_lovel, and zero for velocities greater than or equal to xfout_hivel.
	

integer
	

0 to 127

xf_velcurve=
	

Velocity crossfade curve for the region. Values can be:

gain: Linear gain crossfade. This setting is best when crossfading phase-aligned material. Linear gain crossfades keep constant amplitude during the crossfade, preventing clipping.

power: Equal-power RMS crossfade. This setting works better to mix very different material, as a constant power level is kept during the crossfade.
	

string
	

gain, power

xfin_loccN=

xfin_hiccN=
	

Fade in control.

xfin_loccN and xfin_hiccN set the range of values in the MIDI continuous controller N which will perform a fade-in in the region.

The volume of the region will be zero for values of the MIDI continuous controller N lower than or equal to xfin_loccN, and maximum (as defined by the volume opcode) for values greater than or equal to xfin_hiccN.
	

integer
	

0 to 127

xfout_loccN=

xfout_hiccN=
	

Fade out control.

xfout_loccN and xfout_hiccN set the range of values in the MIDI continuous controller N which will perform a fade-out in the region.

The volume of the region will be maximum (as defined by the volume opcode) for values of the MIDI continuous controller N lower than or equal to xfout_loccN, and zero for values greater than or equal to xfout_hiccN.
	

integer
	

0 to 127

xf_cccurve=
	

MIDI controllers crossfade curve for the region. Values can be:

gain: Linear gain crossfade. This setting is best when crossfading phase-aligned material. Linear gain crossfades keep constant amplitude during the crossfade, preventing clipping.

power: Equal-power RMS crossfade. This setting works better to mix very different material, as a constant power level is kept during the crossfade.
	

string
	

gain, power

Table 1.8 Pitch

Opcode
	

Description
	

Type
	

Range

transpose=
	

The transposition value for this region which will be applied to the sample.
	

integer
	

-127 to 127

transpose_onccN=

transpose_smoothccN=

transpoe_curveccN=
	

	

	

tune=
	

The fine tuning for the sample, in cents. Range is ±1 semitone, from -100 to 100. Only negative values must be prefixed with sign.
	

integer
	

-100 to 100 cents

tune_onccN=

tune_smoothccN=

tune_curveccN=
	

	

	

pitch_keycenter=
	

Root key for the sample.
	

integer
	

-127 to 127

pitch_keytrack=
	

Within the region, this value defines how much the pitch changes with every note. Default value is 100, which means pitch will change one hundred cents (one semitone) per played note.

Setting this value to zero means that all notes in the region will play the same pitch, particularly useful when mapping drum sounds.
	

integer
	

-1200 to 1200 cents

pitch_veltrack=
	

Pitch velocity tracking, represents how much the pitch changes with incoming note velocity, in cents.
	

integer
	

-9600 to 9600 cents

pitch_random=
	

Random tuning for the region, in cents. Random pitch will be centered, with positive and negative values.
	

integer
	

0 to 9600 cents

bend_up=
	

Pitch bend range when Pitch Wheel or Joystick is moved up, in cents.
	

integer
	

-9600 to 9600 cents

bend_down=
	

Pitch bend range when Pitch Wheel or Joystick is moved down, in cents.
	

integer
	

-9600 to 9600 cents

bend_step=
	

Pitch bend step, in cents.
	

integer
	

1 to 1200 cents

Table 1.9 Filter 

Two filters are available in SFZ version 2. To use the second filter, use opcode with the number 2.

Opcode
	

Description
	

Type
	

Range

fil_type=

fil2_type=
	

Filter type. Avaliable types are:

lpf_1p: one-pole low pass filter (6dB/octave).

hpf_1p: one-pole high pass filter (6dB/octave).

bpf_1p: one-pole band pass filter (6dB/octave).

brf_1p: one-pole band rejection filter (6dB/octave).

apf_1p: one-pole all pass filter (6dB/octave).

lpf_2p: two-pole low pass filter (12dB/octave).

hpf_2p: two-pole high pass filter (12dB/octave).

bpf_2p: two-pole band pass filter (12dB/octave).

brf_2p: two-pole band rejection filter (12dB/octave).

pkf_2p: two-pole peak filter (12dB/octave).

lpf_4p: four-pole low pass filter (24dB/octave).

hpf_4p: four-pole high pass filter (24dB/octave).

lpf_6p: six-pole low pas filter (36dB/octave).

hpf_6p: six-pole high pass filter (36dB/octave).

comb: comb filter

pink: pink filter
	

string
	

lpf_1p, hpf_1p, bpf_1p, brf_1p, apf_1p, lpf_2p, hpf_2p, bpf_2p, brf_2p, pkf_2p, lpf_4p, hpf_4p, lpf_6p, hpf_6p, comb, pink

cutoff=

cutoff2=
	

The filter cutoff frequency, in Hz.

If the cutoff is not specified, the filter will be disabled, with the consequent CPU drop in the player.
	

float
	

0 to SR/2

cutoff_onccN=

cutoff2_onccN=
	

The variation in the cutoff frequency when MIDI continuous controller N is received, in cents.
	

integer
	

-9600 to 9600 cents

cutoff_smoothccN=

cutoff2_smoothccN=
	

The smooth factor defines how smooth the change is. Smooth is a low pass filter on speed of parameter changes and its in milliseconds.
	

integer
	

-9600 to 9600 cents

cutoff_stepccN=

cutoff2_stepccN=
	

The step factor sets in what steps that the variation is introduced.
	

integer
	

-9600 to 9600 cents

cutoff_curveccN=

cutoff2_curveccN=
	

Select a curve defined internally or in a <curve> section.
	

integer
	

?

cutoff_chanaft=

cutoff2_chanaft=
	

The variation in the cutoff frequency when MIDI channel aftertouch messages are received, in cents.
	

integer
	

-9600 to 9600 cents

cutoff_polyaft=

cutoff2_polyaft=
	

The variation in the cutoff frequency when MIDI polyphonic aftertouch messages are received, in cents.
	

integer
	

-9600 to 9600 cents

resonance=

resonance2=
	

The filter cutoff resonance value, in dB.
	

float
	

0 to 40 dB

resonance_onccN=

resonance2_onccN=
	

The filter cutoff resonance value modulated by MIDI continuous controller N, in dB.
	

float
	

0 to 40 dB

resonance_smoothccN=

resonance2_smoothccN=
	

The smooth factor defines how smooth the modulation is. Smooth is a low pass filter on speed of parameter changes and its in milliseconds.
	

float
	

0 to 40 dB

resonance_stepccN=

resonance2_stepccN=
	

The step factor sets in what steps that the modulation is introduced.
	

float
	

0 to 40 dB

resonance_curveccN=

resonance2_curveccN=
	

Select a curve defined internally or in a <curve> section.
	

integer
	

0 to 4294967296

fil_keytrack=

fil2_keytrack=
	

Filter keyboard tracking (change on cutoff for each key) in cents.
	

integer
	

0 to 1200 cents

fil_keycenter=

fil2_keycenter=
	

Center key for filter keyboard tracking. In this key, the filter keyboard tracking will have no effect.
	

integer
	

0 to 127

fil_veltrack=

fil2_veltrack=
	

Filter velocity tracking, represents how much the cutoff changes with incoming note velocity.
	

integer
	

-9600 to 9600 cents

fil_random=

fil2_random=
	

Random cutoff added to the region, in cents.
	

integer
	

0 to 9600 cents

Table 1.10 Envelope Generators

The first seven EGs might already be in use by the player. To be compatible across different players start with EG number 8.

Opcode
	

Description
	

Type
	

Range

egN_timeX=
	

Set the time of the node X in the envelope generator N to the specified value.
	

float
	

0 to 100 seconds

egN_timeX_onccY=
	

Set the time of the node X in the envelope generator N to the specified value modulated by MIDI continuous controller X.
	

float
	

0 to 100 seconds

egN_levelX=
	

Sets the level of the node X in the envelope generator N to the specified value.
	

float
	

0 to 1

egN_levelX_onccY=
	

Sets the level of the node X in the envelope generator N to the specified value modulated by MIDI continuous controller X.
	

float
	

0 to 1

egN_shapeX=
	

Sets the shape of the segment X in the flexible envelope generator N to one of the predefined shapes.
	

float
	

0 to 1

egN_curveX=
	

Defines the curve of the segment X in the envelope generator N.
	

float
	

0 to 1

egN_sustain=
	

Sets the specified node as the sustain node for the envelope generator N.
	

integer
	

0 to 100

egN_loop=
	

Sets the specified node as the loop node for the envelope generator N.
	

integer
	

0 to 100

egN_loop_count=
	

Defines the number of repeats for the loop in the envelope generator N.
	

integer
	

0 to 4294967296

egN_volume=

	

Patch envelope generator N to the amplifier. The EGs normalized output will be multiplied by the opcode value and added to the destination.
	

float
	

-144 to 6 dB

egN_amplitude=
	

-"-
	

float
	

0 to 100 %

egN_pan=

egN_width=

egN_position=
	

-"-
	

float
	

-100 to 100 %

egN_pan_curve=

egN_pan_curveccX=
	

Select a curve defined internally or in a <curve> section.
	

integer
	

?

egN_volume_onccX=
	

Patch envelope generator N to the amplifier. The EGs normalized output will be multiplied by the opcode value and added to the destination in addition to being modulated by MIDI continuous controller X.
	

float
	

-144 to 6 dB

egN_amplitude_onccX=
	

-"-
	

float
	

0 to 100 %

egN_pan_onccX=

egN_width_onccX=

egN_position_onccX=
	

-"-
	

float
	

-100 to 100%

egN_freq_lfoX=
	

Patch envelope generator N to LFO X. The EGs normalized output will be multiplied by the opcode value and added to the destination.
	

float
	

0 to 20 Hz

egN_depth_lfoX=

egN_depthadd_lfoX=
	

-"-
	

integer
	

-1200 to 1200 cents

egN_pitch=
	

Patch envelope generator N to the pitch. The EGs normalized output will be multiplied by the opcode value and added to the destination.
	

integer
	

-9600 to 9600 cents

egN_pitch_onccX=
	

Patch envelope generator N to the pitch. The EGs normalized output will be multiplied by the opcode value and added to the destination in addition to being modulated by MIDI continuous controller X.
	

integer
	

-9600 to 9600 cents

egN_cutoff=

egN_cutoff2=
	

Patch envelope generator N to the filter. The EGs normalized output will be multiplied by the opcode value and added to the destination.
	

integer
	

-9600 to 9600 cents

egN_resonance=

egN_resonance2=
	

-"-
	

float
	

0 to 40dB

egN_cutoff_onccX=

egN_cutoff2_onccX=
	

Patch envelope generator N to the filter. The EGs normalized output will be multiplied by the opcode value and added to the destination in addition to being modulated by MIDI continuous controller X.
	

integer
	

-9600 to 9600 cents

egN_resonance_onccX=

egN_resonance2_onccX=
	

-"-
	

float
	

0 to 40 dB

egN_eq1freq=

egN_eq2freq=

 egN_eq3freq=
	

Patch envelope generator N to the per voice equalizer. The EGs normalized output will be multiplied by the opcode value and added to the destination.
	

float
	

0 to 30000 Hz

egN_eq1bw=

egN_eq2bw=

 egN_eq3bw=
	

-"-
	

float
	

0.001 to 4 octaves

egN_eq1gain=

egN_eq2gain=

 egN_eq3gain=
	

-"-
	

float
	

-96 to 24 dB

egN_eq1freq_onccX=

egN_eq2freq_onccX=

egN_eq3freq_onccX=
	

Patch envelope generator N to the per voice equalizer. The EGs normalized output will be multiplied by the opcode value and added to the destination in addition to being modulated by MIDI continuous controller X.
	

float
	

0 to 30000 Hz

egN_eq1bw_onccX=

egN_eq2bw_onccX=

egN_eq3bw_onccX=
	

-"-
	

float
	

0.001 to 4 octaves

egN_eq1gain_onccX=

egN_eq2gain_onccX=

egN_eq3gain_onccX=
	

-"-
	

float
	

-96 to 24 dB

egN_decim=

egN_bitred=

egN_rectify=

egN_ringmod=

egN_noiselevel=

egN_noisestep=

egN_noisetone=

egN_driveshape=
	

Patch envelope generator N to effects. The EGs normalized output will be multiplied by the opcode value and added to the destination.
	

?
	

?

egN_decim_onccX=

egN_bitred_onccX=

egN_rectify_onccX=

egN_ringmod_onccX=

egN_noiselevel_onccX=

egN_noisestep_onccX=

egN_noisetone_onccX=

egN_driveshape_onccX=
	

The EGs normalized output will be multiplied by the opcode value and added to the destination in addition to being modulated by MIDI continuous controller X
	

?
	

?

Table 1.11 Low-Frequency Oscillators

The first seven LFOs might already be in use by the player. To be compatible across different players start with LFO number 8.

Opcode
	

Description
	

Type
	

Range

lfoN_freq=
	

Defines the frequency for the LFO N, in Hz.
	

float
	

0 to 20 Hz

lfoN_freq_onccX=
	

Defines the frequency variation modulated by MIDI continuous controller X for the LFO N, in Hz.
	

float
	

0 to 20 Hz

lfoN_freq_smoothccX=
	

The smooth factor defines how smooth MIDI continuous controller X modulation is. Smooth is a low pass filter on speed of parameter changes and its in milliseconds.
	

integer
	

?

lfoN_freq_stepccX=
	

The step factor sets in what steps that variation is introduced.
	

float
	

0 to 20 Hz

lfoN_delay=
	

Sets a delay time from the region instantiation to the LFO N starts working, in seconds.
	

float
	

0 to 100 seconds

lfoN_delay_onccX=
	

Sets a delay time from the region instantiation to the LFO N starts working modulated by MIDI continuous controller X, in seconds.
	

float
	

0 to 100 seconds

lfoN_fade=
	

Defines a fade-in ramp from region instantiation for the LFO N output, in seconds.
	

float
	

0 to 100 seconds

lfoN_fade_onccX=
	

Defines a fade-in ramp from the region instantiation for the LFO N output modulated by MIDI continuous controller X, in seconds.
	

float
	

0 to 100 seconds

lfoN_depth=
	

	

	

lfoN_depth_onccN=
	

	

	

lfoN_phase=
	

Sets the initial phase of the LFO N.
	

float
	

0 to 360 degrees

lfoN_phase_onccX=
	

Sets the initial phase of LFO N modulated by MIDI continuous controller X.
	

float
	

0 to 360 degrees

lfoN_count=
	

Defines a cycle count for the LFO N. After that cycle count, the LFO will stop. Default is infinite.
	

integer
	

0 to 4294967296

lfoN_wave=
	

Set the waveform for LFO N. The wave pool is player dependant, but the following waveforms are mandatory:

0: triangle

1: sine

2: pulse 75%

3: square (pulse 50%)

4: pulse 25%

5: pulse 12.5%

6: saw up

7: saw down
	

integer
	

0 to 4294967296

lfoN_steps=
	

Turns the LFO N into a step sequencer, with a number of steps specified in the value.
	

integer
	

0 to 4294967296

lfoN_stepX=
	

Defines the level of step X in the LFO N.
	

float
	

0 to 1

lfoN_smooth=
	

Sets the smoothing for the LFO N output.
	

?
	

?

lfoN_smooth_onccX=
	

Sets the smoothing for the LFO N output modulated by MIDI continuous controller X.
	

?
	

?

lfoN_volume=
	

Patch LFO N to amplifier. The LFOs normalized output will be multiplied by the opcode value and added to the destination.
	

float
	

-144 to 6 dB

lfoN_amplitude=
	

-"-
	

float
	

0 to 100 %

lfoN_pan=

lfoN_width=

lfoN_position=
	

-"-
	

float
	

-100 to 100 %

lfoN_volume_onccX=
	

Patch LFO N to amplifier. The LFOs normalized output will be multiplied by the opcode value and added to the destination in addition to being modulated by MIDI continuous controller X.
	

float
	

-144 to 6 dB

lfoN_amplitude_onccX=
	

-"-
	

float
	

0 to 100 %

lfoN_pan_onccX=

lfoN_width_onccX=

lfoN_position_onccX=
	

-"-
	

float
	

-100 to 100 %

lfoN_volume_smoothccX=

lfoN_amplitude_smoothccX=

lfoN_pan_smoothccX=

lfoN_width_smoothccX=

lfoN_position_smoothccX=
	

The smooth factor defines how smooth the modulation is. Smooth is a low pass filter on speed of parameter changes and its in milliseconds.
	

integer
	

?

lfoN_volume_stepccX=

lfoN_amplitude_stepccX=

lfoN_pan_stepccX=

lfoN_width_stepccX=

lfoN_position_stepccX=
	

The step factor sets in what steps that modulation is introduced.
	

integer
	

0 to 4294967296

lfoN_freq_lfoX=
	

Patch LFO N to LFO X. The LFOs normalized output will be multiplied by the opcode value and added to the destination.
	

float
	

0 to 20 Hz

lfoN_depth_lfoX=

lfoN_depthadd_lfoX=
	

-"-
	

integer
	

-1200 to 1200 cents

lfoN_pitch=
	

Patch LFO N to the pitch. The LFOs normalized output will be multiplied by the opcode value and added to the destination.
	

integer
	

-9600 to 9600 cents

lfoN_pitch_onccX=
	

Pitch of LFO N modulated by MIDI continuous controller X.
	

?
	

?

lfoN_pitch_smoothccX=
	

Smooth is a low pass filter on speed of parameter changes and its in milliseconds.
	

integer
	

lfoN_pitch_stepccX=
	

The step factor sets in what steps that variation is introduced.
	

integer
	

0 to 4294967296

lfoN_cutoff=

lfoN_cutoff2=
	

Patch LFO N to the filter. The LFOs normalized output will be multiplied by the opcode value and added to the destination.
	

integer
	

-9600 to 9600 cents

lfoN_resonance=

lfoN_resonance2=
	

-"-
	

float
	

0 to 40 dB

lfoN_cutoff_onccX=

lfoN_cutoff2_onccX=
	

Patch LFO N to the filter. The LFOs normalized output will be multiplied by the opcode value and added to the destination in addition to being modulated by MIDI continuous controller X.
	

integer
	

-9600 to 9600 cents

lfoN_resonance_onccX=

lfoN_resonance2_onccX=
	

-"-
	

float
	

0 to 40 dB

lfoN_cutoff_smoothccX=

lfoN_cutoff2_smoothccX=

lfoN_resonance_smoothccX=

lfoN_resonance2_smoothX=
	

The smooth factor defines how smooth the change is. Smooth is a low pass filter on speed of parameter changes and its in milliseconds.
	

integer
	

?

lfoN_cutoff_stepccX=

lfoN_cutoff2_stepccX=

lfoN_resonance_stepccX=

lfoN_resonance2_stepccX=
	

The step factor sets in what steps that variation is introduced.
	

integer
	

0 to 4294967296

lfoN_eq1freq=

lfoN_eq2freq=

lfoN_eq3freq=
	

Patch LFO N to the per voice equalizer. The LFOs normalized output will be multiplied by the opcode value and added to the destination.
	

float
	

0 to 30000 Hz

lfoN_eq1bw=

lfoN_eq2bw=

lfoN_eq3bw=
	

-"-
	

float
	

0.001 to 4 octaves

lfoN_eq1gain=

lfoN_eq2gain=

lfoN_eq3gain=
	

-"-
	

float
	

-96 to 24 dB

lfoN_eq1freq_onccX=

lfoN_eq2freq_onccX=

lfoN_eq3freq_onccX=
	

Patch LFO N to the per voice equalizer. The LFOs normalized output will be multiplied by the opcode value and added to the destination in addition to being modulated by MIDI continuous controller X.
	

float
	

0 to 30000 Hz

lfoN_eq1bw_onccX=

lfoN_eq2bw_onccX=

lfoN_eq3bw_onccX=
	

-"-
	

float
	

0.001 to 4 octaves

lfoN_eq1gain_onccX=

lfoN_eq2gain_onccX=

lfoN_eq3gain_onccX=
	

-"-
	

float
	

-96 to 24 dB

lfoN_eq1freq_smoothccX=

lfoN_eq2freq_smoothccX=

lfoN_eq3freq_smoothccX=

lfoN_eq1bw_smoothccX=

lfoN_eq2bw_smoothccX=

lfoN_eq3bw_smoothccX=

lfoN_eq1gain_smoothccX=

lfoN_eq2gain_smoothccX=

lfoN_eq3gain_smoothccX=
	

The smooth factor defines how smooth the change is. Smooth is a low pass filter on speed of parameter changes and its in milliseconds.
	

integer
	

?

lfoN_eq1freq_stepccX=

lfoN_eq2freq_stepccX=

lfoN_eq3freq_stepccX=

lfoN_eq1bw_stepccX=

lfoN_eq2bw_stepccX=

lfoN_eq3bw_stepccX=

lfoN_eq1gain_stepccX=

lfoN_eq2gain_stepccX=

lfoN_eq3gain_stepccX=
	

The step factor sets in what steps that variation is introduced.
	

integer
	

0 to 4294967296

lfoN_decim=

lfoN_bitred=

lfoN_noiselevel=

lfoN_noisestep=

lfoN_noisetone=

lfoN_drive=
	

Patch LFO N to effects.
	

?
	

?

lfoN_decim_onccX=

lfoN_bitred_onccX=

lfoN_noiselevel_onccX=

lfoN_noisestep_onccX=

lfoN_noisetone_onccX=

lfoN_drive_onccX=
	

Modulated by MIDI continuous control N.
	

?
	

?

lfoN_decim_smoothccX=

lfoN_bitred_smoothccX=

lfoN_noiselevel_smoothccX=

lfoN_noisestep_smoothccX=

lfoN_noisetone_smoothccX=

lfoN_drive_smoothccX=
	

The smooth factor defines how smooth the change is. Smooth is a low pass filter on speed of parameter changes and its in milliseconds.
	

integer
	

?

lfoN_decim_stepccX=

lfoN_bitred_stepccX=

lfoN_noiselevel_stepccX=

lfoN_noisestep_stepccX=

lfoN_noisetone_stepccX=

lfoN_drive_stepccX=
	

The step factor sets in what steps that variation is introduced.
	

?
	

?

Table 1.12 Equalizer 

Note that the <effects> equalizers are monophonic (i.e. they apply to all notes playing) while these are polyphonic (i.e. they apply per voice).

Opcode
	

Description
	

Type
	

Range

eq1_freq=

eq2_freq=

eq3_freq=
	

Frequency of the equalizer band, in Hz.
	

float
	

0 to 30000 Hz

eq1_freq_onccN=

eq2_freq_onccN=

eq3_freq_onccN=
	

Frequency change of the equalizer band modulated by MIDI continuous control N, in Hz.
	

float
	

-30000 to 30000 Hz

eq1_vel2freq=

eq2_vel2freq=

eq3_vel2freq=
	

Frequency change of the equalizer band with MIDI velocity, in Hz.
	

float
	

-30000 to 30000 Hz

eq1_bw=

eq2_bw=

eq3_bw=
	

Bandwidth of the equalizer band, in octaves.
	

float
	

0.001 to 4 octaves

eq1_bw_onccN=

eq2_bw_onccN=

eq3_bw_onccN=
	

Bandwidth change of the equalizer band modulated by MIDI continuous control N, in octaves.
	

float
	

-4 to 4 octaves

eq1_gain=

eq2_gain=

eq3_gain=
	

Gain of the equalizer band, in dB.
	

float
	

-96 to 24 dB

eq1_gain_onccN=

eq2_gain_onccN=

eq3_gain_onccN=
	

Gain change of the equalizer band modulated by MIDI continuous control N, in dB.
	

float
	

-96 to 24 dB

eq1_vel2gain=

eq2_vel2gain=

eq3_vel2gain=
	

Gain change of the equalizer band with MIDI velocity, in dB.
	

float
	

-96 to 24 dB

Table 1.13 Effects (SFZ v2)

All effects should be prefaced with the <effects> header.

Opcode
	

Description
	

Type
	

Range

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

Table 1.14 Effects (SFZ v1)

Opcode
	

Description
	

Type
	

Range

effect1=
	

Level of effect1 send (reverb).
	

float
	

0 to 100 %

effect2=
	

Level of effect2 send (chorus).
	

float
	

0 to 100 %

Table 1.15 Amplifier EG (SFZ v1)

These have been deprecated. Use the much more flexible EGs in Table 1.10 instead.

Opcode
	

Description
	

Type
	

Range

ampeg_delay=
	

Amplifier EG delay time, in seconds. This is the time elapsed from note on to the start of the Attack stage.
	

float
	

0 to 100 seconds

ampeg_start=
	

Amplifier EG start level, in percentage.
	

float
	

0 to 100 %

ampeg_attack=
	

Amplifier EG attack time, in seconds.
	

float
	

0 to 100 seconds

ampeg_hold=
	

Amplifier EG hold time, in seconds. During the hold stage, EG output will remain at its maximum value.
	

float
	

0 to 100 seconds

ampeg_decay=
	

Amplifier EG decay time, in seconds.
	

float
	

0 to 100 seconds

ampeg_sustain=
	

Amplifier EG sustain level, in percentage.
	

float
	

0 to 100 %

ampeg_release=
	

Amplifier EG release time (after note release), in seconds.
	

float
	

0 to 100 seconds

ampeg_vel2delay=
	

Velocity effect on amplifier EG delay time, in seconds.
	

float
	

-100 to 100 seconds

ampeg_vel2attack=
	

Velocity effect on amplifier EG attack time, in seconds.
	

float
	

-100 to 100 seconds

ampeg_vel2hold=
	

Velocity effect on amplifier EG hold time, in seconds.
	

float
	

-100 to 100 seconds

ampeg_vel2decay=
	

Velocity effect on amplifier EG decay time, in seconds
	

float
	

-100 to 100 seconds

ampeg_vel2sustain=
	

Velocity effect on amplifier EG sustain level, in percentage.
	

float
	

-100 to 100 %

ampeg_vel2release=
	

Velocity effect on amplifier EG release time, in seconds.
	

float
	

-100 to 100 seconds

ampeg_delay_onccN=
	

Amplifier EG delay time added on MIDI control N, in seconds.
	

float
	

-100 to 100 seconds

ampeg_start_onccN=
	

Amplifier EG start level added on MIDI control N, in percentage.
	

float
	

-100 to 100 %

ampeg_attack_onccN=
	

Amplifier EG attack time added on MIDI control N, in seconds.
	

float
	

-100 to 100 second

ampeg_hold_onccN=
	

Amplifier EG hold time added on MIDI control N, in seconds.
	

float
	

-100 to 100 seconds

ampeg_decay_onccN=
	

Amplifier EG decay time added on MIDI control N, in seconds.
	

float
	

-100 to 100 seconds

ampeg_sustain_onccN=
	

Amplifier EG sustain level added on MIDI control N, in percentage.
	

float
	

-100 to 100 %

ampeg_release_onccN=
	

Amplifier EG release time added on MIDI control N, in seconds.
	

float
	

-100 to 100 seconds

Table 1.16 Amplifier LFO (SFZ v1)

These have been deprecated. Use the much more flexible LFOs in Table 1.11 instead.

Opcode
	

Description
	

Type
	

Range

amplfo_delay=
	

The time before the Amplifier LFO starts oscillating, in seconds.
	

float
	

0 to 100 seconds

amplfo_delay_onccN=
	

The time before the Amplifier LFO starts oscillating modulated by MIDI continuous controller N, in seconds.
	

float
	

0 to 100 seconds

amplfo_fade=
	

Amplifier LFO fade-in effect time, in seconds.
	

float
	

0 to 100 seconds

amplfo_fade_onccN=
	

Amplifier LFO fade-in effect time modulated by MIDI continuous controller N, in seconds.
	

float
	

0 to 100 seconds

amplfo_freq=
	

Amplifier LFO frequency, in hertz.
	

float
	

0 to 20 hertz

amplfo_freq_onccN=
	

Amplifier LFO frequency change when MIDI continuous controller N is received, in hertz.
	

float
	

-200 to 200 hertz

amplfo_freqchanaft=
	

Amplifier LFO frequency change when channel aftertouch MIDI messages are received, in hertz.
	

float
	

-200 to 200 hertz

amplfo_freqpolyaft=
	

Amplifier LFO frequency change when polyphonic aftertouch MIDI messages are received, in hertz.
	

float
	

-200 to 200 hertz

amplfo_depth=
	

Amplifier LFO depth, in decibels.
	

float
	

-10 to 10 dB

amplfo_depth_onccN=
	

Amplifier LFO depth when MIDI continuous controller N is received, in decibels.
	

float
	

-10 to 10 dB

amplfo_depthchanaft=
	

Amplifier LFO depth when polyphonic aftertouch MIDI messages are received, in cents.
	

float
	

-10 to 10 dB

amplfo_depthpolyaft=
	

Amplifier LFO frequency change when polyphonic aftertouch MIDI messages are received, in hertz.
	

float
	

-10 to 10 dB

Table 1.17 Filter EG (SFZ v1)

These have been deprecated. Use the much more flexible EGs in Table 1.10 instead.

Opcode
	

Description
	

Type
	

Range

fileg_delay=
	

Filter EG delay time, in seconds. This is the time elapsed from note on to the start of the Attack stage.
	

float
	

0 to 100 seconds

fileg_start=
	

Filter EG start level, in percentage.
	

float
	

0 to 100 %

fileg_attack=
	

Filter EG attack time, in seconds.
	

float
	

0 to 100 seconds

fileg_hold=
	

Filter EG hold time, in seconds. During the hold stage, EG output will remain at its maximum value.
	

float
	

0 to 100 seconds

fileg_decay=
	

Filter EG decay time, in seconds.
	

float
	

0 to 100 seconds

fileg_sustain=
	

Filter EG sustain level, in percentage.
	

float
	

0 to 100 %

fileg_release=
	

Filter EG release time (after note release), in seconds.
	

float
	

0 to 100 seconds

fileg_depth=
	

Depth or the filter EG, in cents.
	

integer
	

-12000 to 12000 cents

fileg_vel2delay=
	

Velocity effect on filter EG delay time, in seconds.
	

float
	

-100 to 100 seconds

fileg_vel2attack=
	

Velocity effect on filter EG attack time, in seconds.
	

float
	

-100 to 100 seconds

fileg_vel2hold=
	

Velocity effect on filter EG hold time, in seconds.
	

float
	

-100 to 100 seconds

fileg_vel2decay=
	

Velocity effect on filter EG decay time, in seconds.
	

float
	

-100 to 100 seconds

fileg_vel2sustain=
	

Velocity effect on filter EG sustain level, in percentage.
	

float
	

-100 to 100 %

fileg_vel2release=
	

Velocity effect on filter EG release time, in seconds.
	

float
	

-100 to 100 seconds

fileg_vel2depth=
	

	

integer
	

-12000 to 12000 cents

fileg_delay_onccN=
	

	

float
	

-100 to 100 seconds

fileg_start_onccN=
	

	

float
	

-100 to 100  seconds

fileg_attack_onccN=
	

	

float
	

-100 to 100  seconds

fileg_hold_onccN=
	

	

float
	

-100 to 100  seconds

fileg_decay_onccN=
	

	

float
	

-100 to 100  seconds

fileg_sustain_onccN=
	

	

float
	

-100 to 100 %

fileg_release_onccN=
	

	

float
	

-100 to 100  seconds

fileg_depth_onccN=
	

	

integer
	

-12000 to 12000 cents

Table 1.18 Filter LFO (SFZ v1)

These have been deprecated. Use the much more flexible LFOs in Table 1.11 instead.

Opcode
	

Description
	

Type
	

Range

fillfo_delay=
	

The time before the filter LFO starts oscillating, in seconds.
	

float
	

0 to 100 seconds

fillfo_delay_onccN=
	

	

float
	

-100 to 100 seconds

fillfo_fade=
	

Filter LFO fade-in effect time.
	

float
	

0 to 100 seconds

fillfo_fade_onccN=
	

	

float
	

-100 to 100 seconds

fillfo_freq=
	

Filter LFO frequency, in hertz.
	

float
	

0 to 20 hertz

fillfo_freq_onccN=
	

Filter LFO frequency change when MIDI continuous controller N is received, in hertz.
	

float
	

-200 to 200 hertz

fillfo_freqchanaft=
	

Filter LFO frequency change when channel aftertouch MIDI messages are received, in hertz.
	

float
	

-200 to 200 hertz

fillfo_freqpolyaft=
	

Filter LFO frequency change when polyphonic aftertouch MIDI messages are received, in hertz.
	

float
	

-200 to 200 hertz

fillfo_depth=
	

Filter LFO depth, in cents.
	

integer
	

-1200 to 1200 cents

fillfo_depth_onccN=
	

Filter LFO depth when MIDI continuous controller N is received, in cents.
	

integer
	

-1200 to 1200 cents

fillfo_depthchanaft=
	

Filter LFO depth when channel aftertouch MIDI messages are received, in cents.
	

integer
	

-1200 to 1200 cents

fillfo_depthpolyaft=
	

Filter LFO depth when polyphonic aftertouch MIDI messages are received, in cents.
	

integer
	

-1200 to 1200 cents

 

Table 1.19 Pitch EG (SFZ v1)

These have been deprecated. Use the much more flexible EGs in Table 1.10 instead.

Opcode
	

Description
	

Type
	

Range

pitcheg_delay=
	

Pitch EG delay time, in seconds. This is the time elapsed from note on to the start of the Attack stage.
	

float
	

0 to 100 seconds

pitcheg_start=
	

Pitch EG start level, in percentage.
	

float
	

0 to 100 %

pitcheg_attack=
	

Pitch EG attack time, in seconds.
	

float
	

0 to 100 seconds

pitcheg_hold=
	

Pitch EG hold time, in seconds. During the hold stage, EG output will remain at its maximum value.
	

float
	

0 to 100 seconds

pitcheg_decay=
	

Pitch EG decay time, in seconds.
	

float
	

0 to 100 seconds

pitcheg_sustain=
	

Pitch EG release time (after note release), in seconds.
	

float
	

0 to 100 %

pitcheg_release=
	

Pitch EG release time (after note release), in seconds.
	

float
	

0 to 100 seconds

pitcheg_depth=
	

Depth for the pitch EG, in cents.
	

integer
	

-12000 to 12000 cents

pitcheg_vel2delay=
	

Velocity effect on pitch EG delay time, in seconds.
	

float
	

-100 to 100 seconds

pitcheg_vel2attack=
	

Velocity effect on pitch EG attack time, in seconds.
	

float
	

-100 to 100 seconds

pitcheg_vel2hold=
	

Velocity effect on pitch EG hold time, in seconds.
	

float
	

-100 to 100 seconds

pitcheg_vel2decay=
	

Velocity effect on pitch EG decay time, in seconds.
	

float
	

-100 to 100 seconds

pitcheg_vel2sustain=
	

Velocity effect on pitch EG sustain level, in percentage.
	

float
	

-100 to 100 %

pitcheg_vel2release=
	

Velocity effect on pitch EG release time, in seconds.
	

float
	

-100 to 100 seconds

pitcheg_vel2depth=
	

Velocity effect on pitch EG depth, in cents.
	

integer
	

-12000 to 12000 cents

pitcheg_delay_onccN=
	

	

float
	

-100 to 100 seconds

pitcheg_start_onccN=
	

	

float
	

-100 to 100 seconds

pitcheg_attack_onccN=
	

	

float
	

-100 to 100 seconds

pitcheg_hold_onccN=
	

	

float
	

-100 to 100 seconds

pitcheg_decay_onccN=
	

	

float
	

-100 to 100 seconds

pitcheg_sustain_onccN=
	

	

float
	

-100 to 100 %

pitcheg_release_onccN=
	

	

float
	

-100 to 100 seconds

pitcheg_depth_onccN=
	

	

integer
	

-12000 to 12000 cents

Table 1.20 Pitch LFO (SFZ v1)

These have been deprecated. Use the much more flexible LFOs in Table 1.11 instead.

Opcode
	

Description
	

Type
	

Range

pitchlfo_delay=
	

The time before the Pitch LFO starts oscillating, in seconds.
	

float
	

0 to 100 seconds

pitchlfo_delay_onccN=
	

	

float
	

-100 to 100 seconds

pitchlfo_fade=
	

Pitch LFO fade-in effect time.
	

float
	

0 to 100 seconds

pitchlfo_fade_onccN=
	

	

float
	

-100 to 100 seconds

pitchlfo_freq=
	

Pitch LFO frequency, in hertz.
	

float
	

0 to 20 hertz

pitchlfo_freq_onccN=
	

Pitch LFO frequency change when MIDI continuous controller N is received, in hertz.
	

float
	

-200 to 200 hertz

pitchlfo_freqchanaft=
	

Pitch LFO frequency change when channel aftertouch MIDI messages are received, in hertz.
	

float
	

-200 to 200 hertz

pitchlfo_freqpolyaft=
	

Pitch LFO frequency change when polyphonic aftertouch MIDI messages are received, in hertz.
	

float
	

-200 to 200 hertz

pitchlfo_depth=
	

Pitch LFO depth, in cents.
	

integer
	

-1200 to 1200 cents

pitchlfo_depth_onccN=
	

Pitch LFO depth when MIDI continuous controller N is received, in cents.
	

integer
	

-1200 to 1200 cents

pitchlfo_depthchanaft=
	

Pitch LFO depth when channel aftertouch MIDI messages are received, in cents.
	

integer
	

-1200 to 1200 cents

pitchlfo_depthpolyaft=
	

Pitch LFO depth when polyphonic aftertouch MIDI messages are received, in cents.
	

integer
	

-1200 to 1200 cents

<a name="Table1.21">
 
### Table 1.21 Curve

The first six curves are predefined by the player and usually player specific if
implemented, custom curve number 7 and up can be defined using the `<curve>`
header.

| Opcode    | Description                        | Type  | Range  |
| --------- | ---------------------------------- | ----- | ------ |
| `vN=`     | Define normalized values on curve. | float | 0 to 1 |

<a name="Table1.22">

### Table 1.22 Global

There can be one `<global>` header in a file. Their settings are global for
the whole file. The following opcodes can only be defined in the global header.

| Opcode        | Description                                                                                                                                  | Type    | Range   |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| `polyphony=`  | Limits the polyphony to number of voices. The default is infinite or maximal number  of voices the player can handle, whichever comes first. | integer | n/a     |
| `sustain_sw=` | Enable/disable the sustain pedal.                                                                                                            | string  | on, off |
