import * as React from "react";
import { View, Image, Button, Text } from "react-native";
import {ProfileHeader} from "../components/ProfileHeader";
import {CustomHeader} from "../components/CustomHeader";
export const CreatedCodeScreen=({ navigation }:any)=> {
  return (
    <View>
      <CustomHeader title="TRÌNH TẠO MÃ" navigation={navigation}></CustomHeader>
      <ProfileHeader></ProfileHeader>
      <View style={{ alignItems: "center", margin: 15 }}>
        <Image
          style={{ flex: 1, height: 330, width: 330, borderRadius: 15 }}
          source={require("../assets/code.jpg")}
          resizeMode="contain"
        ></Image>
      </View>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: "#7CE3C4",
          padding: 10,
          margin: 16,
        }}
      >
        <Text style={{ textAlign: "center" }}>
          Mã 84389 là mã của bạn. Mã này sẽ thay đổi trong vòng 60 phút. Đề nghị
          kiểm tra lại mã xem đã được xác thực hay chưa
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button onPress={() => {}} title="Kiểm tra"></Button>
      </View>
    </View>
  );
}
