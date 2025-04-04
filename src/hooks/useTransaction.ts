import { Transaction } from "../types";
import { useState } from "react";
import api from "../api";

export const useTransactions = () => { 
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    const response = await api.get<Transaction[]>("/transactions");
    setTransactions(response.data);
  };

  return { transactions, fetchTransactions };
};
