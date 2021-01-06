import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import {ProfileHeader} from "../components/ProfileHeader";
import {CustomHeader} from "../components/CustomHeader";
import { useState } from "react";
import { TouchableRipple, Switch } from "react-native-paper";

export const DataSavingScreen=({ navigation }:any)=> {
  const [isDataSaving, setIsDataSaving] = useState(false);
  const toggleDataSaving = () => {
    setIsDataSaving(!isDataSaving);
  };
  return (
    <View>
      <CustomHeader
        title="TRÌNH TIẾT KIỆM DỮ LIỆU"
        navigation={navigation}
      ></CustomHeader>
      <ProfileHeader></ProfileHeader>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: "#2337BC",
          padding: 10,
          margin: 16,
        }}
      >
        <Text style={{ textAlign: "center" }}>
          Khởi động tính năng này sẽ làm giảm kích thước hình ảnh, video và ngăn
          video phát tự động để sử dụng ít dữ liệu hơn
        </Text>
      </View>
      <TouchableRipple
        onPress={() => {
          toggleDataSaving();
        }}
      >
        <View style={styles.switchData}>
          <Text>Trình tiết kiệm dữ liệu</Text>
          <View pointerEvents="none">
            <Switch value={isDataSaving}></Switch>
          </View>
        </View>
      </TouchableRipple>
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
