interface Todo {
  id: number;
  isComplete: boolean;
  description: string;
}
interface Props {
  id: number;
  description: string;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Record: React.FC<Props> = ({ id, description, setTodos, todos }) => {
  const handleDelete = () => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  return (
    <>
      <div>
        <p>{description}</p>
        <input type="button" value="Edit" />
        <button onClick={() => handleDelete()}>Delete</button>
      </div>
    </>
  );
};

export default Record;
