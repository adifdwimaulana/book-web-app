export function format(dateString: string): string {
  if (!dateString) return "Invalid Date";

  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
}
