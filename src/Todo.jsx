import { useEffect, useState } from "react";
import axios from "axios";

// data fetching  hook

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setloading(false);
      });
    }, n * 1000);

    return () => {
      clearInterval(value);
    };

  }, [n]);

  return { todos, loading };
}

const Todo = () => {
  const { todos, loading } = useTodos(5); // refresh every 5 seconds or polling

  if (loading) return <div> loading ...</div>;

  return (
    <div>
      {todos.map((todo, idx) => (
        <Track key={idx} todo={todo} />
      ))}
    </div>
  );
};

function Track({ todo }) {
  return (
    <div>
      <h2>{todo.title}</h2>
      <br />
      <p>{todo.description}</p>
    </div>
  );
}

export default Todo;
