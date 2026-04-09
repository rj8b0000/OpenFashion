import { TextInputProps } from 'react-native';

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: any;
}

export interface IProductComponentProps {
  item: Product;
  isGrid: boolean;
  isCheckout?: boolean;
}
export interface IHeader {
  backgroundColor: any;
}
export interface PLPHome {
  id: string;
  name: string;
  price: number;
  image: any;
}
export interface Tags {
  id: string;
  name: string;
}

export interface IActionRowProps {
  title: string;
  Icon?: React.ReactNode;
  onPress?: () => void;
}

export interface IAddress {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
}

export interface IAddressCardProps {
  item: IAddress;
  containerStyle?: any;
}

export interface ICreditCardPreviewProps {
  name: string;
  number: string;
  expiry: string;
}

export interface IFilterBarProps {
  isGrid: boolean;
  setIsGrid: (value: boolean | ((prev: boolean) => boolean)) => void;
  onFilterPress?: () => void;
  totalItems: number;
  title?: string;
  hideNewBadge?: boolean;
}

export interface IProductHomeComponentProps {
  item: PLPHome;
}

export interface INewArrivalProductsProps {
  item: Product;
}

export interface ITagComponentProps {
  item: Tags;
}

export interface ICustomSliderProps {
  sliderData: any[];
}

export interface IViewFullImageProps {
  visible: boolean;
  image: any;
  onClose: () => void;
}

export interface IFilterModalProps {
  isVisible: boolean;
  onClose: () => void;
  categories: string[];
  selectedCategories: string[];
  onApply: (selected: string[]) => void;
}

export interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface IPaymentSuccessModalProps {
  isVisible: boolean;
  onClose: () => void;
  onBackToHome: () => void;
}

export type ICustomTextInputProps = TextInputProps;

export interface IHeaderProps {
  animatedStyle?: IHeader;
}

export interface IMenuProps {
  onClose: () => void;
}

export interface ITitleProps {
  title: string;
}

export interface IBlog {
  image: any;
  title: string;
  description: string;
  date: string;
}

export interface IBlogComponentProps {
  item: IBlog;
}

export interface ISearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
  onSubmitEditing?: () => void;
}

export interface ISearchHeaderProps {
  onClose: () => void;
  searchQuery: string;
}
