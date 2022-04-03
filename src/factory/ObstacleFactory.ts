import { Obstacle } from './Obstacle';

export interface ObstacleFactory {
  createObstacle(): Obstacle;
}
