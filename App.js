import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import MealsNavigator from "./navigation/MealsNavigator";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";

//redux
import { createStore, combineReducers,applyMiddleware  } from "redux";
import mealsReducer from "./store/reducers/meals";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';

enableScreens();

// redux
const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer,composeWithDevTools());

export default function App() {
  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MealsNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
