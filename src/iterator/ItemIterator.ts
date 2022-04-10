import { Inventory } from './Inventory';
import { Item } from './Item';
import { Iterator } from './Iterator';

export class ItemIterator implements Iterator<Item> {
  private index = 0;

  constructor(private readonly inventory: Inventory) {}

  current(): Item {
    return this.inventory.getItem(this.index);
  }

  next(): void {
    this.index++;
  }

  hasMore(): boolean {
    const item = this.inventory.getItem(this.index + 1);
    if (!item) return false;
    return true;
  }
}
