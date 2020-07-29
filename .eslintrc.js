module.exports = {
  env: {
    'react-native/react-native': true,
    es2020: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'jest'],
  rules: {
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/jsx-props-no-spreading': 'off',
  },
};
