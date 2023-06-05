import React from "react";

function Result(props) {
  const { data } = props;

  const calculateMonthlyPayment = () => {
    const loanAmount = data.loanAmount;
    const interestRate = data.interestRate / 1200;
    const loanTerm = data.loanTerm * 12;
    const monthlyPayment =
      (loanAmount * interestRate) /
      (1 - Math.pow(1 / (1 + interestRate), loanTerm));
    return monthlyPayment.toFixed(2);
  };

  const monthlyPayment = calculateMonthlyPayment();

  return (
    <div>
      <h4>Loan Summary</h4>
      <p>Home Value: ${data.homeValue}</p>
      <p>Down Payment: ${data.downPayment}</p>
      <p>Loan Amount: ${data.loanAmount}</p>
      <p>Loan Term: {data.loanTerm} years</p>
      <p>Interest Rate: {data.interestRate}%</p>
      <p>Monthly Payment: ${monthlyPayment}</p>
    </div>
  );
}

export default Result;