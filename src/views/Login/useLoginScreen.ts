
import {useAppTheme} from '@app/theme';
import {useMemo} from 'react';
import loginScreenStyles from './LoginScreen.style';

const useLoginScreen = () => {
  const theme = useAppTheme();
  const styles = useMemo(() => loginScreenStyles(theme), [theme]);
  return {
    styles
  };
};

export default useLoginScreen;
