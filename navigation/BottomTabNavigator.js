import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBarIcon from '../components/TabBarIcon'
import ExpensesScreen from '../screens/ExpensesScreen'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Expenses'

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) })

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Expenses"
        component={ExpensesScreen}
        options={{
          title: 'Expenses',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-cash" />,
        }}
      />
    </BottomTab.Navigator>
  )
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'Expenses':
      return 'Your spending'
  }
}
