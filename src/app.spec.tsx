import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Test render App component", () => {
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

    expect(getByPlaceholderText("Email")).toBeInTheDocument();
  });

  it("should render password input", () => {
    const { getByPlaceholderText } = render(<App />);

    expect(getByPlaceholderText("Password")).toBeInTheDocument();
  });

  it("should render login button", () => {
    const { getByText } = render(<App />);

    expect(getByText("Enter")).toBeInTheDocument();
  });
});
// teste para email inválido
describe("Test input validation", () => {
  const onSubmit = jest.fn();
  it("would fail to send email field", () => {
    onSubmit.mockImplementation((event) => {
      event.preventDefault();
    });
    const { getByText, getByPlaceholderText } = render(<App />);
    const emailInput = getByPlaceholderText("Email");
    const enterButton = getByText("Enter");

    fireEvent.input(emailInput, "test");
    fireEvent.click(enterButton);

    // eslint-disable-next-line no-restricted-globals
    expect(location.pathname).toEqual("/")
  });
// teste para senha inválida
  it("would fail to send password field", () => {
    onSubmit.mockImplementation((event) => {
      event.preventDefault();
    });
    const { getByText, getByPlaceholderText } = render(<App />);
    const passwordInput = getByPlaceholderText("Password");
    const enterButton = getByText("Enter");

    fireEvent.input(passwordInput, "test123");
    fireEvent.click(enterButton);

    // eslint-disable-next-line no-restricted-globals
    expect(location.pathname).toEqual("/")
  });
// teste para login valido
  it("should enter the calculator page", () => {
    onSubmit.mockImplementation((event) => {
      event.preventDefault();
    });
    const { getByText, getByPlaceholderText } = render(<App />);
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    const enterButton = getByText("Enter");

    fireEvent.input(emailInput, "tassio.santos@simbioseventures.com");
    fireEvent.input(passwordInput, "SenhaForte8!");
    fireEvent.click(enterButton);

    // eslint-disable-next-line no-restricted-globals
    expect(location.pathname).toEqual("/calculator")
  });
});
