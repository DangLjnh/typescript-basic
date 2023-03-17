import { RefObject, useReducer, useRef, useState } from "react";
import { Todo } from "../App";
type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

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

interface valueInput {
  value: string;
}
export default function useTodos(
  initState: Todo[],
  inputRef: RefObject<HTMLInputElement>
): {
  todos: Todo[];
  onAddTodo: () => void;
  onRemoveTodo: (todoID: number) => void;
} {
  const [todos, dispatch] = useReducer(todoReducer, initState);
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
  return {
    todos,
    onAddTodo,
    onRemoveTodo,
  };
}
