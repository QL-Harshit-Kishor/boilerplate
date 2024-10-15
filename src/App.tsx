import React from 'react';
import {StatusBar} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ExampleScreen} from '@app/views';
import {useDeviceTheme} from '@app/hooks';
import {ErrorBoundary} from '@app/components';
import {useAppLangauage} from './i18n';
import {darkTheme, lightTheme} from './theme';
import GlobalIndicator from './components/modal/GlobalIndicator';

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
  return (
    <>
      <PaperProvider theme={theme}>
        {/* This will start screen of app -> SplashScreen */}
        <ExampleScreen />
        <>
          {/* Inside this tag can put all global modals */}
          <GlobalIndicator />
        </>
      </PaperProvider>
    </>

  );
};

export default App;