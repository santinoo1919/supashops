import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  useWindowDimensions,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { CarService, carServices } from "@/data/carServices";
import { carWashServices } from "@/data/carWashServices";
import { carPartsServices } from "@/data/carPartsServices";
import ServiceCard from "@/components/ServiceCard";
import { CategoriesContainer } from "@/components/CategoriesContainer";
import { StatusBar } from "expo-status-bar";
import { MotiView } from "moti";
import { router, Link, Stack } from "expo-router";
import { Service } from "@/data/types";
import { ServiceContext } from "@/hooks/ServiceContext";

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  // Calculate number of columns based on screen width
  const numColumns = isDesktop ? 3 : 1;

  // Fixed card width that stays the same on mobile and desktop
  const CARD_WIDTH = 320; // You can adjust this value
  const CARD_MARGIN = 8;

  const [activeIndex, setActiveIndex] = useState(0);
  const [services, setServices] = useState({
    0: carServices,
    1: carPartsServices,
    2: carWashServices,
  });

  const updateRating = (
    serviceId: number,
    category: number,
    rating: number
  ) => {
    console.log("Before update:", services); // Debug log

    setServices((prev: any) => {
      const newServices = [...prev[category as keyof typeof prev]];
      const serviceIndex = newServices.findIndex((s) => s.id === serviceId);

      if (serviceIndex !== -1) {
        const service = newServices[serviceIndex];
        console.log("Found service:", service); // Debug log

        const newTotal = service.totalVotes + 1;
        const newAverage =
          (service.userRating * service.totalVotes + rating) / newTotal;

        newServices[serviceIndex] = {
          ...service,
          userRating: Number(newAverage.toFixed(1)),
          totalVotes: newTotal,
        };

        console.log("Updated service:", newServices[serviceIndex]); // Debug log
      }

      return { ...prev, [category]: newServices };
    });
  };

  // Add this effect to monitor services changes
  useEffect(() => {
    console.log("Services updated:", services);
  }, [services]);

  const currentServices = services[
    activeIndex as keyof typeof services
  ] as Service[];

  const bgColors = {
    0: "bg-lime-50", // Workshop
    1: "bg-indigo-50", // CarParts
    2: "bg-cyan-50", // CarWash
  };

  const renderItem = ({ item }: { item: Service }) => (
    <View
      style={{
        width: CARD_WIDTH,
        marginHorizontal: CARD_MARGIN,
        marginBottom: 16,
      }}
    >
      <ServiceCard
        service={item}
        variant={activeIndex as 0 | 1 | 2}
        onPress={() =>
          router.push({
            pathname: "/modal",
            params: {
              serviceId: item.id,
              category: activeIndex,
            },
          })
        }
      />
    </View>
  );

  return (
    <>
      <Stack.Screen
        options={{
          title: "Tunis Car Services",
          headerStyle: {
            backgroundColor: "#3b82f6",
          },
          headerTintColor: "#fff",
        }}
      />
      <ServiceContext.Provider value={{ updateRating }}>
        <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                width: "100%",
                maxWidth: isDesktop ? 1200 : "100%",
                paddingHorizontal: 16,
              }}
            >
              {isDesktop ? (
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {carServices.map((service) => (
                    <View
                      key={service.id}
                      style={{
                        width: CARD_WIDTH,
                        marginHorizontal: CARD_MARGIN,
                        marginBottom: 16,
                      }}
                    >
                      <ServiceCard
                        service={service}
                        variant={activeIndex as 0 | 1 | 2}
                        onPress={() =>
                          router.push({
                            pathname: "/modal",
                            params: {
                              serviceId: service.id,
                              category: activeIndex,
                            },
                          })
                        }
                      />
                    </View>
                  ))}
                </View>
              ) : (
                <FlatList
                  data={carServices}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingVertical: 16,
                    alignItems: "center",
                  }}
                />
              )}

              <View style={{ alignItems: "center", marginVertical: 20 }}>
                <Link href="/about" asChild>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#3b82f6",
                      paddingVertical: 12,
                      paddingHorizontal: 24,
                      borderRadius: 8,
                      marginBottom: 16,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      About Us
                    </Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </View>
          <StatusBar style="light" />
        </View>
      </ServiceContext.Provider>
    </>
  );
}
