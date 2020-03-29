import * as React from 'react'
import { Text, StyleSheet } from 'react-native'

const getBackGroundForLabel = (label) => {
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

export const LabelBadge = ({ label }) => {
  const [labelColor, labelBgColor] = getBackGroundForLabel(label)
  return (
    <Text style={{ ...styles.badge, backgroundColor: labelBgColor, color: labelColor, borderColor: labelBgColor }}>
      {label}
    </Text>
  )
}

const styles = StyleSheet.create({
  badge: {
    paddingRight: 5,
    paddingLeft: 5,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
})
