import { Barometer } from './Barometer';
import { Hydrometer } from './Hydrometer';
import { Thermometer } from './Thermometer';
import { Anemometer } from './Anemometer';

export class WeatherStationFacade {
  constructor(
    private readonly thermometer: Thermometer,
    private readonly barometer: Barometer,
    private readonly anemometer: Anemometer,
    private readonly hydrometer: Hydrometer,
  ) {}

  checkThermometer(): void {
    this.thermometer.measureTemperature();
  }

  checkBarometer(): void {
    this.barometer.measurePressure();
  }

  checkAnemometer(): void {
    this.anemometer.measureWindSpeed();
  }

  checkHydrometer(): void {
    this.hydrometer.measureHumidity();
  }
}
