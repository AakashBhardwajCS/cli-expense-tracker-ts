import type { ImportedRow } from "./types";

export function parseCSV(content: string): ImportedRow[] {
  const lines = content.trim().split("\n");

  if (lines.length === 0 || !lines[0]) {
    throw new Error("CSV content is empty");
  }

  const headers = lines[0]
    .split(",")
    .map(header => header.trim());

  return lines.slice(1).map(line => {
    const values = line
      .split(",")
      .map(value => value.trim());

    return {
      date: values[headers.indexOf("date")] ?? "",
      description: values[headers.indexOf("description")] ?? "",
      amount: values[headers.indexOf("amount")] ?? ""
    };
  });
}