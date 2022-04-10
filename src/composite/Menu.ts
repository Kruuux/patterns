import { MenuListing } from './MenuListing';

export class Menu implements MenuListing {
  private menuListing: MenuListing[] = [];

  constructor(private name: string) {}

  public expand(): void {
    console.log(`Menu - ${this.name} expands`);
  }

  public expandAll(): void {
    console.log(`Menu - ${this.name} expands`);
    this.menuListing.forEach((menuListing) => menuListing.expandAll());
  }

  public open(): void {
    return;
  }

  public openAll(): void {
    this.menuListing.forEach((menuListing) => menuListing.openAll());
  }

  public addMenuListing(menuListing: MenuListing): void {
    this.menuListing.push(menuListing);
  }
}
