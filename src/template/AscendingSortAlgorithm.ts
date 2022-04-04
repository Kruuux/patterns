import { NumericSortAlgorithm } from './NumericSortAlgorithm';

export class AscendingSortAlgorithm extends NumericSortAlgorithm {
  protected algorithm(numbers: number[]): number[] {
    return numbers.sort((a, b) => a - b);
  }
}
