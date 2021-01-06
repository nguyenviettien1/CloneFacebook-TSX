import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {CategoryListItem} from "../components/CategoryListItem";
import {CustomHeader} from "../components/CustomHeader";

export const WatchScreen=({ navigation }:any)=> {
  const list = [
    {
      id: 1,
      name: "Mũ",
      sr: `${require("../assets/hat.png")}`,
      desc: "Mũ len giữ ấm vào những ngày đông lạnh giá",
    },
    {
      id: 2,
      name: "Quà",
      sr: `${require("../assets/presents.png")}`,
      desc: "Lũ trẻ luôn mong có được vào ngày giáng sinh",
    },
    {
      id: 3,
      name: "Ông già noel",
      sr: `${require("../assets/santa-claus.png")}`,
      desc: "Nhân vật hư cấu không có thật",
    },
    {
      id: 4,
      name: "Người tuyết",
      sr: `${require("../assets/snowman.png")}`,
      desc: "Lũ trẻ rất thích lặn hình người tuyết để trang trí",
    },
    {
      id: 5,
      name: "Cây thông",
      sr: `${require("../assets/christmas-tree.png")}`,
      desc: "Loài cây biểu tượng của giáng sinh",
    },
    {
      id: 6,
      name: "Cây thông noel",
      sr: `${require("../assets/christmastree.png")}`,
      desc: "Loài cây biểu tượng của giáng sinh",
    },
    {
      id: 7,
      name: "Cây thông và quà",
      sr: `${require("../assets/christmas-tree2.png")}`,
      desc: "Loài cây biểu tượng của giáng sinh",
    },
    {
      id: 8,
      name: "Kẹo ô",
      sr: `${require("../assets/candy-cane.png")}`,
      desc: "Loài kẹo biểu tượng của giáng sinh",
    },
    {
      id: 9,
      name: "Tất noel",
      sr: `${require("../assets/christmas-sock.png")}`,
      desc: "Hay treo đầu giường mong có quà trong đó",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="HOME"
        isHome={true}
        navigation={navigation}
      ></CustomHeader>
      <ScrollView>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <CategoryListItem category={item}></CategoryListItem>
          )}
          keyExtractor={(item) => `${item.id}`}
          contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
        ></FlatList>
      </ScrollView>
    </SafeAreaView>
  );
}
