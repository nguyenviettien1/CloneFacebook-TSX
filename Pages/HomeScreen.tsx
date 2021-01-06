import * as React from "react";

import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import {CustomHeader} from "../components/CustomHeader";
export const HomeScreen =({ navigation }:any)=> {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="HOME"
        isHome={true}
        navigation={navigation}
      ></CustomHeader>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Home Screen</Text>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => {
            navigation.navigate("HomeDetail");
          }}
        >
          <Text>Go Home Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
