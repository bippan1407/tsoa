Using [tsoa](https://tsoa-community.github.io/docs/getting-started.html) to create API Documentation

All repos will be using TSOA along with wrapper around esbuild or esbuild.

- Check branch [master](https://github.com/bippan1407/tsoa/tree/master) using tsoa and [esbuild-node-tsc](), in case you dont want to configure esbuild options.
- Check branch [esbuild](https://github.com/bippan1407/tsoa/tree/esbuild) using tsoa and [esbuild](), if you are familiar with esbuild options you can use esbuild, to handle some cases plugins needs to be created you can create your own plugin, have added a plugin in repo.
- Check branch [test-with-js](https://github.com/bippan1407/tsoa/tree/test-with-js) using tsoa with existing projects written in JS, tsoa will work with TS so if you want to migrate to TS you can gradually migrate your existing project at your own pace without affecting the existing code. 