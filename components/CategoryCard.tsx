import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ViewStyle } from "react-native";

type CategoryCardProps = {
  category: {
    id: number;
    title: string;
    icon: string;
    color: string;
  };
  style?: ViewStyle;
};

export function CategoryCard({ category, style }: CategoryCardProps) {
  return (
    <View
      style={style}
      className="bg-white w-20 h-20 border-4 border-lime-300 rounded-2xl p-6 shadow-sm place-content-center cursor-grab active:cursor-grabbing"
    >
      <View className="flex-col items-center gap-1">
        <Ionicons
          name={category.icon as any}
          size={24}
          color={category.color}
        />
        <Text className="text-xs font-bold">{category.title}</Text>
      </View>
      <Text className=" text-content-secondary">
        {category.title === "Workshop"}
        {category.title === "CarWash"}
        {category.title === "CarParts"}
      </Text>
    </View>
  );
}
