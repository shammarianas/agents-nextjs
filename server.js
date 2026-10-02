const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { createServer } = require("http");
const next = require("next");

const port = process.env.PORT || 3000;
const appDir = __dirname;
const routesManifestPath = path.join(appDir, ".next", "routes-manifest.json");

if (!fs.existsSync(routesManifestPath)) {
  console.log("Next.js build artifacts were not found. Generating production build...");
  try {
    execSync("npx next build", { stdio: "inherit", cwd: appDir });
  } catch (error) {
    console.error("Failed to generate the Next.js production build.");
    process.exit(1);
  }
}

const app = next({ dev: false, dir: appDir });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((request, response) => {
    handle(request, response);
  }).listen(port, () => {
    console.log(`Next.js running on port ${port}`);
  });
}).catch((error) => {
  console.error("Failed to start the Next.js app:", error);
  process.exit(1);
});