import React, { useState } from "react";
import InputForm from "./components/InputForm";
import Results from "./components/Results";
import "./App.css";

const App = () => {
  const [results, setResults] = useState(null);

  const calculateAfterTaxReturn = (initialAmount, preTaxRate, taxScenarios) => {
    const initial = parseFloat(initialAmount);
    const preTax = parseFloat(preTaxRate) / 100;

    const newResults = taxScenarios.map((scenario) => {
      const federalTax = parseFloat(scenario.federal) / 100 || 0;
      const stateTax = parseFloat(scenario.state) / 100 || 0;
      const localTax = parseFloat(scenario.local) / 100 || 0;

      const totalTaxRate = federalTax + stateTax + localTax;
      const afterTaxRate = preTax * (1 - totalTaxRate);

      const finalAmount = initial * (1 + afterTaxRate);

      return {
        afterTaxRate: afterTaxRate * 100,
        finalAmount: finalAmount,
      };
    });

    setResults(newResults);
  };

  return (
    <div className="App">
      <h1>After-Tax Return Calculator</h1>
      <InputForm onCalculate={calculateAfterTaxReturn} />
      <Results results={results} />
    </div>
  );
};

export default App;
