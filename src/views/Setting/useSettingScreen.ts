
import {useAppTheme} from '@app/theme';
import {useMemo} from 'react';
import settingScreenStyles from './SettingScreen.style';

const useSettingScreen = () => {
  const theme = useAppTheme();
  const styles = useMemo(() => settingScreenStyles(theme), [theme]);
  return {
    styles
  };
};

export default useSettingScreen;
