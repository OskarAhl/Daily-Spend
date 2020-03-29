import * as React from 'react'
import { MonoText } from './StyledText'
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import Constants from 'expo-constants'
import { ExpenseCard } from './ExpenseCard'
import { getExpenses } from '../actions/expenses'
import { filterExpensesWithLabel } from '../helpers/expenses'

const ExpensesList = ({ getExpensesList, isExpensesLoading, expenses, filter }) => {
  React.useEffect(() => {
    getExpensesList()
  }, [])

  if (isExpensesLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

  // Using Reselect from Redux would be a more efficient way to deal with derived state
  const filteredExpenses = filterExpensesWithLabel(expenses, filter)
  if (!filteredExpenses.length) {
    return (
      <View style={styles.container}>
        <Text>You have no current expenses 🎉</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredExpenses}
        renderItem={({ item }) => (
          <ExpenseCard description={item.description} label={item.label} amount={item.amount} date={item.date} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    padding: 20,
  },
})

const mapStateToProps = (state) => ({
  filter: state.filter,
  expenses: state.expenses,
  isExpensesLoading: state.isExpensesLoading,
})

const mapDispatchToProps = (dispatch) => ({
  getExpensesList: () => dispatch(getExpenses()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList)
