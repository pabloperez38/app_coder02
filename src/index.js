import { StyleSheet, View } from "react-native";

import Header from "./componentes/header";
import { Principal } from "./pantallas";
import colors from "./constantes/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Inicio" />
      <Principal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fondo,
  },
});
