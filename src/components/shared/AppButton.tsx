import {rpHeight, rpWidth} from '@app/helpers/responsive';
import {useAppTheme} from '@app/theme';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
  Text,
} from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const AnimatedButtonComponent =
  Animated.createAnimatedComponent(TouchableOpacity);

interface ExtraButtonProps {
  buttonContainerStyle?: StyleProp<ViewStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title?: React.ReactNode;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
}

export type AnimatedButtonProps = Omit<
  TouchableOpacityProps,
  'onPressIn' | 'onPressOut' | 'style'
> & {
  containerStyle?: StyleProp<ViewStyle>;
};

export type ButtonProps = AnimatedButtonProps & ExtraButtonProps;

export const AnimatedTouchableOpacity = React.memo(
  (props: AnimatedButtonProps) => {
    const {containerStyle} = props;
    const scaleValue = useSharedValue(1);

    const animatedButtonStyle = useAnimatedStyle(() => {
      return {
        transform: [{scale: scaleValue.value}],
      };
    });

    return (
      <AnimatedButtonComponent
        style={[containerStyle, animatedButtonStyle]}
        onPressIn={() => (scaleValue.value = withSpring(0.99))}
        onPressOut={() => (scaleValue.value = withSpring(1))}
        activeOpacity={0.8}
        {...props}>
        {props.children}
      </AnimatedButtonComponent>
    );
  }
);

const AppButton = React.memo((props: ButtonProps) => {
  const {buttonContainerStyle, title, titleContainerStyle, titleStyle} = props;
  const theme = useAppTheme();
  const styles = buttonStyles(theme);

  return (
    <AnimatedTouchableOpacity
      containerStyle={[styles.buttonContainer, buttonContainerStyle]}
      {...props}>
      <View style={[styles.titleContainer, titleContainerStyle]}>
        {props.leftIcon}
        <Text style={titleStyle}>
          {title}
        </Text>
        {props.rightIcon}
      </View>
    </AnimatedTouchableOpacity>
  );
});

export default AppButton;

const buttonStyles = ({colors}: AppTheme) =>
  StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
      backgroundColor: colors.primary,
      borderRadius: rpWidth(60),
      height: rpHeight(45),
      width: '100%',
    },
    titleContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    },
  });