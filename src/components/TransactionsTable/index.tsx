import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {

  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(res => res.json())
      .then(data => console.log(data))
  }, []);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento</td>
            <td className="deposit">R$12.000</td>
            <td>Dev</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>aluguel</td>
            <td className="withdraw">-R$2.000</td>
            <td>Casa</td>
            <td>23/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}