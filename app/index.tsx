import * as Location from "expo-location";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CalculatorScreen() {
  const router = useRouter();
  const [input, setInput] = useState("");

  const handlePress = (value: string) => {
    setInput((prev) => prev + value);
  };

  const clear = () => {
    setInput("");
  };

  const calculate = async () => {
    if (input.trim() === "9090") {
      await activateSOS();
      setInput("");
      return;
    }

    try {
      const result = eval(input);
      setInput(String(result));
    } catch {
      setInput("Error");
    }
  };

  const activateSOS = async () => {
    try {
      // Ask permission (only first time browser will show popup)
      const { status } =
        await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Location permission denied");
        return;
      }

      // Fetch location
      const location = await Location.getCurrentPositionAsync({});

      const lat = location.coords.latitude;
      const lng = location.coords.longitude;

      const message = `I am in danger. My location: https://maps.google.com/?q=${lat},${lng}`;

      console.log("SOS Message:", message);

      // Navigate to hidden screen and pass message
      router.push({
        pathname: "/hidden",
        params: { sosMessage: message },
      });

    } catch (error) {
      Alert.alert("Failed to fetch location");
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{input || "0"}</Text>

      <View style={styles.row}>
        <CalcButton label="7" onPress={() => handlePress("7")} />
        <CalcButton label="8" onPress={() => handlePress("8")} />
        <CalcButton label="9" onPress={() => handlePress("9")} />
        <CalcButton label="/" onPress={() => handlePress("/")} />
      </View>

      <View style={styles.row}>
        <CalcButton label="4" onPress={() => handlePress("4")} />
        <CalcButton label="5" onPress={() => handlePress("5")} />
        <CalcButton label="6" onPress={() => handlePress("6")} />
        <CalcButton label="*" onPress={() => handlePress("*")} />
      </View>

      <View style={styles.row}>
        <CalcButton label="1" onPress={() => handlePress("1")} />
        <CalcButton label="2" onPress={() => handlePress("2")} />
        <CalcButton label="3" onPress={() => handlePress("3")} />
        <CalcButton label="-" onPress={() => handlePress("-")} />
      </View>

      <View style={styles.row}>
        <CalcButton label="0" onPress={() => handlePress("0")} />
        <CalcButton label="C" onPress={clear} />
        <CalcButton label="=" onPress={calculate} />
        <CalcButton label="+" onPress={() => handlePress("+")} />
      </View>
    </View>
  );
}

function CalcButton({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-end",
    padding: 20,
  },
  display: {
    color: "white",
    fontSize: 48,
    textAlign: "right",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#333",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
});