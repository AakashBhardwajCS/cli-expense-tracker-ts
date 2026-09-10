import fs from "fs";
import { parseCSV } from "./parser.js";
import { validateTransaction } from "./validator.js";
import { categorize } from "./categorizer.js";
import { generateReport } from "./reporter.js";
import dotenv from "dotenv"
dotenv.config()

const inputFile = process.argv[2] || "input.csv";
const outputFile = process.argv[3] || "report.json";
const csv = fs.readFileSync(inputFile, "utf8");
const rawTransactions = parseCSV(csv);

const transactions = [];

for (const [index, transaction] of rawTransactions.entries()) {
  const errors = validateTransaction(transaction);

  if (errors.length > 0) {
    console.error(`Row ${index + 2}: ${errors.join(", ")}`);
    continue;
  }

  transactions.push({
    ...transaction,
    amount: Number(transaction.amount),
    category: categorize(transaction.description)
  });
}
let totalIncome = Number(process.env.TOTAL_INCOME) || 0;
console.log(`Total Income: ${totalIncome}`);
const report = generateReport(totalIncome, transactions);

fs.writeFileSync(
  outputFile,
  JSON.stringify(report, null, 2)
);

console.log(`Report written to ${outputFile}`);