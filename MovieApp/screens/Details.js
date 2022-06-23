import { Text, ScrollView, StyleSheet, Image, Dimensions, ActivityIndicator, View } from 'react-native'
import React from 'react'
import { getDetails } from '../services/services'
import PlayButton from '../components/PlayButton';

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
    <View style={styles?.container}>
    {!loaded && <ActivityIndicator size={'large'} color={'blue'} />}
     {loaded && 
     <>
     <Image 
     style={styles?.image} 
     source={
         {uri:`https://image.tmdb.org/t/p/w500`+details?.poster_path}} 
     resizeMode="cover"
      />
       <View>
            <PlayButton/>
        </View>
      <Text style={styles?.title}>{details?.title}</Text>
      <View>
        {details?.genres && (
            <View style={styles?.genres}>
                {details?.genres?.map((genre,ind)=>{
                    return(
                        <Text style={styles?.genre} key={ind}>{genre?.name}</Text>
                    )
                })}
            </View>
        )}
        <Text>{details?.vote_average}</Text>
      </View>
     <Text style={styles?.overview}>{details?.overview}</Text>
    
      </>
     } 
    </View>

    </ScrollView>
  )
}

const styles=StyleSheet.create({
    image:{
        height: dimension/2.5,
        width: '100%'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:10,
        marginBottom:10
    },
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    genres:{
        flexDirection:'row',
        alignItems:'center',
    },
    genre:{
        marginRight:10,
        fontWeight:'700'
    },
    overview:{
        padding: 10,
        fontWeight:'600'
    }
})

export default Details