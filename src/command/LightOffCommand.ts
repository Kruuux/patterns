import { Command } from './Command';
import { Light } from './Light';

export class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    console.log('Turning the light off');
    this.light.turnOff();
  }
}
