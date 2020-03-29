import { put, takeEvery, all, call } from 'redux-saga/effects'
import {
  requestAddExpense,
  addExpenseRequestSuccess,
  requestGetExpenses,
  getExpensesRequestSuccess,
} from '../actions/expenses'

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

export function* addExpenseAsync(addExpenseAction) {
  try {
    yield put(requestAddExpense())
    // Mock API delay
    yield delay(1500)
    yield put(addExpenseRequestSuccess(addExpenseAction.expense))
  } catch (error) {
    // TODO: handle potential API error here
  }
}

export function* getExpenseAsync() {
  try {
    yield put(requestGetExpenses())
    // Mock API delay
    yield delay(1500)
    yield put(getExpensesRequestSuccess([]))
  } catch (error) {
    // TODO: handle potential API error here
  }
}

export function* watchAddExpense() {
  yield takeEvery('ADD_EXPENSE', addExpenseAsync)
}

export function* watchGetExpense() {
  yield takeEvery('GET_EXPENSE', getExpenseAsync)
}

export default function* rootSaga() {
  yield all([watchAddExpense(), watchGetExpense()])
}
