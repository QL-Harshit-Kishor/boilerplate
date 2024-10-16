
import {useAppTheme} from '@app/theme';
import {useMemo} from 'react';
import homeScreenStyles from './HomeScreen.style';

const useHomeScreen = () => {
  const theme = useAppTheme();
  const styles = useMemo(() => homeScreenStyles(theme), [theme]);
  return {
    styles
  };
};

export default useHomeScreen;
