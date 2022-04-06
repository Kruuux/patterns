import { AddonDecorator } from './AddonDecorator';
import { Beverage } from './Beverage';

export class JuiceDecorator implements AddonDecorator {
  constructor(private beverage: Beverage) {
    console.log('Adding juice');
  }

  public cost(): number {
    return this.beverage.cost() + 2;
  }
}
