import { StyleSheet, Text, View } from "react-native";

export default function CommonTextComponent({ children }) {
  return (
    <View>
      <Text style={styles.smallerText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  smallerText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
    fontFamily: "regularFont",
  },
});
