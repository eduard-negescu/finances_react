import { useState, useEffect, ChangeEvent } from "react";
import api from "./api";
import { useTransactions } from "./hooks/useTransaction";
import { FormData } from "./types";
import Navbar from "./components/Navbar";
import TransactionTable from "./components/TransactionTable";
import TransactionForm from "./components/TransactionForm";

const defaultFormData = {
  amount: "",
  category: "",
  description: "",
  is_income: false,
  date: "",
};

const App = () => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const { transactions, fetchTransactions } = useTransactions();

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await api.post("/transactions/", formData);
    fetchTransactions();
    setFormData(defaultFormData);
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <TransactionForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
        <TransactionTable transactions={transactions} />
      </div>
    </div>
  );
};

export default App;
