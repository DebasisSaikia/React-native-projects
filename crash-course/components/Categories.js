import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { shadowElevation } from "../common/styles";

const Categories = ({ name, icon, index, active, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View
        style={[
          style.container,
          style.shadowElevation,
          index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
          active ? { backgroundColor: "#2c3e50" } : { backgroundColor: "#fff" },
        ]}
      >
        {icon}
        <Text style={active ? { color: "#fff" } : { color: "#111" }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Categories;

const style = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginVertical: 15,
    backgroundColor: "#fff",
    // marginHorizontal: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  shadowElevation,
});
