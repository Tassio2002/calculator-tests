import { getByDisplayValue, render } from "@testing-library/react";
import App from "./App";

describe("Test App Component", () => {
  it("should render login component", () => {
    const { getByText } = render(<App />);

    expect(getByText("Login")).toBeInTheDocument();
  });

  it("should render span component", () => {
    const { getByText } = render(<App />);

    expect(
      getByText("Please enter your login and password!")
    ).toBeInTheDocument();
  });

  it("should render email input", () => {
    const { getByPlaceholderText } = render(<App />);

    expect(getByPlaceholderText("Username")).toBeInTheDocument();
  });

  it("should render password input", () => {
    const { getByPlaceholderText } = render(<App />);

    expect(getByPlaceholderText("Password")).toBeInTheDocument();
  });

  it("should render login button", () => {
    const { getByDisplayValue } = render(<App />);

    expect(getByDisplayValue("Enter")).toBeInTheDocument();
  });
});
