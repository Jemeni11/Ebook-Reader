import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FavouritesScreen = () => {
  return (
    <View style={styles.favouritesScreenContainer}>
      <Text>Favourites!</Text>
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  favouritesScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
