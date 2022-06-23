import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from './Card';
class MoviesList extends React.PureComponent {
    render() {
    const {title,content, navigation}=this.props
        return (
            <View style={styles?.movieList}>
                <View>
                    <Text style={styles?.text}>{title}</Text>
                </View>
            <View>
                <FlatList data={content} 
                    renderItem={({item})=><Card item={item} navigation={navigation} />}
                    keyExtractor={item=>item?.id}
                    horizontal={true}
                 />
            </View>
            </View>
            
        );
    }
}

const styles=StyleSheet.create({
    text:{
        fontSize:30,
        fontWeight:'bold',
        paddingBottom:20,
        paddingTop:10,
        paddingLeft:10,
        color:'rgba(0,0,0,0.8)'
    },
    movieList:{
        marginTop:25
    }
})

export default MoviesList;