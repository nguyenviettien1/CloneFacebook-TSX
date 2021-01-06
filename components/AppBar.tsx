import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>facebook</Text>
      <View style={styles.row}>
        <View style={styles.button}>
          <Ionicons name="search" size={29} color="black"></Ionicons>
        </View>
        <View style={styles.button}>
          <MaterialCommunityIcons
            name="facebook-messenger"
            size={29}
            color="black"
          ></MaterialCommunityIcons>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 58,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 11,
    paddingRight: 11,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#3a86e9",
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: -0.3,
  },
  row: {
    flexDirection: "row",
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 16,
  },
});
