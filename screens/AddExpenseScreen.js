import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as WebBrowser from 'expo-web-browser'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { RadioButton, TextInput, Button } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function AddExpensesScreen() {
  const [value, onChangeText] = React.useState('')
  const [checked, setChecked] = React.useState('Food')
  const [date, setDate] = React.useState(new Date())

  const submitForm = () => {
    // TODO:
    // show loader
    // validate
    // success
    // errror
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <TextInput mode="outlined" label="Description" onChangeText={(text) => onChangeText(text)} value={value} />
      <Text style={styles.formHeader}>Category</Text>
      <RadioButton.Group onValueChange={(value) => setChecked(value)} value={checked}>
        <RadioButton.Item label="Food" value="Food" />
        <RadioButton.Item label="Books" value="Books" />
        <RadioButton.Item label="Hobbies" value="Hobbies" />
      </RadioButton.Group>
      <Text style={styles.formHeader}>Date</Text>
      <DateTimePicker
        testID="dateTimePicker"
        timeZoneOffsetInMinutes={0}
        value={date}
        mode="date"
        is24Hour={true}
        display="default"
        onChange={(e, selectedDate) => setDate(selectedDate)}
      />
      <Button mode="contained" color="#ff1e56" onPress={submitForm}>
        Add expense
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    padding: 20,
  },
  formHeader: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
})
