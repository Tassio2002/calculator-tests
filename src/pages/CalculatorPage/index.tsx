import { Calculator } from "../../components/Calculator";

export const CalculatorPage = () => {
  return (
    <main className="w-screen h-screen flex flex-col justify-around items-center bg-gradient-to-br from-blue-700 via-blue-800 to-gray-800">
      <h1 id="calculator" className="text-2xl text-white font-bold">Calculator</h1>
      <Calculator/>
    </main>
  );
};
