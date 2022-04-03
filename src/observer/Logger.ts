import { Observer } from './Observer';
import { Thermometer } from './Thermometer';

export class Logger implements Observer {
  constructor(private thermometer: Thermometer) {}

  public update(): void {
    console.log(
      `${Logger.name} | Temperature - ${this.thermometer.getTemperature()}`,
    );
  }
}
