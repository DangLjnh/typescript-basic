import { FinalProduct, Product, ProductNewFeature } from "./interface";

export function total(a: number, b: number): number {
  return a + b;
}
total(5, 9);
/**
 * 
1. Tuple
->[number, string]
2. Enum
->enum Permission {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  MOD = "MOD",
}
permisson: Permission.ADMIN,
Any
Union
->(string | number)[]
Literal
-> type age = 18 | 20 | 40
age: 19,
Function
export function total(a: number, b: number): number {
  return a + b;
}
Void (not return anything)
export function total(a: number, b: number) {
  // return a + b;
}
*/

//unknow
// let a: unknown;
// a = 100;
// a.toFixed(2); -> error because object is type unknown -> fix use type of
//never
//type never is never contains any values
//represent return type of function throw error or loop infinity
// const raiseError = (err: string): never => {
//   throw new Error(err);
// };

//interface
const product: ProductNewFeature = {
  name: "car",
  brand: "bmw",
  color: "blue",
};

const addProduct = (product: FinalProduct) => {
  product.speed;
};
addProduct(product);
