export function validateTransaction(transaction) {
  const errors = [];

  if (!transaction.date || Number.isNaN(Date.parse(transaction.date))) {
    errors.push("invalid date");
  }

  if (!transaction.description) {
    errors.push("missing description");
  }

  const amount = Number(transaction.amount);

  if (!Number.isFinite(amount) || amount === 0) {
    errors.push("Invalid amount");
  }

  return errors;
}