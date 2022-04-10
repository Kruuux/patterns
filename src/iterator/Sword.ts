import { randomUUID } from 'crypto';
import { Item } from './Item';

export class Sword implements Item {
  public readonly identifier = randomUUID();
  constructor(public readonly price: number) {}
}
