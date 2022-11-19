import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 15,
  },
  title: {
    fontSize: 18,
    color: "#212121",
    textAlign: "center",
    paddingVertical: 20,
  },
  inputContainer: {
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderBottomColor: "#5C946E",
    borderBottomWidth: 1,
    minWidth: 70,
    fontSize: 22,
    paddingVertical: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-around",
  },
});
