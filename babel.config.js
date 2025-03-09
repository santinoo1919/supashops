module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // This is for React Native Reanimated
      "react-native-reanimated/plugin",
      // NativeWind setup
      "nativewind/babel",
    ],
  };
};
