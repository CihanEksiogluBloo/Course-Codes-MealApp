import React, { useEffect, useCallback } from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import ListItem from "../components/ListItem";

//redux
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = ({ navigation, route }) => {
  const MEALS = useSelector((state) => state.meals.meals);
  const { mealID, mealTitle,isFav } = route.params;


  const selectedMeal = MEALS.find((meal) => meal.id === mealID);
  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealID));
  }, [dispatch, mealID]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => (
        <HeaderButton
          onPress={toggleFavoriteHandler}
          isFav={isFav}
        />
      ),
    });
  }, [navigation, isFav]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({isFav:isFav})
  }, [isFav])

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>

      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}

      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((steps) => (
        <ListItem key={steps}>{steps}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {},
  title: { fontFamily: "open-sans-bold", textAlign: "center", fontSize: 22 },
  image: { width: "100%", height: 200 },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
});

export default MealDetailScreen;
