import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton text={"Delivery"} bgColor={"black"} textColor={"#fff"} />
      <HeaderButton
        text={"Pickup"}
        bgColor={"transparent"}
        textColor={"#111"}
      />
    </View>
  );
};

export default Header;

const HeaderButton = ({ text, bgColor, textColor }) => (
  <TouchableOpacity
    style={{
      backgroundColor: bgColor,
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
  >
    <Text style={{ color: textColor, fontSize: 15, fontWeight: "700" }}>
      {text}
    </Text>
  </TouchableOpacity>
);
