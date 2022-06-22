/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { getPopularMovies } from './services/services';


const App= () => {
  const [movie,setMovie]=React.useState('')
  const [error,setError]=React.useState(false);

  React.useEffect(()=>{
    getPopularMovies?.().then((movies)=>{
      setMovie(movies && movies?.[0]?.original_title)
      console.log('movies', movies?.[0])
    }).catch((err)=>{
      setError(err)
    })
  },[])
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>{movie}</Text>
      {error && <Text>Error: {error??error}</Text>}
      
    </View>
    
  );
};

export default App;
