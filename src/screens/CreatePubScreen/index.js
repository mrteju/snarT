import React, {useRef, useState, FC} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Icons} from '../../assets/svg';
import ComButton from '../../components/ComButton';
import Header from '../../components/header';
import ProfileView from '../../components/profileView';
import {CommonColor} from '../../constance/color';
import {commonStyles} from '../../constance/commonStyles';
import ImagePicker from 'react-native-image-crop-picker';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/scallingUtils';
import {styles} from './style';
import {DummyHashTag, DUMMY_IMAGE} from '../../constance/dataConst';
import SelectDropdown from 'react-native-select-dropdown';
import {FlatList} from 'react-native-gesture-handler';
import {MentionInput} from 'react-native-controlled-mentions';

const CreatePubScreen = props => {
  const {navigation} = props;
  const [img, setImg] = useState(null);
  const [description, setDescription] = useState();
  const [hasTag, setHashTag] = useState(false);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    })
      .then(image => {
        setImg(image.path);
      })
      .catch(e => console.log(e));
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    })
      .then(image => {
        setImg(image.path);
      })
      .catch(e => console.log(e));
  };

  const renderSuggestions = (keyword, onSuggestionPress) => {
    if (keyword == null) {
      return null;
    }
    return (
      <View style={styles.hashView}>
        {DummyHashTag.filter(e =>
          e.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()),
        ).map(e => (
          <Pressable
            key={e.id}
            onPress={() => {
              return onSuggestionPress(e);
            }}
            style={styles.hashItem}>
            <Text style={styles.hashText}>{e.name}</Text>
          </Pressable>
        ))}
      </View>
    );
  };

  return (
    <ImageBackground
      style={styles.parentView}
      source={require('../../assets/images/bgGrad.png')}>
      <Header
        leftIcon
        leftXml={Icons.BACK_ICON}
        title={'Create Publication'}
        titleStyle={styles.headerTitle}
        style={{paddingVertical: responsiveHeight(2.5)}}
        leftOnPress={() => navigation.goBack()}
      />
      <ScrollView style={{flex: 1}}>
        <View style={[commonStyles.container, {margin: responsiveWidth(4)}]}>
          <View
            style={[
              commonStyles.rowACenter,
              {marginHorizontal: responsiveWidth(1)},
            ]}>
            <ProfileView
              profileImage={require('../../assets/images/profile.png')}
              isOnline
            />
            <View style={{marginLeft: responsiveWidth(3)}}>
              <Text style={{color: 'white'}}>Katelyn Ohashi</Text>
              <View style={[commonStyles.rowACenter, styles.visibleBtn]}>
                <SvgXml xml={Icons.GLOBE} />
                <Text style={styles.visibleText}>Public</Text>
                <SvgXml xml={Icons.DOWN_ARR} />
              </View>
            </View>
          </View>

          <MentionInput
            value={description}
            onChange={e => {
              setDescription(e);
            }}
            placeholder="Write here..."
            placeholderTextColor={CommonColor.PLACEHOLDER}
            style={styles.desText(hasTag)}
            multiline
            numberOfLines={img === null ? 20 : 6}
            partTypes={[
              {
                trigger: '#',
                renderSuggestions: props =>
                  renderSuggestions(props.keyword, props.onSuggestionPress),
                textStyle: {fontWeight: 'bold', color: CommonColor.ONLINE_DOT},
              },
            ]}
          />
          {img && <Image source={{uri: img}} style={styles.pubImg} />}
        </View>
      </ScrollView>

      <View style={[styles.inputView, commonStyles.rowACenter]}>
        <View style={commonStyles.rowACenter}>
          <SvgXml
            xml={Icons.CAM_ICON}
            style={styles.icon}
            onPress={() => takePhotoFromCamera()}
          />
          <SvgXml
            xml={Icons.GALL_ICON}
            style={styles.icon}
            onPress={() => choosePhotoFromLibrary()}
          />
        </View>

        <ComButton
          btnText="Publish"
          btnStyle={styles.publish}
          textStyle={styles.pubText}
        />
      </View>
    </ImageBackground>
  );
};

export default CreatePubScreen;

{
  /* <TextInput
            multiline
            numberOfLines={img === null ? 20 : 6}
            style={styles.desText(hasTag)}
            placeholder="Write here..."
            placeholderTextColor={CommonColor.PLACEHOLDER}
            onChangeText={e => {
              setDescription(e);
            }}
            onKeyPress={({nativeEvent}) => {
              nativeEvent.key === '#' ? setHashTag(true) : setHashTag(false);
            }}
            value={description}
          /> */
}
