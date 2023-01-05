import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  useWindowDimensions,
} from "react-native";
import React from "react";

const DATA = [
  {
    title: "Theme",
    data: ["App theme"],
  },
  {
    title: "Navigation",
    data: ["Use volume buttons"],
  },
  {
    title: "About",
    data: ["App version", "Credits"],
  },
];

const SettingsScreen = () => {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.settingsScreenContainer}>
      <SectionList
        style={[styles.settingsSectionList, { width: width }]}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default SettingsScreen;

const styles = StyleSheet.create({
  settingsScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  settingsSectionList: {
    // width: width,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});
