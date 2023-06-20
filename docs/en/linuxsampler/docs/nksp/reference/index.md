---
title: NKSP Reference
refdir: linuxsampler/docs/nksp/reference/
lang: en
---
<link rel="stylesheet" href="/linuxsampler/style.css">

This document gives you an overview of all built-in functions and built-in
variables provided by the NKSP real-time instrument script language.

## Built-In Functions

These are the built-in functions available with the NKSP real-time instrument
script language.

### Core Language Functions

Most fundamental NKSP functions, independent from any purpose of being used in a
sampler.

| Function                             | Description
| ------------------------------------ | -----------
| [abort](abort)()                     | Stops execution of a script callback.
| [array_equal](array_equal)()         | Check whether two arrays are equal.
| [fork](fork)()                       | Creates new execution instances (threads).
| [callback_status](callback_status)() | Returns the current status of a callback (thread).
| [dec](dec)()                         | Decrements the passed integer variable by one.
| [inc](inc)()                         | Increments the passed integer variable by one.
| [in_range](in_range)()               | Checks whether a value is between two other values.
| [message](message)()                 | Prints text to the sampler's terminal.
| [search](search)()                   | Search for a certain value within an array.
| [sort](sort)()                       | Sort the given array.
| [exit](exit)()                       | Stops execution of the current event handler instance.
| [wait](wait)()                       | Pauses execution for a certain amount of time.
| [stop_wait](stop_wait)()             | Resumes execution of a suspended script callback.
| [abs](abs)()                         | Calculates the absolute value of a given value.
| [random](random)()                   | Random number generator.
| [min](min)()                         | Calculates the minimum value of two given values.
| [max](max)()                         | Calculates the maximum value of two given values.
| [num_elements](num_elements)()       | Returns the size of the requested array variable.
| [sh_left](sh_left)()                 | Calculates a left bit shifted value.
| [sh_right](sh_right)()               | Calculates a right bit shifted value.

### Common Sampler Functions

Basic sampler related functions, independent from a particular sampler format or
sampler engine. 

| Function                             | Description
| ------------------------------------ | -----------
| [play_note]()()                      | Triggers a new note.
| [change_note]()()                    | Change MIDI note number of note.
| [change_pan]()()                     | Changes panning of voices (stereo balance).
| [change_pan_time]()()                | Changes the duration of panning (stereo balance) changes.
| [change_pan_curve]()()               | Changes the curve type of panning (stereo balance) changes.
| [change_play_pos]()()                | Change the sample playback position.
| [change_tune]()()                    | Changes the tuning of voices.
| [change_tune_time]()()               | Changes the duration of tuning changes.
| [change_tune_curve]()()              | Changes the curve type of tuning changes.
| [change_vol]()()                     | Changes the volume of voices.
| [change_vol_time]()()                | Changes the duration of volume changes.
| [change_vol_curve]()()               | Changes the curve type of volume changes.
| [change_cutoff]()()                  | Changes filter cutoff frequency of voices.
| [change_reso]()()                    | Changes filter resonance of voices.
| [change_attack]()()                  | Modifies the attack time of voices.
| [change_decay]()()                   | Modifies the decay time of voices.
| [change_sustain]()()                 | Modifies the sustain level of voices.
| [change_release]()()                 | Modifies the release time of voices.
| [change_amp_lfo_depth]()()           | Modifies the amplitude LFO depth.
| [change_amp_lfo_freq]()()            | Modifies the amplitude LFO frequency.
| [change_pitch_lfo_depth]()()         | Modifies the pitch LFO depth.
| [change_pitch_lfo_freq]()()          | Modifies the pitch LFO frequency.
| [change_velo]()()                    | Change MIDI velocity of note.
| [event_status]()()                   | Checks and returns whether a particular note is still alive.
| [fade_in]()()                        | Fade the requested note in.
| [fade_out]()()                       | Fade the requested note out.
| [get_event_par]()()                  | Get the current value of a specific note parameter.
| [set_event_par]()()                  | Change the value of a specific note parameter.
| [set_controller]()()                 | Creates a MIDI control change event.
| [ignore_event]()()                   | Drops the given event.
| [ignore_controller]()()              | Drops the given MIDI control change event.
| [note_off]()()                       | Releases the requested note.
| [set_event_mark]()()                 | Adds an event to an event group.
| [delete_event_mark]()()              | Removes an event from some event group.
| [by_marks]()()                       | Returns all events of an event group.

