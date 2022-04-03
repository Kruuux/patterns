import { Light } from './Light';
import { LightOffCommand } from './LightOffCommand';
import { LightOnCommand } from './LightOnCommand';
import { Remote } from './Remote';

const light = new Light();

const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const remote = new Remote(lightOnCommand, lightOffCommand);

remote.clickLeftButton();
remote.clickRightButton();
