import * as React from "react";

import { Text, View, SafeAreaView } from "react-native";
import {CustomHeader} from "../components/CustomHeader";

export const HomeScreenDetail=({ navigation }:any) =>{
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="HOME DETAIL" navigation={navigation}></CustomHeader>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Home Detail Screen</Text>
      </View>
    </SafeAreaView>
  );
}
