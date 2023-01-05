import { View, useWindowDimensions } from "react-native";
import Pdf from "react-native-pdf";
import EpubComponent from "./components/epub";

const source = {
  uri: "https://aristokratconsult.files.wordpress.com/2019/05/gst201-2019-converted.pdf",
  cache: true,
};

export default function PDFReader() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      <Pdf
        trustAllCerts={false}
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={{ flex: 1, width, height }}
      />
    </View>
  );
}
