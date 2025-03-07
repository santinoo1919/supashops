import { View } from "react-native";
import Swiper from "react-native-deck-swiper";
import { CategoryCard } from "./CategoryCard";

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
  return (
    <View className="h-[100px] w-full flex-row mb-16 place-content-center items-center justify-center">
      <Swiper
        cards={categories}
        renderCard={(category) => (
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
        onSwipedLeft={(cardIndex) => {
          setActiveIndex((cardIndex + 1) % 3); // Always go forward
        }}
        onSwipedRight={(cardIndex) => {
          setActiveIndex((cardIndex + 1) % 3); // Same as left swipe
        }}
        useViewOverflow={false}
      />
    </View>
  );
}
