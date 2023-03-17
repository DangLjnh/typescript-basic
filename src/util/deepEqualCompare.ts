function deepEqualCompare<T>(
  a: T extends any[] ? "dont pass array" : T,
  b: T extends any[] ? "dont pass array" : T
): boolean {
  return a === b;
}
// deepEqualCompare([1, 2, 3], [2, 3, 4]);
deepEqualCompare(123, 123);
