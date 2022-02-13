import { StyleSheet, Text, View } from "react-native";

export default function SavedMessageComponent({
  message,
  hanleMessageClick,
  author,
}) {
  return (
    <View onTouchEnd={hanleMessageClick} style={styles.container}>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: "95%",
    // marginHorizontal: "auto",
    marginTop: 20,
    // marginEnd: 10,
    padding: 10,
    paddingTop: 5,

    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#cd5c5c",

    backgroundColor: "#fff",
  },
  message: {
    fontSize: 20,
    fontFamily: "regularFont",
    fontWeight: "bold",

    color: "#cd5c5c",
  },
  author: {
    fontSize: 16,
    fontFamily: "regularFont",

    color: "#ffa07a",
  },
});
