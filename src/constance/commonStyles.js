import {StyleSheet} from 'react-native';
import {responsiveWidth} from '../utils/scallingUtils';
import {CommonColor} from './color';

export const commonStyles = StyleSheet.create({
  rowACenter: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: CommonColor.COMP_BG_COLOR,
    padding: responsiveWidth(3),
    borderRadius: 20,
  },
  smSqImgView: x => ({
    height: responsiveWidth(x),
    width: responsiveWidth(x),
  }),
});
