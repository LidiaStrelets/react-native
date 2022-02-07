import { StyleSheet, Text, View } from "react-native";

export default function HeaderTextComponent({ children }) {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    fontFamily: "mainFont",
  },
});
