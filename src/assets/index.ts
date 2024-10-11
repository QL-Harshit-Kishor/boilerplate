
// Import all Svg Components from here
import {default as AppIconSvg} from './svg/app.svg';

//! ==============================================================================
// Import all Fonts  from here
const SvgConst = {
  AppIconSvg
};

//! ==============================================================================
// Import all Fonts  from here
const FontConst = {
  Roboto: {
    light: 'Roboto-Light',
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
  },
  Satoshi: {
    light: 'Satoshi-Light',
    regular: 'Satoshi-Regular',
    medium: 'Satoshi-Medium',
    bold: 'Satoshi-Bold',
  },
};
//! ==============================================================================
// Import all Lottie path from here
const LottieConst = {
  animatedLoader: require('./lottie/loader.json')
};



//! ==============================================================================
// Import all gif path from here
const GifConst = {
  animatedLoader: require('./lottie/loader.gif')
};


//! ==============================================================================
// Import all Image path from here
const ImageConst = {
  personPng: require('./images/person.png')
};

//! ==============================================================================
// Consolidated export for easier access
const Assets = {
  font: FontConst,
  lottie: LottieConst,
  gif: GifConst,
  image: ImageConst,
  svg: SvgConst,
};

export default Assets;