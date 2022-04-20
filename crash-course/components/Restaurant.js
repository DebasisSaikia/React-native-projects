import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";
import useRestaurants from "../custom-hooks/useRestaurants";

const Restaurant = ({ term }) => {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();

  React.useEffect(() => {
    searchRestaurants(term);
  }, [term]);

  console.log(data);
  if (loading) return <ActivityIndicator size="large" marginVertical={30} />;
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
