import * as React from "react";

import { Text, View, SafeAreaView,StyleSheet } from "react-native";
import {CustomHeader} from "../components/CustomHeader";
export const NotificationScreen=({ navigation }:any)=> {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="THÔNG BÁO"
        isHome={true}
        navigation={navigation}
      ></CustomHeader>
      <View style={styles.screenContainer}>
        <View></View>
        <View></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
screenContainer:{
  flex: 1
}
})