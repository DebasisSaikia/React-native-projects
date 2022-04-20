import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Restaurant = () => {
  return (
    <View style={style.container}>
      <Text style={style.header}>Top Restaurant</Text>
    </View>
  );
};

export default Restaurant;

const style = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    flex: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});
