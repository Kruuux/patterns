import { LazyBookParserProxy } from './LazyBookParserProxy';

const bookContent = 'This is the content of a book.';
const lazyBookParserProxy = new LazyBookParserProxy(bookContent);

const numberOfWords = lazyBookParserProxy.getNumberOfWords();

console.log(`Number of words: ${numberOfWords}`);
