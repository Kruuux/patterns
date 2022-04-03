import { Command } from './Command';
import { Light } from './Light';

export class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    console.log('Turning the light on');
    this.light.turnOn();
  }
}
