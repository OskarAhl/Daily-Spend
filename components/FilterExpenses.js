import * as React from 'react'
import { MonoText } from './StyledText'
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import Constants from 'expo-constants'
import { ExpenseCard } from './ExpenseCard'
import { getExpenses } from '../actions/expenses'

const ExpensesList = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Filters</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
