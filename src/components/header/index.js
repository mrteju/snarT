import React from 'react';
import {Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {commonStyles} from '../../constance/commonStyles';
import {styles} from './style';

const Header = props => {
  const {
    leftIcon,
    rightIcon,
    title,
    leftXml,
    rightXml,
    titleStyle,
    style,
    rightOnPress,
    leftOnPress,
  } = props;
  return (
    <View style={[commonStyles.rowACenter, styles.parentView, style]}>
      <View style={[commonStyles.rowACenter]}>
        {leftIcon && (
          <SvgXml xml={leftXml} style={styles.icon} onPress={leftOnPress} />
        )}
        <Text style={[styles.titleText, titleStyle]}>{title}</Text>
      </View>
      {rightIcon && (
        <SvgXml xml={rightXml} style={styles.icon} onPress={rightOnPress} />
      )}
    </View>
  );
};

export default Header;
