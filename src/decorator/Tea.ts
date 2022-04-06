import { Beverage } from './Beverage';

export class Tea implements Beverage {
  constructor() {
    console.log('Preparing tea');
  }

  public cost(): number {
    return 5;
  }
}
