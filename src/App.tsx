import React from 'react';
import {StatusBar} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ExampleScreen} from '@app/views';
import {useDeviceTheme} from '@app/hooks';
import {ErrorBoundary} from '@app/components';
import {useAppLangauage} from './i18n';
import {darkTheme, lightTheme} from './theme';

const App = () => {
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <ErrorBoundary catchErrors='always'>
          <AppContainer />
        </ErrorBoundary>
      </GestureHandlerRootView>
    </>

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