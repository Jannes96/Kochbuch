import { StyleSheet, Text, View } from "react-native";

export default function NewRecipe() {
  return (
    <View style={styles.container}>
      <Text>Hier kommt das Formular hin</Text>
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
