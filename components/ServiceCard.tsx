import React from "react";
import { Linking, View, Text, Pressable, Platform } from "react-native";
import { Service } from "@/data/types";
import "../global.css";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

interface ServiceCardProps {
  service: Service;
  variant: 0 | 1 | 2;
  onPress: () => void;
}

export default function ServiceCard({
  service,
  variant,
  onPress,
}: ServiceCardProps): JSX.Element {
  const handleCall = (): void => {
    Linking.openURL(`tel:${service.phone}`);
  };

  const handleMap = (): void => {
    const address = encodeURIComponent(service.address);
    Linking.openURL(`https://maps.google.com/?q=${address},Tunis`);
  };

  // Gradient colors based on variant - fix type error by using tuple type
  const gradientColors: Record<number, readonly [string, string, string]> = {
    0: ["#3b82f6", "#16a34a", "#4ade80"] as const, // Workshop
    1: ["#6366f1", "#818cf8", "#a5b4fc"] as const, // CarParts
    2: ["#06b6d4", "#22d3ee", "#67e8f9"] as const, // CarWash
  };

  return (
    <View className="flex-col w-full sm:w-[500px] rounded-xl overflow-hidden h-auto p-4 bg-white shadow-sm">
      <View className="flex-col w-full">
        <View className="flex-row w-full align-middle mb-2">
          <View className="h-8 w-12 rounded-xl overflow-hidden mr-4 border-4 border-lime-300 shadow-sm">
            {Platform.OS === "web" ? (
              // For web, use a div with CSS background
              <div
                className="w-full h-full"
                style={{
                  background: `linear-gradient(45deg, ${gradientColors[variant][0]}, ${gradientColors[variant][1]}, ${gradientColors[variant][2]})`,
                  backgroundSize: "200% 200%",
                  animation: "gradient 3s ease infinite",
                }}
              />
            ) : (
              // For mobile, use expo-linear-gradient with fixed type
              <LinearGradient
                colors={gradientColors[variant]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ width: "100%", height: "100%" }}
              />
            )}
          </View>
          <View className="flex-row flex-grow justify-between items-center align-middle">
            <Text className="font-bold text-lg">{service.name}</Text>
            <View className="flex-row items-center gap-4 align-middle">
              <Text>⭐ {service.rating}/5</Text>
            </View>
          </View>
        </View>

        <Text
          className="text-gray-600 text-sm mb-1"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {service.description}
        </Text>

        <View className="flex-grow mb-2">
          <View className="flex-row flex-wrap align-middle space-x-2">
            {service.services.map((item, index) => (
              <View
                key={index}
                className="flex-row text-gray-600 items-center justify-center"
              >
                <Text className="text-xs text-gray-600">{item}</Text>
                {index !== service.services.length - 1 && (
                  <Text className="text-xs text-slate-300 px-1">|</Text>
                )}
              </View>
            ))}
            {service.services.length > 3 && (
              <View className="rounded-full m-1 px-3 border border-gray-200">
                <Text className="text-sm text-gray-600">
                  +{service.services.length - 3}
                </Text>
              </View>
            )}
          </View>
        </View>

        <View className="flex-row justify-between align-middle">
          <Pressable
            onPress={handleMap}
            className="max-w-[250px] flex-row items-center rounded-xl px-4 py-1 border border-lime-300 hover:bg-lime-100 transition-all"
          >
            <Text className="mr-2">📍</Text>
            <Text
              style={{
                flex: 1,
                overflow: "hidden",
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
              className="text-gray-600 text-xs flex-1"
            >
              {service.address}
            </Text>
          </Pressable>
          <View className="flex-row gap-2">
            <Pressable
              onPress={handleCall}
              className="items-center justify-center rounded-xl px-4 pt-2 pb-1 border border-lime-300 hover:bg-lime-100 transition-all"
            >
              <Text className="flex-row items-center justify-center">
                <Ionicons name="call" size={16} color="#16a34a" />
              </Text>
            </Pressable>
            <Pressable
              onPress={onPress}
              className="items-center justify-center rounded-xl px-4 pt-2 pb-2 border border-lime-300 hover:bg-lime-100 transition-all"
            >
              <Ionicons name="sparkles" size={16} color="#16a34a" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
