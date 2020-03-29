import * as React from 'react'
import { Text, StyleSheet } from 'react-native'
import { labels } from '../constants/Labels'
import Colors from '../constants/Colors'

const getBackGroundForLabel = (label) => {
  switch (label) {
    case labels.food:
      return [Colors.darkGreen, Colors.teal]
    case labels.rent:
      return [Colors.purple, Colors.pink100]
    case labels.fun:
      return [Colors.darkGreen500, Colors.green]
    case labels.other:
      return [Colors.blue, Colors.blue100]
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
