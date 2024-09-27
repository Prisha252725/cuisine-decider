import React from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/cuisine-splash.png")}
        style={styles.splashImage}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Optional: A fallback color while the image loads
  },
  splashImage: {
    width: "100%",
    height: "100%",
  },
});

export default SplashScreen;
