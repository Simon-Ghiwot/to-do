import React from "react";
import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import Record from "./Components/Record";

interface Todo {
  id: number;
  isComplete: boolean;
  description: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div className="App">
      <h1>TO DO</h1>
      <Form todos={todos} setTodos={setTodos} />
      {todos.map(({ id, isComplete, description }: Todo) => [
        <Record
          id={id}
          description={description}
          setTodos={setTodos}
          todos={todos}
        />,
      ])}
    </div>
  );
};

export default App;
