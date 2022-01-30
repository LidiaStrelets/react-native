import { StyleSheet, View } from "react-native";
import SignIn from "./src/pages/SignInPage";
import Welcome from "./src/pages/WelcomePage";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Welcome /> */}
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
