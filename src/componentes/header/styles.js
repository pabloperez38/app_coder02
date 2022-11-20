import { StyleSheet } from "react-native";
import colors from "../../constantes/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primario,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 22, color: colors.blanco, fontWeight: "bold" },
});
