import { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import LinkComponent from "../components/Link";
import TextInputComponent from "../components/TextInput";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [nick, setNick] = useState("");
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
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <ImageBackground
                source={require("./../images/main-image.jpg")}
                resizeMode="cover"
                style={styles.image}
              >
                <SafeAreaView>
                  <TextInputComponent
                    autoFocus
                    keyboardType="email-address"
                    style={styles.input}
                    placeholder="email"
                    value={email}
                    autoComplete="off"
                    handleTextChange={(value) => setEmail(value)}
                  />
                  <TextInputComponent
                    style={styles.input}
                    placeholder="nickname"
                    value={nick}
                    autoComplete="off"
                    handleTextChange={(value) => setNick(value)}
                  />
                  <TextInputComponent
                    style={styles.input}
                    handleTextChange={(value) => setPassword(value)}
                    value={password}
                    secureTextEntry
                    placeholder="password"
                  />
                </SafeAreaView>
                <LinkComponent
                  text="Sign up"
                  handlePress={() => {
                    console.log("sign up: ", email, nick, password);
                  }}
                />
                <LinkComponent
                  text="main page"
                  handlePress={() => {
                    console.log("to main ");
                    navigation.navigate("welcome");
                  }}
                />
              </ImageBackground>
            </TouchableWithoutFeedback>
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
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
