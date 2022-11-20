import { StyleSheet } from "react-native";
import colors from "../../constantes/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blanco,
    shadowColor: colors.negro,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
