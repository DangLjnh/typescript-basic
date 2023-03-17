const obj = {
  foo: {
    a: true,
    b: 20,
  },
  baz: {
    c: false,
    d: 30,
  },
};
function getDeep<T, K extends keyof T, TS extends keyof T[K]>(
  obj: T,
  firstKey: K,
  secondKey: TS
): T[K][TS] {
  return obj[firstKey][secondKey];
}
console.log(getDeep(obj, "foo", "b") ? true : false);
