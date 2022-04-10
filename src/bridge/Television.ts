import { Device } from './Device';

export class Television implements Device {
  turnOn(): void {
    console.log('Turning on the Television');
  }

  turnOff(): void {
    console.log('Turning off the Television');
  }
}
