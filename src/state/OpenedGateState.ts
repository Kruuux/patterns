import { ClosedGateState } from './ClosedGateState';
import { Gate } from './Gate';
import { GateState } from './GateState';

export class OpenedGateState implements GateState {
  open(): void {
    return;
  }

  close(gate: Gate): void {
    gate.setState(new ClosedGateState());
  }
}
