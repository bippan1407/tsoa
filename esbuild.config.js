const esbuild = require("esbuild");
const esbuildPluginTsc = require("esbuild-plugin-tsc");

esbuild.build({
  // have to manually go through each files
  entryPoints: ["src"],
  bundle: false,
  outdir: "dist",
  format: "esm",
  platform: "node",
  target: "esnext",
  plugins: [esbuildPluginTsc()],
});
