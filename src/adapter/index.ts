import { DistanceAdapter } from './DistanceAdapter';
import { DistanceService } from './DistanceService';
import { MilesAPI } from './MilesAPI';

const milesAPI = new MilesAPI();
const distanceAdapter = new DistanceAdapter(milesAPI);
const distanceService = new DistanceService(distanceAdapter);

distanceService.getDistance();
