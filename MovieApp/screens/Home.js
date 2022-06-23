import { View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { getFamilyMovies, getPopularMovies, getPopularTv, getUpcomingMovies } from '../services/services';
import { SliderBox } from "react-native-image-slider-box";
import MoviesList from '../components/MoviesList';


const HomePage = () => {
const dimensions=Dimensions.get('screen');
const [popularMovies,setPopularMovie]=React.useState('')
const [popularTv,setPopularTv]=React.useState('')
const [familyMovies,setFamilyMovies]=React.useState('')
const [error,setError]=React.useState(false);
const [movieImages,setMovieImages]=React.useState([]);

const getAllData=()=>{
  return Promise?.all([
    getUpcomingMovies?.(),
    getFamilyMovies?.(),
    getPopularMovies?.(),
    getPopularTv?.(),
  ])
}

  React.useEffect(()=>{

    getAllData?.().then(
      ([getUpcomingMovies,
        getFamilyMovies,
        getPopularMovies,
        getPopularTv,
        ])=>{
          setMovieImages(getUpcomingMovies);
          setFamilyMovies(getFamilyMovies);
          setPopularMovie(getPopularMovies);
          setPopularTv(getPopularTv);
    }).catch((err)=>setError(err))
  },[])

  const sliderData=movieImages?.map((res)=>{
    return `https://image.tmdb.org/t/p/w500`+res?.poster_path
  })

  return (
    <ScrollView>
    <View
      style={styles?.sliderContainer}>
     <SliderBox images={sliderData} sliderBoxHeight={dimensions?.height/1.5}
      autoplay={true} circleLoop={true}
      dotStyle={{height:0}}
      />
    </View>
    <View style={styles?.carousal}>
      <MoviesList title={'Popular Movies'} content={popularMovies} />
    </View>
    <View style={styles?.carousal}>
      <MoviesList title={'Popular Tv Shows'} content={popularTv} />
    </View>
    <View style={styles?.carousal}>
      <MoviesList title={'Family Movies'} content={familyMovies} />
    </View>
    </ScrollView>
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