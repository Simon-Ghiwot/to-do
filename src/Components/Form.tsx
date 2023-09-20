import React from "react";
import { useRef } from "react";

interface Todo {
  id: number;
  isComplete: boolean;
  description: string;
}
interface State {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Form: React.FC<State> = ({ todos, setTodos }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    if (inputRef.current === null || inputRef.current.value === "") return;
    const inputValue = inputRef.current.value;
    setTodos([
      ...todos,
      { id: Date.now(), isComplete: false, description: inputValue },
    ]);
    inputRef.current.value = "";
  };
  return (
    <>
      <form onSubmit={(e: React.FormEvent<EventTarget>) => handleSubmit(e)}>
        <input type="text" ref={inputRef} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
export default Form;
