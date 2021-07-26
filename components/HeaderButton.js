import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

const HeaderButton = ({ onPress, isFav }) => {
  console.log(isFav)
  return (
    <AntDesign
      name="star"
      size={24}
      color={Platform.OS === "android" ? "white" : Colors.primaryColor}
      onPress={onPress}
      style={{ marginHorizontal: 10 }}
    />
  );
};

const styles = StyleSheet.create({});

export default HeaderButton;
