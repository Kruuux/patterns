import { ClosedGateState } from './ClosedGateState';
import { GateState } from './GateState';

export class Gate {
  private gateState: GateState;

  constructor() {
    this.gateState = new ClosedGateState();
  }

  open(): void {
    this.gateState.open(this);
  }

  close(): void {
    this.gateState.close(this);
  }

  getState(): GateState {
    return this.gateState;
  }

  setState(gateState: GateState): void {
    this.gateState = gateState;
  }
}
