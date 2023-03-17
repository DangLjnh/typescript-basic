import React, { useReducer, useRef, useState } from "react";
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
const Reducer = () => {
  const [todos, dispatch] = useReducer(todoReducer, initState);
  const inputRef = useRef<HTMLInputElement>(null);
  const onRemoveTodo = (todoID: number) => {
    dispatch({
      type: "REMOVE",
      id: todoID,
    });
    console.log(todoID);
  };
  const onAddTodo = () => {
    if (inputRef.current) {
      dispatch({
        type: "ADD",
        text: inputRef.current.value,
      });
      inputRef.current.value = "";
    }
  };
  return (
    <>
      <Heading title="Todo app"></Heading>
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

export default Reducer;