### GigaStudio Format Functions

Sampler format specific functions, dedicated to the individual features of the
GigaStudio format engine.

| Function               | Description
| ---------------------- | -----------
| [gig_set_dim_zone]()() | Changes the currently active dimension zone.
| [same_region]()()      | Check whether two keys are mapped to the same region.

## Built-In Variables

These are the built-in variables and built-in constants available with the NKSP
realt-time instrument script language.

### Core Language Variables

Most fundamental NKSP built-in variables, independent from any purpose of being
used in a sampler.

| Variable                      | Description
| ----------------------------- | -----------
| `$CALLBACK_STATUS_QUEUE`      | Built-in constant reflecting the status of a callback to be alive but suspended. See [callback_status](callback_status)() for details.
| `$CALLBACK_STATUS_RUNNING`    | Built-in constant reflecting the status of a callback to be alive and currently executing. See [callback_status](callback_status)() for details.
| `$CALLBACK_STATUS_TERMINATED` | Built-in constant reflecting the status of a callback to be not alive. See [callback_status](callback_status)() for details.
| `$KSP_TIMER`                  | Preserved for compatiblity reasons with KSP, returns the same value as `$NKSP_REAL_TIMER` (refer to the latter for details). Note that KSP's [reset_ksp_timer](reset_ksp_timer)() function is not available with NKSP. However when calculating time differences between two time stamps taken with `$NKSP_REAL_TIMER`, calling such a reset function is not required, because the underlying clock does not stop when it reached its value limit (which happens every 71 minutes), instead the clock will automatically restart from zero and the calculated time difference even between such transitions will reflect correct durations.
| `$NKSP_PERF_TIMER`            | Returns the current performance time stamp (in microseconds) of the script running. You may read this variable from time to time to take time stamps which can be used to calculate the time difference (in microseconds) which elapsed between them. A performance time stamp is based on the script's actual CPU execution time. So the internal clock which is used for generating such time stamps is only running forward if the respective script is actually executed by the CPU. Whenever your script is not really executed by the CPU (i.e. because your script got suspended by a [wait](wait)() call or got forcely suspended due to real-time constraints, or when the entire sampler application got suspended by the OS for other applications or OS tasks) then the underlying internal clock is paused as well. <note class="important">You should only use this built-in variable for script development purposes (i.e. for bench marking the performance of your script). You should <b>not</b> use it with your final production sounds! It is not appropriate for being used in a musical context, because when an offline bounce is performed for instance, the musical timing will be completely unrelated to the CPU execution time. Plus using this variable may cause audio drop outs on some systems. In a musical context you should use <code>$ENGINE_UPTIME</code> instead, which is also safe for offline bounces.</note><note>On some systems <code>$NKSP_REAL_TIMER</code> and <code>$NKSP_PERF_TIMER</code> will actually return the same value. So the difference between them is not implemented for all systems at the moment.</note>
| `%NKSP_CALLBACK_CHILD_ID[]`   | Reflects the callback IDs of all child threads which the current script callback instance spawned by having called [fork](fork)() before. See the latter function for details about this array variable.
| `$NKSP_CALLBACK_PARENT_ID`    | If the current execution thread is a child thread spawned by a [fork](fork)() call before, then this variable reflects the callback ID of the parent thread which created this child thread. Otherwise this variable is 0. See [fork](fork)() for more details about this variable.
| `$NKSP_REAL_TIMER`            | Returns the current time stamp in reality (in microseconds). You may read this variable from time to time to take time stamps which can be used to calculate the time difference (in microseconds) which elapsed between them. A "real" time stamp is based on an internal clock which constantly proceeds, so this internal clock also continues counting while your script is either suspended (i.e. because your script got suspended by a [wait](wait)() call or got forcely suspended due to real-time constraints) and it also continues counting even if the entire sampler application got suspended by the OS (i.e. to execute other applications for multi-tasking or to perform OS tasks). <note class="important">You should only use this built-in variable for script development purposes (i.e. for bench marking the performance of your script). You should not use it with your final production sounds! It is not appropriate for being used in a musical context, because when an offline bounce is performed for instance, the musical timing will be completely unrelated to the CPU execution time. Plus using this variable may cause audio drop outs on some systems. In a musical context you should use <code>$ENGINE_UPTIME</code> instead, which is also safe for offline bounces.</note><note>On some systems <code>$NKSP_REAL_TIMER</code> and <code>$NKSP_PERF_TIMER</code> will actually return the same value. So the difference between them is not implemented for all systems at the moment.</note>
| `$NI_CALLBACK_ID`             | Reflects the current event handler instance's unique callback ID. For the same event type there may be more than one event handler instances running. Each one of them has its own callback ID. You can get the current event handler instance's callback ID by reading this built-in variable.
| `$NI_CALLBACK_TYPE`           | Reflects the event type of the current event handler. This variable may reflect one of the following built-in constants: `$NI_CB_TYPE_INIT`, `$NI_CB_TYPE_NOTE`, `$NI_CB_TYPE_RELEASE`, `$NI_CB_TYPE_CONTROLLER`.
| `$NI_CB_TYPE_INIT`            | Built-in constant reflecting an `init` event handler type.
| `$NI_CB_TYPE_NOTE`            | Built-in constant reflecting a `note` event handler type.
| `$NI_CB_TYPE_RELEASE`         | Built-in constant reflecting a `release` event handler type.
| `$NI_CB_TYPE_CONTROLLER`      | Built-in constant reflecting a `controller` event handler type.
| `$NKSP_IGNORE_WAIT`           | If this boolean built-in variable is 1 then all calls of your event handler instance to function [wait](wait)() will be ignored. This may for example be the case if another event handler instance resumed your paused script by calling [stop_wait](stop_wait)() and passing 1 to the 2nd argument of that function.

