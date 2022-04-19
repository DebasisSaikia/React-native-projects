import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Header from "../components/Header";
import { View } from "react-native";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
      <View style={{ backgroundColor: "#fff", paddingVertical: 13 }}>
        <Header />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};

export default Home;
