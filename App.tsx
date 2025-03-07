import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import ServiceCard from "./components/ServiceCard";
import { carServices } from "./data/carServices";
import "./global.css";

export default function App(): JSX.Element {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="pt-12 pb-4 bg-blue-600">
        <Text className="text-2xl font-bold text-white text-center">
          Tunis Car Services
        </Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        {carServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}

        <View className="h-4" />
      </ScrollView>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}
