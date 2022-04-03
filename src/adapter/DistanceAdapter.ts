import { MilesAPI } from './MilesAPI';
import { KilometersAPI } from './KilometersAPI';

export class DistanceAdapter implements KilometersAPI {
  constructor(private milesAPI: MilesAPI) {}

  public getDistance(): number {
    const miles = this.milesAPI.getMilage();
    const kilometers = miles * 1.60934;

    console.log(
      `${DistanceAdapter.name} | Converting ${miles} miles to ${kilometers} kilometers`,
    );

    return kilometers;
  }
}
