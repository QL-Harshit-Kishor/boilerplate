import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useDeviceTheme} from '@app/hooks';
import {ErrorBoundary} from '@app/components';
import {useAppLangauage} from './i18n';
import {darkTheme, lightTheme} from './theme';
import GlobalIndicator from './components/modal/GlobalIndicator';
import {SplashScreen} from './views';
import {Provider as ReduxStoreProvider} from 'react-redux';
import {persistor, store} from './store/redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <>
      <ErrorBoundary catchErrors='always'>
        <GestureHandlerRootView style={{flex: 1}}>
          <ReduxStoreProvider store={store} >
            <PersistGate loading={null} persistor={persistor}>
              <AppContainer />
            </PersistGate>
          </ReduxStoreProvider>
        </GestureHandlerRootView>
      </ErrorBoundary>
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
        <SplashScreen />
        <>
          {/* Inside this tag can put all global modals */}
          <GlobalIndicator />
        </>
      </PaperProvider>
    </>

  );
};

export default App;