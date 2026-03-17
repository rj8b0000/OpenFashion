import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppNavigator from './src/navigator/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './src/i18n';
import i18n from 'i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import SplashScreen from './src/screens/Splash/SplashScreen';

const App = () => {
  const [ready, setReady] = useState<boolean>(false);
  useEffect(() => {
    if (i18n.isInitialized) {
      setReady(true);
    } else {
      i18n.on('initialized', () => setReady(true));
    }
  }, []);
  if (!ready) {
    <SplashScreen />;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
