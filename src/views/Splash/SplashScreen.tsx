
import React from 'react';
import { View, Text } from 'react-native';
import useSplashScreen from './useSplashScreen';

const SplashScreen = () => {
  const { styles } = useSplashScreen();

  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default React.memo(SplashScreen);
