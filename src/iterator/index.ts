import { Inventory } from './Inventory';
import { Shield } from './Shield';
import { Sword } from './Sword';

const inventory = new Inventory();
const swordA = new Sword(50);
const shieldA = new Shield(75);

inventory.addItem(swordA);
inventory.addItem(shieldA);

const itemIterator = inventory.createIterator();
console.log(itemIterator.current());
console.log(`Has more? ${itemIterator.hasMore()}`);
itemIterator.next();

console.log(itemIterator.current());
console.log(`Has more? ${itemIterator.hasMore()}`);
