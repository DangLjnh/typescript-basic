import React, { useEffect, useReducer, useRef, useState } from "react";
const Heading = ({ title }: { title?: string }) => {
  return <h2 className="font-bold text-2xl">{title}</h2>;
};
type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };
interface Todo {
  id: number;
  text: string;
}
const todoReducer = (state: Todo[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
        },
      ];
    case "REMOVE":
      return state.filter((item: Todo) => item.id !== action.id);
    default:
      throw new Error("Error");
      break;
  }
};
const initState: Todo[] = [
  {
    id: 1,
    text: "Learn TS",
  },
];
interface valueInput {
  value: string;
}
interface Identity {
  name: string;
  age: number;
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, initState);
  const [valueInput, setValuesInput] = useState<valueInput>({ value: "" });
  const [data, setData] = useState<Identity>();
  const [a, b] = useState<number>(0);
  const onRemoveTodo = (todoID: number) => {
    dispatch({
      type: "REMOVE",
      id: todoID,
    });
    console.log(todoID);
  };
  const onAddTodo = () => {
    dispatch({
      type: "ADD",
      text: valueInput.value,
    });
  };
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
  return (
    <>
      <Heading title="Todo app"></Heading>
      <List
        items={["java", "html", "css", "react"]}
        onClickItem={(item: string) => onClickItem(item)}
      ></List>
      <Boxed>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod beatae
        odit quam et eos eaque, similique asperiores doloribus cumque
        cupiditate, eligendi at ex modi perferendis incidunt quis nostrum!
        Dolores, totam?
      </Boxed>
      <div className="max-w-sm">
        <div className="my-5">
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
        </div>
        <div className="flex items-center gap-x-5">
          <input
            type="text"
            className="p-4 border rounded-lg"
            onChange={(e) => setValuesInput({ value: e.target.value })}
            value={valueInput.value}
          />
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

const Boxed = ({ children }: { children?: React.ReactNode }) => {
  return <div>{children}</div>;
};
export default App;
