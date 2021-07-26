import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

import HeaderMenuButton from "../components/HeaderMenuButton";

const CategoriesScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderMenuButton
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        numColumns={2}
        data={CATEGORIES}
        renderItem={({ item }) => {
          return (
            <CategoryGridTile
              title={item.title}
              color={item.color}
              onSelect={() =>
                navigation.navigate("CategoryMealsSrc", {
                  categoryID: item.id,
                })
              }
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

export default CategoriesScreen;
