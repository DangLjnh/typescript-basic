//Partial<T> -> partial is change type normal to optional
interface Todo {
  title: string;
  desc: string;
  date: string;
  author: string;
}
type NewTodo = Partial<Todo>;
function updateTodo(todo: Todo, newTodo: NewTodo) {
  return {
    ...todo,
    ...newTodo, //cái sau sẽ đè cái trước
  };
}
console.log(
  updateTodo(
    { title: "learn js", desc: "6month", date: "22/08/2022", author: "Linh" },
    {}
  )
);

//Required -> change optional to require type
interface Props {
  isActive?: boolean;
  color?: string;
}
const comA: Props = {};
const comB: Required<Props> = { isActive: true, color: "red" };

//Readonly<T> -> can be read only and cannot update
interface Book {
  title: string;
}
const life: Book = {
  title: "Nha Gia Kim",
};
const bookNew: Readonly<Book> = {
  title: "Trai Cam",
};
bookNew.title;

//Record<Keys, Type>
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "VN" | "boris" | "miffyy";

const cats: Record<CatName, CatInfo> = {
  VN: { age: 10, breed: "VietNam1" },
  boris: { age: 20, breed: "VietNam2" },
  miffyy: { age: 30, breed: "VietNam3" },
};
cats.VN;

//Pick<Type, Key>
interface Todos {
  title: string;
  desc: string;
  completed: boolean;
}
type TodoPreview = Pick<Todos, "title" | "completed">;
const todo: TodoPreview = {
  title: "Learn ts",
  completed: false,
};

//Omit <Type, key> -> remove type of interface
interface TodoO {
  title: string;
  desc: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreviewO = Omit<TodoO, "completed" | "title">;

const todoO: TodoPreviewO = {
  desc: "",
  createdAt: 1,
};

//Exclude<Union Type, ExcluMembers> // remove type of union
type T0 = Exclude<"a" | "b" | "c", "a">; //"b","c"
type T1 = Exclude<"a" | "b" | "c", "a" | "c">; //"b"
type T2 = Exclude<string | number | (() => void), Function>; //string, number

//Extract<Type, union>
type T3 = Extract<"a" | "b" | "c", "a" | "f">; //"a"
type T4 = Extract<"a" | "b" | "c", "a" | "b">; //"a", "b"
