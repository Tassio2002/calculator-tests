import { useState } from "react";
import { Button } from "./Button";

export const Calculator = () => {
  const operators = ["+", "-", "/", "*"];
  const [display, setDisplay] = useState("");

  const insertChar = (val: string | number) => {
    setDisplay(display + val);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const isOperator = (val: number | string) => {
    if (
      display === "" ||
      (operators.includes(display[display.length - 1]) &&
        typeof val === "string")
    ) {
      return;
    } else {
      setDisplay(display + val);
    }
  };

  const mountOperation = (expression: string) => {
    expression = display
    // eslint-disable-next-line
    const operation = eval(expression);
    setDisplay(operation)
  }
  
  return (
    <div className="w-1/4 h-[500px] p-4 rounded-3xl bg-black">
      <div className="h-1/4 flex justify-around items-end text-white">
        <input
          type="text"
          className="bg-black border-none w-2/3 p2-5 text-5xl"
          defaultValue={display}
          id="display"
        />
        <Button onClick={() => clearDisplay()} id="clear" text="C" />
      </div>
      <div className="h-3/4 grid grid-cols-4 gap-1 items-center justify-items-center">
        <Button onClick={() => isOperator("+")} id="plus" text="+" />
        <Button onClick={() => isOperator("-")} id="minus" text="-" />
        <Button onClick={() => isOperator("/")} id="divide" text="/" />
        <Button onClick={() => isOperator("*")} id="multiply" text="*" />
        <Button onClick={() => insertChar(1)} id="num1" text={1} />
        <Button onClick={() => insertChar(2)} id="num2" text={2} />
        <Button onClick={() => insertChar(3)} id="num3" text={3} />
        <Button onClick={() => insertChar(4)} id="num4" text={4} />
        <Button onClick={() => insertChar(5)} id="num5" text={5} />
        <Button onClick={() => insertChar(6)} id="num6" text={6} />
        <Button onClick={() => insertChar(7)} id="num7" text={7} />
        <Button onClick={() => insertChar(8)} id="num8" text={8} />
        <Button onClick={() => insertChar(9)} id="num9" text={9} />
        <Button onClick={() => insertChar(0)} id="num0" text={0} />
        <Button onClick={() => insertChar(",")} id="comma" text="," />
        <Button onClick={() => mountOperation("=")} id="equal" text="=" />
      </div>
    </div>
  );
};
