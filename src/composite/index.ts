import { Menu } from './Menu';
import { Program } from './Program';

const menu = new Menu('Main menu');
const gamesMenu = new Menu('Games');
const workMenu = new Menu('Work');
const officeMenu = new Menu('Microsoft Office');
const quakeProgram = new Program('Quake');
const wordProgram = new Program('Word');
const commanderProgram = new Program('Commander');

menu.addMenuListing(gamesMenu);
menu.addMenuListing(workMenu);
gamesMenu.addMenuListing(quakeProgram);
workMenu.addMenuListing(commanderProgram);
workMenu.addMenuListing(officeMenu);
officeMenu.addMenuListing(wordProgram);

console.log(`Expand all`);
menu.expandAll();

console.log(`\nOpen all`);
menu.openAll();
