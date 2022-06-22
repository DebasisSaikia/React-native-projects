import React from 'react';
import { View } from 'react-native';
import HomePage from './screens/Home';


const App= () => {
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <HomePage/>
      </View>
  );
};

export default App;
