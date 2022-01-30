import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
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
              <TextInput
                autoFocus
                keyboardType="email-address"
                style={styles.input}
                onChangeText={() => {}}
                placeholder="email"
                value={email}
                autoComplete="off"
                onChangeText={(value) => setEmail(value)}
              />
              <TextInput
                style={styles.input}
                onChangeText={(value) => setPassword(value)}
                value={password}
                secureTextEntry
                placeholder="password"
              />
            </SafeAreaView>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  Keyboard.dismiss();
                  setEmail("");
                  setPassword("");
                  alert(`${email}, " password: ", ${password}`);
                }}
              >
                <Text style={styles.link}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
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
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  smallerText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
  link: {
    color: "#fff",

    fontSize: 25,
    textTransform: "uppercase",
    textAlign: "center",

    borderRadius: 10,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#fff",

    width: 200,
    padding: 10,
    marginTop: 10,
  },
});
