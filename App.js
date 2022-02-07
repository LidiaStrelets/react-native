import { StyleSheet, View } from "react-native";
import SignIn from "./src/pages/SignInPage";
import Welcome from "./src/pages/WelcomePage";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";

const loadFonts = async () => {
  await Font.loadAsync({
    mainFont: require("./assets/fonts/SourceCodePro-ExtraBold.ttf"),
    regularFont: require("./assets/fonts/SourceCodePro-Regular.ttf"),
  });
};

export default function App() {
  const [ready, setReady] = useState(false);

  if (!ready)
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    );

  return (
    <View style={styles.container}>
      <Welcome />
      {/* <SignIn /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
