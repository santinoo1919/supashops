module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // This is for React Native Reanimated
      "react-native-reanimated/plugin",
      // NativeWind setup
      "nativewind/babel",
      // Add this to fix expo-router compatibility
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
