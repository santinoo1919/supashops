import { View } from "react-native";
import Swiper from "react-native-deck-swiper";
import { CategoryCard } from "./CategoryCard";
import { Platform } from "react-native";

type CategoriesContainerProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export const categories = [
  {
    id: 0,
    title: "Workshop",
    icon: "build-outline",
    color: "#16a34a",
  },
  {
    id: 1,
    title: "CarParts",
    icon: "bag-handle-outline",
    color: "#818cf8",
  },
  {
    id: 2,
    title: "CarWash",
    icon: "water-outline",
    color: "#22d3ee",
  },
];

export function CategoriesContainer({
  activeIndex,
  setActiveIndex,
}: CategoriesContainerProps) {
  // For web, we'll use a simplified version since Swiper might have issues on web
  if (Platform.OS === "web") {
    return (
      <View
        style={{
          height: 100,
          width: "100%",
          flexDirection: "row",
          marginBottom: 64,
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        {categories.map((category, index) => (
          <View
            key={category.id}
            style={{
              opacity: activeIndex === index ? 1 : 0.7,
              transform: [
                { scale: activeIndex === index ? 1 : 0.85 },
                {
                  rotate: index === 1 ? "5deg" : index === 2 ? "-5deg" : "0deg",
                },
                {
                  translateX: index === 1 ? 20 : index === 2 ? -20 : 0,
                },
              ],
            }}
          >
            <CategoryCard category={category} style={{}} />
          </View>
        ))}
      </View>
    );
  }

  // For mobile, use the original Swiper implementation
  return (
    <View
      style={{
        height: 100,
        width: "100%",
        flexDirection: "row",
        marginBottom: 64,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Swiper
        cards={categories}
        renderCard={(category: any) => (
          <CategoryCard
            category={category}
            style={{
              transform: [
                {
                  translateX:
                    category.id === 1 ? 20 : category.id === 2 ? -20 : 0,
                },
                {
                  rotate:
                    category.id === 1
                      ? "5deg"
                      : category.id === 2
                      ? "-5deg"
                      : "0deg",
                },
              ],
            }}
          />
        )}
        cardIndex={activeIndex}
        stackSize={3}
        stackScale={2}
        stackSeparation={-3}
        animateCardOpacity
        swipeBackCard
        verticalSwipe={false}
        horizontalThreshold={50}
        outputRotationRange={["-10deg", "0deg", "10deg"]}
        swipeAnimationDuration={350}
        infinite
        backgroundColor="transparent"
        disableBottomSwipe
        disableTopSwipe
        onSwipedLeft={(cardIndex: number) => {
          setActiveIndex((cardIndex + 1) % 3); // Always go forward
        }}
        onSwipedRight={(cardIndex: number) => {
          setActiveIndex((cardIndex + 1) % 3); // Same as left swipe
        }}
        useViewOverflow={false}
      />
    </View>
  );
}
