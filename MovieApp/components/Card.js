import React, { PureComponent } from 'react';
import { TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import PlaceholderImg from '../assets/images/placeholder.png'
class Card extends PureComponent {
    render() {
        const {item}=this.props;
        return (
            <TouchableOpacity style={styles?.cardContainer}>
                <Image style={styles?.image} 
                source={
                    {uri:`https://image.tmdb.org/t/p/w500`+item?.poster_path || PlaceholderImg}} 
                resizeMode="cover"
                 />
                {!item?.poster_path && <Text>{item?.title}</Text> }
            </TouchableOpacity>
        );
    }
}

const styles=StyleSheet.create({
    cardContainer:{
        padding: 5,
        position:'relative',
    },
    image:{
        height: 200,
        width: 120,
        borderRadius:20
    }
})

export default Card;