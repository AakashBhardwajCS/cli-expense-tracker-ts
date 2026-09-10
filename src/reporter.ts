import type {
  NormalizedTransaction,
  Report
} from "./types";

export function generateReport(
  totalIncome: number,
  transactions: NormalizedTransaction[]
): Report {
  let totalExpenses = 0;

  const byCategory: Record<string, number> = {};

  for (const transaction of transactions) {
    const amount = transaction.amount;

    if (amount > 0) {
      totalIncome += amount;
    } else {
      totalExpenses += Math.abs(amount);
    }

    const category = transaction.category;

    byCategory[category] =
      (byCategory[category] || 0) + Math.abs(amount);
  }

  return {
    totalIncome,
    totalExpenses,
    balance: totalIncome - totalExpenses,
    byCategory,
    transactions: transactions.length
  };
}