import { Asteroid } from './Asteroid';
import { ObstacleFactory } from './ObstacleFactory';
import { Obstacle } from './Obstacle';
import { Planet } from './Planet';

export class RandomObstacleFactory implements ObstacleFactory {
  createObstacle(): Obstacle {
    const random = Math.floor(Math.random() * 11);

    if (random > 5) return new Asteroid(120, 140);
    else return new Planet(400, 600);
  }
}
