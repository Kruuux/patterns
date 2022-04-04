export abstract class NumericSortAlgorithm {
  protected abstract algorithm(numbers: number[]): number[];

  sort(numbers: number[]): number[] {
    if (!this.areDefined(numbers))
      throw new Error('Not all numbers are defined');

    const sortedNumbers = this.algorithm(numbers);
    this.log(numbers, sortedNumbers);

    return sortedNumbers;
  }

  protected areDefined(numbers: number[]): boolean {
    for (const element of numbers) {
      if (!element && element != 0) return false;
    }
    return true;
  }

  protected log(numbersBeforeSort: number[], numbersAfterSort: number[]): void {
    console.log(
      `${NumericSortAlgorithm.name} | ${numbersBeforeSort} -> ${numbersAfterSort}`,
    );
  }
}
