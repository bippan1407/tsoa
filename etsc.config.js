module.exports = {
  //   prebuild: async () => {
  //     console.log("prebuild");
  //     const rimraf = (await import("rimraf")).default;
  //     rimraf.sync("./build"); // clean up dist folder
  //   },
  postbuild: async () => {
    console.log("postbuild");
    const cpy = (await import("cpy")).default;
    await cpy(
      [
        "./**/*.json", // Copy all .graphql files
        "!node_modules/", // Ignore already built files
      ],
      "dist"
    );
  },
};
