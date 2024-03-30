---
title: Community Features Menu
navigation:
  title: Community Features
---

- Press [SHIFT] and + turn (SCROLL◄►) clockwise to 'stretch' the audio length
  longer.


## |FEAT| Community Features

### |DRUM| Drum Randomizer

Toggle the [drum randomizer](/views/clip/kit#drum-randomizer)

### |temp| Fine tempo knob
Toggle [Fine Tempo change option](/)

### |quan| Quantize
Toggle [note quantize](/views/clip#quantize)

### |mod.| Mod. Depth Decimals
Increase modulation resolution

### |catc| Catch Notes
By default, when shift-switching between clips, the deluge will look for notes
in the new clip that would have been recently triggered and plays them.  This
allows that feature to be toggled.

### |unus| Delete unused kit rows
Toggle the [/views/clip/kit#delete-unused](delete unused kit rows shortcut).

### |dela| Alternative golden knob delay params
Toggle gold knob button actions for delay between `UPPER` PingPong `LOWER` Type +
`UPPER` SyncType `LOWER` SyncLevel.

### |stut| Stutter rate quantize
Quantize stutter to fractions of a bar.

### |sysx| Allow Insecure Develop Sysex Messages
Allow [firmware](/dev/dbt#loadfw) upload over USB-MIDI.

### |scal| Sync Scaling Action
When set to Fill, it changes the behaviour of [SYNC-SCALING] activates
[FILL](/views/song/#fill) mode. Sync-Scaling button function remains available
by pressing [SHIFT]+[SYNC-SCALING].

### |high| Highlight Incoming Notes
Keyboard layouts display light up in response to incoming midi notes, velocity
represented by brightness.

### |norn| Display NORNS Layout
Enables a enables keyboard layout which emulates monome
[grid](https://monome.org/docs/grid/) for monome
[norns](https://monome.org/docs/norns/) using midigrid mod where incoming midi
notes on channel 16 are rendered as white pads using velocity for brightness.

### |ligh| Light Shift
Iilluminate the shift button when shift is active.

### |stic| Sticky shift
Tap [SHIFT] briefly to enable sticky keys.
Long press [SHIFT] to keep it on.
This setting enables Light Shift.

### |grfx| Grain FX
When On, `GRAIN` will be a selectable option in the `MOD FX TYPE`
category. Resource intensive, recommended to only use one instance per song or
resample and remove instance afterwards. TODO link to fx reference for grain and modfx

### |emul| Emulated Display

Set to 7SEG to emulate the 7seg screen on an OLED <deluge-logo></deluge-logo>.

When set to Toggle, the screen type can be toggled by pressing [SHIFT] +
[LEARN] + [AFFECT ENTIRE]

Can be used with 7seg hardware to render OLEd on an external display. TODO link
to instructinos
