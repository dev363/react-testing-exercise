import { cleanup, render, screen, waitFor } from "@testing-library/react";
import List from "./List";
// import AxiosMock from "../../mocks/axios";
import axios from "axios";
import MockAdapter from "axios-mock-adapter"; // Import axios-mock-adapter

// You can import AxiosMock, but it doesn't seem to be used in this example.

describe("Axios Testing", () => {
  let mockAxios: any;

  beforeEach(() => {
    // Create a new instance of axios-mock-adapter and pass the Axios instance to it.
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    cleanup();
    mockAxios.restore(); // Restore axios to its original state after each test
  });

  test("Api: Loading", async () => {
    render(<List />);

    // The component should initially display a loading message.
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // Wait for the API call to complete and the loading state to change.
    await waitFor(() => {
      // The loading message should disappear.
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });
  });

  test("Api: Success", async () => {
    const mockData = [
      { id: 1, title: "Todo 1" },
      { id: 2, title: "Todo 2" },
      { id: 2, title: "Todo 3" },
    ];
    mockAxios
      .onGet("https://jsonplaceholder.typicode.com/todos?_limit=2")
      .reply(200, mockData);
    render(<List />);

    // Wait for the API call to complete and the loading state to change.
    await waitFor(() => {
      // The component should display the list of todos fetched from the mock API response.
      expect(screen.getByText("Todo 1")).toBeInTheDocument();
    });
    await waitFor(() => {
      // The component should display the list of todos fetched from the mock API response.
      expect(screen.getByText("Todo 2")).toBeInTheDocument();
    });
  });

  test("Api: Error", async () => {
    // Mock Axios to reject the request with an error.
    mockAxios
      .onGet("https://jsonplaceholder.typicode.com/todos?_limit=2")
      .reply(400, new Error("Api Error"));

    render(<List />);

    // Wait for the API call to complete and the loading state to change.
    await waitFor(() => {
      // The component should display an error message.
      expect(screen.getByText("Api Error")).toBeInTheDocument();
    });
  });
});
