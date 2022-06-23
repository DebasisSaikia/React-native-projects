import { Text, ScrollView, StyleSheet, Image, Dimensions, ActivityIndicator } from 'react-native'
import React from 'react'
import { getDetails } from '../services/services'

const dimension=Dimensions?.get('screen').height;

const Details = ({route,navigation}) => {
    // const movieDetails=route?.params?.details
    const movieId=route?.params?.details?.id
    const [details,setDetails]=React.useState('')
    const [loaded,setLoaded]=React.useState(false);

    React.useEffect(()=>{
        getDetails(movieId).then((movie)=>{
            setDetails(movie);
            setLoaded(true);
        })
    },[movieId])

  return (
    <ScrollView>
        {!loaded && <ActivityIndicator size={'large'} color={'blue'} />}
     {loaded && 
     <Image 
     style={styles?.image} 
     source={
         {uri:`https://image.tmdb.org/t/p/w500`+details?.poster_path}} 
     resizeMode="cover"
      />
     } 
    </ScrollView>
  )
}

const styles=StyleSheet.create({
    image:{
        height: dimension/2,
    }
})

export default Details