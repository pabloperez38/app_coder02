import { Principal, Secundaria } from "./pantallas";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./componentes/header";
import colors from "./constantes/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <Principal onStartGame={onStartGame} />;
  if (userNumber) {
    content = <Secundaria selectedNumber={userNumber} />;
  }
  return (
    <View style={styles.container}>
      <Header title="Inicio" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fondo,
  },
});
