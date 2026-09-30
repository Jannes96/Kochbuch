import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const FAKE_RECIPES = [
  { id: 1, title: "Pfannkuchen" },
  { id: 2, title: "Reibeplätzchen" },
  { id: 3, title: "Wiener Schnitzel" },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mein Kochbuch</Text>

      <Link href="/recipe/new">
        <Text>+ Neues Rezept</Text>
      </Link>

      {FAKE_RECIPES.map((recipe) => (
        <Link href={`/recipe/${recipe.id}`} key={recipe.id}>
          <Text style={styles.link}> {recipe.title} anzeigen</Text>
        </Link>
      ))}
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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  link: {
    fontSize: 18,
    color: "#1E90FF",
    marginBottom: 10,
  },
});
