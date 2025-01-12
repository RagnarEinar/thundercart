const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      // webpackConfig.plugins.push(
      //   new ModuleFederationPlugin({
      //     name: "ThunderCartWrapperApp", // Unique name for the host
      //     remotes: {
      //       FirstChildApp: "FirstChildApp@http://localhost:3001/remoteEntry.js", // Import Child MFE
      //     },
      //     shared: {
      //       react: { singleton: true, requiredVersion: "^18.3.1" },
      //       "react-dom": { singleton: true, requiredVersion: "^18.3.1" },
      //     },
      //   })
      // );
      if (env === 'production') {
        // Use terser-webpack-plugin to remove console logs
        webpackConfig.optimization.minimizer = [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true, // Remove console logs
              },
            },
          }),
        ];
      }
      return webpackConfig;
    },
  },
};
