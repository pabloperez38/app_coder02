import {
  Alert,
  Button,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Card, Input } from "../../componentes";
import React, { useState } from "react";

import colors from "../../constantes/colors";
import { styles } from "./styles";

const Principal = () => {
  const [number, setNumber] = useState("");

  const [selectedNumber, setSelectedNumber] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const onHandleChange = (value) => {
    setNumber(value.replace(/[^0-9]/g, ""));
  };
  const onHandleReset = () => {
    setNumber("");
    setConfirmed(false);
  };
  const onHandleConfirm = () => {
    const chosenNumber = parseInt(number, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Número inválido", "Debe escribir un número entre 1 y 99", [
        { text: "OK", style: "destructive", onPress: onHandleReset },
      ]);
    } else {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setNumber("");
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Pasando valores</Text>
        <Card style={styles.inputContainer}>
          <Input
            style={styles.input}
            placeholder="Ingrese un número"
            maxLength={2}
            keyboardType="number-pad"
            blurOnSubmit
            onChangeText={onHandleChange}
            value={number}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Resetear"
              onPress={onHandleReset}
              color={colors.secundario}
            />
            <Button
              title="Enviar"
              onPress={onHandleConfirm}
              color={colors.terciario}
            />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Principal;
