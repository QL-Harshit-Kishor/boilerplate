import React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {useDeviceTheme} from '@app/hooks';
import {navigationRef} from './NavigationService';
import StackNavigator from './StackNavigator';

const Navigator = () => {
  // Get App Theme from settings
  const deviceTheme = useDeviceTheme();
  // Apply global theme (dark or light)
  const theme = deviceTheme == 'dark' ? NavigationDarkTheme : NavigationDefaultTheme;

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={theme}
    >
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
