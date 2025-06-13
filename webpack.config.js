const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const dev = {
  portfolio: "https://localhost:4201/remoteEntry.js",
};
const prod = {
  portfolio: "https://portfolio-dev-5f375.web.app/remoteEntry.js",
};

module.exports = withModuleFederationPlugin({
  remotes: prod,

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
