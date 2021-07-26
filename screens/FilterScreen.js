import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import FilterSwitch from "../components/FilterSwitch";
import SaveButton from "../components/SaveButton";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals";

const FilterScreen = ({ navigation, route }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactosFree: isLactoseFree,
      vegan: isVegan,
      vegetaritan: isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
  }, [isVegetarian, isGlutenFree, isLactoseFree, isVegan, dispatch]);

  React.useLayoutEffect(() => {
    if (route.params) {
      const { save } = route.params;
      navigation.setOptions({
        headerRight: () => <SaveButton onPress={() => save()} />,
      });
    }
  }, [saveFilters]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters,
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Avaliable Filters / Restrictions</Text>
      <FilterSwitch
        value={isGlutenFree}
        onValueChange={(V) => setIsGlutenFree(V)}
      >
        Gluten-free
      </FilterSwitch>

      <FilterSwitch
        value={isLactoseFree}
        onValueChange={(V) => setLactoseFree(V)}
      >
        Lactose-free
      </FilterSwitch>

      <FilterSwitch value={isVegan} onValueChange={(V) => setIsVegan(V)}>
        Vegan
      </FilterSwitch>
      <FilterSwitch
        value={isVegetarian}
        onValueChange={(V) => setIsVegetarian(V)}
      >
        Vegetarian
      </FilterSwitch>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});

export default FilterScreen;