### Common Sampler Variables

Basic sampler related built-in variables and constants, independent from a
particular sampler format or sampler engine.

| Variable                       | Description
| ------------------------------ | -----------
| `%ALL_EVENTS`                  | Note IDs of all currently active notes of the current sampler part (a.k.a. sampler channel). This may be passed to many built-in functions like [note_off](note_off)(). This array variable only contains IDs of notes which were launched due to MIDI note-on events. This variable does not contain IDs of child notes (i.e. notes which were launched programmatically by calling [play_note](play_note)()). <note>In contrast to KSP this variable is an integer array type, whereas KSP's pendent of this built-in variable is an integer constant (scalar) called <code>$ALL_EVENTS</code>. Using the latter with NKSP will cause a parser warning, the behavior will be the same though.</note>
| `$CC_NUM`                      | MIDI controller number that caused the `controller` handler to be executed (only useful in the context of a `controller` handler).
| `%CC[]`                        | Provides access to all current MIDI controller values. This can be used in any context. Use the respective MIDI controller number as index to this integer array variable. For instance %CC[1] would give you the current value of the modulation wheel.
| `$EVENT_ID`                    | ID of the event that caused the current event handler to be executed. In the context of a `note` handler this would be the event ID of the note, within a `controller` handler it would be the controller event ID, etc.
| `$EVENT_NOTE`                  | MIDI note number that caused a note related handler to be executed (only useful in the context of a `note` or `release` handler).
| `$EVENT_VELOCITY`              | MIDI velocity value of the note that caused that note related handler to be executed (only useful in the context of a `note` or `release` handler).
| `$EVENT_STATUS_INACTIVE`       | Constant bit flag used as possible return value by [event_status](event_status)() in case the requested note is not "alive".
| `$EVENT_STATUS_NOTE_QUEUE`     | Constant bit flag used as possible return value by [event_status](event_status)() in case the requested note is still "alive".
| `$EVENT_PAR_NOTE`              | Constant value symbolizing the "note number" parameter. See [get_event_par](get_event_par)() and [set_event_par](set_event_par)() for details.
| `$EVENT_PAR_TUNE`              | Constant value symbolizing the "tune" parameter. See [get_event_par](get_event_par)() and [set_event_par](set_event_par)() for details.
| `$EVENT_PAR_VELOCITY`          | Constant value symbolizing the "note velocity" parameter. See [get_event_par](get_event_par)() and [set_event_par](set_event_par)() for details.
| `$EVENT_PAR_VOLUME`            | Constant value symbolizing the "volume" parameter. See [get_event_par](get_event_par)() and [set_event_par](set_event_par)() for details.
| `$EVENT_PAR_0 to $EVENT_PAR_3` | Four constant values symbolizing the 4 possible user specific parameters, which i.e. might be used to pass data from one script (slot) to another script (slot). See [get_event_par](get_event_par)() and [set_event_par](set_event_par)() for details.
| `%KEY_DOWN[]`                  | This can be used in any context to check whether a certain MIDI key is currently pressed down. Use the respective MIDI note number as index to this array variable (see also [event_status](event_status)()).
| `$NKSP_EASE_IN_EASE_OUT`       | Used to select a fade curve with "ease in and ease out" shape.
| `$NKSP_LINEAR`                 | Used to select a fade curve with linear shape.
| `$VCC_MONO_AT`                 | Constant identifying the MIDI monophonic aftertouch controller (also called MIDI channel pressure ). This is somewhat different than in the MIDI standard. With NKSP aftertouch is handled like an additional "regular" MIDI CC controller. Therefore use `%CC[$VCC_MONO_AT]` to obtain the current aftertouch value in the context of a `controller` event handler.
| `$VCC_PITCH_BEND`              | Constant identifying the pitch bend wheel controller. This is somewhat different than in the MIDI standard. With NKSP pitch bend is handled like an additional "regular" MIDI CC controller. Therefore use `%CC[$VCC_PITCH_BEND]` to obtain the current pitch bend wheel value in the context of a `controller` event handler.
| `$MARK_1 to $MARK_28`          | Used to select one of the available 28 event groups. See [set_event_mark](set_event_mark)() for details.
| `$ENGINE_UPTIME`               | Returns the current time stamp (in milliseconds) for being used in a musical context. You may read this variable from time to time to take time stamps which can be used to calculate the time difference (in milliseconds) which elapsed between them. These timing values are based on the internal sample rate and thus it can safely be used to perform musical timing related tasks in your scripts. Especially your script will also continue to behave correctly when an offline bounce of a song is performed.

