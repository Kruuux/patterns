import { WeaponStrategy } from './WeaponStrategy';

export class AxeStrategy implements WeaponStrategy {
  constructor(private readonly name: string) {}

  public attack(): void {
    console.log(`Attacks using ${this.getName()}`);
  }

  public getName(): string {
    return this.name;
  }
}
