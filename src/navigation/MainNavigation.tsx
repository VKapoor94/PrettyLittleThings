import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddtoCartScreen from '../screens/AddtoCartScreen/AddtoCartScreen';
const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          options={{title: 'Home'}}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{title: 'Cart'}}
          name="AddtoCartScreen"
          component={AddtoCartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
