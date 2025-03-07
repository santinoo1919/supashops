import { Tabs } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { Link, usePathname } from "expo-router";

export default function TabsLayoutWeb() {
  const pathname = usePathname();

  const CustomHeader = () => (
    <View className="absolute top-0 left-0 right-0 max-w-screen-lg mx-auto flex-row items-center justify-between px-6 py-4 bg-transparent z-50">
      <View className="flex-row items-center align-middle gap-2 ">
        <Text className="text-slate-800 font-bold text-3xl font-brand">
          SupaShops
        </Text>
        <View className="flex-row items-center align-middle gap-1 rounded-full px-3 py-1 bg-slate-600">
          <Text className="text-slate-100 font-medium text-xs">Tunis</Text>
          <Text className="text-sm">🇹🇳</Text>
        </View>
      </View>
      <View className="flex-row gap-6">
        <Link
          href="/"
          className={`text-content ${pathname === "/" ? "font-bold" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`text-content ${pathname === "/about" ? "font-bold" : ""}`}
        >
          About
        </Link>
      </View>
    </View>
  );
  return (
    <Tabs
      screenOptions={{
        header: () => <CustomHeader />,
        tabBarStyle: { display: "none" },
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="about" />
    </Tabs>
  );
}
