import React from "react";
import { Transaction } from "../types";

interface Props {
  transactions: Transaction[];
}

const TransactionTable: React.FC<Props> = ({ transactions }) => {
  return (
    <table className="table table-striped table-bordered table-hover mt-3">
      <thead>
        <tr>
          <th>Amount</th>
          <th>Category</th>
          <th>Description</th>
          <th>Income</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.amount}</td>
            <td>{transaction.category}</td>
            <td>{transaction.description}</td>
            <td>{transaction.is_income ? "Yes" : "No"}</td>
            <td>{transaction.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
