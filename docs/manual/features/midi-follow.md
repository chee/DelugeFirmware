---
title: MIDI Follow Mode
navigation:
  title: MIDI Follow
---

<added-in>c1.0.0</added-in>

MIDI Follow mode directs all incoming MIDI messages from a chosen device to the
active view. It works with arranger view, song view and all the clip views. MIDI
Follow settings are saved in your global settings, so they'll persist across
instruments, songs and reboots.

## Access the MIDI Follow settings menu

1. Press [SHIFT] + (SELECT) to enter the [settings menu](/menus/settings)
2. Turn (SELECT) to choose [[Midi|midi]]
3. Press (SELECT)
4. Turn (SELECT) to choose [[FoLo|midi-follow]]
5. Press (SELECT)

## Learning a device to a MIDI Follow Channel

MIDI Follow has 3 channels, A B and C. This allows 3 separate input devices to
be learned to MIDI Follow mode at the same time.

1. [Access the MIDI Follow settings menu](#access-the-midi-follow-settings-menu)
2. Choose [[chan|channel]] and press (SELECT)
3. Turn (SELECT) to choose a channel (`A`, `B` or `C`)
4. Hold [LEARN / INPUT] while sending a message from your external MIDI device
   (e.g. by pressing a button or key)

Now you can use your external MIDI to control the active view.

:::note
MIDI Follow can be used without a learned device. Turn (SELECT) when in an unlearned
channel (`A`, `B` or `C`) menu to select a MIDI channel or MPE zone.
:::

### Unlearning

To unlearn, press [SHIFT] + [LEARN / INPUT] while in the (`A`, `B` or `C`) channel menu.

:::caution
If no channel has been set, MIDI Follow will be disabled.
:::

## Selecting a Kit Root Note

The deluge doesn't associate a kit's rows with a specific midi note. MIDI Follow
lets you choose the note that associated with the lowest row on the kit. Rows
above that will be triggered by the next midi note sequentially.

1. [Access the MIDI Follow settings menu](#access-the-midi-follow-settings-menu)
2. Turn (SELECT) to choose [[kit|kit root note]]
3. Press (SELECT) to enter the **Kit Root Note** menu
4. Either:
   - Turn (SELECT) to choose a MIDI note value to act as kit root note, or
   - Hold [LEARN / INPUT] and send a note from your device. That note is now the
     kit root note.

## MIDI Feedback

Some external MIDI devices will update their UIs to reflect changes made on CCs
they control. Deluge MIDI Follow mode can send feedback to one of its channels
to make use of this functionality.

1. [Access the MIDI Follow settings menu](#access-the-midi-follow-settings-menu)
2. Turn (SELECT) to choose [[FEEd|feedback]]
3. Press (SELECT) to enter the feedback menu

Here you can turn and press (SELECT) to choose:
  - [[chan|channel]]
    -  the MIDI Follow channel to send MIDI feedback to
  - [[filt|Filter Responses]]
      - Enable to filter out very recent responses to
        work around MIDI devices that always echo back every message they receive
  - [[auto|automation feedback]]
      - Set the speed of (or disable) sending CC feedback from automations

## Views

For more info on how MIDI Follow works in a given view, see that view's MIDI
Follow section:

- [Song view](/views/song#midi-follow)
- [Grid view](/views/grid#midi-follow)
- [Audio clip view](/views/clips/audio#midi-follow)
- [Melodic clip view](/views/clips/melodic#midi-follow)
- [Kit view](/views/clips/kit#midi-follow)
- [Arranger view](/views/arranger#midi-follow)

## Advanced use

### MIDIFollow.XML

MIDI Follow's initial set up maps incoming CC values to some sensible
defaults. If you'd like to customize the mappings, you can edit the `MIDIFollow.XML`.

The first time you boot up the community firmware, it'll create a
`MIDIFollow.XML` file on the root of your SD Card. Open this in a text editor
and change the values to better suit your needs. See the
[MIDIFollow.XML](/reference/midi-follow-xml/) reference for further details.

## Resources

### Templates

Here are some pre-made templates surfacing the CC features of MIDI Follow

#### Loopy Pro

This [Loopy Pro](https://loopypro.com) template is set up to send and receive on
channel 15 when the Deluge is connected via USB (and detected “Deluge Port 1”)

![](https://github.com/SynthstromAudible/DelugeFirmware/blob/316279c5e091cdeb7d50828e407789966fb53abc/contrib/midi_follow/loopy_pro/loopy-pro-template-snapshot.jpg?raw=true)

[Download Loopy Pro template](https://github.com/SynthstromAudible/DelugeFirmware/blob/community/contrib/midi_follow/loopy_pro/Deluge%20Midi%20Follow.lpproj.zip)

## Touch OSC Template for Deluge MIDI Follow Mode

This [Touch OSC](https://hexler.net/touchosc/) template s set up to send and
receve on Channel 15. You'll need to activate the Deluge in the [Touch OSC
Connections Menu](https://hexler.net/touchosc/manual/connections-osc).

![](https://github.com/SynthstromAudible/DelugeFirmware/blob/4cc496a5ca06616e9c75a334f08deead837cbf29/contrib/midi_follow/touch_osc/touch_osc.png?raw=true)

[Download Touch OSC template](https://github.com/SynthstromAudible/DelugeFirmware/blob/community/contrib/midi_follow/touch_osc/Deluge.tosc)
