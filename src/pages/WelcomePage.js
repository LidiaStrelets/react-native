import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../images/main-image.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Welcome to this test chat application, pers!</Text>
        <Text style={styles.smallerText}>
          Here you can find online conversation with different people.
        </Text>
        <Text style={styles.smallerText}>Authorization required to start.</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            console.log("sign in");
          }}
        >
          <Text style={styles.link}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            console.log("sign up");
          }}
        >
          <Text style={styles.link}>sign up</Text>
        </TouchableOpacity>
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
});
