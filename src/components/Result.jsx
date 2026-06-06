import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Result({ resultInput }) {
  const resultCalculation = calculateInvestmentResults(resultInput);
  const initialInvestmentAmount = resultInput.initialInvestment;
  const resultArr = resultCalculation.map((res, i) => {
    const { year, interest, valueEndOfYear, annualInvestment } = res;
    const totalInterest =
      valueEndOfYear - annualInvestment * year - initialInvestmentAmount;
    const totalInvestmentAmount = valueEndOfYear - totalInterest;

    return (
      <tr key={i * 777}>
        <td>{year}</td>
        <td>{formatter.format(valueEndOfYear)}</td>
        <td>{formatter.format(interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(totalInvestmentAmount)}</td>
      </tr>
    );
  });

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>{resultArr}</tbody>
      </table>
    </>
  );
}
