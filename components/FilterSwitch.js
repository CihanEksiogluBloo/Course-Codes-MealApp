import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

const FilterSwitch = ({ children, value, onValueChange }) => {

  return (
    <View style={styles.filterContainer}>
      <Text>{children}</Text>
      <Switch
        //trackColor={{true: Colors.primaryColor,}}
        //thumbColor={Colors.accentColor}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
});
export default FilterSwitch;
