import React from "react";
import { StyleSheet, View, Image } from "react-native";

function Heading(props) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <View>
        <Image
          source={require("../assets/images/menu.png")}
          style={styles.menu}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    top: 5,
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
  menu: {
    width: 35,
    height: 25,
  },
});
export default Heading;
