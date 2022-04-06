import { JuiceDecorator } from './JuiceDecorator';
import { SugarDecorator } from './SugarDecorator';
import { Tea } from './Tea';

let tea = new Tea();
tea = new SugarDecorator(tea);
tea = new JuiceDecorator(tea);
tea = new JuiceDecorator(tea);
console.log(`Total cost of tea with addons: ${tea.cost()}\n`);

const plainTea = new Tea();
console.log(`Total cost of plain tea: ${plainTea.cost()}`);
