import React from 'react';
import { View } from 'react-native';
import HomePage from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './screens/Details';

const Stack = createNativeStackNavigator();

const App= () => {
  
  return (
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>  
  );
};

export default App;
