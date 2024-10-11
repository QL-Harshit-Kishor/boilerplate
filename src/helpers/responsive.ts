import {Dimensions, PixelRatio} from 'react-native';
const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT
} = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 375;
const heightBaseScale = SCREEN_HEIGHT / 812;

function normalize(size: number, based = 'width') {
  const newSize = (based === 'height') ?
    size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
export const rpWidth = (size: number) => {
  return normalize(size, 'width');
};
//for height  pixel
export const rpHeight = (size: number) => {
  return normalize(size, 'height');
};
//for font  pixel
export const rpFont = (size: number) => {
  return rpHeight(size);
};