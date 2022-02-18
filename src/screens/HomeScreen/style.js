import {StyleSheet} from 'react-native';
import {CommonColor} from '../../constance/color';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/scallingUtils';

export const styles = StyleSheet.create({
  parentView: {
    backgroundColor: CommonColor.BG_COLOR,
    flex: 1,
  },
  whatsNew: {
    marginHorizontal: responsiveWidth(4),
    backgroundColor: CommonColor.COMP_BG_COLOR,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  newActivity: {
    borderBottomWidth: 1,
    borderBottomColor: CommonColor.PURPLE_BOR,
    padding: responsiveWidth(3),
  },
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
    top: -2,
    right: -2,
    borderWidth: 1,
  },
  newActivityText: {
    color: CommonColor.WHITE,
    fontSize: responsiveFontSize(1.5),
    marginLeft: responsiveWidth(2),
  },
  liveView: {
    padding: responsiveWidth(3),
    justifyContent: 'space-between',
  },
  live: {
    justifyContent: 'center',
    flex: 1,
  },
  liveText: {
    color: CommonColor.WHITE,
    marginLeft: responsiveWidth(1),
  },
  storyContainer: {
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(4),
  },
  storyView: {
    backgroundColor: CommonColor.COMP_BG_COLOR,
    borderRadius: 20,
    marginRight: responsiveWidth(3),
  },
  addStory: isIcon => ({
    position: 'absolute',
    bottom: -5,
    left: '36%',
    backgroundColor: CommonColor.COMP_BG_COLOR,
    padding: isIcon ? responsiveWidth(1) : 0,
    borderRadius: 6,
    borderWidth: isIcon ? 0 : 1,
    borderColor: isIcon ? null : CommonColor.BTN_BOR,
  }),
  uname: {
    paddingVertical: responsiveHeight(1),
    textAlign: 'center',
    paddingHorizontal: responsiveWidth(2),
    color: CommonColor.WHITE,
    fontSize: responsiveFontSize(1.2),
    fontWeight: 'bold',
  },
  storyImg: {
    height: responsiveHeight(25),
    width: responsiveWidth(30),
    borderRadius: 15,
  },
  moreStory: {
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
  },
  postView: {
    marginHorizontal: responsiveWidth(4),
    marginBottom: responsiveHeight(2),
  },
  userDetView: {
    flex: 1,
    marginLeft: responsiveWidth(3),
  },
  followBtn: {
    borderColor: CommonColor.ONLINE_DOT,
    marginHorizontal: responsiveWidth(4),
  },
  aboutPost: {
    marginHorizontal: responsiveWidth(1),
    color: CommonColor.WHITE,
    marginVertical: responsiveHeight(1),
    fontSize: responsiveFontSize(1.8),
  },
  hashTagText: {
    color: CommonColor.ONLINE_DOT,
    marginLeft: responsiveWidth(3),
  },
  postImg: {
    height: responsiveWidth(85),
    width: responsiveWidth(85),
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
  },
  rectionView: {
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(1),
    marginTop: responsiveHeight(1),
  },
  likeText: {
    color: CommonColor.WHITE,
    marginHorizontal: responsiveWidth(3),
    fontSize: responsiveFontSize(1.8),
  },
  halfImg: {
    borderWidth: 1,
    borderColor: CommonColor.WHITE,
    borderRadius: 6,
    position: 'absolute',
  },
});
