import * as React from 'react'
import { MonoText } from './StyledText'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Constants from 'expo-constants'
import { ExpenseCard } from './ExpenseCard'
import { setFilter } from '../actions/expenses'
import { labels } from '../constants/Labels'
import { LabelBadge } from './LabelBadge'
import { filterExpensesWithLabel } from '../helpers/expenses'

const ExpensesList = ({ setFilter, expenses, filter }) => {
  const [filterLabel, setFilterLabel] = React.useState('')
  // Using Reselect from Redux would be a more efficient way to deal with derived state
  const filteredExpenses = filterExpensesWithLabel(expenses, filter)

  React.useEffect(() => {
    setFilter(filterLabel)
  }, [filterLabel])

  const sumSpending = filteredExpenses.reduce((acc, curr) => {
    return acc + curr.amount
  }, 0)

  const handleFilterLabel = (label) => {
    if (label === filterLabel) setFilterLabel('')
    else setFilterLabel(label)
  }

  return (
    <View style={styles.container}>
      <View style={styles.badgeContainer}>
        {Object.values(labels).map((label) => {
          const isActive = label === filterLabel

          return (
            <TouchableOpacity
              style={{ ...styles.label, backgroundColor: isActive ? '#6435c9' : null }}
              key={label}
              onPress={() => handleFilterLabel(label)}
            >
              <Text style={{ ...styles.labelText, color: isActive ? '#fff' : null }}>{label}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
      <Text style={styles.totalHeader}>
        Total: <Text style={{ color: '#E53E3E' }}>${sumSpending.toLocaleString()}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    paddingRight: 20,
    paddingLeft: 20,
  },
  totalHeader: {
    marginTop: Constants.statusBarHeight,
    fontSize: 18,
  },
  badgeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  label: {
    marginRight: 5,
    padding: 8,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
  },
  labelText: {
    fontSize: 18,
  },
})

const mapStateToProps = (state) => ({
  expenses: state.expenses,
  filter: state.filter,
})

const mapDispatchToProps = (dispatch) => ({
  setFilter: (label) => dispatch(setFilter(label)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList)
