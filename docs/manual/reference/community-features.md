---
title: Community Features Menu
navigation:
  title: Community Features
---

<div style=display:flex;gap:.5em;><shift-button on></shift-button> +
(SELECT)</div>

<deluge-menu-item seg="feat"><h2>community features</h2></deluge-menu-item>

<deluge-menu-item seg="drum"><h3>Drum Randomizer</h3></deluge-menu-item>
Toggle the <a href="/views/clip/kit#drum-randomizer">drum randomizer</a>

<deluge-menu-item seg=temp><h3>Fine tempo knob</h3></deluge-menu-item>
Toggle <a href="/">Fine Tempo change</a> option

<deluge-menu-item seg=quan><h3>Quantize</h3></deluge-menu-item>
Toggle <a href="/views/clip#quantize">note quantize</a>

<deluge-menu-item seg="mod."><h3>Mod. Depth Decimals</h3></deluge-menu-item>
Increase Modulation Resolution

<deluge-menu-item seg="catc"><h3>Catch Notes</h3></deluge-menu-item>
By default, when shift-switching between clips, the deluge will look for notes
in the new clip that would have been recently triggered and plays them.
This allows that feature to be toggled.

<deluge-menu-item seg="unus"><h3>Delete unused kit rows</h3></deluge-menu-item>
Toggle the <a href="/views/clip/kit#delete-unused">delete unused kit rows
shortcut</a>.

<deluge-menu-item seg=dela><h3>Alternative golden knob delay
params</h3></deluge-menu-item>
Switch the gold knob button action for delay from the default (PingPong and Type) to (SyncType and SyncLevel).


* `Alternative Golden Knob Delay Params (DELA)`
    * When On, it changes the behaviour of the Mod Encoder button action from the default (PingPong and Type) to the
      alternative params (SyncType and SyncLevel).
* `Stutter Rate Quantize (STUT)`
    * When On, the ability to set the stutterer effect to be quantized to 4th, 8th, 16th, 32nd, and 64th rate when
      selecting it is enabled.
* `Allow Insecure Develop Sysex Messages (SYSX)`
    * When On, the ability to load firmware over USB is enabled.
* `Sync Scaling Action (SCAL)`
    * When set to Fill, it changes the behaviour of the "SYNC-SCALING" button is changed to activate "FILL" mode. The
      original Sync Scaling button function is moved to "SHIFT" + "SYNC-SCALING".
* `Highlight Incoming Notes (HIGH)`
    * When On, In-Key and Isometric Keyboard layouts display incoming MIDI notes with their velocity.
* `Display Norns Layout (NORN)`
    * When On, enables keyboard layout which emulates monome grid for monome norns using midigrid mod where incoming
      midi
      notes on channel 16 are rendered as white pads using velocity for brightness.
* `Sticky Shift (STIC)`
    * When On, tapping shift briefly will enable sticky keys while a long press will keep it on. Enabling this setting
      will automatically enable "Light Shift" as well.
* `Light Shift (LIGH)`
    * When On, the Deluge will illuminate the shift button when shift is active. Mostly useful in conjunction with
      sticky
      shift.
* `Grain FX (GRFX)`
    * When On, `GRAIN` will be a selectable option in the `MOD FX TYPE` category. Resource intensive, recommended to
      only use one instance per song or resample and remove instance afterwards.
* `Emulated Display (EMUL)`
    * This allows you to emulate the 7SEG screen on a deluge with OLED hardware screen.
    * In "Toggle" mode, the "SHIFT" + "LEARN" + "AFFECT-ENTIRE" combination can used to switch between screen types at
      any time.
    * With the "7SEG" mode, the deluge will boot with the emulated display.
    * This option is technically available also on deluge with 7SEG hardware. But as you need an external display to
      render the OLED screen, it is of more limited use.
