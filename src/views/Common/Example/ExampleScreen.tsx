import {Pressable, Text, View} from 'react-native';
import React from 'react';
import useExampleScreen from './useExampleScreen';
import {useAppTranslation} from '@app/i18n';

const ExampleScreen = () => {
  const {count, onDecrementCount, onIncrementCount, onChangeLanguage, styles} = useExampleScreen();
  const t = useAppTranslation();
  return (
    <View style={styles.container}>
      <Text>Hello {t('welcome')}</Text>
      <Text>Count: {count}</Text>
      <Pressable onPress={onIncrementCount}>
        <View>
          <Text>Increment</Text>
        </View>
      </Pressable>
      <Pressable onPress={onDecrementCount}>
        <View>
          <Text>Decrement</Text>
        </View>
      </Pressable>
      <Pressable onPress={onChangeLanguage}>
        <View>
          <Text>Change Lang</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ExampleScreen;
