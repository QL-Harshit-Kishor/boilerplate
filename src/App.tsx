/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import {StatusBar} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {darkTheme, lightTheme} from './theme';
import i18n, {useAppLangauage} from './i18n';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ExampleScreen} from '@app/views';
import {useDeviceTheme} from './hooks';

const App = () => {

  // Initialize i18n with the language detector and resources
  const initi18 = i18n;
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AppContainer />
    </GestureHandlerRootView>
  );
};


const AppContainer = () => {

  //! initialize and Apply current locale on app start
  useAppLangauage();

  // Get App Mode from settings
  const appTheme = useDeviceTheme();
  // Apply global theme (dark or light)
  const theme = appTheme == 'dark' ? darkTheme : lightTheme;
  // Change bar style according to theme
  const barStyle = appTheme == 'dark' ? 'light-content' : 'dark-content';
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar
          barStyle={barStyle}
          backgroundColor={theme.colors.background}
        />
        <ExampleScreen />
      </PaperProvider>
    </>

  );
};

export default App;