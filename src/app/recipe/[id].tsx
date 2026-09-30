import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function RecipeDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Rezept Detailseite für Rezept mit ID: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
