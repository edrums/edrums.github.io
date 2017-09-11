---
title: SFZ
---
The SFZ format [\[1\]][1] is a file format to define how a collection of samples are
arranged for performance.

The goal behind the SFZ format is to provide a free, simple, minimalistic and
expandable format to arrange, distribute and use audio samples with the highest
possible quality and the highest possible performance flexibility.

Soundware, software and hardware developers can create, use and distribute the
SFZ format files for free, for either free or commercial applications.

Some of the features of the SFZ format are:

* Samples of any bit depth (8/16/24/32-bit) support, mono or stereo
* Samples taken at any samplerate (i.e. 44.1k, 48k, 88.2k, 96k, 176.4k, 192k, 384k)
* Compressed samples. Compressed and uncompressed can be combined
* Looped samples
* Unlimited keyboard splits and layers
* Unlimited velocity splits and layers
* Unlimited regions of sample playback based on MIDI controllers (continuous
  controllers, pitch bend, channel and polyphonic aftertouch, keyboard switches)
  and internal generators (random, sequence counters)
* Sample playback on MIDI control events
* Unlimited unidirectional and bidirectional exclusive regions (mute groups)
* Unlimited release trigger regions with release trigger attenuation control
* Unlimited crossfade controls
* Trigger on first-note and legato notes
* Sample playback synchronized to host tempo
* Dedicated Envelope Generators for pitch, filter and amplifier
* Dedicated LFO for pitch, filter and amplifier 

SFZ files can be opened using any text editor, but there are also specific tools
available to create/edit them such as sfZed [\[2\]][2] which provides support on the
keywords as well as additional features such as sample playback.

## References

1. <http://www.cakewalk.com/DevXchange/article.aspx?aid=108>
2. <http://audio.clockbeat.com/sfZed.html>

[1]: http://www.cakewalk.com/DevXchange/article.aspx?aid=108 "SFZ format"
[2]: http://audio.clockbeat.com/sfZed.html "sfZed"
