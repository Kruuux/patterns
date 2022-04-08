import { Gate } from './Gate';
import { GateState } from './GateState';
import { OpenedGateState } from './OpenedGateState';

export class ClosedGateState implements GateState {
  open(gate: Gate): void {
    gate.setState(new OpenedGateState());
  }

  close(): void {
    return;
  }
}
