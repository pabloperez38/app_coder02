import { StyleSheet } from "react-native";
import colors from "../../constantes/colors";

export const styles = StyleSheet.create({
  container: {
    borderColor: colors.terciario,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secundario,
    width: 50,
    height: 50,
  },
  number: { fontFamily: "DMSans-Bold", fontSize: 26, color: colors.blanco },
});
