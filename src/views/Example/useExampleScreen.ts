
import {useAppTheme} from '@app/theme';
import React, {useMemo} from 'react';
import exampleScreenStyles from './ExampleScreen.style';
import {setAppLanguage} from '@app/i18n';

const useExampleScreen = () => {
  const theme = useAppTheme();
  const styles = useMemo(() => exampleScreenStyles(theme), [theme]);

  // State for count variable
  const [count, setCount] = React.useState(0);

  // Increment Count
  const onIncrementCount = () => {
    setCount(count + 1);
  };

  // Decrement Count
  const onDecrementCount = () => {
    setCount(count - 1);
  };
  const onChangeLanguage = () => {
    setAppLanguage('hi');
  };

  return {
    count,
    onDecrementCount,
    onIncrementCount,
    onChangeLanguage,
    styles
  };
};

export default useExampleScreen;
