import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Bruce Wayne",
        },
        {
          name: "Clark Kent",
        },
        {
          name: "Princess Diana",
        },
      ])
    );
  }),
  // Add more handlers for other endpoints or HTTP methods here
  rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          title: "Post 1",
        },
        {
          title: "Post 2",
        },
        {
          title: "Post 3",
        },
        // Add more data as needed
      ])
    );
  }),
];
