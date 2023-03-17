//function overloading is same name, same amount or differnce,
// amount of parameter, difference type and same or return type
// function total(a: string, b: string): string;
// function total(a: number, b: number): number;
// function total(a: any, b: any) {
//   return a + b;
// }
// interface Coordinate {
//   x: number;
//   y: number;
// }
// function parseCoordinateFromObject(obj: Coordinate): Coordinate {
//   return {
//     ...obj,
//   };
// }
// function parseCoordinateFromNumber(x: number, y: number): Coordinate {
//   return { x, y };
// }
// parseCoordinateFromObject({ x: 10, y: 20 });
// parseCoordinateFromNumber(10, 20);
interface Coordinate {
  x: number;
  y: number;
}
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: any, arg2?: any): Coordinate {
  let coors = {
    x: arg1 as number,
    y: arg2 as number,
  };
  if (typeof arg1 === "object") {
    coors = {
      ...(arg1 as Coordinate),
    };
  }
  return coors;
}
parseCoordinate({ x: 10, y: 20 });
parseCoordinate(10, 20);

//normal function
function number(a: number, b: number): number {
  return a + b;
}
//arrow function
const string = (x: string, y: string): string => {
  return x + y;
};
//default parameters
const numberdefault = (a: number = 10, b: number = 20): number => {
  return a + b;
};
//Union types
const format = (
  title: string,
  desc: string,
  amount: string | number
): string => {
  return `${title} ${desc} ${amount}`;
};
format("Linh", "dev", 10);
//void function
function contact(email: string, phone: number): void {
  console.log("🚀 ~ file: function.ts:66 ~ contact ~ string", string);
}
//promise function
const fetchData = (url: string) => Promise.resolve(`Get data from ${url}`);
//rest parameters
const information = (id: number, ...names: string[]): string => {
  return `${id} ${names.join(" ")}`;
};
information(1, "linhh", "vu", "binh"); // 1, ["linh","vu","binh"]
//with callback
function handleFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

//params with params
// function handleUpdateArray(
//   numbers: number[],
//   update: (n: number) => number
// ): number[] {
//   return numbers.map((item) => update(item));
// }
// handleUpdateArray([1, 2, 3, 4, 5], (n) => n * 5); // 5 10 15 20 25

//function as types
type UpdateArray = (n: number) => number;
function handleUpdateArray(numbers: number[], update: UpdateArray): number[] {
  return numbers.map((item) => update(item));
}
handleUpdateArray([1, 2, 3, 4, 5], (n) => n * 5); // 5 10 15 20 25

//function return function
function handleValue(x: number): (n: number) => number {
  return (c: number) => c * x;
}
const value = handleValue(5); //x
console.log(value(10)); //50 (n)
