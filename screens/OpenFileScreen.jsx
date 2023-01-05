import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OpenFileScreen = () => {
  return (
    <View style={styles.openFileScreenContainer}>
      <Text>OpenFile!</Text>
    </View>
  );
};

export default OpenFileScreen;

const styles = StyleSheet.create({
  openFileScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
