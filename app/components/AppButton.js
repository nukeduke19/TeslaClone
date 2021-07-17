import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import colors from "../config/colors";

function AppButton({ type, title, onPress }) {
  const bgColor = type === "primary" ? colors.primary : colors.secondary;
  const textColor = type === "primary" ? colors.white : colors.black;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});

export default AppButton;
