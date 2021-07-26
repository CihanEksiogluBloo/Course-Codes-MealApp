import React from "react";
import { View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = ({ navigation, route }) => {
  const { categoryID } = route.params;
  const selectedCat = CATEGORIES.find((cat) => cat.id === categoryID);

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCat.title === "" ? "No title" : selectedCat.title,
    });
  }, [navigation, categoryID]);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryID) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <MealList mealdatas={displayedMeals} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMealsScreen;
