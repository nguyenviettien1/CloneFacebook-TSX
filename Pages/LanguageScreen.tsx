import * as React from "react";
import { View, SafeAreaView,FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import {ProfileHeader} from "../components/ProfileHeader";
import {CustomHeader} from "../components/CustomHeader";
import {RadioButtonLanguage} from "../components/RadioButtonLanguage";
export const LanguageScreen=({ navigation }:any)=> {
  const [value, setValue] = React.useState("vietnamese");
  const language = [
    {id:1,label: "Việt Nam", value:"vietnam"},
    {id:2,label: "Tiếng Anh", value:"tienganh"},
    {id:3,label: "Tiếng Trung", value:"tiengtrung"},
    {id:4,label: "Tiếng TBN", value:"taybannha"},
    {id:5,label: "Brazil", value:"brazil"},
    {id:6,label: "Mexico", value:"mexico"},
    {id:7,label: "Thái Lan", value:"thai"},
    {id:8,label: "Hàn Quốc", value:"han"},
    {id:9,label: "Nhật Bản", value:"nhat"},
    {id:10,label: "Đức", value:"duc"},
    {id:11,label: "Pháp", value:"phap"},
    {id:12,label: "Nga", value:"nga"},
    {id:13,label: "Bỉ", value:"bi"},
    {id:14,label: "Hà Lan", value:"halan"},
  ]
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="NGÔN NGỮ" navigation={navigation}></CustomHeader>
      <ProfileHeader></ProfileHeader>
      <ScrollView>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <FlatList
          data={language}
          renderItem={({ item }) => (
            <RadioButtonLanguage language={item}></RadioButtonLanguage>
          )}
          keyExtractor={(item) => `${item.id}`}
          
        ></FlatList>

          
        </RadioButton.Group>
      </ScrollView>
    </SafeAreaView>
  );
}
