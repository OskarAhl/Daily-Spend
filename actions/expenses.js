export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
})

export const getExpenses = () => ({
  type: 'GET_EXPENSE',
})

export const requestAddExpense = () => {
  return { type: 'REQUEST_ADD_EXPENSE' }
}

export const addExpenseRequestSuccess = (expenseResponse) => {
  return { type: 'REQUEST_ADD_EXPENSE_SUCCEEDED', expenseResponse }
}

export const requestGetExpenses = () => {
  return { type: 'REQUEST_GET_EXPENSES' }
}

export const getExpensesRequestSuccess = (expenseResponse) => {
  return { type: 'REQUEST_GET_EXPENSES_SUCCEEDED', expenseResponse }
}

export const resetAddExpenseStatus = () => ({
  type: 'RESET_ADD_EXPENSE_STATUS',
})

export const setFilter = (label) => ({
  type: 'SET_FILTER',
  label,
})
