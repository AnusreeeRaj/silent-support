import { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View, Modal, Animated } from "react-native";

export default function HiddenScreen() {
  const { sosMessage } = useLocalSearchParams();
  const [popupVisible, setPopupVisible] = useState(false);

  const sendSOS = () => {
    setPopupVisible(true);
    console.log("Dummy SOS sent:", sosMessage || "Emergency! I need help.");

    // Hide popup after 1 second
    setTimeout(() => setPopupVisible(false), 8000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚨 Emergency Mode Activated</Text>

      <Text style={styles.message}>
        {sosMessage || "Emergency! I need help."}
      </Text>

      <TouchableOpacity style={styles.sosButton} onPress={sendSOS}>
        <Text style={styles.sosText}>SOS SENT</Text>
      </TouchableOpacity>

      {/* Popup */}
      {popupVisible && (
        <View style={styles.popup}>
          <Text style={styles.popupText}>✅ SOS Sent Successfully!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "red",
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  message: {
    color: "white",
    marginBottom: 30,
    textAlign: "center",
  },
  sosButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
  },
  sosText: {
    color: "white",
    fontWeight: "bold",
  },
  popup: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#7fe205",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  popupText: {
    color: "white",
    fontWeight: "bold",
  },
});
