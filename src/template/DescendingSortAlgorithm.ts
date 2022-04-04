import { NumericSortAlgorithm } from './NumericSortAlgorithm';

export class DescendingSortAlgorithm extends NumericSortAlgorithm {
  protected algorithm(numbers: number[]): number[] {
    return numbers.sort((a, b) => b - a);
  }
}
