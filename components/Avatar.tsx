import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
export const Avatar = ({ source }: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.user} source={source} />
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
});
