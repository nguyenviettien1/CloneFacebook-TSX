import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  View,
} from "react-native";
export const CategoryListItem=(props:any)=>{
  const { category } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        Alert.alert(category.name);
      }}
    >
      <Image style={{ width: 100, height: 100 }} source={category.sr}></Image>
      <View style={{ width: 0, flexGrow: 1, marginLeft: 16 }}>
        <Text style={styles.title}>{category.name}</Text>
        <Text>{category.desc}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    margin: 8,
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "700",
  },
});
