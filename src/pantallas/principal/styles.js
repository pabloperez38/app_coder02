import { StyleSheet } from "react-native";
import colors from "../../constantes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 15,
  },
  title: {
    fontFamily: "DMSans-Regular",
    fontSize: 18,
    color: colors.texto,
    textAlign: "center",
    paddingVertical: 20,
  },
  inputContainer: {
    width: "70%",
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontFamily: "DMSans-Regular",
    width: "70%",
    fontSize: 22,
    marginBottom: 10,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-around",
  },
  confirmedContainer: {
    width: "66%",
    height: 200,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
  confirmedTitle: { fontFamily: "DMSans-Regular", fontSize: 18 },
});
