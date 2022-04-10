import { Device } from './Device';

export interface Remote {
  turnOff(): void;
  turnOn(): void;
  setDevice(device: Device): void;
  removeDevice(device: Device): void;
}
