import { FAKE_RECIPES } from "@/data/fakeRecipes";
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function RecipeDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const recipe = FAKE_RECIPES.find((r) => r.id === Number(id));

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: "Nicht gefunden" }} />
        <Text>Rezept nicht gefunden</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: recipe.title }} />
      <Text style={styles.title}>{recipe.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
