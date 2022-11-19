import { StyleSheet, View } from "react-native";

import Header from "./componentes/header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Inicio" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
