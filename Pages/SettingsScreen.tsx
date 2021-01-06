import * as React from "react";
import { Drawer } from "react-native-paper";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import {ProfileHeader} from "../components/ProfileHeader";
import {CustomHeader} from "../components/CustomHeader";
export const SettingsScreen=({ navigation }:any)=> {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="SETTINGS"
        isHome={true}
        navigation={navigation}
      ></CustomHeader>
      <ProfileHeader></ProfileHeader>
      <ScrollView>
        <Drawer.Section style={styles.drawerSection}>
          <Drawer.Item
            icon="account-settings"
            style={{ backgroundColor: "#ccc" }}
            label="Cài đặt"
            onPress={() => {
              navigation.navigate("SettingsDetail");
            }}
          ></Drawer.Item>
          <Drawer.Item
            icon="web-box"
            style={{ backgroundColor: "#ccc" }}
            label="Ngôn ngữ"
            onPress={() => {
              navigation.navigate("LanguageScreen");
            }}
          ></Drawer.Item>
          <Drawer.Item
            icon="file-code"
            style={{ backgroundColor: "#ccc" }}
            label="Trình tạo mã"
            onPress={() => {
              navigation.navigate("CreatedCodeScreen");
            }}
          ></Drawer.Item>
          <Drawer.Item
            icon="newspaper-variant-outline"
            style={{ backgroundColor: "#ccc" }}
            label="Trình tiết kiệm dữ liệu"
            onPress={() => {
              navigation.navigate("DataSavingScreen");
            }}
          ></Drawer.Item>
          <Drawer.Item
            icon="chart-line"
            style={{ backgroundColor: "#ccc" }}
            label="Thời gian sử dụng"
            onPress={() => {
              navigation.navigate("UsedTimeScreen");
            }}
          ></Drawer.Item>
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection} title="THÔNG BÁO">
          <Drawer.Item
            icon="bell-alert-outline"
            label="Cài đặt thông báo"
            onPress={() => {}}
          ></Drawer.Item>
          <Drawer.Item
            icon="message-text"
            label="Nhắn tin văn bản"
            onPress={() => {}}
          ></Drawer.Item>
          <Drawer.Item
            icon="cellphone-message"
            label="Bản xem trước tin nhắn"
            onPress={() => {}}
          ></Drawer.Item>
          <Drawer.Item
            icon="alarm-light-outline"
            label="Thông báo LED"
            onPress={() => {}}
          ></Drawer.Item>
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection} title="XEM THÊM">
          <Drawer.Item
            icon="television-guide"
            label="Lịch sử Watch"
            onPress={() => {}}
          ></Drawer.Item>
        </Drawer.Section>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
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
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },

  drawerSection: {
    marginTop: 15,
  },
});
