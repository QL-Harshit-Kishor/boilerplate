import {useTheme} from 'react-native-paper';
import {
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';

const ColorConst = {
  white: '#FFFFFF',
  black: '#000000',
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  gray: '#808080',
  yellow: '#FFFF00',
  transparent: 'transparent',
};

const lightTheme = {
  ...MD3LightTheme,
  // Specify custom property
  themeType: 'light',
  // Specify custom property in nested object
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