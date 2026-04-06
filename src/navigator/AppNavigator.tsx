import { Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import BlogScreen from '../screens/Blog/BlogScreen';
import Menu from '../globalComponents/Menu';
import CategoryScreen from '../screens/Category/CategoryScreen';
import { RootStackParamList } from './types';

const { width } = Dimensions.get('window');
const isTablet = width > 600;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const MainStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Blog"
      component={BlogScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Category"
      component={CategoryScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => (
          <Menu onClose={() => props.navigation.closeDrawer()} />
        )}
        screenOptions={{
          headerShown: false,
          drawerType: 'front',
          drawerStyle: {
            width: isTablet ? '60%' : '85%',
          },
        }}
      >
        <Drawer.Screen name="Main" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
