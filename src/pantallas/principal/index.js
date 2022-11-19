import { Button, Text, TextInput, View } from "react-native";

import { Card } from "../../componentes";
import React from "react";
import { styles } from "./styles";

const Principal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pasando valores</Text>
      <Card style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Ingrese un número" />
        <View style={styles.buttonContainer}>
          <Button title="Resetear" onPress={() => null} color="#30C5FF" />
          <Button title="Enviar" onPress={() => null} color="#2A2D34" />
        </View>
      </Card>
    </View>
  );
};

export default Principal;
