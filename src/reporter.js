export function generateReport(totalIncome, transactions) {
  let totalExpenses = 0;

  const byCategory = {};

  for (const transaction of transactions) {
    const amount = Number(transaction.amount);

    if (amount > 0) {
      totalIncome += amount;
    } else {
      totalExpenses += Math.abs(amount);
    }

    const category = transaction.category;

    byCategory[category] =
      (byCategory[category] || 0) + Math.abs(amount);
  }

  console.log(totalIncome, totalExpenses);

  return {
    totalIncome,
    totalExpenses,
    balance: totalIncome - totalExpenses,
    byCategory,
    transactions: transactions.length
  };
}