import React from "react";
import { View, Text, Platform } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const SaveButton = ({ onPress }) => {
  return (
    <Entypo
      style={{ marginHorizontal: 10 }}
      onPress={onPress}
      name="save"
      size={24}
      color={Platform.OS === "android" ? "white" : Colors.primaryColor}
    />
  );
};

export default SaveButton;
