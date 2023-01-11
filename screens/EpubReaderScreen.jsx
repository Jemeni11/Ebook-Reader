import React from "react";

import {
  StyleSheet,
  SafeAreaView,
  View,
  useWindowDimensions,
} from "react-native";
import { Reader, ReaderProvider } from "@epubjs-react-native/core";
import { useFileSystem } from "@epubjs-react-native/expo-file-system"; // for Expo project

import useEpubMetadata from "../hooks/useEpubMetadata";

export default function EpubReader({ route, navigation }) {
  const { src } = route.params;
  if (!src) {
    src = "https://s3.amazonaws.com/moby-dick/OPS/package.opf";
  }
  const { title, author, publisher } = useEpubMetadata(src);
  const { width, height } = useWindowDimensions();
  navigation.setOptions({ title: title })

  return (
    <SafeAreaView>
      <View style={[{ height: height * 0.1 }]}>

      </View>
      <ReaderProvider>
        <Reader
          src={src}
          width={width}
          height={height * 0.8}
          fileSystem={useFileSystem}
        />
      </ReaderProvider>
      <View style={[{ height: height * 0.1 }]}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {},
});
