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
      style={[
        {
          backgroundColor: "white",
          width: 80,
          height: 80,
          borderWidth: 4,
          borderColor: "#a3e635", // lime-300
          borderRadius: 16,
          padding: 24,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 2,
          shadowOffset: { width: 0, height: 1 },
          elevation: 2,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      <View style={{ flexDirection: "column", alignItems: "center", gap: 4 }}>
        <Ionicons
          name={category.icon as any}
          size={24}
          color={category.color}
        />
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>
          {category.title}
        </Text>
      </View>
    </View>
  );
}
