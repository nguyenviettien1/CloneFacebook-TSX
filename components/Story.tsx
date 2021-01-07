import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Avatar } from "./Avatar";
export const Story = () => {
  return (
    <View>
      <View style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 11 }}
        >
          <View style={styles.card}>
            <Image
              style={styles.cardStory}
              source={require("../assets/rutanbi.jpg")}
            ></Image>
            <View style={styles.cardUser}>
              <AntDesign name="plus" size={24} color="#1777f2"></AntDesign>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.text}>Thêm vào tin</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.cardStory}
              source={require("../assets/story2.jpg")}
            ></Image>
            <View style={styles.cardUser}>
              <Avatar source={require("../assets/pewpew.png")}></Avatar>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.text}>Pew Pew</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardStory}
              source={require("../assets/story-ronaldo.jpg")}
            ></Image>
            <View style={styles.cardUser}>
              <Avatar source={require("../assets/ronaldo.jpg")}></Avatar>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.text}>Cris. Ronaldo</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardStory}
              source={require("../assets/story-viruss.jpg")}
            ></Image>
            <View style={styles.cardUser}>
              <Avatar source={require("../assets/viruss.jpg")}></Avatar>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.text}>Đặng Tiến Hoàng</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardStory}
              source={require("../assets/story1.jpg")}
            ></Image>
            <View style={styles.cardUser}>
              <Avatar source={require("../assets/me.jpg")}></Avatar>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.text}>Nguyễn Viết Tiến</Text>
            </View>
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
    height: 192,
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    width: 106,
    height: 170,
    position: "relative",
    marginRight: 8,
  },
  cardStory: {
    width: "100%",
    height: 170,
    borderRadius: 12,
  },
  cardUser: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 39,
    height: 39,
    alignItems: "center",
    justifyContent: "center",
  },
  cardFooter: {
    position: "absolute",
    width: "100%",
    bottom: 12,
    left: 9,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  bottomDivider: {
    backgroundColor: "#f0f2f5",
    width: "100%",
    height: 9,
  },
});
