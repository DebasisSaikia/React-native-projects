import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Header from "../components/Header";
import { ScrollView, View } from "react-native";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import FoodItem from "../components/FoodItem";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
      <View
        style={{
          backgroundColor: "#fff",
          paddingVertical: 13,
          paddingHorizontal: 10,
        }}
      >
        <Header />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <FoodItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
