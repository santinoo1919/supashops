import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { useUpdateServiceRating } from "@/hooks/ServiceContext";

export default function Modal() {
  const [rating, setRating] = useState(0);
  const { updateRating } = useUpdateServiceRating();
  const { serviceId, category } = useLocalSearchParams<{
    serviceId: string;
    category: string;
  }>();

  const handleSubmit = () => {
    console.log("Submitting rating:", { serviceId, category, rating }); // Debug log
    updateRating(Number(serviceId), Number(category), rating);
    router.back();
  };

  return (
    <View className="flex-1 justify-center items-center bg-black/50">
      <View className="bg-white w-[90%] sm:w-1/4 rounded-lg p-6 mx-4 relative h-auto">
        {/* Close Button */}
        <Pressable
          onPress={() => router.back()}
          className="absolute right-4 top-4 cursor-pointer"
        >
          <Ionicons name="close" size={24} color="#666" />
        </Pressable>

        {/* Modal Title */}
        <Text className="text-xl font-bold mb-4 pr-8">Add Review</Text>

        {/* Modal Content */}
        <View>
          <View className="flex-row justify-center gap-2 mb-6 cursor-pointer">
            {[1, 2, 3, 4, 5].map((star) => (
              <Pressable key={star} onPress={() => setRating(star)}>
                <Ionicons
                  name={rating >= star ? "star" : "star-outline"}
                  size={32}
                  color={rating >= star ? "#eab308" : "#94a3b8"}
                />
              </Pressable>
            ))}
          </View>

          <Pressable
            className={`py-3 px-6 rounded-full ${
              rating > 0 ? "bg-lime-500" : "bg-gray-200"
            }`}
            disabled={rating === 0}
            onPress={handleSubmit}
          >
            <Text
              className={`text-center font-bold ${
                rating > 0 ? "text-white" : "text-gray-400"
              }`}
            >
              Submit
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
