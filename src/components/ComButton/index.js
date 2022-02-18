import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CommonColor} from '../../constance/color';
import {responsiveFontSize, responsiveWidth} from '../../utils/scallingUtils';

const ComButton = props => {
  const {btnText, btnStyle, textStyle, onPress} = props;
  return (
    <TouchableOpacity style={[styles.parentView, btnStyle]} onPress={onPress}>
      <Text style={[styles.btnText, textStyle]}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parentView: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: CommonColor.BTN_BOR,
    paddingVertical: responsiveWidth(0.6),
    paddingHorizontal: responsiveWidth(4),
  },
  btnText: {
    color: CommonColor.BTN_BOR,
    fontSize: responsiveFontSize(1.8),
    fontWeight: '300',
  },
});
export default ComButton;
