import { StyleSheet, Text, View } from "react-native";

export default function UserComponent({ user }) {
  return (
    <View>
      <Text style={{ ...styles.user, backgroundColor: user.color }}>
        {user.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  user: {
    padding: 10,
    marginRight: 20,

    fontSize: 20,
    fontFamily: "regularFont",
    fontWeight: "bold",

    color: "#fff",
  },
});
