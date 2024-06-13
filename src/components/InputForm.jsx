import React, { useState } from "react";

const InputForm = ({ onCalculate }) => {
    const [formData, setFormData] = useState({
        initialAmount: "",
        preTaxRate: "",
        federalTaxRate: "",
        stateTaxRate: "",
        localTaxRate: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { initialAmount, preTaxRate, federalTaxRate, stateTaxRate, localTaxRate } = formData;
        onCalculate(initialAmount, preTaxRate, federalTaxRate, stateTaxRate, localTaxRate);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Initial Amount:</label>
                <input 
                    type="number" 
                    name="initialAmount"
                    value={formData.initialAmount} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Rate of Return (%):</label>
                <input 
                    type="number" 
                    name="preTaxRate"
                    value={formData.preTaxRate} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <h3>Taxes</h3>
                <div>
                    <label>Federal Tax Rate (%):</label>
                    <input 
                        type="number" 
                        name="federalTaxRate"
                        value={formData.federalTaxRate} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>State Tax Rate (%):</label>
                    <input 
                        type="number" 
                        name="stateTaxRate"
                        value={formData.stateTaxRate} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>Local Tax Rate (%):</label>
                    <input 
                        type="number" 
                        name="localTaxRate"
                        value={formData.localTaxRate} 
                        onChange={handleChange} 
                    />
                </div>
            </div>
            <button type="submit">Calculate</button>
        </form>
    );
};

export default InputForm;
