import { AscendingSortAlgorithm } from './AscendingSortAlgorithm';
import { DescendingSortAlgorithm } from './DescendingSortAlgorithm';

const ascendingSortAlgorithm = new AscendingSortAlgorithm();
const descendingSortAlgorithm = new DescendingSortAlgorithm();

const numbers = [6, 2, 8, 4, 7, 2, 1, 3, 5, 9, 4, 2, 6, 7, 3, 2];

ascendingSortAlgorithm.sort(numbers);
descendingSortAlgorithm.sort(numbers);
