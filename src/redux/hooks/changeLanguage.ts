// redux/hooks.ts

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { setLanguage } from '../slice/languageSlice';
import i18n from 'i18next';

// Typed dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Typed selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppLanguage = () => {
  const dispatch = useDispatch();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    dispatch(setLanguage(lang));
  };

  return { changeLanguage };
};
