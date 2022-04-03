import { Observer } from './Observer';
import { Thermometer } from './Thermometer';

export class Display implements Observer {
  constructor(private thermometer: Thermometer) {}

  public update(): void {
    console.log(
      `${
        Display.name
      } | Temperature has changed to ${this.thermometer.getTemperature()}`,
    );
  }
}
