import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
export const Avatar = ({ source, online }: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.user} source={source}></Image>
      {online && <View style={styles.userActive}></View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    position: "relative",
  },

  user: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userActive: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: "#4bcb1f",
    position: "absolute",
    bottom: -2,
    right: -2,
    borderWidth: 2,
    borderColor: "#fff",
  },
});
