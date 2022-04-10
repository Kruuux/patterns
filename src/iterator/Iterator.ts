export interface Iterator<T> {
  current(): T;
  next(): void;
  hasMore(): boolean;
}
