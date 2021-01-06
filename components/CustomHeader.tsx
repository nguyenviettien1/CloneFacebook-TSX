import * as React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";

export const CustomHeader =({ title, isHome, navigation }:any) =>{
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        height: 50,
        paddingTop: Platform.OS === "android" ? 35 : 0,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        {isHome ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 5 }}
              source={require("../assets/menu.png")}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              style={{ height: 20, width: 20, marginLeft: 5 }}
              source={require("../assets/back.png")}
              resizeMode="contain"
            ></Image>
            <Text>Back</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flex: 1.5,
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center" }}>{title}</Text>
      </View>
      <View style={{ flex: 1 }}></View>
    </SafeAreaView>
  );
}
