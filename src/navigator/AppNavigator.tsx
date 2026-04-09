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
import ProductDetailScreen from '../screens/Products/ProductDetailScreen';
import CheckoutScreen from '../screens/Checkout/CheckoutScreen';
import ShippingAddress from '../screens/Checkout/screens/ShippingAddress';
import AddNewAddress from '../screens/Checkout/screens/AddNewAddress';
import AddNewCard from '../screens/Checkout/screens/AddNewCard';
import FinalCheckout from '../screens/Checkout/screens/FinalCheckout';
import SearchScreen from '../screens/Search/SearchScreen';
import SearchViewScreen from '../screens/Search/screens/SearchViewScreen';

const { width } = Dimensions.get('window');
const isTablet = width > 600;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const MainStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Blog" component={BlogScreen} />
    <Stack.Screen name="Category" component={CategoryScreen} />
    <Stack.Screen name="PDP" component={ProductDetailScreen} />
    <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    <Stack.Screen name="ShippingAddress" component={ShippingAddress} />
    <Stack.Screen name="AddNewAddress" component={AddNewAddress} />
    <Stack.Screen name="AddNewCard" component={AddNewCard} />
    <Stack.Screen name="FinalCheckout" component={FinalCheckout} />
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="SearchView" component={SearchViewScreen} />
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
