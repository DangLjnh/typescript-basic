import React, { useEffect, useReducer, useRef, useState } from "react";
import useTodos from "./hooks/useTodos";
const Heading = ({ title }: { title?: string }) => {
  return <h2 className="font-bold text-2xl">{title}</h2>;
};
export interface Todo {
  id: number;
  text: string;
}
interface Identity {
  name: string;
  age: number;
}
const initState: Todo[] = [
  {
    id: 1,
    text: "Learn TS",
  },
];
const App = () => {
  const [data, setData] = useState<Identity>();
  const inputRef = useRef<HTMLInputElement>(null);
  const { todos, onAddTodo, onRemoveTodo } = useTodos(initState, inputRef);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((result: Identity) => {
        setData(result);
      });
  }, []);
  const onClickItem = (item: string) => {
    alert(item);
  };
  const products = [
    { id: 1, title: "iPhone 14", price: "1500$", store: "TGDD" },
  ];
  return (
    <>
      <Heading title="Todo app"></Heading>
      {/* <List
        items={["java", "html", "css", "react"]}
        onClickItem={(item: string) => onClickItem(item)}
      ></List>
      <Boxed>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod beatae
        odit quam et eos eaque, similique asperiores doloribus cumque
        cupiditate, eligendi at ex modi perferendis incidunt quis nostrum!
        Dolores, totam?
      </Boxed> */}
      <div className="max-w-sm">
        <RenderList
          listItem={todos}
          keyExtractor={(todo) => todo.id}
          render={(todo) => (
            <div className="flex items-center gap-x-3" key={todo.id}>
              <span>{todo.text}</span>
              <span
                onClick={() => onRemoveTodo(todo.id)}
                className="p-2 rounded bg-red-400 text-sm text-white cursor-pointer"
              >
                Remove
              </span>
            </div>
          )}
        ></RenderList>
        <Button className="text-white text-sm bg-red-200 rounded">
          Buy now
        </Button>
        <Input type={"text"} placeholder="Ẻnte"></Input>
        <View as="h2">hihi</View>
        {/* <RenderList
          listItem={products}
          render={(product) => (
            <>
              <h2>{product.title}</h2>
              <p>{product.price}</p>
            </>
          )}
        ></RenderList> */}
        {/* <div className="my-5">
          {todos.map((todo) => {
            return (
              <div className="flex items-center gap-x-3" key={todo.id}>
                <span>{todo.text}</span>
                <span
                  onClick={() => onRemoveTodo(todo.id)}
                  className="p-2 rounded bg-red-400 text-sm text-white cursor-pointer"
                >
                  Remove
                </span>
              </div>
            );
          })}
        </div> */}
        <div className="flex items-center gap-x-5">
          <input type="text" className="p-4 border rounded-lg" ref={inputRef} />
          <button
            onClick={() => onAddTodo()}
            className="bg-pink-200 p-4 rounded-lg"
          >
            Add todo
          </button>
        </div>
      </div>
    </>
  );
};
const List = ({
  items,
  onClickItem,
}: {
  items: string[];
  onClickItem?: (item: string) => void;
}) => {
  return (
    <div>
      {items.map((item) => {
        return (
          // ?. Nếu function có tồn tại thì mới gọi
          <div onClick={() => onClickItem?.(item)} key={item}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
const RenderList = <T,>({
  listItem,
  render,
  keyExtractor,
}: {
  listItem: T[];
  render: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => number | string;
}) => {
  return (
    <ul className="my-5">
      {listItem.map((item) => (
        <li key={keyExtractor(item)}>{render(item)}</li>
      ))}
    </ul>
  );
};

type ButtonProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type ViewProps<T extends keyof JSX.IntrinsicElements> = {
  children: React.ReactNode;
  as: T;
} & JSX.IntrinsicElements[T];

const Button = ({ children, ...rest }: ButtonProps) => {
  return <button {...rest}>{children}</button>;
};
const Input = ({ ...rest }: InputProps) => {
  return <input type="text" {...rest} />;
};
const View = <T extends keyof JSX.IntrinsicElements>({
  as,
  children,
  ...rest
}: ViewProps<T>) => {
  return React.createElement(as, { ...rest }, children);
};
const Boxed = ({ children }: { children?: React.ReactNode }) => {
  return <div>{children}</div>;
};
export default App;

abstract class BaseService<T> {
  protected model!: T;
  find(): T {
    return this.model;
  }
  findOne(): T[] {
    return [this.model];
  }
}

interface Dog {
  bark(): void;
}
interface Cat {
  meow(): void;
}

class DogService extends BaseService<Dog> {}
class CatService extends BaseService<Cat> {}

const dogSer = new DogService();
dogSer.find().bark();
