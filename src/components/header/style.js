import {StyleSheet} from 'react-native';
import {CommonColor} from '../../constance/color';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/scallingUtils';

export const styles = StyleSheet.create({
  parentView: {
    backgroundColor: CommonColor.COMP_BG_COLOR,
    borderBottomColor: CommonColor.PURPLE_BOR,
    borderBottomWidth: .5,
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(1),
  },
  icon: {
    height: responsiveWidth(7),
    width: responsiveWidth(7),
    marginHorizontal:responsiveWidth(3)
  },
  titleText: {
    color: CommonColor.WHITE,
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
    marginLeft:responsiveWidth(2)
  },
});
