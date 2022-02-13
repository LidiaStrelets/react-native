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
import MessageComponent from "../components/Message";
import MessageInputComponent from "../components/MessageInput";
import TextInputComponent from "../components/TextInput";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <MessageInputComponent
          value={message}
          handleTextChange={(value) => setMessage(value)}
          handleSubmit={() => {
            setMessages((prev) => [...prev, message]);
            setMessage("");
          }}
        />

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.messagesContainer}>
            {messages.map((message, idx) => (
              <MessageComponent key={idx}
                author="you"
                message={message}
                hanleMessageClick={() => alert(message)}
              />
            ))}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9967a",
    justifyContent: "flex-start",
    flexDirection: "column-reverse",
  },
  messagesContainer: {
    flexDirection: "column",
  },
});
