module.exports = {
  //   prebuild: async () => {
  //     console.log("prebuild");
  //     const rimraf = (await import("rimraf")).default;
  //     rimraf.sync("./build"); // clean up dist folder
  //   },
  postbuild: async () => {
    console.log("postbuild");
    const cpy = (await import("cpy")).default;
    await cpy("src/**/*.json", "dist");
    await cpy("config", "dist");
    // await cpy(
    //   [
    //     "src/**/*.json", // Copy all given files
    //     "!node_modules/", // Ignore already built files
    //   ],
    //   "dist"
    // );
  },
};
