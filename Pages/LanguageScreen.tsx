import * as React from "react";
import { View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import {ProfileHeader} from "../components/ProfileHeader";
import {CustomHeader} from "../components/CustomHeader";
export const LanguageScreen=({ navigation }:any)=> {
  const [value, setValue] = React.useState("vietnamese");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="NGÔN NGỮ" navigation={navigation}></CustomHeader>
      <ProfileHeader></ProfileHeader>
      <ScrollView>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <View>
            <RadioButton.Item label="Việt Nam" value="vietnamese" />
          </View>
          <View>
            <RadioButton.Item label="Tiếng Anh" value="english" />
          </View>
          <View>
            <RadioButton.Item label="Espanyol" value="espanyol" />
          </View>
          <View>
            <RadioButton.Item label="Trung Quốc" value="trungquoc" />
          </View>
          <View>
            <RadioButton.Item label="Pháp" value="phap" />
          </View>
          <View>
            <RadioButton.Item label="Hàn" value="han" />
          </View>
          <View>
            <RadioButton.Item label="Nhật" value="nhat" />
          </View>
          <View>
            <RadioButton.Item label="Hà Lan" value="halan" />
          </View>
          <View>
            <RadioButton.Item label="Bồ Đào Nha" value="bodaonha" />
          </View>
          <View>
            <RadioButton.Item label="Thái Lan" value="thailan" />
          </View>
          <View>
            <RadioButton.Item label="Đức" value="duc" />
          </View>
          <View>
            <RadioButton.Item label="Nam Phi" value="namphi" />
          </View>
          <View>
            <RadioButton.Item label="Nga" value="nga" />
          </View>
          <View>
            <RadioButton.Item label="Ecuador" value="ecuador" />
          </View>
          <View>
            <RadioButton.Item label="Mexico" value="mexico" />
          </View>
          <View>
            <RadioButton.Item label="Hungary" value="hungary" />
          </View>
          <View>
            <RadioButton.Item label="Myanmar" value="myanmar" />
          </View>
          <View>
            <RadioButton.Item label="Brazil" value="brazil" />
          </View>
        </RadioButton.Group>
      </ScrollView>
    </SafeAreaView>
  );
}
