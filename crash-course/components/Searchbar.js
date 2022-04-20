import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { shadowElevation } from "../common/styles";

const Searchbar = ({ setTerm }) => {
  const [input, setInput] = React.useState("");

  const handleEditing = () => {
    if (!input) return;
    setTerm(input);
    setInput("");
  };
  return (
    <View style={[style.container, style.shadowElevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        style={style.input}
        placeholder="Search For Restaurent"
        value={input}
        onChangeText={(text) => setInput(text)}
        onEndEditing={handleEditing}
      />
    </View>
  );
};

export default Searchbar;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
  },
  shadowElevation,
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});
