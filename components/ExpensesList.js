import * as React from 'react'
import { MonoText } from './StyledText'
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native'
import Constants from 'expo-constants'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    description: 'Groceries',
    label: 'Food',
    amount: 55,
    date: '2020/03/28',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    description: 'Entertainment',
    label: 'Books',
    amount: 12000,
    date: '2020/03/25',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    description: 'Callaway golf clubs',
    label: 'Hobbies',
    amount: 5000,
    date: '2020/03/28',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baa',
    description: 'Groceries',
    label: 'Food',
    amount: 55,
    date: '2020/03/28',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63aa',
    description: 'Entertainment',
    label: 'Books',
    amount: 12000,
    date: '2020/03/25',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72aaa',
    description: 'Callaway golf clubs',
    label: 'Hobbies',
    amount: 5000,
    date: '2020/03/28',
  },
]

const getBackGroundForLabel = label => {
  switch (label) {
    case 'Food':
      return ['#234E52', '#B2F5EA']
    case 'Books':
      return ['#44337a', '#e9d8fd']
    case 'Hobbies':
      return ['#22543d', '#c6f6d5']
    default:
      return ['#153e75', '#ceedff']
  }
}

const LabelBadge = ({ label }) => {
  const [labelColor, labelBgColor] = getBackGroundForLabel(label)
  return (
    <Text style={{ ...styles.badge, backgroundColor: labelBgColor, color: labelColor, borderColor: labelBgColor }}>
      {label}
    </Text>
  )
}

const ExpenseCard = ({ description, label, amount, date }) => (
  <View style={styles.item}>
    <View style={styles.flex}>
      <LabelBadge label={label} />
      <Text>{date}</Text>
    </View>
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.amount}>$ {amount.toLocaleString()}</Text>
  </View>
)

export const ExpensesList = () => {
  // TODO: select expense by label
  // TODO: show total spending
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <ExpenseCard description={item.description} label={item.label} amount={item.amount} date={item.date} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  badge: {
    paddingRight: 5,
    paddingLeft: 5,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  description: {
    fontSize: 18,
    marginVertical: 8,
  },
  amount: {
    fontWeight: 'bold',
  },
})
