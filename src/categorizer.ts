export function categorize(description: string): string {
  const text = description.toLowerCase();

  if (
    text.includes("uber") ||
    text.includes("ola") ||
    text.includes("metro")
  ) {
    return "transport";
  }

  if (
    text.includes("amazon") ||
    text.includes("flipkart") ||
    text.includes("shopping")
  ) {
    return "shopping";
  }

  if (
    text.includes("food") ||
    text.includes("restaurant") ||
    text.includes("swiggy") ||
    text.includes("zomato")
  ) {
    return "food";
  }

  return "other";
}