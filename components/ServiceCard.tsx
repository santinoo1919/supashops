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
  console.log("Rendering ServiceCard:", {
    id: service.id,
    userRating: service.userRating,
    totalVotes: service.totalVotes,
  });

  const handleMap = (): void => {
    const address = encodeURIComponent(service.address);
    Linking.openURL(`https://maps.google.com/?q=${address},Tunis`);
  };

  return (
    <View className="flex-col w-full sm:w-[500px] rounded-xl overflow-hidden h-auto p-4">
      <View className="flex-col w-full">
        <View className="flex-row w-full align-middle mb-2">
          <View className="h-8 w-12 rounded-xl overflow-hidden mr-4 border-4 border-lime-300 shadow-sm">
            {Platform.select({
              web: (
                <View
                  className="w-full h-full"
                  style={
                    {
                      background:
                        "linear-gradient(45deg, #3b82f6, #06b6d4, #8b5cf6)",
                      backgroundSize: "200% 200%",
                      animation: "gradient 3s ease infinite",
                    } as any
                  }
                />
              ),
              default: (
                <LinearGradient
                  colors={["#3b82f6", "#06b6d4", "#8b5cf6"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  className="w-full h-full"
                />
              ),
            })}
          </View>
          <View className="flex-row flex-grow justify-between items-center">
            <Text className="flex-grow font-heading font-bold text-lg mb-1">
              {service.name}
            </Text>
            <View className="flex-row items-center gap-4">
              <Text>⭐ {service.rating}/5</Text>
              <View className="flex-row items-center gap-1">
                <Ionicons name="people-outline" size={16} color="#64748b" />
                <Text className="text-gray-600 text-sm">
                  {service.totalVotes > 0
                    ? `${service.userRating.toFixed(1)}/5`
                    : "N/A"}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <Text
          className="text-content-secondary text-sm mb-3"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {service.description}
        </Text>

        <View className="flex-grow mb-2">
          <View className="flex-row flex-wrap h-[36px] sm:h-auto overflow-hidden sm:overflow-visible md:overflow-hidden">
            {service.services.map((item, index) => (
              <View
                key={index}
                className="text-content-secondary rounded-full m-1 px-3 py-1 border border-gray-200 items-center justify-center"
              >
                <Text className="text-xs text-content-secondary">{item}</Text>
              </View>
            ))}
            {service.services.length > 3 && (
              <View className="rounded-full m-1 px-3 py-1 hidden md:block border border-gray-200">
                <Text className="text-sm text-content-secondary">
                  +{service.services.length - 3}
                </Text>
              </View>
            )}
          </View>
        </View>

        <View className="flex-row justify-between align-middle ">
          <Pressable
            onPress={handleMap}
            className="max-w-[250px] flex-row items-center rounded-full px-4 py-1 border border-lime-300 hover:bg-lime-100 transition-all"
          >
            <Text className="mr-2">📍</Text>
            <Text
              style={{
                flex: 1,
                overflow: "hidden",
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
              className="text-content-secondary text-xs flex-1"
            >
              {service.address}
            </Text>
          </Pressable>
          <View className="flex-row gap-2">
            <Pressable
              onPress={handleCall}
              className="items-center justify-center rounded-full px-4 pt-2 pb-1 border border-lime-300 hover:bg-lime-100 transition-all"
            >
              <Text className="flex-row items-center justify-center">
                <Ionicons name="call" size={16} color="#16a34a" />
              </Text>
            </Pressable>
            <Pressable
              onPress={onPress}
              className="items-center justify-center rounded-full px-4 pt-2 pb-2 border border-lime-300 hover:bg-lime-100 transition-all"
            >
              <Ionicons name="sparkles" size={16} color="#16a34a" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
