import React, { useState } from "react";

const InputForm = ({ onCalculate }) => {
    const [initialAmount, setInitialAmount] = useState("");
    const [preTaxRate, setPreTaxRate] = useState("");
    const [federalTaxRate, setFederalTaxRate] = useState("");
    const [stateTaxRate, setStateTaxRate] = useState("");
    const [localTaxRate, setLocalTaxRate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate(initialAmount, preTaxRate, federalTaxRate, stateTaxRate, localTaxRate);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Initial Amount:</label>
                <input 
                    type="number" 
                    value={initialAmount} 
                    onChange={(e) => setInitialAmount(e.target.value)} 
                />
            </div>
            <div>
                <label>Rate of Return (%):</label>
                <input 
                    type="number" 
                    value={preTaxRate} 
                    onChange={(e) => setPreTaxRate(e.target.value)} 
                />
            </div>
            <div>
                <h3>Taxes</h3>
                <div>
                    <label>Federal Tax Rate (%):</label>
                    <input 
                        type="number" 
                        value={federalTaxRate} 
                        onChange={(e) => setFederalTaxRate(e.target.value)} 
                    />
                </div>
                <div>
                    <label>State Tax Rate (%):</label>
                    <input 
                        type="number" 
                        value={stateTaxRate} 
                        onChange={(e) => setStateTaxRate(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Local Tax Rate (%):</label>
                    <input 
                        type="number" 
                        value={localTaxRate} 
                        onChange={(e) => setLocalTaxRate(e.target.value)} 
                    />
                </div>
            </div>
            <button type="submit">Calculate</button>
        </form>
    );
};

export default InputForm;
