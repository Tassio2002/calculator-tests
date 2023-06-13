import { Routes, Route } from "react-router-dom";
import { LoginBox } from "./components/LoginBox";
import { CalculatorPage } from "./pages/CalculatorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginBox />} />
      <Route path="calculator" element={<CalculatorPage />} />
    </Routes>
  );
}

export default App;
