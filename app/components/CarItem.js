import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import AppButton from "./AppButton";
import Heading from "./Heading";

function CarItem({ image, title, subtitle, taglineCTA }) {
  return (
    <ImageBackground style={styles.container} source={image}>
      <Heading />
      <View style={styles.modelName}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          {subtitle + " "}
          {taglineCTA && <Text style={styles.tagline}>{taglineCTA}</Text>}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          type="primary"
          title="custom order"
          onPress={() => {
            console.warn("button pressed");
          }}
        />
        <AppButton
          type="secondary"
          title="Existing Inventory"
          onPress={() => {
            console.warn("button pressed");
          }}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
    resizeMode: "cover",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  modelName: {
    position: "absolute",
    top: "20%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  tagline: {
    textDecorationLine: "underline",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
    bottom: 30,
  },
});
export default CarItem;
