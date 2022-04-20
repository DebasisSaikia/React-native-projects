import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import CatList from "../components/CatList";
import Restaurant from "../components/Restaurant";

const catData = [
  {
    name: "Burger",
    icon: <FontAwesome5 name="hamburger" size={38} color="orange" />,
  },
  {
    name: "Cake",
    icon: <FontAwesome5 name="birthday-cake" size={38} color="orange" />,
  },
  {
    name: "Pasta",
    icon: <MaterialCommunityIcons name="pasta" size={38} color="orange" />,
  },
  {
    name: "Coke",
    icon: <FontAwesome5 name="hand-holding-water" size={38} color="orange" />,
  },
  {
    name: "Chicken",
    icon: <FontAwesome5 name="cloud-meatball" size={38} color="orange" />,
  },
  {
    name: "Coffee",
    icon: <FontAwesome5 name="coffee" size={38} color="orange" />,
  },
  {
    name: "Pizza",
    icon: <FontAwesome5 name="pizza-slice" size={38} color="orange" />,
  },
];

export default function HomeScreen() {
  const [term, setTerm] = React.useState("Burger");

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <Header />
      <Searchbar setTerm={setTerm} />
      <CatList categories={catData} setTerm={setTerm} term={term} />
      <Restaurant term={term} />
      <StatusBar />
    </SafeAreaView>
  );
}
