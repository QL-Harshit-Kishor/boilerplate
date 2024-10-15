import {IconType} from '@app/components/shared/AppVectorIcon';
import {useAppTranslation} from '@app/i18n';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import useExampleScreen from './useExampleScreen';
import {AppButton, AppLottieView, AppSvg, AppText, AppVectorIcon} from '@app/components';
import Assets from '@app/assets';
import {useAppTheme} from '@app/theme';
import {rpFont} from '@app/helpers/responsive';
import AppTextInput from '@app/components/shared/AppTextInput';

const ExampleScreen = () => {
  const {count, onDecrementCount, onIncrementCount, onChangeLanguage, styles} = useExampleScreen();
  const t = useAppTranslation();
  const theme = useAppTheme();

  return (
    <View style={styles.container}>
      <Text>Hello {t('welcome')}</Text>
      <AppText fontSize={rpFont(25)}>{theme.myRandomProperty}: {count}</AppText>
      <View style={{width: '70%'}}>
        <AppTextInput variant='standard' error='error' enterKeyHint='done' />
      </View>
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
      <View style={{width: '70%'}}>
        <AppButton
          title="CButton"
          leftIcon={<AppVectorIcon name='home' type={IconType.AntDesign}
            color='red' />}
          onPress={() => {
            //
          }}
        // animated
        // loading
        // disabled
        // outlined
        />
      </View>
      <View >
        {/* Resizing the SVG using width and height props */}
        <AppSvg icon={Assets.svg.APP} height={30} width={30} />
      </View>
      <AppLottieView source={Assets.lottie.LOADER_LOTTIE} loop autoPlay style={{
        height: 250,
        width: 200
      }} />

    </View>
  );
};

export default ExampleScreen;
