import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import TextInputComponent from "../components/TextInput";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground
            source={require("./../images/main-image.jpg")}
            resizeMode="cover"
            style={styles.image}
          >
            <SafeAreaView>
              <TextInputComponent
                value={email}
                placeholder="email"
                handleTextChange={(value) => setEmail(value)}
                autofocus={true}
              />
              <TextInputComponent
                secureTextEntry={true}
                placeholder="password"
                value={password}
                handleTextChange={(value) => setPassword(value)}
              />
            </SafeAreaView>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  Keyboard.dismiss();
                  setEmail("");
                  setPassword("");
                  alert(`${email},  password: , ${password}`);
                }}
              >
                <Text style={styles.link}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },

  link: {
    color: "#e9967a",

    fontSize: 25,
    textTransform: "uppercase",
    textAlign: "center",

    borderRadius: 10,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#e9967a",

    width: 200,
    padding: 10,
    marginTop: 10,
  },
  buttonWrapper: {
    alignItems: "center",
  },
});
