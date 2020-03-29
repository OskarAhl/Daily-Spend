const initialState = {
  url: '',
  isExpensesLoading: false,
  addExpenseStatus: '',
  error: false,
  expenses: [],
  filter: '',
}

export default function expenseReducer(state = initialState, action) {
  switch (action.type) {
    // TODO: handle error response
    case 'REQUEST_GET_EXPENSES':
      return { ...state, isExpensesLoading: true }
    case 'REQUEST_GET_EXPENSES_SUCCEEDED':
      return { ...state, isExpensesLoading: false, expenses: [...action.expenseResponse] }
    case 'REQUEST_ADD_EXPENSE':
      return { ...state, addExpenseStatus: 'loading' }
    case 'REQUEST_ADD_EXPENSE_SUCCEEDED':
      return { ...state, addExpenseStatus: 'success', expenses: [...state.expenses, action.expenseResponse] }
    case 'RESET_ADD_EXPENSE_STATUS':
      return { ...state, addExpenseStatus: '' }
    case 'SET_FILTER':
      return { ...state, filter: action.label }
    default:
      return state
  }
}
