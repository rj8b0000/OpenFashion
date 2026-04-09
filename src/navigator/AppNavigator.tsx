import { Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
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
import OurStoryScreen from '../screens/General/OurStoryScreen';
import ContactUsScreen from '../screens/General/ContactUsScreen';
import Error404Screen from '../screens/General/Error404Screen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';

const { width } = Dimensions.get('window');
const isTablet = width > 600;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </Stack.Navigator>
);

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
    <Stack.Screen name="OurStory" component={OurStoryScreen} />
    <Stack.Screen name="ContactUs" component={ContactUsScreen} />
    <Stack.Screen name="Error404" component={Error404Screen} />
  </Stack.Navigator>
);

const NavigationStack = () => {
  const { isAuthenticated } = useSelector((state: any) => state.auth);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="Auth" component={AuthStack} />
      ) : (
        <Stack.Screen name="App" component={AppDrawer} />
      )}
    </Stack.Navigator>
  );
};

const AppDrawer = () => (
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
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
