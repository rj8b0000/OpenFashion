import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppNavigator from './src/navigator/AppNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from './src/theme/styles';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
