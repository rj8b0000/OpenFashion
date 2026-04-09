import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Blog: undefined;
  Category: undefined;
  PDP: undefined;
  CheckoutScreen: undefined;
  ShippingAddress: undefined;
  AddNewAddress: undefined;
  AddNewCard: undefined;
  FinalCheckout: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
