import "react-native-gesture-handler";
// React Native
import { Pressable } from "react-native";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import LandingScreen from "./screens/LandingScreen";
import EpubReader from "./screens/EpubReaderScreen";
// Redux
import { Provider } from "react-redux";
import { store } from "./store/store";
// Expo Dev Client
import "expo-dev-client";
// Icons
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Landing Screen"
            options={{ headerShown: false }}
            component={LandingScreen}
          />
          <Stack.Screen
            name="ePub Reader"
            options={{
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerRight: () => (
                <Pressable onPress={() => {}}>
                  <Ionicons name="arrow-back" size={24} color="black" />
                </Pressable>
              ),
            }}
            component={EpubReader}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
