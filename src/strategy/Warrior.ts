import { WeaponStrategy } from './WeaponStrategy';

export class Warrior {
  private weaponStrategy: WeaponStrategy | null = null;

  public useWeapon(): void {
    if (this.weaponStrategy) this.weaponStrategy.attack();
  }

  public setWeapon(weaponStrategy: WeaponStrategy): void {
    console.log(`Changes weapon to ${weaponStrategy.getName()}`);
    this.weaponStrategy = weaponStrategy;
  }
}
