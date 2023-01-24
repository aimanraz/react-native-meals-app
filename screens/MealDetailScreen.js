import { View, Text, Image, StyleSheet } from "react-native";
import MealDetails from "../components/MealDetails";

import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text>{selectedMeal.title}</Text>
      <View>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
        />
      </View>
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient, index) => {
        return <Text key={index}>{ingredient}</Text>;
      })}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step, index) => {
        return <Text key={index}>{step}</Text>;
      })}
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
});
