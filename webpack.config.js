const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'shell-app',

  // remotes: {
  //   portfolio: "portfolio@https://portfolio-angular-d4f1f.firebaseapp.com/remoteEntry.js" // Correct path-based loading
  // },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
