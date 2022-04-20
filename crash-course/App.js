import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <Header />
      <Searchbar />
      <StatusBar />
    </SafeAreaView>
  );
}
