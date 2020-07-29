export default {
  name: 'spendzer',
  slug: 'spendzer',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './src/assets/icon.png',
  splash: {
    image: './src/assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: false,
  },
  web: {
    favicon: './src/assets/favicon.png',
  },
  extra: {
    NODE_ENV: process.env.NODE_ENV,
  },
};
