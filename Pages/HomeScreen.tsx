import * as React from "react";
import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AppBar } from "../components/AppBar";
import { ToolBar } from "../components/ToolBar";
export const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content"></StatusBar>
      <View style={styles.container}>
        <ScrollView>
          <AppBar></AppBar>
          <ToolBar></ToolBar>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
