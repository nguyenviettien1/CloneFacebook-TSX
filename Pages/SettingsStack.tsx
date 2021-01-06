import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {SettingsScreen} from "./SettingsScreen";
import {SettingsScreenDetail} from "./SettingsScreenDetail";
import {LanguageScreen} from "./LanguageScreen";
import {DataSavingScreen }from "./DataSavingScreen";
import {UsedTimeScreen} from "./UsedTimeScreen";
import {CreatedCodeScreen} from "./CreatedCodeScreen";
const StackSetting = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});

export const SettingsStack=()=> {
  return (
    <StackSetting.Navigator initialRouteName="Settings">
      <StackSetting.Screen
        name="Settings"
        component={SettingsScreen}
        options={navOptionHandler}
      />
      <StackSetting.Screen
        name="LanguageScreen"
        component={LanguageScreen}
        options={navOptionHandler}
      />
      <StackSetting.Screen
        name="SettingsDetail"
        component={SettingsScreenDetail}
        options={navOptionHandler}
      />
      <StackSetting.Screen
        name="DataSavingScreen"
        component={DataSavingScreen}
        options={navOptionHandler}
      />
      <StackSetting.Screen
        name="UsedTimeScreen"
        component={UsedTimeScreen}
        options={navOptionHandler}
      />
      <StackSetting.Screen
        name="CreatedCodeScreen"
        component={CreatedCodeScreen}
        options={navOptionHandler}
      />
    </StackSetting.Navigator>
  );
}
