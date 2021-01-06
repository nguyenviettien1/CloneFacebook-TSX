import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { TouchableRipple, Switch, Drawer } from "react-native-paper";
import {ProfileHeader} from "../components/ProfileHeader";
import {CustomHeader} from "../components/CustomHeader";

export const UsedTimeScreen=({ navigation }:any) =>{
  const data = [
    { name: "T2", thoigian: 110 },
    { name: "T3", thoigian: 123 },
    { name: "T4", thoigian: 164 },
    { name: "T5", thoigian: 97 },
    { name: "T6", thoigian: 79 },
    { name: "T7", thoigian: 136 },
    { name: "CN", thoigian: 211 },
  ];
  const [isToggleUpdate, setIsToggleUpdate] = useState(false);
  const toggleUpdate = () => {
    setIsToggleUpdate(!isToggleUpdate);
  };
  return (
    <View>
      <CustomHeader
        title="THỜI GIAN SỬ DỤNG"
        navigation={navigation}
      ></CustomHeader>
      <ProfileHeader></ProfileHeader>
      
      <View>
        <TouchableRipple
          onPress={() => {
            toggleUpdate();
          }}
        >
          <View style={styles.switchData}>
            <View style={{ flexDirection: "column", width: 0, flexGrow: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Cập nhật hàng tuần
              </Text>
              <Text style={{ fontSize: 13 }}>
                Tải bản cập nhật hàng tuần để biết cách bạn quản lý thời gian
                của mình trên App
              </Text>
            </View>
            <View pointerEvents="none">
              <Switch value={isToggleUpdate}></Switch>
            </View>
          </View>
        </TouchableRipple>
      </View>
      <View style={{ margin: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Nhật ký hoạt động
        </Text>
        <Text style={{ fontSize: 13 }}>
          Xem bạn đang dành thời gian vào việc gì, chẳng hạn như bày tỏ cảm xúc,
          bình luận và đăng bài viết
        </Text>
        <Drawer.Item
          icon="format-list-bulleted"
          label="Xem nhật ký hoạt động"
          onPress={() => {}}
        ></Drawer.Item>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  switchData: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
