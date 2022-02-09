import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import CommonTextComponent from "../components/CommonText";
import HeaderTextComponent from "../components/HeaderText";
import LinkComponent from "../components/Link";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../images/main-image.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <HeaderTextComponent>
          Welcome to this test chat application!
        </HeaderTextComponent>
        <CommonTextComponent>
          Here you can find online conversation with different people.
        </CommonTextComponent>
        <CommonTextComponent>
          Authorization required to start.
        </CommonTextComponent>
        <LinkComponent
          text="Sign in"
          handlePress={() => {
            navigation.navigate("signin");
            console.log("sign in");
          }}
        />
        <LinkComponent
          text="sign up"
          handlePress={() => {
            console.log("sign up");
            navigation.navigate("signup");
          }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
