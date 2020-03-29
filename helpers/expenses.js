export function filterExpensesWithLabel(expenses, label) {
  if (!label) return expenses
  return expenses.filter((expense) => expense.label === label)
}
