const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      const isProd = env === "production";

      if (isProd) {
        // ✅ Disable source maps (prevents readable code in DevTools)
        webpackConfig.devtool = false;

        // ✅ Ensure aggressive minification & obfuscation
        webpackConfig.optimization.minimizer = [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true, // Remove all console logs
                drop_debugger: true, // Remove debugger statements
                pure_funcs: ["console.info", "console.debug", "console.warn"], // Remove specific console functions
                passes: 3, // Run compression multiple times
              },
              mangle: true, // Shortens variable names
              format: {
                comments: false, // Remove comments
              },
            },
          }),
        ];
      }

      return webpackConfig;
    },
  },
};
