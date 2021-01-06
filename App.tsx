import * as React from "react";
import { Text, View, Image, StyleSheet,Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useState } from "react";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  TouchableRipple,
  Switch,
  Drawer,
} from "react-native-paper";
import {NotificationScreen} from "./Pages/NotificationScreen";
import {SettingsStack} from "./Pages/SettingsStack";
import {WatchScreen} from "./Pages/WatchScreen";
import { HomeScreen } from "./Pages/HomeScreen";
function TestScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? require("./assets/home.png")
              : require("./assets/home-black.png");
          } else if (route.name === "Settings") {
            iconName = focused
              ? require("./assets/tools.png")
              : require("./assets/tools-black.png");
          } else if (route.name === "Notification") {
            iconName = focused
              ? require("./assets/notification.png")
              : require("./assets/notification-black.png");
          } else if (route.name === "Watch") {
            iconName = focused
              ? require("./assets/film.png")
              : require("./assets/film-black.png");
          }
          return (
            <Image
              source={iconName}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Watch" component={WatchScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}
const DrawerFull = createDrawerNavigator();

function CustomDrawerContent(props:any) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri:
                    "https://hosonhanvat.vn/wp-content/uploads/2020/03/onepiecesanji2.jpg",
                }}
                size={50}
              ></Avatar.Image>
              <View style={{ flexDirection: "column", marginLeft: 15 }}>
                <Title style={styles.title}>Nguyễn Viết Tiến</Title>
                <Caption style={styles.caption}>@tien.nv</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  207.231
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  25.320
                </Paragraph>
                <Caption style={styles.caption}>Subscriber</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <Drawer.Item
              icon="home-outline"
              label="Home"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="account-outline"
              label="Profile"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="bookmark-outline"
              label="BookMarks"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="tools"
              label="Settings"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="account-check-outline"
              label="Support"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="file-account"
              label="Contact"
              onPress={() => {}}
            ></Drawer.Item>
          </Drawer.Section>
          <Drawer.Section title="Preference">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme}></Switch>
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Item
          icon="exit-to-app"
          label="Sign Out"
          onPress={() => {}}
        ></Drawer.Item>
      </Drawer.Section>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerFull.Navigator
        initialRouteName="MenuTab"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <DrawerFull.Screen name="MenuTab" component={TabNavigator} />
        <DrawerFull.Screen name="TestScreen" component={TestScreen} />
      </DrawerFull.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
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
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
