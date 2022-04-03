import { KilometersAPI } from './KilometersAPI';

export class DistanceService {
  constructor(private kilometersAPI: KilometersAPI) {}

  getDistance(): number {
    const distance = this.kilometersAPI.getDistance();
    console.log(
      `${DistanceService.name} | Distance is equal to ${distance} kilometers`,
    );
    return distance;
  }
}
