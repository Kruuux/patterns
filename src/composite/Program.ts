import { MenuListing } from './MenuListing';

export class Program implements MenuListing {
  constructor(private readonly name: string) {}

  public expand(): void {
    return;
  }

  public expandAll(): void {
    return;
  }

  public open() {
    console.log(`Program - ${this.name} opens`);
  }

  public openAll(): void {
    console.log(`Program - ${this.name} opens`);
  }
}
