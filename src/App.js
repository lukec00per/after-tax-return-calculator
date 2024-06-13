import React, { useState } from "react";
import InputForm from "./components/InputForm";
import Results from "./components/Results";
import "./App.css";

const App = () => {
    const [results, setResults] = useState(null);

    const calculateAfterTaxReturn = (initialAmount, preTaxRate, federalTaxRate, stateTaxRate, localTaxRate) => {
        const initial = parseFloat(initialAmount);
        const preTax = parseFloat(preTaxRate) / 100;

        const federalTax = parseFloat(federalTaxRate) / 100 || 0;
        const stateTax = parseFloat(stateTaxRate) / 100 || 0;
        const localTax = parseFloat(localTaxRate) / 100 || 0;

        const totalTaxRate = federalTax + stateTax + localTax;
        const afterTaxRate = preTax * (1 - totalTaxRate);

        const finalAmount = initial * (1 + afterTaxRate);

        const newResults = [{
            afterTaxRate: afterTaxRate * 100,
            finalAmount: finalAmount,
        }];

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
