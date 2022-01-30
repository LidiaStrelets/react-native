import { Platform, StyleSheet, TextInput, View } from "react-native";

export default function TextInputComponent({
  handleTextChange,
  placeholder,
  value,
  autofocus = false,
  keyboardType = "email-address",
  secureTextEntry = false,
}) {
  console.log(secureTextEntry, Platform.OS, placeholder);
  return (
    <View>
      <TextInput
        autoFocus={autofocus}
        keyboardType={keyboardType}
        style={styles.input}
        onChangeText={handleTextChange}
        placeholder={placeholder}
        value={value}
        autoComplete="off"
        secureTextEntry
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#e9967a",

    marginHorizontal: 30,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,

    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#e9967a",

    backgroundColor: "#fff",
  },
});
