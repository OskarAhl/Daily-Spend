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

function AddExpensesScreen({ addExpense, addExpenseStatus, resetAddExpenseStatus }) {
  // TODO: use Formik
  // validate fields
  // show fields error/success
  // handle dates properly

  const [description, setDescription] = React.useState('Test')
  const [amount, setAmount] = React.useState('55')
  const [checked, setChecked] = React.useState('Food')
  const [date, setDate] = React.useState(new Date())

  const navigation = useNavigation()

  const submitForm = () => {
    addExpense({ id: Date.now().toString(), description, amount: +amount, label: checked, date: '15/23/2018' })
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
        <Text style={styles.formHeader}>Description</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={setDescription}
          value={description}
        />
        <Text style={styles.formHeader}>Amount</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          keyboardType="number-pad"
          onChangeText={setAmount}
          value={amount}
        />
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
      </ScrollView>
      <View style={{ padding: 20 }}>
        <Button loading={addExpenseStatus === 'loading'} mode="contained" color="#ff1e56" onPress={submitForm}>
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
    backgroundColor: '#fafafa',
  },
  formHeader: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
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
