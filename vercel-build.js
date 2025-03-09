const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// First fix the babel config if needed
try {
  // Run the export command
  execSync("npx expo export --platform web", { stdio: "inherit" });
} catch (error) {
  console.error("Build failed, trying to fix babel config...");

  // Try to fix node_modules/expo-router/entry.js if that's the issue
  const routerEntryPath = path.join(
    __dirname,
    "node_modules/expo-router/entry.js"
  );
  if (fs.existsSync(routerEntryPath)) {
    const routerEntry = fs.readFileSync(routerEntryPath, "utf8");
    // Create backup
    fs.writeFileSync(`${routerEntryPath}.backup`, routerEntry);

    // Attempt fix - modify the file to avoid Babel issues
    const fixedContent = routerEntry.replace(/\.plugins\b/, "plugins");
    fs.writeFileSync(routerEntryPath, fixedContent);

    // Try again
    execSync("npx expo export --platform web", { stdio: "inherit" });
  }
}
