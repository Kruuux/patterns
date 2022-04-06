import { Parser } from './Parser';

export class BookParser implements Parser {
  private numberOfWords: number;

  constructor(bookContent: string) {
    console.log('A demanding operation that we want to postpone');
    this.countWords(bookContent);
  }

  private countWords(bookContent: string): void {
    this.numberOfWords = bookContent.split(' ').length;
  }

  getNumberOfWords(): number {
    return this.numberOfWords;
  }
}
