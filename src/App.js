import "./App.css";
import React, { useState } from "react";

function App() {
  const [currency, setCurrency] = useState("USD");
  const [portfolioAmount, setPortfolioAmount] = useState("");
  const [riskPercentage, setRiskPercentage] = useState("");
  const [stopLossPercentage, setStopLossPercentage] = useState("");

  // Calculated values
  const positionSizeUSD = (
    (portfolioAmount * (riskPercentage / 100)) /
    (stopLossPercentage / 100)
  ).toFixed(2);
  const amountRiskedUSD = (portfolioAmount * (riskPercentage / 100)).toFixed(2);

  return (
    <div className="container">
      <h2>POSITION SIZING CALCULATOR</h2>

      <div className="field-group">
        <label>Select your FIAT currency:</label>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="USD">USD</option>
          {/* Add other currency options as needed */}
        </select>
      </div>
      <div>
        <label>Insert your Total Portfolio Amount:</label>
        <input
          type="number"
          value={portfolioAmount}
          onChange={(e) => setPortfolioAmount(e.target.value)}
        />
        <span>{currency}</span>
      </div>
      <div>
        <label>Insert your RISK PERCENTAGE (without % symbol):</label>
        <br />
        <input
          type="number"
          value={riskPercentage}
          onChange={(e) => setRiskPercentage(e.target.value)}
        />
      </div>
      <div>
        <label>Insert your STOP LOSS PERCENTAGE (without % symbol):</label>
        <input
          type="number"
          value={stopLossPercentage}
          onChange={(e) => setStopLossPercentage(e.target.value)}
        />
      </div>

      <div>
        <label>TOTAL PORTFOLIO AMOUNT:</label>
        <span>
          {portfolioAmount} {currency}
        </span>
      </div>
      <div>
        <label>AMOUNT INVESTED IN TRADE (Position Size):</label>
        <span>
          {positionSizeUSD} {currency}
        </span>
      </div>
      <div>
        <label>AMOUNT RISKED IF STOP LOSS GETS HIT:</label>
        <span>
          {amountRiskedUSD} {currency}
        </span>
      </div>
    </div>
  );
}

export default App;
