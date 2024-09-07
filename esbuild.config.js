const { build } = require("esbuild");

let postBuildPlugin = {
  name: "post-build",
  setup(build) {
    build.onEnd(async (result) => {
      console.log(`build ended with ${result.errors.length} errors`);
      if (!result.errors.length) {
        console.log("postbuild");
        const cpy = (await import("cpy")).default;
        await cpy("src/**/*.json", "dist");
      }
    });
  },
};

build({
  entryPoints: ["src/**"],
  bundle: false,
  outdir: "dist",
  format: "cjs",
  platform: "node",
  target: "esnext",
  sourcemap: "both",
  plugins: [postBuildPlugin],
});
