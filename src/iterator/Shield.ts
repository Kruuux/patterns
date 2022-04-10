import { randomUUID } from 'crypto';
import { Item } from './Item';

export class Shield implements Item {
  public readonly identifier = randomUUID();
  constructor(public readonly price: number) {}
}
