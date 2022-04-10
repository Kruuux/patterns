import { Device } from './Device';

export class Radio implements Device {
  turnOn(): void {
    console.log('Turning on the Radio');
  }

  turnOff(): void {
    console.log('Turning off the Radio');
  }
}
