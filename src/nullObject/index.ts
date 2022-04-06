import { Footballer } from './Footballer';
import { NullMoveStrategy } from './NullMoveStrategy';
import { RunMoveStrategy } from './RunMoveStrategy';

const runMoveStrategy = new RunMoveStrategy();
const nullMoveStrategy = new NullMoveStrategy();
const footballer = new Footballer(0, 0, runMoveStrategy);

console.log(`[${footballer.getPositionX()}, ${footballer.getPositionY()}]`);

footballer.moveUp();
footballer.moveUp();
console.log(`[${footballer.getPositionX()}, ${footballer.getPositionY()}]`);

footballer.setMoveStrategy(nullMoveStrategy);
footballer.moveUp();
footballer.moveUp();
console.log(`[${footballer.getPositionX()}, ${footballer.getPositionY()}]`);

footballer.setMoveStrategy(runMoveStrategy);
footballer.moveDown();
footballer.moveDown();
console.log(`[${footballer.getPositionX()}, ${footballer.getPositionY()}]`);
