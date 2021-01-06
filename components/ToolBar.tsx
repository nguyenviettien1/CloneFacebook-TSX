import * as React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Avatar } from "./Avatar";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const ToolBar = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.row}>
          <Avatar source={require("../assets/ronaldo.jpg")}></Avatar>
          <TextInput
            placeholder="Bạn đang nghĩ gì?"
            style={styles.input}
          ></TextInput>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.row}>
          <View style={styles.menu}>
            <Ionicons name="ios-videocam" size={22} color="#f44337"></Ionicons>
            <View style={styles.menuText}>Live</View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.menu}>
            <MaterialIcons
              name="photo-size-select-actual"
              size={20}
              color="#4caf50"
            ></MaterialIcons>
            <View style={styles.menuText}>Photo</View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.menu}>
            <MaterialCommunityIcons
              name="video-plus"
              size={22}
              color="#4caf50"
            ></MaterialCommunityIcons>
            <View style={styles.menuText}>Room</View>
          </View>
        </View>
      </View>
      <View style={styles.bottomDivider}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 92,
  },

  row: {
    backgroundColor: "#fff",
    width: "100%",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 11,
    paddingRight: 11,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: "100%",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 8,
    paddingRight: 8,
  },
  divider: {
    backgroundColor: "#f0f0f0",
    width: "100%",
    height: 0.5,
  },
  menu: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 42,
  },
  menuText: {
    paddingLeft: 11,
    fontWeight: 500,
    fontSize: 12,
  },
  separator: {
    backgroundColor: "#f0f0f0",
    width: 1,
    height: 26,
  },
  bottomDivider: {
    backgroundColor: "#f0f2f5",
    width: "100%",
    height: 9,
  },
});
