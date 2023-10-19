import React, { useEffect, useState } from "react";

const UsersListing = () => {
  const [list, setList] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
      .then((res) => res.json())
      .then((data) =>
        setList(data.map((user: { title: string }) => user.title))
      )
      .catch(() => setError("Error fetching users"));
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {error && <p data-testid="errorid">Errors of Api</p>}
      {list?.map((e, i) => {
        return (
          <p role="paragraph" key={i}>
            {e}
          </p>
        );
      })}
    </div>
  );
};
export default UsersListing;
