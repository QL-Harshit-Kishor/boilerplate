
import {useAppTheme} from '@app/theme';
import {useMemo} from 'react';
import splashScreenStyles from './SplashScreen.style';

const useSplashScreen = () => {
  const theme = useAppTheme();
  const styles = useMemo(() => splashScreenStyles(theme), [theme]);
  return {
    styles
  };
};

export default useSplashScreen;
