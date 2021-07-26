import React from "react";
import { View, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import HeaderMenuButton from "../components/HeaderMenuButton";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No Favorite meals found.</DefaultText>
      </View>
    );
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Your Favorites",
      headerLeft: () => (
        <HeaderMenuButton
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      ),
    });
  }, [navigation]);

  return <MealList mealdatas={favMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

const styles = StyleSheet.create({
  screen: {},
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
