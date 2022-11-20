import {
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

  const onHandleChange = (value) => {
    setNumber(value.replace(/[^0-9]/g, ""));
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
              onPress={() => null}
              color={colors.secundario}
            />
            <Button
              title="Enviar"
              onPress={() => null}
              color={colors.terciario}
            />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Principal;
