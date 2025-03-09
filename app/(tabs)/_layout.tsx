import { Tabs } from "expo-router/tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Platform } from "react-native";

// Add this type definition
type TabBarIconProps = {
  color: string;
  focused: boolean;
  size?: number;
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          web: { display: "none" },
          default: undefined,
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }: TabBarIconProps) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }: TabBarIconProps) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
