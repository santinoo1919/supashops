// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add support for .web.js files
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  "web.js",
  "web.jsx",
  "web.ts",
  "web.tsx",
];

// If you're using NativeWind, uncomment this line
// const { withNativeWind } = require("nativewind/metro");
// module.exports = withNativeWind(config, { input: "./global.css" });

module.exports = config;
