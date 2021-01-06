import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Title, Caption } from "react-native-paper";

export const ProfileHeader=()=> {
  return (
    <View style={styles.userInfoSection}>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Avatar.Image
          source={{
            uri:
              "https://hosonhanvat.vn/wp-content/uploads/2020/03/onepiecesanji2.jpg",
          }}
          size={50}
        ></Avatar.Image>
        <View style={{ flexDirection: "column", marginLeft: 15 }}>
          <Title style={styles.title}>Nguyễn Viết Tiến</Title>
          <Caption style={styles.caption}>@tien.nv</Caption>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
});
