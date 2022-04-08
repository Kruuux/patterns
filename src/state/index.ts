import { Gate } from './Gate';

const gate = new Gate();
console.log(gate.getState());

gate.open();
console.log(gate.getState());

gate.open();
console.log(gate.getState());

gate.close();
console.log(gate.getState());

gate.close();
console.log(gate.getState());
