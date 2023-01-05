import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Screens
import HomeScreen from "./screens/HomeScreen";
import OpenFileScreen from "./screens/OpenFileScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import SettingsScreen from "./screens/SettingsScreen";
// Constants
import { Colours } from "./constants/Colours";
// Icons
import Ionicons from "react-native-vector-icons/Ionicons";
// Redux
import { Provider } from "react-redux";
import { store } from "./store/store";

import "expo-dev-client";

const Tab = createBottomTabNavigator();

function tabBarIconManager(route, focused, color, size) {
  let iconName;

  if (route.name === "Home") {
    iconName = focused ? "home" : "home-outline";
  } else if (route.name === "Open a file") {
    iconName = focused ? "folder-open" : "folder-open-outline";
  } else if (route.name === "Favourites") {
    iconName = focused ? "star" : "star-outline";
  } else if (route.name === "Settings") {
    iconName = focused ? "settings" : "settings-outline";
  }

  return <Ionicons name={iconName} size={size} color={color} />;
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) =>
              tabBarIconManager(route, focused, color, size),
            tabBarActiveTintColor: Colours.Blue,
            tabBarInactiveTintColor: Colours.BlueishGray,
            headerTransparent: true,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Open a file" component={OpenFileScreen} />
          <Tab.Screen name="Favourites" component={FavouritesScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
