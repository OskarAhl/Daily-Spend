import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { LabelBadge } from './LabelBadge'

export const ExpenseCard = ({ description, label, amount, date }) => (
  <View style={styles.item}>
    <View style={styles.flex}>
      <LabelBadge label={label} />
      <Text style={{ color: '#718096' }}>{date}</Text>
    </View>
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.amount}>$ {amount.toLocaleString()}</Text>
  </View>
)
const styles = StyleSheet.create({
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
