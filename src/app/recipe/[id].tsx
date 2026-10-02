import { FAKE_RECIPES } from "@/data/fakeRecipes";
import { Ingredient } from "@/types/recipe";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

function formatIngredient(ingredient: Ingredient): string {
  // Teile sammeln, die nicht null sind, und mit Leerzeichen verbinden
  const parts: string[] = [];
  if (ingredient.amount !== null) {
    parts.push(ingredient.amount.toString());
  }
  if (ingredient.unit !== null) {
    parts.push(ingredient.unit);
  }
  parts.push(ingredient.name);
  if (ingredient.note !== null) {
    parts.push(`(${ingredient.note})`);
  }
  return parts.join(" ");
}

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
    <ScrollView contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: recipe.title }} />
      <Text style={styles.title}>{recipe.title}</Text>
      {recipe.description && <Text> {recipe.description} </Text>}
      <Text style={styles.subtitle}>Zutaten</Text>
      {recipe.ingredients.map((ingredient) => (
        <Text key={ingredient.id}>{formatIngredient(ingredient)}</Text>
      ))}
      <Text style={styles.subtitle}>Zubereitung</Text>
      {recipe.steps.map((step, index) => (
        <Text key={step.id} style={styles.step}>
          <Text style={styles.index}>{index + 1}.</Text> {step.description}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  step: {
    marginBottom: 8,
    lineHeight: 16,
  },
  index: {
    fontWeight: "bold",
  },
});
