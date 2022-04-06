import { AddonDecorator } from './AddonDecorator';
import { Beverage } from './Beverage';

export class SugarDecorator implements AddonDecorator {
  constructor(private beverage: Beverage) {
    console.log('Adding sugar');
  }

  public cost(): number {
    return this.beverage.cost() + 1;
  }
}
