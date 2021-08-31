module.exports = {
  name: 'module1',
  filename: 'remoteEntry.js',
  exposes: {
    './RemoteApp': './src/containers/RemoteApp',
  },
  remotes: {
    module1: `module1@http://localhost:3000/remoteEntry.js`,
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: false,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: false,
    },
  },
};
