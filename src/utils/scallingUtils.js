import {Dimensions, Platform, StatusBar} from 'react-native';

const {height, width} = Dimensions.get('window');
const standardLength = width > height ? width : height;

const deviceHeight =
  Platform.OS === 'android'
    ? standardLength - StatusBar.currentHeight
    : standardLength;

export const responsiveHeight = percent => {
  return (Platform.OS === 'android' ? deviceHeight : height) * (percent / 100);
};

export const responsiveWidth = percent => {
  return width * (percent / 100);
};

export const responsiveFontSize = f => {
  return Math.sqrt(height * height + width * width) * (f / 100);
};
