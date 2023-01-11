import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Colours } from "../constants/Colours";

const OpenFileScreen = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const [textInputValue, setTextInputValue] = useState("");

  const openLocalFile = () => {
    // Open file picker
    // Get file path
    // Check if it's a pdf or an epub
    // Pass the path to the appropriate file opener
  };

  const openOnlineFile = () => {
    // Get file url
    const fileURL = textInputValue;
    // Check if it's a pdf or an epub
    if (fileURL.match(/\.(pdf|epub|opf)\/?$/)) {
      // Pass the url to the appropriate file opener
      // navigation.navigate('Nested Navigator 2', { screen: 'screen D' })
      navigation.navigate("ePub Reader", {
        src: fileURL,
      });
    }
  };
  return (
    <View style={styles.openFileScreenContainer}>
      <View style={[styles.openFileOptions, { width: width - 24 }]}>
        <Text style={styles.openFileOptionsHeader}>Open a file</Text>
        <Text style={styles.openFileOptionsSubHeader}>
          A <Text style={styles.emphasis}>.pdf</Text>,{" "}
          <Text style={styles.emphasis}>.ePub</Text>, or a{" "}
          <Text style={styles.emphasis}>.opf</Text> file
        </Text>
        <Pressable
          style={styles.openFileOptionsButton}
          android_ripple={{ foreground: false, color: Colours.BlueishGray }}
          onPress={openLocalFile}
        >
          <Text style={styles.openFileOptionsButtonText}>Open a file</Text>
        </Pressable>
      </View>
      <View style={[styles.openFileOptions, { width: width - 24 }]}>
        <Text style={styles.openFileOptionsHeader}>Open a file online</Text>
        <Text style={styles.openFileOptionsSubHeader}>
          A url ending with <Text style={styles.emphasis}>.pdf</Text>,{" "}
          <Text style={styles.emphasis}>.ePub</Text>, or{" "}
          <Text style={styles.emphasis}>.opf</Text>
        </Text>
        <TextInput
          style={[
            styles.openFileOptionsButton,
            {
              backgroundColor: Colours.White,
              borderBottomColor: Colours.Black,
              borderBottomWidth: 1,
            },
          ]}
          editable
          autoCorrect={false}
          clearButtonMode="while-editing"
          keyboardType="url"
          placeholder="Enter a url"
          value={textInputValue}
          onChangeText={(text) => setTextInputValue(text)}
        />
        <Pressable
          style={styles.openFileOptionsButton}
          android_ripple={{ foreground: false, color: Colours.BlueishGray }}
          onPress={openOnlineFile}
        >
          <Text style={styles.openFileOptionsButtonText}>
            Open a file online
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OpenFileScreen;

const styles = StyleSheet.create({
  openFileScreenContainer: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: Colours.White,
  },
  openFileOptions: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    marginVertical: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
  openFileOptionsHeader: {
    fontSize: 24,
    marginVertical: 8,
  },
  openFileOptionsSubHeader: {
    fontSize: 16,
    marginVertical: 4,
  },
  openFileOptionsButton: {
    marginVertical: 12,
    paddingVertical: 8,
    backgroundColor: Colours.Blue,
    borderRadius: 8,
  },
  openFileOptionsButtonText: {
    textAlign: "center",
    fontSize: 20,
    color: Colours.White,
  },
  emphasis: {
    fontStyle: "italic",
  },
});
