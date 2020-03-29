import * as React from 'react'
import { MonoText } from './StyledText'
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import Constants from 'expo-constants'
import { ExpenseCard } from './ExpenseCard'
import { getExpenses } from '../actions/expenses'

const ExpensesList = ({ expenses, getExpensesList, isExpensesLoading }) => {
  React.useEffect(() => {
    getExpensesList()
  }, [])

  if (isExpensesLoading) return <Text>Loading...</Text>

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={expenses}
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
  },
})

const mapStateToProps = (state) => ({
  expenses: state.expenses,
  isExpensesLoading: state.isExpensesLoading,
})

const mapDispatchToProps = (dispatch) => ({
  getExpensesList: () => dispatch(getExpenses()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList)
