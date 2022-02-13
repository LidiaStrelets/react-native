import { ImageBackground, StyleSheet, View } from "react-native";
import SignIn from "./src/pages/SignInPage";
import Welcome from "./src/pages/WelcomePage";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import SignUp from "./src/pages/SignUpPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "./src/pages/ChatPage";
import Users from "./src/pages/UsersPage";
import SavedMessages from "./src/pages/SavedMessagesPage";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const loadFonts = async () => {
  await Font.loadAsync({
    mainFont: require("./assets/fonts/SourceCodePro-ExtraBold.ttf"),
    regularFont: require("./assets/fonts/SourceCodePro-Regular.ttf"),
  });
};

const isAuth = true;

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
      {isAuth ? (
        <Tab.Navigator
          screenOptions={{ tabBarShowLabel: false }}
          initialRouteName="chat"
        >
          <Tab.Screen
            options={{
              tabBarIcon: ({ size, focused, color }) => (
                <Entypo
                  name="users"
                  size={size}
                  color={focused ? "#cd5c5c" : "#ffa07a"}
                />
              ),
            }}
            name="users"
            component={Users}
          />

          <Tab.Screen
            options={{
              tabBarIcon: ({ size, focused, color }) => (
                <Entypo
                  name="chat"
                  size={size}
                  color={focused ? "#cd5c5c" : "#ffa07a"}
                />
              ),
            }}
            name="chat"
            component={Chat}
          />

          <Tab.Screen
            options={{
              tabBarIcon: ({ size, focused, color }) => (
                <Entypo
                  name="save"
                  size={size}
                  color={focused ? "#cd5c5c" : "#ffa07a"}
                />
              ),
            }}
            name="saved"
            component={SavedMessages}
          />
        </Tab.Navigator>
      ) : (
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
      )}
    </NavigationContainer>
  );
}
