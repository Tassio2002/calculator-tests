import { render } from "@testing-library/react";
import App from "./App";

describe("Test App Component", () => {
  it("should render login component", () => {
    const { getByText } = render(<App />);

    expect(getByText("Faça seu Login")).toBeInTheDocument();
  });

  it("should render email input", () => {
    const { getByPlaceholderText } = render(<App />);

    expect(getByPlaceholderText("Digite seu email..")).toBeInTheDocument();
  });

  it("should render password input", () => {
    const { getByPlaceholderText } = render(<App />);

    expect(getByPlaceholderText("Digite sua senha..")).toBeInTheDocument();
  });

  it("should render login button", () => {
    const { getByText } = render(<App />);

    expect(getByText("Entrar")).toBeInTheDocument();
  });

  
});
