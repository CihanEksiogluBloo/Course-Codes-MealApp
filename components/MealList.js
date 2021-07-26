import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { withNavigation } from "@react-navigation/compat";
import { useSelector } from "react-redux";

const MealList = ({ mealdatas, navigation }) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  return (
    <View style={styles.list}>
      <FlatList
        data={mealdatas}
        keyExtractor={(item, index) => item.id}
        style={{ width: "100%" }}
        renderItem={({ item }) => {
          const isFav = favoriteMeals.some((meal) => meal.id === item.id);

          return (
            <MealItem
              duration={item.duration}
              title={item.title}
              onSelectMeal={() => {
                navigation.navigate("MealDetail", {
                  mealID: item.id,
                  mealTitle: item.title,
                  isFav,
                });
              }}
              complexity={item.complexity}
              affordability={item.affordability}
              image={item.imageUrl}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
export default withNavigation(MealList);
