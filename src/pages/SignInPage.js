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

export default function SignIn({ navigation }) {
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
            <LinkComponent
              text="Sign in"
              handlePress={() => {
                console.log("sign in: ", email, password);
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
    // alignItems: "center",
  },
});
