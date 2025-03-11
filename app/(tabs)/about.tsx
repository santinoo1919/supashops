import React from "react";
import { ScrollView, View, Text } from "react-native";
import { useWindowDimensions } from "react-native";

export default function AboutPage() {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  return (
    <View className="flex-1 bg-lime-50">
      <ScrollView className="pt-16 px-8">
        <View className="items-center">
          <View
            className={`p-5 rounded-xl border-2 border-lime-200 w-full ${
              isDesktop ? "max-w-[500px] my-8 rounded-xl" : "my-0"
            }`}
          >
            <View className="space-y-4">
              <Text className="text-3xl font-bold text-center">
                About Tunis Car Services
              </Text>

              <Text className="mt-4">
                Welcome to Tunis Car Services, your trusted directory for
                finding the best automotive services in Tunis.
              </Text>

              <Text>
                Our mission is to connect car owners with reliable, high-quality
                service providers throughout the city. Whether you need routine
                maintenance, emergency repairs, or specialized services for
                luxury vehicles, our directory helps you find the right
                professionals for the job.
              </Text>

              <Text className="text-xl font-semibold mt-4">Our Features</Text>
              <Text>
                • Comprehensive listings of verified car service providers{"\n"}
                • Detailed information about services offered{"\n"}• Direct
                contact options{"\n"}• Location information with map integration
              </Text>

              <Text className="text-xl font-semibold mt-4">Contact Us</Text>
              <Text>
                If you'd like to add your business to our directory or have any
                questions, please contact us at:{"\n"}
                contact@tuniscarservices.com
              </Text>

              <View className="h-px bg-gray-200 my-4" />

              <Text className="text-gray-500 text-center mt-4">
                Version 1.0.0
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
