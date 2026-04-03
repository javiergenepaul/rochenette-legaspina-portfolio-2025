export function filterByCategory<T extends { categories: string[] }>(
  items: T[],
  category: string
): T[] {
  return items.filter((item) => item.categories.includes(category));
}
