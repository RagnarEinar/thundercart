const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "WrapperApp", // Unique name for the host
          remotes: {
            FirstChildApp: "FirstChildApp@http://localhost:3001/remoteEntry.js", // Import Child MFE
          },
          shared: {
            react: { singleton: true, requiredVersion: "^18.3.1" },
            "react-dom": { singleton: true, requiredVersion: "^18.3.1" },
          },
        })
      );
      return webpackConfig;
    },
  },
};
