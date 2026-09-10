import type { ImportedRow } from "./types";

export function validateTransaction(
  transaction: ImportedRow
): string[] {
  const errors: string[] = [];

  if (!transaction.date) {
    errors.push("Missing date");
  }

  if (!transaction.description) {
    errors.push("Missing description");
  }

  if (!transaction.amount) {
    errors.push("Missing amount");
  } else if (Number.isNaN(Number(transaction.amount))) {
    errors.push("Invalid amount");
  }

  return errors;
}