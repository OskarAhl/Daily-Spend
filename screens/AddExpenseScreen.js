import * as React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as WebBrowser from 'expo-web-browser'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { RadioButton, Button } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { addExpense, resetAddExpenseStatus } from '../actions/expenses'
import { labels } from '../constants/Labels'
import Colors from '../constants/Colors'

function AddExpensesScreen({ addExpense, addExpenseStatus, resetAddExpenseStatus }) {
  // TODO: use Formik
  // validate fields
  // show fields error/success
  // handle dates properly with moment

  const [description, setDescription] = React.useState('')
  const [amount, setAmount] = React.useState('')
  const [checked, setChecked] = React.useState('Food')
  const [date, setDate] = React.useState(new Date())

  const navigation = useNavigation()

  const submitForm = () => {
    if (!amount || !description || !date) return

    addExpense({
      id: Date.now().toString(),
      description,
      amount: +amount,
      label: checked,
      date: date.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    })
  }

  React.useEffect(() => {
    if (addExpenseStatus === 'success') {
      resetAddExpenseStatus()
      navigation.navigate('Root')
    }
  }, [addExpenseStatus])

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ ...styles.formHeader, paddingBottom: 15 }}>Description</Text>
        <TextInput style={styles.textInput} onChangeText={setDescription} value={description} />
        <Text style={{ ...styles.formHeader, paddingBottom: 15 }}>($) Amount</Text>
        <TextInput style={styles.textInput} keyboardType="number-pad" onChangeText={setAmount} value={amount} />
        <Text style={styles.formHeader}>Category</Text>
        <RadioButton.Group onValueChange={(value) => setChecked(value)} value={checked}>
          {Object.values(labels).map((label) => (
            <RadioButton.Item label={label} value={label} key={label} />
          ))}
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
      </ScrollView>
      <View style={{ padding: 20 }}>
        <Button loading={addExpenseStatus === 'loading'} mode="contained" color={Colors.main} onPress={submitForm}>
          Add expense
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  formHeader: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
})

const mapStateToProps = (state) => {
  return {
    addExpenseStatus: state.addExpenseStatus,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense)),
  resetAddExpenseStatus: () => dispatch(resetAddExpenseStatus()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddExpensesScreen)
