import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Blog: undefined;
  Category: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
