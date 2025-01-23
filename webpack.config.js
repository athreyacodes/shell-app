const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'shell-app',

  exposes: {
    './Component': './src/app/app.component.ts',
  },

  remotes: {
    portfolio: "portfolio@/portfolio/remoteEntry.js", // Load Portfolio MFE
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
