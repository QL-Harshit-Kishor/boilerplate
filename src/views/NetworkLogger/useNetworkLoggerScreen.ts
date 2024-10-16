
import {useAppTheme} from '@app/theme';
import {useMemo} from 'react';
import networkLoggerScreenStyles from './NetworkLoggerScreen.style';

const useNetworkLoggerScreen = () => {
  const theme = useAppTheme();
  const styles = useMemo(() => networkLoggerScreenStyles(theme), [theme]);
  return {
    styles
  };
};

export default useNetworkLoggerScreen;
