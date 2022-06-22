import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import React from 'react'
import { getPopularMovies, getUpcomingMovies } from '../services/services';
import { SliderBox } from "react-native-image-slider-box";



const HomePage = () => {
const dimensions=Dimensions.get('screen');
const [popularMovies,setPopularMovie]=React.useState('')
const [error,setError]=React.useState(false);
const [movieImages,setMovieImages]=React.useState([]);

  React.useEffect(()=>{
    getUpcomingMovies?.().then((movies)=>{
      setMovieImages(movies)
      console.log('movies', movies)
    }).catch((err)=>{
      setError(err)
    })
    getPopularMovies?.().then((movies)=>{
      setPopularMovie(movies)
      console.log('moviesP', movies)
    }).catch((err)=>{
      setError(err)
    })
  },[])

  const sliderData=movieImages?.map((res,ind)=>{
    return `https://image.tmdb.org/t/p/w500`+res?.poster_path
  })

  return (
    <>
    <View
      style={styles?.sliderContainer}>
     <SliderBox images={sliderData} sliderBoxHeight={dimensions?.height/1.5}
      autoplay={true} circleLoop={true}
      dotStyle={{height:0}}
      />
    </View>

    <View style={styles?.carousal}>
     <FlatList data={popularMovies} 
     renderItem={({item})=><Text>{item?.title}</Text>}
      keyExtractor={item=>item?.id}
      horizontal={true}
      />
    </View>
    </>
  )
}

const styles=StyleSheet.create({
  sliderContainer:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  carousal:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  }
})

export default HomePage