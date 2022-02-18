import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {CommonColor} from '../../constance/color';
import {responsiveWidth} from '../../utils/scallingUtils';

const ProfileView = props => {
  const {profileImage, isOnline, proStyle} = props;
  return (
    <View>
      <Image source={profileImage} style={[styles.profileImage, proStyle]} />
      {isOnline && <View style={styles.onlineDot} />}
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
  },
  onlineDot: {
    backgroundColor: CommonColor.ONLINE_DOT,
    height: responsiveWidth(2.5),
    width: responsiveWidth(2.5),
    borderRadius: 20,
    position: 'absolute',
    right: 0,
    borderWidth: 1,
  },
});

export default ProfileView;
