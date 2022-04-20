import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Header from "../components/Header";
import { ScrollView, View } from "react-native";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import FoodItem, { localRestaurants } from "../components/FoodItem";

const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

const Home = () => {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  const [city, setCity] = React.useState("San Francisco");
  const [activeTab, setActiveTab] = React.useState("Delivery");

  //   const getRestaurantsFromYelp = () => {
  //     const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

  //     const apiOptions = {
  //       headers: {
  //         Authorization: `Bearer ${YELP_API_KEY}`,
  //       },
  //     };

  //     return fetch(yelpUrl, apiOptions)
  //       .then((res) => res?.json())
  //       .then((json) => {
  //         setRestaurantData(
  //           //   json?.businesses?.filter((business) =>
  //           //     business?.transactions?.includes(activeTab?.toLowerCase())
  //           //   )
  //           json?.businesses
  //         );
  //         console.log(json);
  //       });
  //   };

  //   React.useEffect(() => {
  //     getRestaurantsFromYelp();
  //   }, []);
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
        <FoodItem restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
