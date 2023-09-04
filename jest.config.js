module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|stack)',
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|native)',
    'node_modules/(?!(jest-)?@?react-native|react-native-gesture-handler)',
  ],
};
