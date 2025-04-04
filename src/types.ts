export interface Transaction {
  id: number;
  amount: number;
  category: string;
  description: string;
  is_income: boolean;
  date: string;
}

export interface FormData {
  amount: string;
  category: string;
  description: string;
  is_income: boolean;
  date: string;
}
