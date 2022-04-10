import { Device } from './Device';
import { Remote } from './Remote';

export class VoiceRemote implements Remote {
  private isListening = false;
  private device: Device;

  public turnOff(): void {
    if (this.isListening) this.device.turnOff();
  }

  public turnOn(): void {
    if (this.isListening) this.device.turnOn();
  }

  public stopListening(): void {
    this.isListening = false;
  }

  public startListening(): void {
    this.isListening = true;
  }

  public setDevice(device: Device): void {
    console.log('Adding new device');
    this.device = device;
  }

  public removeDevice(): void {
    console.log('Removing device');
    this.device = null;
  }
}
