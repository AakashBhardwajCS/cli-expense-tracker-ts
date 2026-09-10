import "dotenv/config";
import fs from "fs";
import { parseCSV } from "./parser";
import { validateTransaction } from "./validator";
import { categorize } from "./categorizer";
import { generateReport } from "./reporter";

import dotenv from "dotenv";
dotenv.config();

import type { NormalizedTransaction } from "./types";

const inputFile = process.argv[2] || "input.csv";
const outputFile = process.argv[3] || "report.json";

const csv = fs.readFileSync(inputFile, "utf8");

const rawTransactions = parseCSV(csv);

const transactions: NormalizedTransaction[] = [];

for (const [index, transaction] of rawTransactions.entries()) {
  const errors = validateTransaction(transaction);

  if (errors.length > 0) {
    console.error(
      `Row ${index + 2}: ${errors.join(", ")}`
    );

    continue;
  }

  const normalizedTransaction: NormalizedTransaction = {
    date: transaction.date,
    description: transaction.description,
    amount: Number(transaction.amount),
    category: categorize(transaction.description)
  };

  transactions.push(normalizedTransaction);
}

const totalIncome =
  Number(process.env.TOTAL_INCOME) || 0;

const report = generateReport(
  totalIncome,
  transactions
);

fs.writeFileSync(
  outputFile,
  JSON.stringify(report, null, 2)
);

console.log(`Report written to ${outputFile}`);