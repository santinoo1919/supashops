import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { CarService, carServices } from "@/data/carServices";
import { carWashServices } from "@/data/carWashServices";
import { carPartsServices } from "@/data/carPartsServices";
import ServiceCard from "@/components/ServiceCard";
import { CategoriesContainer } from "@/components/CategoriesContainer";
import { StatusBar } from "expo-status-bar";
import { MotiView } from "moti";
import { router } from "expo-router";
import { Service } from "@/data/types";
import { ServiceContext } from "@/hooks/ServiceContext";

export default function HomePage() {
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

    setServices((prev) => {
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

  return (
    <ServiceContext.Provider value={{ updateRating }}>
      <View
        className={`flex-1 p-8   ${
          bgColors[activeIndex as keyof typeof bgColors]
        }`}
      >
        <StatusBar style="auto" />

        <ScrollView
          className="flex-1 mt-2 items-center"
          showsVerticalScrollIndicator={false}
        >
          <View className="w-full flex-col gap-4">
            <CategoriesContainer
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </View>
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "timing", duration: 300 }}
            key={activeIndex} // Add this to force re-render
          >
            {currentServices.map((service, index) => (
              <MotiView
                key={service.id}
                from={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: "timing",
                  duration: 500,
                  delay: index * 200,
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
                <View className="h-[1px] bg-gray-200" />
              </MotiView>
            ))}
          </MotiView>
        </ScrollView>
      </View>
    </ServiceContext.Provider>
  );
}
