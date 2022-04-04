import { MacFactory } from './MacFactory';
import { WinFactory } from './WinFactory';

const macFactory = new MacFactory();
const winFactory = new WinFactory();

const macButton = macFactory.createButton();
const macCheckbox = macFactory.createCheckbox();

const winButton = winFactory.createButton();
const winCheckbox = winFactory.createCheckbox();

console.log(macButton);
console.log(macCheckbox);
console.log(winButton);
console.log(winCheckbox);
