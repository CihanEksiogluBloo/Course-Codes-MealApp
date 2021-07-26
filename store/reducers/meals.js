import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealID
      );

      if (existingIndex >= 0) {
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.filter(
            (meal) => meal.id !== action.mealID
          ),
        };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealID);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const appliedFilters = action.payload;
      const updatedfilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactosFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetaritan && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;

      });
      return { ...state, filteredMeals: updatedfilteredMeals };

    default:
      return state;
  }
};

export default mealsReducer;
