import { fireEvent, render } from "@testing-library/react";
import { CalculatorPage } from ".";

describe("Test caluclator component renderiation", () => {
  it("should render calculator Title", () => {
    const { getByText } = render(<CalculatorPage />);

    expect(getByText("Calculator")).toBeInTheDocument();
  });

  it("should render calculator", () => {
    const { container } = render(<CalculatorPage />);

    expect(container.querySelector("#calculator")).toBeInTheDocument();
  });
});

describe("test calculator functions", () => {
  it("should render numbers clicked in the display", () => {
    const { container } = render(<CalculatorPage />);
    const number = container.querySelector("#num1");
    const sumSignal = container.querySelector("#plus");
    const display = container.querySelector("#display") as HTMLInputElement;

    if (number && sumSignal) {
      fireEvent.click(number);
      fireEvent.click(sumSignal);
      fireEvent.click(number);
    }
    if (display) {
      expect(display.value).toBe("1+1");
    }
  });

  it("should clar display", () => {
    const { container } = render(<CalculatorPage />);
    const number = container.querySelector("#num1");
    const sumSignal = container.querySelector("#plus");
    const display = container.querySelector("#display") as HTMLInputElement;
    const clearBtn = container.querySelector("#clear");

    if (number && sumSignal) {
      fireEvent.click(number);
      fireEvent.click(sumSignal);
      fireEvent.click(number);
    }
    if (display) {
      expect(display.value).toBe("1+1");
    }
    if (clearBtn && number) {
      fireEvent.click(clearBtn);
      expect(display.value).toBe("");
    }
  });

  it("should sum the numbers", () => {
    const { container } = render(<CalculatorPage />);
    const number = container.querySelector("#num1");
    const sumSignal = container.querySelector("#plus");
    const equalSignal = container.querySelector("#equal");
    const display = container.querySelector("#display") as HTMLInputElement;

    if (number && sumSignal && equalSignal) {
      fireEvent.click(number);
      fireEvent.click(sumSignal);
      fireEvent.click(number);
      fireEvent.click(equalSignal);
    }

    if (display) expect(display.value).toBe("2");
  });

  it("should display the correct result", () => {
    const { container } = render(<CalculatorPage />);

    const number = container.querySelector("#num1");
    const number5 = container.querySelector("#num5");
    const sumSignal = container.querySelector("#plus");
    const minusSignal = container.querySelector("#minus");
    const equalSignal = container.querySelector("#equal");
    const display = container.querySelector("#display") as HTMLInputElement;

    if (number && number5 && sumSignal && minusSignal && equalSignal) {
      fireEvent.click(number);
      fireEvent.click(number5);
      fireEvent.click(sumSignal);
      fireEvent.click(number5);
      fireEvent.click(minusSignal);
      fireEvent.click(number);
      fireEvent.click(equalSignal);

      if (display) expect(display.value).toBe("19");
    }
  });

  it("should not display two operators in sequence or first", () => {
    const { container } = render(<CalculatorPage />);

    const number = container.querySelector("#num1");
    const sumSignal = container.querySelector("#plus");
    const display = container.querySelector("#display") as HTMLInputElement;

    if(number && sumSignal) {
      fireEvent.click(number);
      fireEvent.click(sumSignal);
      fireEvent.click(sumSignal);
      fireEvent.click(sumSignal);
    }

    if (display) expect(display.value).toBe("1+");
  });
});
