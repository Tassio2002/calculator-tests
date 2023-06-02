/*eslint-disable no-restricted-globals*/
import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LoginBox } from "./components/LoginBox";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
const loginBox = (
  <BrowserRouter>
    <LoginBox />
  </BrowserRouter>
);

describe("Test render Login component", () => {
  it("should render login component", () => {
    const { getByText } = render(app);

    expect(getByText("Login")).toBeInTheDocument();
  });

  it("should render span component", () => {
    const { getByText } = render(app);

    expect(
      getByText("Please enter your login and password!")
    ).toBeInTheDocument();
  });

  it("should render email input", () => {
    const { getByPlaceholderText } = render(app);

    expect(getByPlaceholderText("Email")).toBeInTheDocument();
  });

  it("should render password input", () => {
    const { getByPlaceholderText } = render(app);

    expect(getByPlaceholderText("Password")).toBeInTheDocument();
  });

  it("should render login button", () => {
    const { getByText } = render(app);

    expect(getByText("Enter")).toBeInTheDocument();
  });
});

describe("Test input validation", () => {
  const onSubmit = jest.fn();
  it("would fail to send email field", () => {
    onSubmit.mockImplementation((event) => {
      event.preventDefault();
    });
    const { getByText, getByPlaceholderText } = render(loginBox);
    const emailInput = getByPlaceholderText("Email");
    const enterButton = getByText("Enter");

    fireEvent.input(emailInput, "test");
    fireEvent.click(enterButton);

    waitFor(() => expect(location.pathname).toEqual("/"));
  });

  it("would fail to send password field", async () => {
    onSubmit.mockImplementation((event) => {
      event.preventDefault();
    });
    const { getByText, getByPlaceholderText } = render(loginBox);
    const passwordInput = getByPlaceholderText("Password");
    const enterButton = getByText("Enter");

    fireEvent.input(passwordInput, "test123");
    fireEvent.click(enterButton);

    waitFor(() => expect(location.pathname).toEqual("/"));
  });

  it("should enter the calculator page", async () => {
    onSubmit.mockImplementation((event) => {
      event.preventDefault();
    });
    const { getByText, getByPlaceholderText } = render(loginBox);
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    const enterButton = getByText("Enter");

    fireEvent.input(emailInput, "tassio.santos@simbioseventures.com");
    fireEvent.input(passwordInput, "SenhaForte8!");
    fireEvent.click(enterButton);

    waitFor(() => expect(location.pathname).toEqual("/calculator"));
    waitFor(() => expect(getByText("Calculator")).toBeInTheDocument());
  });
});
