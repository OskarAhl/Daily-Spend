import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import ExpensesList from '../components/ExpensesList'
import FilterExpenses from '../components/FilterExpenses'

const AddExpenseIcon = () => {
  const navigation = useNavigation()

  return (
    <AntDesign
      onPress={() => {
        navigation.navigate('Add expense')
      }}
      name={'pluscircle'}
      size={50}
      style={styles.addExpenseIcon}
      color="#ff1e56"
      borderRadius={55}
    />
  )
}

export default function ExpensesScreen() {
  return (
    <View style={styles.container}>
      <FilterExpenses />
      <ExpensesList />
      <AddExpenseIcon />
    </View>
  )
}

ExpensesScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  addExpenseIcon: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    zIndex: 10,
  },
})
