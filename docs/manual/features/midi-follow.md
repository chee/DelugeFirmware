---
title: MIDI Follow Mode
navigation:
  title: MIDI Follow
---

<added-in>c1.0.0</added-in>

![](/images/midi-follow.jpg)

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

### Unlearning

To unlearn, press [SHIFT] + [LEARN / INPUT] while in the (`A`, `B` or `C`) channel menu.

:::caution
If all channels are unlearned, MIDI Follow will be disabled.
:::

## Selecting a Kit Root Note

## MIDI Feedback

Some external MIDI devices will update their UIs to reflect changes made on CCs
they control. Deluge MIDI Follow mode can send feedback to one of its channels
to make use of this functionality.

1. [Access the MIDI Follow settings menu](#access-the-midi-follow-settings-menu)
2. Turn (SELECT) to choose [[FEEd|feedback]]

## Advanced use

### MIDIFollow.XML

MIDI Follow's initial set up maps incoming CC values to some sensible
defaults. If you'd like to customize the mappings, you can edit the `MIDIFollow.XML`.

The first time you boot up the community firmware, it'll create a
`MIDIFollow.XML` file on the root of your SD Card. Open this in a text editor
and change the values to better suit your needs. See the
[MIDIFollow.XML](/reference/midi-follow-xml/) reference for further details.

## Usage:

### Set Master MIDI Follow Channel(s), Set Kit Root Note, Enable/Disable Pop-ups and Enable/Disable MIDI Feedback

To use MIDI follow mode, you will need to configure the various MIDI Follow Mode settings by entering the settings menu and going to the sub menu for MIDI -> MIDI-Follow

- In the MIDI-Follow > Channel submenu, set the channel between 1 and 16 for Non-MPE or MPE Lower/Upper for MPE. There are three channel's (A/B/C) available to accomodate learning multiple devices / channels to MIDI Follow Mode.
  - You can quickly learn a Channel (and Device) by pressing LEARN and sending a CC/Note while in the Channel submenu
  - You can quickly unlearn a Channel by pressing SHIFT + LEARN while in the Channel submenu
      - Note: if no Channel has been set, MIDI Follow Mode will be Disabled
- In the MIDI-Follow > Kit Root Note submenu, set the root note for kits between 1 and 127 in order to map MIDI Notes received to Kit rows. The root note corresponds to the bottom row in a Kit.
- In the MIDI-Follow > Display Param submenu, enable or disable param pop-ups
- In the MIDI-Follow > Feedback > Channel submenu, Enable or Disable MIDI follow feedback by setting a MIDI Follow Feedback Channel.
  - You can choose MIDI Follow Channel A/B/C or NONE. Thus, when you update MIDI Follow Channel A/B/C it will automatically update the channel used for MIDI Feedback.
      - Note: if no Channel has been set, MIDI Feedback will be Disabled
- In the MIDI-Follow > Feedback > Automation Feedback submenu, Enable or Disable MIDI follow feedback for automated parameters and set the rate at which feedback for automated parameters is sent
- In the MIDI-Follow > Feedback > Filter Responses submenu, Enable or Disable filtering of responses received within 1 second of sending a MIDI feedback value update.

### **Input Device Differentiation**
If you wish to use Input Device Differentiation with MIDI Follow Mode, you will need to learn your device to the required MIDI Follow Channel(s).

To learn the device, you need to enter the MIDI Follow Channel submenu, hold the Learn button and then send a Note or CC.

For example, if you enter the channel submenu (e.g. `MIDI-Follow > Channel > Channel A` or `MIDI-Follow > Channel > Channel B`) and then `press and and hold the Learn button` and then send a Note to the deluge, the Deluge will update the the Synth channel to match the device and, if you are using an OLED Deluge, it will display the Device that has been learned on the screen.

### **Learning a Channel / Root Note**

As explained above, in the MIDI-Follow Channel submenu's you can hold learn to learn a device for input differentiation. You can also use this same functionality with input differentiation off to quickly update the MIDI-Follow channel's to match the channel used by your device. Simply hold Learn and send a Note or CC for any of the channels.

You can also use this method for updating the Kit Root Note. In the Kit Root Note menu, hold Learn and send a note from your device to update the Kit Root Note.

### **Unlearning a Channel and Device**

You can unlearn a channel and device by pressing Shift + Learn while in the channel submenu's.

If you unlearn all MIDI Follow channels, MIDI Follow Mode will be disabled (including MIDI Feedback).
If set the MIDI Feedback channel to NONE, MIDI Feedback will be disabled.

You can also unlearn a channel using the Select encoder by scrolling between MPE Upper Zone and Channel 1.

### **Notes:**
Notes and note associated performance data received (e.g. CC1, MPE CC74) on the master MIDI channel will play the instrument in the active clip (e.g. a synth, MIDI clip, cv clip, or all kit rows).

- Note 1: You can play a synth, kit, MIDI or cv clip without entering the clip from arranger or song view. Simply press and hold the clip in arranger or song view to preview the clip (as you would to change the parameters of that clip with the gold encoders) and then send notes from your MIDI controller.

- Note 2: For Kit's, the bottom Kit row is mapped by default to the root note C1 (note # 36). All kit rows above are mapped to note's incrementally (e.g. 36, 37, 38, etc.). This kit root note # is configurable (from 0 to 127) through the Kit Root Note submenu.

- Note 3: MIDI Follow mode will always send notes to the active clip. This means that if you leave or unselect a clip, you can still send notes to that clip because in the Deluge, that clip is still recognized as the last active clip.

### **CC's:**
CC's received on the master MIDI channel that have been mapped to a parameter will change the value of that parameter in the active context (e.g. song, arranger, audio clip, instrument clip).

The parameters are controlled only in the current context.

- So if you are controlling filter, for example, while in song view it will only control the song’s filter. If you enter a specific synth clip, it will only control that synths filter. If you are in a kit clip it will either control the entire kit or a specific row in that clip (depending on whether you have affect entire enabled or not)
- In other words it checks what context you’re in and controls the parameters of that context.

Note: You can control the parameters of a synth or kit clip without entering the clip from arranger or song view. Simply press and hold the clip in arranger or song view to preview the clip (as you would to change the parameters of that clip with the gold encoders) and then send MIDI cc's from your MIDI controller to adjust the parameters.

#### Default MIDI CC Mappings
A default set of MIDI CC # to Deluge Parameter mappings has been created for MIDI Follow Mode. When you launch the Deluge after installing the firmware with MIDI Follow Mode, an XML file will be created to the root folder of the SD card titled "MIDIFollow.XML"

The default mappings have taken into account standard MIDI CC to parameter mappings and usages. It has also taken into account reserving of MIDI CC's for future Deluge functionality / feature implementations.

The default MIDI CC to parameter mappings, as mapped the to the parameter shortcuts on the Deluge grid are as follows:

![image](https://github.com/SynthstromAudible/DelugeFirmware/assets/138174805/e5c6ecbf-e21e-4b3b-9cfc-8f433a56ed28)

> * See Appendix A for detailed listing and description of default CC # to Parameter mappings.

Here are the MIDI CC #'s that have been reserved for other purposes:

![image](https://github.com/SynthstromAudible/DelugeFirmware/assets/138174805/f076d9c8-d25f-4d13-a631-be552f84d7c8)

#### Adjust MIDI CC Mappings
MIDI CC mappings for MIDI Follow Mode are saved to the root of your SD card in an XML file called MIDIFollow.XML

Within MIDIFollow.XML, all Parameters that can mapped to a MIDI CC are listed. The MIDI CC value is enclosed between a Parameter XML tag - e.g. `<lpfFrequency>74</lpfFrequency>` indicates that MIDI CC 74 is mapped to the LPF Frequency parameter. Conversely when a value of 255 is entered (e.g. `<hpfFrequency>255</hpfFrequency>`) it indicates that no MIDI CC value has been mapped to that parameter.

![image](https://github.com/SynthstromAudible/DelugeFirmware/assets/138174805/1ae66f8b-1627-4e2f-a05d-fd7a8c73b62f)
You can manually edit the MIDIFollow.XML to enter your MIDI CC mappings to each Parameter.

The defaults from MIDIFollow.XML are loaded automatically when you start the Deluge so you can begin controlling the deluge with your MIDI controller right away.

Note: A parameter can only be mapped to one MIDI CC. Conversely, a MIDI CC can be mapped to multiple parameters.

#### Display Parameter Names and Values on Screen

> Note: MIDI pop-up's can be disabled in the MIDI Follow Display Param submenu.

For mapped MIDI CC's, a pop up is shown on the display whenever MIDI CC's are received to indicate the name of the parameter that is being controlled by that MIDI CC and the current value being set for that parameter.

<img width="170" alt="Screen Shot 2023-12-04 at 2 32 25 AM" src="https://github.com/SynthstromAudible/DelugeFirmware/assets/138174805/f4e8115c-c2af-4cfe-94cf-d2e117201cd5">

Note: if the MIDI CC being received is for a Parameter that cannot be controlled in the current context (e.g. trying to control Attack while in Song View), the pop-up message will say "Can't Control: Parameter Name".

<img width="191" alt="Screen Shot 2023-12-04 at 2 32 03 AM" src="https://github.com/SynthstromAudible/DelugeFirmware/assets/138174805/b2dcefb2-4f90-4b23-804c-3250bfd24862">

## Re-cap of functionality

1. Added new MIDI submenu for MIDI-Follow where you can:

- Set up to three MIDI Follow Channels and Devices
- Set the MIDI Follow Root Note for Kits
- Enable or Disable MIDI Follow Param Pop-up's
- Enable or Disable MIDI Follow Feedback by setting/unsetting the MIDI Follow Feedback Channel
- Enable or Disable MIDI Follow Feedback for Automated Parameters and set the MIDI Feedback Update Rate
- Enable or Disable MIDI Follow Feedback Filtering of MIDI CC responses received within 1 second of sending feedback
2. When MIDI Follow Mode is enabled, a MIDI Follow Channel has been set, and you have mapped your MIDI CC's, your external controller's Notes and MIDI CC's will be automatically directed to control the Notes of the Active Instrument (e.g. Synth, Kit, MIDI, CV) or the Parameters of the Active View (e.g. Song View, Arranger View, Audio Clip View, Instrument Clip View).
3. By default, the root note for kit's is C1 for the bottom kit row but this can be configured in the MIDI Follow menu.
4. Pop-up's are shown on the display for mapped MIDI CC's to show the name of the parameter being controlled and value being set for the parameter. This can be disabled in the menu.
5. MIDI feedback is sent for mapped CC's when the active context changes, change presets, or you change the value of a mapped parameter on the deluge (e.g. using mod encoders or select encoder if you're int he menu). MIDI feedback can be disabled in the menu by setting the MIDI feedback channel to NONE.
6. MIDI feedback for automated parameters can also be sent and can be enabled or disabled in the MIDI feedback sub menu. When enabled, you choose between 3 speeds at which to send feedback for automated parameters: Low (500 ms), Medium (150 ms), High (40 ms). Sending automated parameter feedback can be taxing on the deluge MIDI output system, so depending on the amount of automation you do, you may want to adjust the speed (e.g. slow it down) to not affect the performance of the Deluge.
7. MIDI feedback can cause an undesirable result with certain applications when the application responds back to the Deluge after the Deluge has sent it an updated value (Loopy Pro and Drambo on iPad are known to do this). This can cause lag in the deluge and potential feedback loops. To handle this, a toggable filter was added which ignores messages received for the same ccNumber within 1 second of sending a MIDI feedback update. If the application receiving the MIDI feedback update does not send responses back to the Deluge, then this setting should be set to Disabled in the MIDI Feedback Filter Responses sub menu.
    - Note: To control the deluge with midi follow while receiving midi automation feedback, MIDI Feedback Filter Responses needs to be disabled. If your device requires filter responses to be enabled to avoid a feedback loop, you cannot use that same device to control the deluge while automation feedback is being received - you will only be able to display the automation on your device.

## Appendix A - List of Deluge Parameters with Default Mapped CC's

<img width="470" alt="image" src="https://github.com/SynthstromAudible/DelugeFirmware/assets/138174805/bef76865-e591-415a-9fa7-04c79c8b310d">

## Appendix B - Loopy Pro Template for Deluge MIDI Follow Mode

For users of Loopy Pro, you will find a MIDI Follow template in this folder: [MIDI Follow Mode Loopy Pro Template]

- It is setup to send and receive on channel 15 when the Deluge is connected via USB (and detected “Deluge Port 1”)

<img alt="image" src="https://github.com/SynthstromAudible/DelugeFirmware/blob/316279c5e091cdeb7d50828e407789966fb53abc/contrib/midi_follow/loopy_pro/loopy-pro-template-snapshot.jpg">

## Appendix C - Touch OSC Template for Deluge MIDI Follow Mode

For users of Touch OSC, you will find a MIDI Follow template in this folder: [MIDI Follow Mode Touch OSC Template]

- It is setup to send and receive on Channel 15 when the Deluge is setup in the Touch OSC Connections menu

<img width="560" alt="image" src="https://github.com/SynthstromAudible/DelugeFirmware/blob/4cc496a5ca06616e9c75a334f08deead837cbf29/contrib/midi_follow/touch_osc/touch_osc.png">

[MIDI Follow Mode Loopy Pro Template]: https://github.com/SynthstromAudible/DelugeFirmware/tree/community/contrib/midi_follow/loopy_pro
[MIDI Follow Mode Touch OSC Template]: https://github.com/SynthstromAudible/DelugeFirmware/tree/community/contrib/midi_follow/touch_osc
