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
  headerTitle: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '400',
  },
  inputView: {
    backgroundColor: CommonColor.COMP_BG_COLOR,
    paddingVertical: responsiveHeight(3),
    justifyContent: 'space-between',
  },
  icon: {
    marginLeft: responsiveWidth(6),
    width: responsiveWidth(6),
    height: responsiveWidth(6),
  },
  publish: {
    backgroundColor: CommonColor.PUBLISH_BTN,
    borderWidth: 0,
    marginRight: responsiveWidth(4),
  },
  pubText: {
    color: CommonColor.BLACK,
    fontSize: responsiveFontSize(2.2),
    fontWeight: '400',
  },
  visibleBtn: {
    borderWidth: 1,
    borderColor: CommonColor.LIGHT_BLUE,
    width: responsiveWidth(20),
    borderRadius: 20,
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(2),
    marginTop: responsiveHeight(1),
  },
  visibleText: {
    color: CommonColor.LIGHT_BLUE,
    fontSize: responsiveFontSize(1.3),
  },
  desText: (hashTag)=>({
    color: hashTag ? CommonColor.ONLINE_DOT : CommonColor.WHITE,
    fontSize: responsiveFontSize(1.8),
    textAlignVertical: 'top',
  }),
  pubImg: {
    height: responsiveWidth(84),
    width: responsiveWidth(84),
    alignSelf: 'center',
    borderRadius: 20,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    position: 'absolute',
    bottom: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  hashView: {
    backgroundColor: CommonColor.BG_COLOR,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position:'relative',
    bottom:-10,
    width:responsiveWidth(92),
    alignSelf:'center',
  },
  hashItem: {
    borderBottomWidth: 0.8,
    borderBottomColor: CommonColor.PURPLE_BOR,
    paddingVertical: responsiveHeight(1),
  },
  hashText: {
    marginLeft: responsiveWidth(2),
    color: CommonColor.ONLINE_DOT,
  },
});
