import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default function LinkComponent({ handlePress, text }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  link: {
    color: "#e9967a",

    fontSize: 25,
    fontFamily: "regularFont",
    textTransform: "uppercase",
    textAlign: "center",

    borderRadius: 10,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#e9967a",

    width: 200,
    padding: 10,
    marginTop: 10,
    marginHorizontal: "auto",
  },
});
