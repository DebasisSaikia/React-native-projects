import React, { PureComponent } from 'react';
import { View , TouchableOpacity, StyleSheet, Image} from 'react-native';

class Card extends PureComponent {
    render() {
        const {item}=this.props;
        return (
            <TouchableOpacity style={styles?.cardContainer}>
                <Image style={styles?.image} 
                source={{uri:`https://image.tmdb.org/t/p/w500`+item?.poster_path}} 
                resizeMode="cover" />
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