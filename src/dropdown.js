import React, { useState } from 'react';

function DropdownExample() {
  const [loanAmount, setLoanAmount] = useState();
  const [loanTenure, setLoanTenure] = useState();
  const [interestRate, setInterestRate] = useState();
  const [emi, setEMI] = useState();
  const [totalInterest, setTotalInterest] = useState();
  const [totalServiceCost, setTotalServiceCost] = useState();
  const [debtservicecoverageratio, setDebtServiceCoverageRatio] = useState();

  const [profitaftertax, setProfitAfterTax] = useState();
  const [interestexpenses, setInterestExpenses] = useState();
  const [depreciationexpenses, setDepreciationExpenses] = useState();


  const [dscr, setDSCR] = useState(0);


const T= parseFloat(profitaftertax)*100000;
const E= parseFloat(interestexpenses)*100000;
const D= parseFloat(depreciationexpenses)*100000;
const totalaccurals = parseFloat( T + D);
    
  
  const calculateLoan = () => {
    const P = parseFloat(loanAmount);
    const N = parseFloat(loanTenure) * 12;
    const R = parseFloat(interestRate) / (12 * 100);
    const emiValue =(P+((P*R*N))) /(loanTenure)
  
    
      // (P * R * Math.pow(1 + R^ N)) / Math.pow((1 + R)^ N - 1);
    const totalInterestValue = ((loanAmount * R * N) / 12)* 2;
    
    const totalServiceCostValue =parseFloat( (P+((P*R*N))) / (loanTenure))+ parseFloat( interestexpenses );
// Total Service Cost = Principal + Interest Expenses + Depreciation Expenses + Total Accruals - Profit After Tax

    const NetOperatingIncome = parseFloat(profitaftertax + interestexpenses);
    const dscrValue = NetOperatingIncome - interestexpenses;


    const DebtService = (loanAmount * interestRate / 100) / [1 - (1 + interestRate / 100 * 12)^(12 * loanTenure) ]
    //DSCR = (Profit After Tax + Interest Expenses + Depreciation Expenses + Total Accruals) / (Principal / Loan Repayment Years)

    

    // Interest Outgo = (Principal x Interest Expenses) + Depreciation Expenses + Total Accruals - Profit after Tax

    const TotalDebtService = parseFloat(emiValue +   totalInterest)
    // const debtservicecoverageratio = (5 + 5) / 2
    const debtServiceCoverageRatioValue = parseFloat((NetOperatingIncome + depreciationexpenses) / DebtService)
    
    setDSCR(dscrValue);
    setEMI(emiValue.toFixed(2));
    setTotalInterest(totalInterestValue.toFixed(2));
    setTotalServiceCost(totalServiceCostValue.toFixed(2));
    setDebtServiceCoverageRatio((debtServiceCoverageRatioValue/10000).toFixed(2))
  };

  return (
    <div>
      <h2>Term Loan Calculator</h2>
      <label>
        Loan Amount
        <input
          type="text"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </label>
      <br />
      <label>
        Loan Tenure (in years)
        <input
          type="text"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
        />
      </label>
      <br />
      <label>
        Interest Rate (in %)
        <input
          type="text"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </label>
      <br/>
      <label>
      Profit after Tax
        <input
          type="text"
          value={profitaftertax}
          onChange={(e) => setProfitAfterTax(e.target.value)}
        />
      </label>
      <br/>
      <label>
      Interest Expenses
        <input
          type="text"
          value={interestexpenses}
          onChange={(e) => setInterestExpenses(e.target.value)}
        />
      </label>
      <br/>
      <label>
      Depreciation Expenses
        <input
          type="text"
          value={depreciationexpenses}
          onChange={(e) => setDepreciationExpenses(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Total Accurals: <span>{totalaccurals}</span>
      </label>
      <br />
      <button onClick={calculateLoan}>Calculate</button>
      <br />
      <label>
        EMI: <span>{emi}</span>
      </label>
      <br />
      <label>
        Interest Outgo: <span>{totalInterest}</span>
      </label>
      <br />
      <label>
        Total Service Cost: <span>{totalServiceCost}</span>
      </label>
      <br />
      <label>
        DSCR: <span>{debtservicecoverageratio}</span>
      </label>
      
    </div>
  );
}

export default DropdownExample;
