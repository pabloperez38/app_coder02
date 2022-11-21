import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, alignItems: "center" },
  content: {
    width: "70%",
    height: 230,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: { fontFamily: "DMSans-Regular", fontSize: 18 },
  containerButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
