import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { STYLE } from '../../common';
import { CustomPicker, NavigationHeader, ProfileInput, PrimaryButton } from '../../components';
import { COLOR, SPACING } from '../../constants';
import { Upload } from '../../assets/svg';
import { SCREENS } from '../../routes/screen_names';
import { navigateTo } from '../../utils';

const ProfileMediaScreen = (props) => {
    const [experience, setExperience] = useState('');
    const [bioData, setBioData] = useState('');
    const [category, setCategory] = useState('');
    const [certification, setCertification] = useState('');

    const categoryArray = [
        {pickerLabel: 'Makeupartist', pickerValue: 'makeup'},
        {pickerLabel: 'Nailartist', pickerValue: 'nail'}
    ]
  return (
    <View style={STYLE.commonTopHorizontalPad}>
      <NavigationHeader label={'Complete Profile'} navigation={props.navigation} />
        <View style={STYLE.indicatorContainer}>
            <View style={STYLE.lightIndicator} />
            <View style={[STYLE.pinkIndicator, {marginHorizontal: SPACING.v8}]} />
            <View style={STYLE.lightIndicator} />
        </View>
        <CustomPicker label={'Category'} selectedValue={category} onValueChange={(itemValue, itemIndex) => setCategory(itemValue)} pickerArray={categoryArray}/>
        <ProfileInput value={experience} onChangeText={setExperience} placeholder={'Years Of Experience'} />
        <View style={[STYLE.spaceRow, {borderBottomWidth: 1}]}>
          <ProfileInput value={certification} onChangeText={setCertification} placeholder={'Certification (if any)'} />
          <Upload />
        </View>
        <ProfileInput value={bioData} onChangeText={setBioData} placeholder={'Bio-Data'} />
        <View style={STYLE.justifySpace}>
            <Text style={[STYLE.buttonBlackText, {color: COLOR.darkPink}]}>Previous</Text>
            <PrimaryButton onPress={() => navigateTo(props.navigation, SCREENS.ADD_PHOTOS)} media={true} style={{width: '40%'}} label={'Media'} />
        </View>
    </View>
  );
};

export default ProfileMediaScreen;
