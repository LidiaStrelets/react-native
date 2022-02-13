import { StyleSheet, TextInput, View } from "react-native";

export default function MessageInputComponent({
  handleTextChange,
  value,
  handleSubmit,
}) {
  return (
    <View>
      <TextInput
        onSubmitEditing={handleSubmit}
        autoFocus
        style={styles.input}
        onChangeText={handleTextChange}
        placeholder="print your message"
        value={value}
        autoComplete="off"
        blurOnSubmit={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#cd5c5c",

    marginTop: 30,
    // marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,

    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "regularFont",
    // textAlign: "center",
    color: "#cd5c5c",

    backgroundColor: "#fff",
  },
});
