import { Radio } from './Radio';
import { Television } from './Television';
import { VoiceRemote } from './VoiceRemote';

const television = new Television();
const radio = new Radio();
const voiceRemote = new VoiceRemote();

voiceRemote.setDevice(television);
voiceRemote.startListening();

voiceRemote.turnOn();
voiceRemote.turnOff();

voiceRemote.setDevice(radio);

voiceRemote.turnOn();
voiceRemote.turnOff();
