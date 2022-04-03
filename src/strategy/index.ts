import { AxeStrategy } from './AxeStrategy';
import { SwordStrategy } from './SwordStrategy';
import { Warrior } from './Warrior';

const swordStrategy = new SwordStrategy('Wooden Sword');
const axeStrategy = new AxeStrategy('Stone Axe');
const warrior = new Warrior();

warrior.setWeapon(swordStrategy);
warrior.useWeapon();
warrior.setWeapon(axeStrategy);
warrior.useWeapon();
