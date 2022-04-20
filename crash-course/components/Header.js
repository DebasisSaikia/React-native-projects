import { View, Text } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={{ paddingHorizontal: 25, paddingVertical: 5 }}>
      <Text style={{ fontWeight: "700", fontSize: 20 }}>Grab Your</Text>
      <Text style={{ fontWeight: "400", fontSize: 15 }}>decilious food</Text>
    </View>
  );
};

export default Header;