### GigaStudio Format Variables

Sampler format specific built-in variables and constants, dedicated to the
individual features of the GigaStudio format engine.

| Variable                       | Description
| ------------------------------ | -----------
| `$GIG_DIM_CHANNEL`             | Constant that identifies the *stereo dimension*.
| `$GIG_DIM_LAYER`               | Constant that identifies the *layer dimension*.
| `$GIG_DIM_VELOCITY`            | Constant that identifies the *velocity dimension*.
| `$GIG_DIM_AFTERTOUCH`          | Constant that identifies the *aftertouch dimension*.
| `$GIG_DIM_RELEASE`             | Constant that identifies the *release trigger dimension*.
| `$GIG_DIM_KEYBOARD`            | Constant that identifies the *keyboard position dimension*.
| `$GIG_DIM_ROUNDROBIN`          | Constant that identifies the *round robin dimension*.
| `$GIG_DIM_RANDOM`              | Constant that identifies the *random dimension*.
| `$GIG_DIM_SMARTMIDI`           | Constant that identifies the *start MIDI dimension (a.k.a iMIDI rules)*.
| `$GIG_DIM_ROUNDROBINKEY`       | Constant that identifies the *round robin key dimension*.
| `$GIG_DIM_MODWHEEL`            | Constant that identifies the *modulation wheel dimension*.
| `$GIG_DIM_SUSTAIN`             | Constant that identifies the *sustain pedal dimension (a.k.a. hold pedal)*.
| `$GIG_DIM_PORTAMENTO`          | Constant that identifies the *portamento MIDI controller dimension*.
| `$GIG_DIM_SOSTENUTO`           | Constant that identifies the *sostenuto MIDI controller dimension*.
| `$GIG_DIM_SOFT`                | Constant that identifies the *soft pedal dimension*.
| `$GIG_DIM_BREATH`              | Constant that identifies the *breath controller dimension*.
| `$GIG_DIM_FOOT`                |  Constant that identifies the *foot pedal dimension*.
| `$GIG_DIM_PORTAMENTOTIME`      |  Constant that identifies the *portamento time controller dimension*.
| `$GIG_DIM_EFFECT1`             |  Constant that identifies the *effect 1 MIDI controller dimension*.
| `$GIG_DIM_EFFECT2`             |  Constant that identifies the *effect 2 MIDI controller dimension*.
| `$GIG_DIM_EFFECT1DEPTH`        |  Constant that identifies the *effect 1 depth MIDI controller dimension*.
| `$GIG_DIM_EFFECT2DEPTH`        |  Constant that identifies the *effect 2 depth MIDI controller dimension*.
| `$GIG_DIM_EFFECT3DEPTH`        |  Constant that identifies the *effect 3 depth MIDI controller dimension*.
| `$GIG_DIM_EFFECT4DEPTH`        |  Constant that identifies the *effect 4 depth MIDI controller dimension*.
| `$GIG_DIM_EFFECT5DEPTH`        |  Constant that identifies the *effect 5 depth MIDI controller dimension*.
| `$GIG_DIM_GENPURPOSE1`         |  Constant that identifies the *general purpose 1 MIDI controller dimension*.
| `$GIG_DIM_GENPURPOSE2`         |  Constant that identifies the *general purpose 2 MIDI controller dimension*.
| `$GIG_DIM_GENPURPOSE3`         |  Constant that identifies the *general purpose 3 MIDI controller dimension*.
| `$GIG_DIM_GENPURPOSE4`         |  Constant that identifies the *general purpose 4 MIDI controller dimension*.
| `$GIG_DIM_GENPURPOSE5`         |  Constant that identifies the *general purpose 5 MIDI controller dimension*.
| `$GIG_DIM_GENPURPOSE6`         |  Constant that identifies the *general purpose 6 MIDI controller dimension*.
| `$GIG_DIM_GENPURPOSE7`         |  Constant that identifies the *general purpose 7 MIDI controller dimension*.
| `$GIG_DIM_GENPURPOSE8`         |  Constant that identifies the *general purpose 8 MIDI controller dimension*.

## Built-In Preprocessor Conditions

These are the built-in preprocessor conditions available with the NKSP realt-time
instrument script language.

### Core Language Preprocessor Conditions

Most fundamental NKSP built-in preprocessor conditions, independent from any
purpose of being used in a sampler.

| Condition         | Description
| ------------------| -----------
| `NKSP_NO_MESSAGE` | By default this condition is not set. By explicitly enabling this condition with `SET_CONDITION(NKSP_NO_MESSAGE)` it causes all subsequent [message](message)() calls to be ignored and filtered out on preprocessor level. See function [message](message)() for details.

<br>
<link rel="stylesheet" href="/linuxsampler/style.css">
<div>
    <div id="r" class="child-div"><p></p></div>
    <div id="c" class="child-div"><p><a href="../language">↑ NKSP Language</a></p></div>
    <div id="l" class="child-div"><p><a href="abort">→ abort() function</a></p></div>
</div>
