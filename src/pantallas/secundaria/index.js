import { Button, Text, View } from "react-native";
import { Card, NumberContainer } from "../../componentes";
import React, { useState } from "react";

import colors from "../../constantes/colors";
import { styles } from "./styles";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const Secundaria = (selectedNumber) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, selectedNumber)
  );

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>EL número mágico es:</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.containerButton}>
          <Button color={colors.primario} title="Bajar" onPress={() => {}} />
          <Button color={colors.terciario} title="Subir" onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};

export default Secundaria;
