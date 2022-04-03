import { BalancedObstacleFactory } from './BalancedObstacleFactory';
import { RandomObstacleFactory } from './RandomObstacleFactory';

const log = console.log;

const randomObstacleFactory = new RandomObstacleFactory();
log(randomObstacleFactory.createObstacle());
log(randomObstacleFactory.createObstacle());
log(randomObstacleFactory.createObstacle());
log(randomObstacleFactory.createObstacle());
log(randomObstacleFactory.createObstacle());

const balancedObstacleFactory = new BalancedObstacleFactory();
log(balancedObstacleFactory.createObstacle());
log(balancedObstacleFactory.createObstacle());
log(balancedObstacleFactory.createObstacle());
log(balancedObstacleFactory.createObstacle());
log(balancedObstacleFactory.createObstacle());
