import React from "react";
import { StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";

const HeaderMenuButton = ({ onPress }) => {
  return (
    <Entypo
      onPress={onPress}
      style={{ margin: 10 }}
      name="menu"
      size={24}
      color={Platform.OS === "android" ? "white" : Colors.primaryColor}
    />
  );
};

const styles = StyleSheet.create({});

export default HeaderMenuButton;
