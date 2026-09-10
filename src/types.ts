export interface ImportedRow {
  date: string;
  description: string;
  amount: string;
}

export interface NormalizedTransaction {
  date: string;
  description: string;
  amount: number;
  category: string;
}

export interface Report {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
  byCategory: Record<string, number>;
  transactions: number;
}