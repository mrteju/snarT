import React from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Icons} from '../../assets/svg';
import ComButton from '../../components/ComButton';
import Header from '../../components/header';
import ProfileView from '../../components/profileView';
import {CommonColor} from '../../constance/color';
import {commonStyles} from '../../constance/commonStyles';
import {STORY_DATA} from '../../constance/dataConst';
import {responsiveWidth} from '../../utils/scallingUtils';
import {styles} from './style';

const HomeScreen = props => {
  const {navigation} = props;
  const StoryView = ({item, ind}) => {
    return (
      <View key={ind} style={styles.storyView}>
        <View style={{flex: 1}}>
          <Image source={item.story} style={styles.storyImg} />
          {item.isLoginUser ? (
            <View style={styles.addStory(true)}>
              <SvgXml
                xml={Icons.ADD_STROY_ICON}
                style={commonStyles.smSqImgView(6)}
              />
            </View>
          ) : (
            <View style={styles.addStory(false)}>
              <Image
                source={item.profileImage}
                style={commonStyles.smSqImgView(8)}
              />
              {item.isOnline && <View style={styles.onlineDot} />}
            </View>
          )}
        </View>
        <Text style={styles.uname}>
          {item.isLoginUser ? item.cont : item.name}
        </Text>
      </View>
    );
  };

  const LetsLive = () => {
    return (
      <View style={styles.whatsNew}>
        <View style={[styles.newActivity, commonStyles.rowACenter]}>
          <ProfileView
            profileImage={require('../../assets/images/profile.png')}
            isOnline
          />
          <Text style={styles.newActivityText}>What are you thinking?</Text>
        </View>
        <View style={[commonStyles.rowACenter, styles.liveView]}>
          <View style={[commonStyles.rowACenter, styles.live]}>
            <SvgXml xml={Icons.VIDEO_ICON} />
            <Text style={styles.liveText}>Live</Text>
          </View>
          <View style={[commonStyles.rowACenter, styles.live]}>
            <SvgXml xml={Icons.CAMERA_ICON} />
            <Text style={styles.liveText}>Camera</Text>
          </View>
          <View style={[commonStyles.rowACenter, styles.live]}>
            <SvgXml xml={Icons.GALLERY_ICON} />
            <Text style={styles.liveText}>Image</Text>
          </View>
        </View>
      </View>
    );
  };

  const PostView = () => {
    return (
      <View style={[commonStyles.container, styles.postView]}>
        <View
          style={[
            commonStyles.rowACenter,
            {marginHorizontal: responsiveWidth(1)},
          ]}>
          <ProfileView
            profileImage={require('../../assets/images/profile4.png')}
            isOnline
          />
          <View style={styles.userDetView}>
            <Text style={{color: 'white'}}>Christina Kennedy</Text>
            <Text style={{color: CommonColor.LIGHT_BLUE}}>2 hours ago</Text>
          </View>
          <ComButton
            btnText={'follow'}
            textStyle={{color: CommonColor.ONLINE_DOT}}
            btnStyle={styles.followBtn}
          />
          <SvgXml xml={Icons.MORE_ICON} />
        </View>
        <Text style={styles.aboutPost}>
          If you are an infrequent traveler you may need some tips to keep the
          wife happy while you are jet setting around the globe.
        </Text>
        <Text style={styles.hashTagText}>#relax, #travel</Text>
        <Image
          source={require('../../assets/images/postimg.png')}
          style={styles.postImg}
        />
        <View style={[commonStyles.rowACenter, styles.rectionView]}>
          <View style={commonStyles.rowACenter}>
            <SvgXml xml={Icons.HEART_ICON} />
            <Text style={styles.likeText}>1125</Text>
            <SvgXml xml={Icons.COMMENT_ICON} />
            <Text style={styles.likeText}>348</Text>
            <SvgXml xml={Icons.SHARE_ICON} />
          </View>
          <View style={commonStyles.rowACenter}>
            <Image
              source={require('../../assets/images/profile1.png')}
              style={[styles.halfImg, {left: -25}]}
            />
            <Image
              source={require('../../assets/images/profile2.png')}
              style={[styles.halfImg, {left: -40}]}
            />
            <Image
              source={require('../../assets/images/profile3.png')}
              style={[styles.halfImg, {left: -55}]}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <ImageBackground
      style={styles.parentView}
      source={require('../../assets/images/bgGrad.png')}>
      <Header
        rightIcon
        title={'.snarT'}
        rightXml={Icons.PUBLICATION_ICON}
        rightOnPress={() => navigation.navigate('Publication')}
      />
      <ScrollView>
        <LetsLive />
        <ScrollView
          horizontal
          style={styles.storyContainer}
          showsHorizontalScrollIndicator={false}>
          {STORY_DATA.map((data, i) => (
            <StoryView item={data} ind={i} key={i} />
          ))}
        </ScrollView>
        <View style={[commonStyles.rowACenter, styles.moreStory]}>
          <ComButton btnText={'Show more'} />
          <View style={commonStyles.rowACenter}>
            <Text style={{color: CommonColor.WHITE}}>
              5264{' '}
              <Text style={{color: CommonColor.BTN_BOR}}>
                Stories found{'   '}
              </Text>
            </Text>
            <SvgXml xml={Icons.FILTER_ICON} />
          </View>
        </View>
        <PostView />
      </ScrollView>
    </ImageBackground>
  );
};
export default HomeScreen;
