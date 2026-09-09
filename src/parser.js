export function parseCSV(content) {
  const lines = content.trim().split("\n");
  const headers = lines[0].split(",").map(h => h.trim());

  return lines.slice(1).map(line => {
    const values = line.split(",").map(v => v.trim());

    return Object.fromEntries(
      headers.map((header, i) => [header, values[i]])
    );
  });
}