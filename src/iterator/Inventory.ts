import { Item } from './Item';
import { ItemIterator } from './ItemIterator';
import { IterableCollection } from './IterableCollection';
import { Iterator } from './Iterator';

export class Inventory implements IterableCollection<Item> {
  private items: Item[] = [];

  addItem(item: Item): void {
    this.items.push(item);
  }

  removeItem(identifier: string): void {
    const index = this.items.findIndex(
      (item) => item.identifier === identifier,
    );
    this.items.splice(index, 1);
  }

  createIterator(): Iterator<Item> {
    return new ItemIterator(this);
  }

  getItem(index: number): Item {
    return this.items[index];
  }
}
