import { MotiView } from "moti";
import React from "react";
import { ScrollView, View, Text, useWindowDimensions } from "react-native";

export default function AboutPage() {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  return (
    <View className="flex-1 bg-lime-50">
      <ScrollView className="flex-1 pt-4">
        <View className="flex items-center px-4">
          <MotiView
            from={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
          >
            <View
              className={`p-5 border border-lime-200 rounded-lg w-full ${
                isDesktop ? "max-w-[600px] my-24 rounded-xl shadow-xs" : "my-24"
              }`}
            >
              <View className="space-y-4">
                <Text className="text-2xl font-brand font-bold text-slate-800 text-center">
                  About SupaShops
                </Text>

                <Text className="mt-4 text-content-secondary text-sm">
                  Finding hyperlocal services on Google is too noisy. Competing
                  with ads, unrelated stuff plus not enough reviews on Maps for
                  emerging countries.
                </Text>
                <Text className="text-content-secondary text-sm">
                  People are not used to leave reviews and read them.
                  Complicated and no incentives. We need a simple place to find
                  reliable services around.
                </Text>

                <Text className="text-content-secondary text-sm">
                  Supashops is a simple place to find already curated services.
                  More you review, more you unlock places hidden to others.
                </Text>

                <Text className="text-content-secondary text-sm">
                  If you'd like to add your business to our directory or have
                  any questions, please contact us at: contact@supashops.com
                </Text>

                <View className="my-4 h-px bg-lime-200" />

                <Text className="text-gray-500 text-center mt-4">
                  Version 1.0.0
                </Text>
              </View>
            </View>
          </MotiView>
        </View>
      </ScrollView>
    </View>
  );
}
