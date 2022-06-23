import { View, Text } from 'react-native'
import React from 'react'

const Details = ({route,navigation}) => {
    const movieDetails=route?.params?.details
  return (
    <View>
      <Text>Details</Text>
    </View>
  )
}

export default Details