import { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Keyboard,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import LinkComponent from "../components/Link";
import TextInputComponent from "../components/TextInput";
import UserComponent from "../components/User";

const users = [
  { name: "Asya", color: "#4b0082" },
  { name: "Ivan", color: "#7cfc00" },
  { name: "Kitty", color: "#20b2aa" },
];

export default function Users({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.usersContainer}>
        {users.map((user, idx) => (
          <UserComponent key={idx} user={user} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9967a",
  },
  usersContainer: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
