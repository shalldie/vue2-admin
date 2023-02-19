const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    publicPath: process.env.BASE_URL,
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        setupMiddlewares: (middlewares, devServer) => {
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined');
            }
            // 只有开启了mock才执行
            if (process.env.ENABLE_MOCK === 'true') {
                middlewares.push({
                    name: 'mock-api',
                    path: process.env.VUE_APP_API_PREFIX,
                    middleware: require('./mock')
                });
            }

            return middlewares;
        }
    },
    css: {
        loaderOptions: {
            scss: {
                additionalData: [
                    //

                    `@import "~@/styles/variables.scss";`,
                    `@import "~@/styles/mixin.scss";`
                ].join('\n')
            }
        }
    }
});
