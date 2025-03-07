import { Stack } from "expo-router";
import { useEffect } from "react";
import { Platform, useColorScheme } from "react-native";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import "../global.css";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ServiceContext } from "@/hooks/ServiceContext";
export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const updateRating = (
    serviceId: number,
    category: number,
    rating: number
  ) => {
    // This will be implemented in index.tsx
    console.log("Rating updated:", { serviceId, category, rating });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ServiceContext.Provider value={{ updateRating }}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="modal"
              options={Platform.select({
                web: {
                  presentation: "transparentModal",
                  animation: "fade",
                  headerShown: false,
                },
                default: {
                  presentation: "modal",
                  animation: "slide_from_bottom",
                  headerShown: true,
                  title: "Add Review",
                },
              })}
            />
          </Stack>
        </ServiceContext.Provider>
        <StatusBar style="light" />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
