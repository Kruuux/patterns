import { Display } from './Display';
import { Logger } from './Logger';
import { Thermometer } from './Thermometer';

const thermometer = new Thermometer();
const display = new Display(thermometer);
const logger = new Logger(thermometer);

thermometer.add(display);
thermometer.add(logger);

thermometer.setTemperature(20);
thermometer.setTemperature(30);

thermometer.remove(logger);

thermometer.setTemperature(5);
thermometer.setTemperature(10);
