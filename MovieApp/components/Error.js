import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
class Error extends React.PureComponent {
    
    render() {
        const {errTxt1,errTxt2}=this.props;
        return (
            <View style={styles?.container}>
                <Text style={styles?.text}>{errTxt1}</Text>
                <Text style={styles?.text} >{errTxt2}</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'red',
        fontWeight:'bold',
    }
})

export default Error;