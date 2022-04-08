import { Gate } from './Gate';

export interface GateState {
  open(gate: Gate): void;
  close(gate: Gate): void;
}
