import React from "react";

const Results = ({ results }) => {
    if (!results) return null;

    const formatCurrency = (value) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(value);
    };

    return (
        <div>
            <h2>Results</h2>
            {results.map((result, index) => (
                <div key={index}>
                    <p>After-Tax Return: {result.afterTaxRate.toFixed(2)}%</p>
                    <p>Final Amount After Taxes: {formatCurrency(result.finalAmount)}</p>
                </div>
            ))}
        </div>
    );
};

export default Results;
