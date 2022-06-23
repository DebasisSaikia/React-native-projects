import { Pressable, StyleSheet } from 'react-native'
import { IconOutline } from "@ant-design/icons-react-native";
import React from 'react'

const PlayButton = () => {
  return (
    <Pressable style={styles?.button}>
      <IconOutline name="caret-right" color='#fff' size={30} />
    </Pressable>
  )
}

const styles=StyleSheet.create({
    button:{
        alignContent:'center',
        borderRadius:50,
        width: 50,
        padding:10,
        backgroundColor:'#4481FC',
        color: '#fff'
    }
})

export default PlayButton