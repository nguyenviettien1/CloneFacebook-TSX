import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar } from "./Avatar";

export const Users = () => {
  return (
    <View>
      <View style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 11 }}
        >
          <TouchableOpacity style={styles.room}>
            <MaterialCommunityIcons
              name="video-plus"
              size={26}
              color="#e141fc"
            ></MaterialCommunityIcons>
            <Text style={styles.text}>Tạo phòng</Text>
          </TouchableOpacity>
          <View style={styles.user}>
            <Avatar
              source={require("../assets/rutanbi.jpg")}
              online={true}
            ></Avatar>
          </View>
          <View style={styles.user}>
            <Avatar source={require("../assets/me.jpg")} online={true}></Avatar>
          </View>
          <View style={styles.user}>
            <Avatar
              source={require("../assets/viruss.jpg")}
              online={true}
            ></Avatar>
          </View>
          <View style={styles.user}>
            <Avatar source={require("../assets/pewpew.png")}></Avatar>
          </View>
          <View style={styles.user}>
            <Avatar source={require("../assets/ronaldo.jpg")}></Avatar>
          </View>
          <View style={styles.user}>
            <Avatar source={require("../assets/taylorswift.jpg")}></Avatar>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomDivider}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 58,
    flexDirection: "row",
    alignItems: "center",
  },
  room: {
    width: 115,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#82b1ff",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 12,
  },
  text: {
    paddingLeft: 6,
    color: "#1777f2",
    fontSize: 12,
  },
  user: {
    marginRight: 13,
  },
  bottomDivider: {
    backgroundColor: "#f0f2f5",
    width: "100%",
    height: 9,
  },
});
