import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Avatar } from "./Avatar";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export const Feed = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.row}>
            <Avatar source={require("../assets/muhangxom.jpg")}></Avatar>
            <View style={{ paddingLeft: 10 }}>
              <Text style={styles.user}>Mụ hàng xóm</Text>
              <View style={styles.row}>
                <Text style={styles.time}>1 giờ trước</Text>
                <Entypo name="dot-single" size={12} color="#747476"></Entypo>
                <Entypo name="globe" size={10} color="#747476"></Entypo>
              </View>
            </View>
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={15}
            color="#222121"
          ></Entypo>
        </View>
        <Text style={styles.post}>
          Thần đèn cho tới 3 điều ước lận. Đừng keo kiệt thế, ông Thần ạ!!
        </Text>
        <Image
          style={styles.photo}
          source={require("../assets/pos2.jpg")}
        ></Image>
        <View style={styles.footer}>
          <View style={styles.footercount}>
            <View style={styles.row}>
              <View style={styles.iconcount}>
                <AntDesign name="like1" size={10} color="#fff"></AntDesign>
              </View>
              <Text style={styles.textcount}>3.935</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textcount}>798 bình luận</Text>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.footMenu}>
            <TouchableOpacity style={styles.button}>
              <View style={styles.icon}>
                <AntDesign name="like2" size={20} color="#424040"></AntDesign>
              </View>
              <Text>Thích</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={20}
                  color="#424040"
                ></MaterialCommunityIcons>
              </View>
              <Text>Bình luận</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="share-outline"
                  size={20}
                  color="#424040"
                ></MaterialCommunityIcons>
              </View>
              <Text>Chia sẻ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomDivider}></View>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.row}>
            <Avatar source={require("../assets/viruss.jpg")}></Avatar>
            <View style={{ paddingLeft: 10 }}>
              <Text style={styles.user}>Đặng Tiến Hoàng</Text>
              <View style={styles.row}>
                <Text style={styles.time}>9 phút trước</Text>
                <Entypo name="dot-single" size={12} color="#747476"></Entypo>
                <Entypo name="globe" size={10} color="#747476"></Entypo>
              </View>
            </View>
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={15}
            color="#222121"
          ></Entypo>
        </View>
        <Text style={styles.post}>
          1/1/2021 khai trương Destiny Wine House của anh Giang thịt bò siêu
          ngon ạaaaa !! Ps : ma thuật bởi bé thy và bé gấu :))
        </Text>
        <Image
          style={styles.photo}
          source={require("../assets/pos1.jpg")}
        ></Image>
        <View style={styles.footer}>
          <View style={styles.footercount}>
            <View style={styles.row}>
              <View style={styles.iconcount}>
                <AntDesign name="like1" size={10} color="#fff"></AntDesign>
              </View>
              <Text style={styles.textcount}>833</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textcount}>39 bình luận</Text>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.footMenu}>
            <TouchableOpacity style={styles.button}>
              <View style={styles.icon}>
                <AntDesign name="like2" size={20} color="#424040"></AntDesign>
              </View>
              <Text>Thích</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={20}
                  color="#424040"
                ></MaterialCommunityIcons>
              </View>
              <Text>Bình luận</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="share-outline"
                  size={20}
                  color="#424040"
                ></MaterialCommunityIcons>
              </View>
              <Text>Chia sẻ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 11,
    paddingRight: 11,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  user: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#222121",
  },
  time: {
    fontSize: 9,
    color: "#747476",
  },
  post: {
    fontSize: 12,
    color: "#222121",
    lineHeight: 16,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 11,
    paddingRight: 11,
  },
  photo: {
    marginTop: 9,
    width: "100%",
    height: 300,
  },
  footer: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 11,
    paddingRight: 11,
  },
  footercount: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 0,
    paddingRight: 0,
  },
  iconcount: {
    backgroundColor: "#1878f3",
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },
  textcount: {
    fontSize: 11,
    color: "#424040",
  },
  separator: {
    backgroundColor: "#f9f9f9",
    width: "100%",
    height: 1,
  },
  footMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 0,
    paddingRight: 0,
  },
  button: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 6,
  },
  text: {
    fontSize: 12,
    color: "#424040",
  },
  bottomDivider: {
    backgroundColor: "#f0f2f5",
    width: "100%",
    height: 9,
  },
});
