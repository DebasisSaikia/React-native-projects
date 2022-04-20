import { FlatList, View } from "react-native";
import React from "react";
import Categories from "./Categories";

const CatList = ({ categories, setTerm, term }) => {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <Categories
              name={item?.name}
              icon={item?.icon}
              index={index}
              active={item?.name == term}
              onPress={() => setTerm(item?.name)}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category?.name}
      />
    </View>
  );
};

export default CatList;
