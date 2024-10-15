import Assets from '@app/assets';
import {configureFonts, useTheme} from 'react-native-paper';
import {
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';
import {MD3Type} from 'react-native-paper/lib/typescript/types';

const ColorConst = {
  white: '#FFFFFF',
  black: '#000000',
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  gray: '#808080',
  yellow: '#FFFF00',
  transparent: 'transparent',
  lightGray: '#D3D3D3',
  darkGray: '#A9A9A9',
  orange: '#FFA500',
  purple: '#800080',
  pink: '#FFC0CB',
  brown: '#A52A2A',
};

const fontConfig: Record<string, MD3Type> = {
  regular: {
    fontFamily: Assets.font.Roboto.regular,
    letterSpacing: 1,
    fontWeight: 'normal',
    lineHeight: 16,
    fontSize: 14,
  },
  medium: {
    fontFamily: Assets.font.Roboto.medium,
    letterSpacing: 0.5,
    fontWeight: '500',
    lineHeight: 16,
    fontSize: 14,
  },
  bold: {
    fontFamily: Assets.font.Roboto.bold,
    letterSpacing: 0,
    fontWeight: 'bold',
    lineHeight: 16,
    fontSize: 14,
  },
};

const lightTheme = {
  ...MD3LightTheme,
  // Specify custom property
  themeType: 'light',
  // Specify custom property in nested object
  myRandomProperty: 'Light Mode',
  fonts: configureFonts({
    config: fontConfig
  }),
  colors: {
    ...MD3LightTheme.colors,
    ...ColorConst,
    primary: '#3498db',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3',
  },

};


const darkTheme = {
  ...MD3DarkTheme,
  themeType: 'dark',
  myRandomProperty: 'Dark Mode',
  fonts: configureFonts({
    config: fontConfig
  }),
  colors: {
    ...MD3DarkTheme.colors,
    ...ColorConst,
    primary: '#3498db',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3',
  },
};




const useAppTheme = () => {
  const theme = useTheme<AppTheme>();
  return theme;
};

export {
  ColorConst,
  useAppTheme,
  lightTheme,
  darkTheme,
};