import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListProps } from "@mui/material";

const List = () => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [todos, setTodos] = useState<ListProps[]>([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=2")
      .then((res) => {
        setTodos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);
  return (
    <section>
      <h3>Todos Listing</h3>
      {error && <p className="error">Api Error</p>}
      {loading && <p className="loading">Loading...</p>}
      {!loading && !error && (
        <section className="listing">
          <ul>{todos?.map((todo, i) => <li key={i}>{todo.title}</li>)}</ul>
        </section>
      )}
    </section>
  );
};
export default List;
