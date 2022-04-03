import { Barometer } from './Barometer';
import { Hydrometer } from './Hydrometer';
import { Thermometer } from './Thermometer';
import { WeatherStationFacade } from './WeatherStationFacade';
import { Anemometer } from './Anemometer';

const thermometer = new Thermometer();
const barometer = new Barometer();
const anemometer = new Anemometer();
const hydrometer = new Hydrometer();

const weatherStation = new WeatherStationFacade(
  thermometer,
  barometer,
  anemometer,
  hydrometer,
);

weatherStation.checkThermometer();
weatherStation.checkBarometer();
weatherStation.checkAnemometer();
weatherStation.checkHydrometer();
