import { Asteroid } from './Asteroid';
import { ObstacleFactory } from './ObstacleFactory';
import { Obstacle } from './Obstacle';
import { Planet } from './Planet';

export class BalancedObstacleFactory implements ObstacleFactory {
  private lastCreated: Obstacle | undefined = undefined;

  createObstacle(): Obstacle {
    if (!this.lastCreated) {
      this.lastCreated = new Asteroid(120, 140);
      return this.lastCreated;
    }

    if (this.lastCreated instanceof Asteroid) {
      this.lastCreated = new Planet(400, 600);
      return this.lastCreated;
    } else {
      this.lastCreated = new Asteroid(120, 140);
      return this.lastCreated;
    }
  }
}
