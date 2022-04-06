import { BookParser } from './BookParser';
import { Parser } from './Parser';

export class LazyBookParserProxy implements Parser {
  private bookParser: BookParser;

  constructor(private readonly bookContent: string) {
    console.log('Avoiding demanding operation');
  }

  getNumberOfWords(): number {
    if (!this.bookParser) this.bookParser = new BookParser(this.bookContent);

    return this.bookParser.getNumberOfWords();
  }
}
