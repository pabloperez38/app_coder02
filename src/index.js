import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Principal, Secundaria } from "./pantallas";
import React, { useState } from "react";

import Header from "./componentes/header";
import colors from "./constantes/colors";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "DMSans-Regular": require("../assets/fuentes/DMSans-Regular.ttf"),
    "DMSans-Bold": require("../assets/fuentes/DMSans-Bold.ttf"),
    "DMSans-Italic": require("../assets/fuentes/DMSans-Italic.ttf"),
  });
  const [userNumber, setUserNumber] = useState(null);
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <Principal onStartGame={onStartGame} />;
  if (userNumber) {
    content = <Secundaria selectedNumber={userNumber} />;
  }
  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.terciario} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Header title={userNumber ? "Secundaria" : "Inicio"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fondo,
  },
  containerLoader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
