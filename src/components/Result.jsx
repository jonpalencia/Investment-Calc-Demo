import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Result({ resultInput }) {
  const resultCalculation = calculateInvestmentResults(resultInput);

  const resultArr = resultCalculation.map((res, i) => {
    const { year, interest, valueEndOfYear, annualInvestment } = res;
    return (
      <tr key={i * 777}>
        <td>{year}</td>
        <td>{formatter.format(annualInvestment)}</td>
        <td>{formatter.format(interest)}</td>
        <td>{formatter.format(valueEndOfYear)}</td>
        <td>{formatter.format(resultInput.annualInvestment * year)}</td>
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
