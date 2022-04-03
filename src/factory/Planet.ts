import { Obstacle } from './Obstacle';

export class Planet implements Obstacle {
  constructor(public height: number, public width: number) {}
}
