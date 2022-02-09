import { ImageBackground, StyleSheet, View } from "react-native";
import SignIn from "./src/pages/SignInPage";
import Welcome from "./src/pages/WelcomePage";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import SignUp from "./src/pages/SignUpPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="signup"
          component={SignUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="signin"
          component={SignIn}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
