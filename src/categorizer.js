const rules = {
  food: ["swiggy", "zomato", "restaurant", "food"],
  transport: ["uber", "ola", "metro", "fuel"],
  shopping: ["amazon", "flipkart", "myntra"],
  entertainment: ["netflix", "spotify", "movie"]
};

export function categorize(description) {
  const text = description.toLowerCase();

  for (const [category, keywords] of Object.entries(rules)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      return category;
    }
  }

  return "other";
}