import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Hola, Coder!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}> Button </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a3bcff",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    fontSize: 30,
    color: "#eef2ff",
  },
  button: {
    backgroundColor: "#487aff",
    padding: 4,
    marginTop: 30,
    borderRadius: 10,
  },
  textButton: {
    padding: 3,
    fontSize: 20,
    color: "#eef2ff",
  },
});
