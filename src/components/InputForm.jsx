import React, { useState } from 'react';

const InputForm = ({ onCalculate }) => {
    const [initialAmount, setInitialAmount] = useState('');
    const [preTaxRate, setPreTaxRate] = useState('');
    const [taxScenarios, setTaxScenarios] = useState([{ federal: '', state: '', local: '' }]);

    const handleScenarioChange = (index, key, value) => {
        const newTaxScenarios = taxScenarios.map((scenario, i) => {
            if (i === index) {
                return { ...scenario, [key]: value };
            }
            return scenario;
        });
        setTaxScenarios(newTaxScenarios);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate(initialAmount, preTaxRate, taxScenarios);
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
            {taxScenarios.map((scenario, index) => (
                <div key={index}>
                    <h3>Taxes</h3>
                    <div>
                        <label>Federal Tax Rate (%):</label>
                        <input 
                            type="number" 
                            value={scenario.federal} 
                            onChange={(e) => handleScenarioChange(index, 'federal', e.target.value)} 
                        />
                    </div>
                    <div>
                        <label>State Tax Rate (%):</label>
                        <input 
                            type="number" 
                            value={scenario.state} 
                            onChange={(e) => handleScenarioChange(index, 'state', e.target.value)} 
                        />
                    </div>
                    <div>
                        <label>Local Tax Rate (%):</label>
                        <input 
                            type="number" 
                            value={scenario.local} 
                            onChange={(e) => handleScenarioChange(index, 'local', e.target.value)} 
                        />
                    </div>
            
                </div>
            ))}
            <button type="submit">Calculate</button>
        </form>
    );
};

export default InputForm;
