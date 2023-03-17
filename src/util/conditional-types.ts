type someType<T> = T extends string ? string : boolean;
type someValue = someType<string>;

type MyExreact<T, U> = T extends U ? T : never;
type TExtract = MyExreact<"a" | "b", "a">;
//"a" extends "a" ? "a" : never

// type MyInfer<T> = T extends string | number | boolean ? R : any;
type MyInfer<T> = T extends infer R ? R : any;
type UseMyInfer1 = MyInfer<string>;
type UseMyInfer2 = MyInfer<{ age: number }>;

type OptionFlags2<Type> = {
  [Property in keyof Type]: Type[Property] extends () => void
    ? Property
    : never;
}[keyof Type]; //get valid property
interface MyStudent {
  name: string;
  age: number;
  updateName: () => void;
}
type MyStudentCondition = OptionFlags2<MyStudent>;
