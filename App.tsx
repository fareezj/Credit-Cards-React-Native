/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashboardScreen} from './app/screens/dashboard/dashboardScreen';
import {CardDetailsScreen} from './app/screens/card-details/cardDetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: 'Credit Cards !',
            headerStyle: {
              backgroundColor: '#FFBF00',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="CardDetails"
          component={CardDetailsScreen}
          options={{
            title: 'Card Details',
            headerStyle: {
              backgroundColor: '#FFBF00',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackTitle: 'Back',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
