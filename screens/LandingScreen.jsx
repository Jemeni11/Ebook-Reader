// Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Screens
import HomeScreen from "./HomeScreen";
import OpenFileScreen from "./OpenFileScreen";
import FavouritesScreen from "./FavouritesScreen";
import SettingsScreen from "./SettingsScreen";
// Constants
import { Colours } from "../constants/Colours";
// Icons
import { Ionicons } from "@expo/vector-icons";

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

export default function LandingScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          tabBarIconManager(route, focused, color, size),
        tabBarActiveTintColor: Colours.Blue,
        tabBarInactiveTintColor: Colours.BlueishGray,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Open a file"
        component={OpenFileScreen}
        options={{ tabBarLabel: "Open" }}
      />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
