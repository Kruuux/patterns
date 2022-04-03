import { Obstacle } from './Obstacle';

export class Asteroid implements Obstacle {
  constructor(public height: number, public width: number) {}
}
