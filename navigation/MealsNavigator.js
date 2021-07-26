import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Colors from "../constants/Colors";

import { Platform, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FilterScreen from "../screens/FilterScreen";
import HeaderMenuButton from "../components/HeaderMenuButton";

const TabNavigator = createBottomTabNavigator();
const TabMeterial = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const defaultStackNavigatorOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
  },
  headerTitleStyle: { fontFamily: "open-sans-bold" },
  headerBackTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitleAlign: "center",
};

const mealsNavigatorScreenConfig = {
  tabBarIcon: (tabInfo) => {
    return <Ionicons name="fast-food" size={24} color={tabInfo.color} />;
  },
  tabBarColor: Colors.primaryColor,
  tabBarLabel: <Text style={{ fontFamily: "open-sans" }}>Meals</Text>,
};

const favoritesNavigatorScreenConfig = {
  tabBarIcon: (tabInfo) => {
    return <FontAwesome5 name="grin-stars" size={24} color={tabInfo.color} />;
  },
  tabBarColor: Colors.accentColor,
};

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      mode={"modal"}
      screenOptions={defaultStackNavigatorOptions}
    >
      <Stack.Screen name="Meal Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMealsSrc" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const FavNavigator = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={defaultStackNavigatorOptions}>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const MealsFavTabNavigator = () => {
  return Platform.OS === "ios" ? (
    <TabNavigator.Navigator>
      <TabNavigator.Screen
        name={"Meals"}
        component={MealsNavigator}
        options={mealsNavigatorScreenConfig}
      />
      <TabNavigator.Screen
        name={"Favorites"}
        component={FavNavigator}
        options={favoritesNavigatorScreenConfig}
      />
    </TabNavigator.Navigator>
  ) : (
    <TabMeterial.Navigator shifting={true} activeColor="white">
      <TabMeterial.Screen
        name={"Meals"}
        component={MealsNavigator}
        options={mealsNavigatorScreenConfig}
      />
      <TabMeterial.Screen
        name={"Favorites"}
        component={FavNavigator}
        options={favoritesNavigatorScreenConfig}
      />
    </TabMeterial.Navigator>
  );
};

const FiltersNavigator = () => {
  return (
    <Stack.Navigator
      mode={"modal"}
      screenOptions={defaultStackNavigatorOptions}
    >
      <Stack.Screen
        name="Filters"
        component={FilterScreen}
        options={({ route, navigation }) => ({
          headerLeft: () => (
            <HeaderMenuButton
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={defaultStackNavigatorOptions}
      drawerContentOptions={{
        activeTintColor: Colors.accentColor,
        labelStyle: { fontFamily: "open-sans-bold" },
      }}
    >
      <Drawer.Screen
        name="MealsFavs"
        component={MealsFavTabNavigator}
        options={{ drawerLabel: "Meal Favorites" }}
      />
      <Drawer.Screen
        name="Filters"
        component={FiltersNavigator}
        options={{ drawerLabel: "Filter Settings" }}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
