// import { useRoute } from "@react-navigation/native";

import { useLayoutEffect } from "react";
import MealList from "../components/MealList";

import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  //   const route = useRoute();
  //   const catId = route.params.categoryId;
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === catId
  ).title;

  // setting option dynamicly with uselayoutEffect
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    // set option method
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catId]);

  return <MealList items={displayedMeals} />;
}

export default MealsOverviewScreen;
