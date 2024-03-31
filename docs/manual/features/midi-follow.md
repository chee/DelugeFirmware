---
title: MIDI Follow Mode
navigation:
  title: MIDI Follow
---

<added-in>c1.1.0</added-in>

MIDI Follow mode directs all incoming MIDI messages from a chosen device to the
active view. It works with arranger view, song view and all the clip views. MIDI
Follow settings are saved in your global settingsb▸ MIDI Follow](/views/arranger#midi-follow)

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

#### Touch OSC

This [Touch OSC](https://hexler.net/touchosc/) template s set up to send and
receve on Channel 15. You'll need to activate the Deluge in the [Touch OSC
Connections Menu](https://hexler.net/touchosc/manual/connections-osc).

![](https://github.com/SynthstromAudible/DelugeFirmware/blob/4cc496a5ca06616e9c75a334f08deead837cbf29/contrib/midi_follow/touch_osc/touch_osc.png?raw=true)

[Download Touch OSC template](https://github.com/SynthstromAudible/DelugeFirmware/blob/community/contrib/midi_follow/touch_osc/Deluge.tosc)
