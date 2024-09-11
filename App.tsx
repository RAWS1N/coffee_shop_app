import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import {DetailsScreen,FavoriteScreen,CardScreen,PaymentScreen,OrderHistoryScreen } from './src/screens'
import TabNavigator from './src/navigators/tabNavigator'


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Tab' component={TabNavigator} options={{animation : 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen name='Details' component={DetailsScreen} options={{animation : 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen name='Payment' component={PaymentScreen} options={{animation : 'slide_from_bottom'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App