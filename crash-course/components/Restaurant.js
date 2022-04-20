import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import useRestaurants from "../custom-hooks/useRestaurants";
import RestItem from "./ResItem";

const Restaurant = ({ term }) => {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();

  React.useEffect(() => {
    searchRestaurants(term);
  }, [term]);

  if (loading) return <ActivityIndicator size="large" marginVertical={30} />;
  return (
    <View style={style.container}>
      <Text style={style.header}>Top Restaurant</Text>
      <FlatList
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Restaurant", { id: item.id })}
          >
            <RestItem restaurant={item} />
          </TouchableOpacity>
        )}
      />
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
